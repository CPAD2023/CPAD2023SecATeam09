import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren, useContext } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons'
import { getDate, getMonth } from '../formatter';
import { styles as appStyles } from '../styles/styles';
import AppContext from '../context/AppContext'


type TransactionCardProps = PropsWithChildren;


export default function TransactionCardFragment(props: TransactionCardProps) {
  const {
    isUserSignedIn, 
    setUserSignedIn, 
    user, 
    setUser,
    connections,
    setConnections,
    transactions,
    setTransactions
  } = useContext(AppContext);
  
  const {description, paidBy, timestamp, totalAmount, userTransactionDetails} = props;

  const getPaidByUserName = (): string => {
    if (user.userId === paidBy) {
      return "You"
    }
    const connectionIndex = connections.findIndex(connection => connection.user1.userId === paidBy || connection.user2.userId === paidBy);
    if (connectionIndex !== -1) {
      return connections[connectionIndex].user1.userId === paidBy ? 
              connections[connectionIndex].user1.fullName : 
              connections[connectionIndex].user2.fullName; 
    } else {
      return "User";
    }
  }

  const  getAmount = () => {
    if(user.userId === paidBy) {
      const userIds = Object.keys(userTransactionDetails);
      let sumAmount = 0.0;
      userIds.forEach(userId => {
        if (userId !== user.userId) {
          sumAmount += userTransactionDetails[userId].amount;
        }
      })
      return sumAmount.toFixed(2);
    } else {
      return userTransactionDetails[user.userId].amount.toFixed(2);
    }
  } 
  
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.dateContainer}>
          <Text style={[appStyles.darkFontColor,styles.monthTxt]}>{getMonth(timestamp)}</Text>
          <Text style={[appStyles.darkFontColor, styles.dateTxt]}>{getDate(timestamp)}</Text>
        </View>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon 
            icon={faFileInvoiceDollar} 
            color={user.userId===paidBy ? appStyles.positiveTxt.color : appStyles.negativeTxt.color} 
            size={25}
            />
        </View>
        <View style={styles.mainTxtContainer}>
          <Text style={[appStyles.darkFontColor, styles.mainTxt]}>
            {description}
          </Text>
          <Text style={[appStyles.darkFontColor, styles.secondaryTxt]}>
            {getPaidByUserName()} paid {totalAmount.toFixed(2)}
          </Text>
        </View>
      </View>
      <View style={styles.secondaryTxtContainer}>
        <Text style={[styles.secondaryTxt, {color:user.userId===paidBy ? appStyles.positiveTxt.color : appStyles.negativeTxt.color}]}>
          {user.userId === paidBy ?
            'You lent' : 'You took'  
          }
        </Text>
        <Text style={[styles.secondaryTxt, {color:user.userId===paidBy ? appStyles.positiveTxt.color : appStyles.negativeTxt.color}]}>₹{getAmount()}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#2C3335"
  },
  subcontainer:{
    flexDirection: 'row',
  },
  dateContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20
  }, 
  monthTxt: {

  },
  dateTxt: {
    fontSize: 16
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#2C3335',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: "#fff",
    borderWidth: 0.25,
  },
  mainTxtContainer: {
    marginLeft: 20,
  },
  mainTxt: {
    fontSize: 16
  },
  secondaryTxtContainer: {
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  secondaryTxt: {
    fontSize: 12
  }
})
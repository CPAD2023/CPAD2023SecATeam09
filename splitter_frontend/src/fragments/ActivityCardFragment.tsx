import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { PropsWithChildren } from 'react'
import { getTime } from '../formatter';
import { styles as appStyles } from '../styles/styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faMoneyBillTransfer} from '@fortawesome/free-solid-svg-icons'
import AppContext from '../context/AppContext';

type ActivityProps = PropsWithChildren


export default function ActivityCardFragment(transaction: ActivityProps) {
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
  const {paidBy, timestamp, userTransactionDetails, description } = transaction;

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
  
  return (
    <View style={styles.activityContainer}>
      <View style={styles.iconContainer}>
          <FontAwesomeIcon 
            icon={faMoneyBillTransfer} 
            color={user.userId===paidBy ? appStyles.positiveTxt.color : appStyles.negativeTxt.color} 
            size={30}
          />    
      </View>
      <View style={styles.contentContainer}>
        <Text style={[appStyles.darkFontColor, styles.contentHeader]}>
          { getPaidByUserName() } added {description}
        </Text>
        <Text style={[styles.amount, {color:user.userId===paidBy ? appStyles.positiveTxt.color : appStyles.negativeTxt.color}]}>
          { user.userId===paidBy ? 'You get back': 'You owe'} ₹{getAmount()}
        </Text>
        <Text style={[appStyles.darkFontColor, styles.date]}>{getTime(timestamp)}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  activityContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "#2C3335"
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#2C3335',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: "#fff",
    borderWidth: 0.25,
    margin: 10
  },
  contentContainer: {
    marginLeft: 20,
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  contentHeader: {
    fontSize: 18,
  },
  amount: {
    fontSize: 16,
  },
  date: {
    fontSize: 13,
    color: 'grey'
  }
})
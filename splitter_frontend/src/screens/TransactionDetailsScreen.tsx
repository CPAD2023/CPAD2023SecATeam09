import { StyleSheet, Text, View, FlatList, TextInput, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faFileInvoiceDollar, faUser} from '@fortawesome/free-solid-svg-icons'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { ConnectionStackParamList } from '../navigators/ConnectionNavigator'
import { useNavigation } from '@react-navigation/native'
import { getTime } from '../formatter'
import { styles as appStyles } from '../styles/styles'
import { ActivityStackParamList } from '../navigators/ActivityNavigator'
import AppContext from '../context/AppContext'
import { getTransactionUsers } from '../apiContoller/api'
import LoadingScreen from './LoadingScreen'

type TransactionDeatils = NativeStackScreenProps<ConnectionStackParamList | ActivityStackParamList, 'TransactionDetails'>

const icon = {
  color: "#FFFFFF",
  size: 30
}

export default function TransactionDetails(props: TransactionDeatils) {
  const [transactionUsers, setTransactionUsers] = useState([])
  const [loading, setLoading] = useState(false);
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
  const navigation = useNavigation()
  const {transactionId} = props.route.params;

  
  const transaction= transactions.find(txn => txn.transactionId === transactionId);
  console.log(transaction);
  const userTransactionDetails = Object.entries(transaction.userTransactionDetails);
  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const txnUsers = Object.keys(transaction.userTransactionDetails);
      console.log("USERS",txnUsers);
      const response = await getTransactionUsers(txnUsers);
      if(response.status === 200) {
        const responseData = await response.json();
        setTransactionUsers(responseData);
      }
      setLoading(false);
    }

    getUsers();
  }, [])
  

  const getUserName = (transactionUserId: string) => {
    const user = transactionUsers.find((user) => user.userId === transactionUserId);
    return user ? user.fullName : 'Unknown'; // Assuming userName is the property you want to display
  };
  
  return (
    <View>
      {
        loading ? <LoadingScreen LoadingPageHeight={Dimensions.get('window').height}/> : (
          <View>
                  <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon 
            icon={faFileInvoiceDollar} 
            size={100}
            color={appStyles.darkFontColor.color}
            />
        </View>
        <View>
          <View>
            <Text style={styles.detailHeaderTxt}>Transcation ID:</Text>
            <Text style={appStyles.darkFontColor}>{transaction.transactionId}</Text>
          </View>
          <View>
            <Text style={styles.detailHeaderTxt}>Paid By:</Text>
            <Text style={appStyles.darkFontColor}>{getUserName(transaction.paidBy)}</Text>
          </View>
          <View>
            <Text style={styles.detailHeaderTxt}>Transaction Date:</Text>
            <Text style={appStyles.darkFontColor}>{getTime(transaction.timestamp)}</Text>
          </View>
          <View>
            <Text style={styles.detailHeaderTxt}>Total Amount:</Text>
            <Text style={appStyles.darkFontColor}>₹ {transaction.totalAmount.toFixed(2)}</Text>
          </View>
          <View>
            <Text style={styles.detailHeaderTxt}>Description:</Text>
            <Text style={appStyles.darkFontColor}>{transaction.description}</Text>
          </View>
        </View>
      </View>
      <FlatList
          data={userTransactionDetails}
          keyExtractor={item=> item[0]}
          renderItem={({ item }) => (
            <View style={styles.detailsContainer}>
              <View style={styles.userContainer}>
                  <View style={styles.iconContainer}>
                      <FontAwesomeIcon icon={faUser} color={icon.color} size={icon.size} />
                  </View>
                  <View style={styles.userNameContainer}>
                    <Text style={[appStyles.darkFontColor,styles.userNameTxt]}>{getUserName(item[0])}</Text>
                  </View>
              </View>
              <View style={styles.rightContainer}>
                <Text>₹ {item[1].amount.toFixed(2)}</Text>
              </View>
          </View>
          )}
        />
          </View>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer:{

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 50,
    paddingVertical: 20,
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 30,
    backgroundColor: "#2C3335"
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  total: {
    marginTop: 20,
    fontSize: 40,
    fontWeight: 'bold'
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    borderColor: "#fff",
    borderWidth: 0.25,
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 20,

  },
  detailHeaderTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  userNameContainer: {
    marginStart: 20
  },
  userNameTxt: {
    fontSize:20,
  },
  rightContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20
},
})
import { StyleSheet, Text, View,  TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native'
import React, { useContext, useState } from 'react'
import {NativeStackScreenProps, NativeStackNavigationProp} from '@react-navigation/native-stack'
import { ConnectionStackParamList } from '../navigators/ConnectionNavigator'
import {styles as appStyles} from '../styles/styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import { faFileInvoiceDollar, faIndianRupeeSign, faFloppyDisk, faUser} from '@fortawesome/free-solid-svg-icons'
import { Formik } from 'formik';
import RNPickerSelect from 'react-native-picker-select';
import AppContext from '../context/AppContext';
import { createTransaction } from '../apiContoller/api';
import { useNavigation } from '@react-navigation/native';


type AddExpenseProps = NativeStackScreenProps<ConnectionStackParamList, 'AddExpenseScreen'>

const icon = {
  color: "#FFFFFF",
  size: 30
}

export default function AddExpenseScreen(props: AddExpenseProps) {
  const navigation = useNavigation<NativeStackNavigationProp<ConnectionStackParamList>>();

  const {
    user,
    connections,
    transactions,
    setTransactions
  } = useContext(AppContext);
  const [split, setSplit] = useState("equally");
  const {connectionId} = props.route.params;
  
  const connection = connections.find(connection => connection.connectionId === connectionId);
  console.log("Connection", connection);
  
    const {user1, user2 } = connection;
    const newTransactionDetails = {
      [user1.userId]: {
        amount: 0.0,
        status: 'UNSETTLED'
      },
      [user2.userId]: {
        amount: 0.0,
        status: 'UNSETTLED'
      }
    };
    const initValues = {
      tranasctionId: '',
      paidBy: user.userId,
      description: '',
      totalAmount: 0.0,
      transactionType: 'TRANSACTION',
      userTransactionDetails: newTransactionDetails
    } 

    const onSubmit = async (values) => {
      const userIds = Object.keys(values.userTransactionDetails)
      values.totalAmount = Number(values.totalAmount);
      if (split === 'equally') {
        const amount = (values.totalAmount / 2).toFixed(2);
        userIds.forEach(userId => values.userTransactionDetails[userId].amount = Number(amount));
      }

      let transactionTotal = 0.0;
      userIds.forEach(userId => transactionTotal += values.userTransactionDetails[userId].amount);
      if (transactionTotal != values.totalAmount) {
        if(split === 'equally') {
          const diff = Number((values.totalAmount - transactionTotal).toFixed(2));
          const updatedAmount = values.userTransactionDetails[userIds[0]].amount + Number(diff);
          values.userTransactionDetails[userIds[0]].amount = Number(updatedAmount.toFixed(2));
        } else {
          console.log("Uneven distribution");
          
        }
      }
      console.log("VALUES: ", values);
      const response = await createTransaction(values);
      console.log(response);
      if(response.status === 201) {
        const responseData = await response.json();
        console.log('NEW TRANSACTION: ', responseData);
        setTransactions([responseData, ...transactions])
        navigation.goBack();
      }
    }

    const AddExpenseUserCard = ({user, handleChange, values}) => {
      
      return(
      <View style={styles.cardContainer}>
        <View style={styles.userContainer}>
            <View style={styles.cardIconContainer}>
                <FontAwesomeIcon icon={faUser} color={icon.color} size={icon.size} />
            </View>
            <View style={styles.userNameContainer}>
                <Text style={[appStyles.darkFontColor,styles.userNameTxt]}>
                    {user.fullName}
                </Text>
            </View>
        </View>
        <View style={styles.rightContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholderTextColor={appStyles.textInputPlaceholder.color}     
          onChangeText={handleChange(`userTransactionDetails.${user.userId}.amount`)}  
          keyboardType='numeric'
          value={values[user.userId].amount}
        />
        </View>
      </View>
    )
    }


  return(
    <View style={styles.container}>
        <Formik
          initialValues={initValues}
        >
          {({handleChange, values, setFieldValue}) => (
            <View>
              <View style={styles.addExpBtnContainer}>
                <TouchableOpacity
                  style={[appStyles.btn, appStyles.btnGreen, styles.btn, styles.btnAdd]}
                  onPress={() => onSubmit(values)}
                >
                  <FontAwesomeIcon 
                      icon={faFloppyDisk}
                      color={appStyles.textInputPlaceholder.color}
                      size={25}
                    />
                </TouchableOpacity>
              </View>
              <View style={styles.inputWrapper}>
                <View style={styles.iconContainer}>
                    <FontAwesomeIcon 
                      icon={faFileInvoiceDollar}
                      color={appStyles.textInputPlaceholder.color}
                      size={25}
                    />
                </View>
                <TextInput
                  style={styles.inputStyle}
                  placeholder='Enter a description'
                  placeholderTextColor={appStyles.textInputPlaceholder.color}     
                  onChangeText={handleChange('description')}  
                  value={values.description}
                />
              </View>
              <View style={styles.inputWrapper}>
                <View style={styles.iconContainer}>
                    <FontAwesomeIcon 
                      icon={faIndianRupeeSign}
                      color={appStyles.textInputPlaceholder.color}
                      size={25}
                    />
                </View>
                <TextInput
                  style={styles.inputStyle}
                  placeholder='Enter total amount'
                  placeholderTextColor={appStyles.textInputPlaceholder.color}     
                  onChangeText={handleChange('totalAmount')}  
                  value={values.totalAmount}
                  keyboardType='numeric'
                />
              </View>
              <View style={styles.addExpPickerContainer}>
                <Text style={appStyles.darkFontColor}>Paid By</Text>
                <RNPickerSelect  
                  onValueChange={(value) => setFieldValue('paidBy', value)}
                  items={[
                    {label: user.userId === user1.userId ? 'You' : user1.fullName, value: user1.userId},
                    {label: user.userId === user2.userId ? 'You' : user2.fullName, value: user2.userId}
                  ]}
                  textInputProps={styles.picker}
                  fixAndroidTouchableBug={true}
                  useNativeAndroidPickerStyle={false}
                  value={values.paidBy}
                  // pickerProps={{ style: { height: 214, overflow: 'hidden' } }}
                />
                <Text style={appStyles.darkFontColor}>and  split</Text>
                <RNPickerSelect  
                  onValueChange={(value) => {
                    setSplit(value);
                  }}
                  items={[
                    {label: 'equally', value: 'equally'},
                    {label: 'unequaly', value: 'unequally'},
                  ]}
                  textInputProps={styles.picker}
                  fixAndroidTouchableBug={true}
                  useNativeAndroidPickerStyle={false}
                  value={split}
                  // pickerProps={{ style: { height: 214, overflow: 'hidden' } }}
                />
              </View>
              {
                split === 'unequally' &&
                <View style={[styles.addExpenseScrollContainer]}>
                  <ScrollView>
                    <AddExpenseUserCard user={user1} handleChange={handleChange} values={values.userTransactionDetails}/>
                    <AddExpenseUserCard user={user2} handleChange={handleChange} values={values.userTransactionDetails}/>
                  </ScrollView>
                </View>
              }
            </View>
          )}
        </Formik>
      </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 5
  },
  btnText: {
    fontSize: 18,
  },
  btnAdd: {
    width: '15%',
  },
  btnIcon: {
    marginRight: 10,
    color: "#fff"
  },
  inputStyle: {
    backgroundColor: '#2C3335',
    width: '80%',
    height: 50,
    padding: 8,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 8,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
  iconContainer: {
    backgroundColor: '#2C3335',
    height: 50,
    width: 50,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  picker: {
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#2C3335',
    padding: 8,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 8,
  },
  addExpPickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  addExpBtnContainer: {
    alignItems: 'flex-end',
    marginBottom: 20
  },
  cardContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
    marginBottom: 10,
    width: Dimensions.get('window').width * 0.92 
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  addExpenseScrollContainer: {
    height: Dimensions.get('screen').width * 0.6,
    marginVertical: 10
  },
  cardIconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#2C3335',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: "#fff",
    borderWidth: 0.25,
},
})
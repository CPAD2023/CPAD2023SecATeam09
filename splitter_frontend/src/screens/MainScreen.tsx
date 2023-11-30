import { StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomNavigator from '../navigators/BottomNavigator'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserConnections, getUserTransactions } from '../apiContoller/api';
import AppContext from '../context/AppContext';
import LoginScreen from './LoginScreen';





export default function MainScreen() {

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

  useEffect(() => {
    const getLoggedInData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
          if(userData !== null) {
            const currentUser = JSON.parse(userData)
            setUser(currentUser);
            console.log(user);
            console.log(user.userId);
            
            const connectionResponse = await getUserConnections(user.userId);
            const transactionResponse = await getUserTransactions(user.userId);
            if(connectionResponse.status === 200) {
              const conn = await connectionResponse.json();
              setConnections(conn)
              console.log(conn);
              
            }
            if (transactionResponse.status === 200) {
              const txns = await transactionResponse.json();
              setTransactions(txns)
            }
            
          }
      } catch (e) {}
    }
    getLoggedInData();
  }, [isUserSignedIn])

  console.log("Context User: ", user);
  console.log("Context Connection: ", connections);
  console.log("Context Transactions: ", transactions);
  return (
    <>
      {
          !isUserSignedIn ? (
            <NavigationContainer>
              <BottomNavigator />
            </NavigationContainer>
          ) : <LoginScreen />
        }
    </>
    
    
  )
}

const styles = StyleSheet.create({})
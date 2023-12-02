import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { styles as appStyles } from '../styles/styles'
import ConnectionScreen from '../screens/ConnectionScreen'
import ConnectionTransationScreen from '../screens/ConnectionTransationScreen'
import TransactionDetailsScreen from '../screens/TransactionDetailsScreen'
import AddExpenseScreen from '../screens/AddExpenseScreen'
import AddConnectionScreen from '../screens/AddConnectionScreen'

export type ConnectionStackParamList = {
  ConnectionScreen: undefined,
  ConnectionTransationScreen: object,
  TransactionDetailsScreen: object,
  AddConnectionScreen: undefined,
  AddExpenseScreen: object
}

const Stack = createNativeStackNavigator<ConnectionStackParamList>();

export default function FriendsStackNavigation() {
  return (
      <Stack.Navigator 
        initialRouteName='ConnectionScreen'
        screenOptions={{
          headerShown: false,
          contentStyle: [appStyles.darkAppContainer]
        }}    
      >
        <Stack.Screen
          name='ConnectionScreen'
          component={ConnectionScreen}
        />
        <Stack.Screen
          name='ConnectionTransationScreen'
          component={ConnectionTransationScreen}
        />
        <Stack.Screen
          name='TransactionDetailsScreen'
          component={TransactionDetailsScreen}
        />
        <Stack.Screen
          name='AddConnectionScreen'
          component={AddConnectionScreen}
        />
        <Stack.Screen
          name='AddExpenseScreen'
          component={AddExpenseScreen}
        />
      </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
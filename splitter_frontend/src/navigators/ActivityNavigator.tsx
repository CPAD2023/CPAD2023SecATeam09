import { StyleSheet} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ActivityScreen from '../screens/ActivityScreen';
import { styles as appStyles } from '../styles/styles';
import TransactionDetailsScreen from '../screens/TransactionDetailsScreen';

export type ActivityStackParamList = {
    ActivityScreen: undefined,
    TransactionDetailsScreen: any,
}

const Stack = createNativeStackNavigator<ActivityStackParamList>();

export default function ActivityStackNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName='Activity'
        screenOptions={{
          headerShown: false,
          contentStyle: [appStyles.darkAppContainer]
        }} 
    >
      <Stack.Screen
        name='ActivityScreen'
        component={ActivityScreen}
      />
      <Stack.Screen
        name='TransactionDetailsScreen'
        component={TransactionDetailsScreen}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
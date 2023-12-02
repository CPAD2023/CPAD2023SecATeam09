import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import ActivityCardFragment from '../fragments/ActivityCardFragment'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { ActivityStackParamList } from '../navigators/ActivityNavigator'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faFilter} from '@fortawesome/free-solid-svg-icons'
import AppContext from '../context/AppContext'

type ActityProps = NativeStackScreenProps<ActivityStackParamList, 'ActivityScreen'>;

export default function ActivityScreen({navigation}: ActityProps) {
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
  return (
    <View>
      <View style={styles.headerIconContainer}>
        <TouchableOpacity style={styles.headerIcon}>
            <FontAwesomeIcon 
                icon={faFilter}
                color={styles.headerIcon.color} 
                size={styles.headerIcon.fontSize}
            />
        </TouchableOpacity>
      </View>
      <FlatList 
        style={styles.flatList}
        data={transactions}
        keyExtractor={item => item.transactionId}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("TransactionDetailsScreen", {transactionId: item.transactionId})}
          >
            <ActivityCardFragment {...item} />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  headerIconContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 50
  },
  headerIcon: {
    marginHorizontal: 15,
    color: '#ffffff',
    fontSize: 25
  },
  flatList: {
    height: "95%", // Set the height of the FlatList
    marginBottom: 10
  },
})
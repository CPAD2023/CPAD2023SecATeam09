import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LoadingScreen({LoadingPageHeight}) {
  
  return (
    <View style={[styles.spinnerContainer, {height: LoadingPageHeight}]}>
      <ActivityIndicator 
        style={styles.spinner}
        size='large'
        color='#ccc'>
      </ActivityIndicator>
      <Text>Loading ...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    spinnerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    spinner: {
        width: 50,
        height: 50,
        borderWidth: 3,
        borderColor: '#ccc',
        borderTopColor: '#333',
        borderRadius: 25,
    }
    
})
import { SafeAreaView, StatusBar,  } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {styles} from './styles/styles';
import MainScreen from './screens/MainScreen';
import AppContextProvider from './context/AppContextProvider';

export default function App() {
  return (
      <AppContextProvider>
        <SafeAreaView style={styles.darkAppContainer}>
        <StatusBar backgroundColor={styles.darkAppContainer.backgroundColor}/>
          <MainScreen />
        </SafeAreaView>
      </AppContextProvider>
  )
}


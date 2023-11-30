import React, {useEffect, useState} from 'react';
import AppContext from './AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContextProvider =  ({children}) => {

    const [isUserSignedIn, setUserSignedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [connections, setConnections] = useState([]);
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        const isSignedUp = async () => {
            const signupData = await AsyncStorage.getItem('isUserSignedIn');
            signupData !== null ? setUserSignedIn(JSON.parse(signupData)) : setUserSignedIn(false) ;
        }

        isSignedUp();
    }, [])
    return(
        <AppContext.Provider 
            value={{
                isUserSignedIn, setUserSignedIn,
                user, setUser, 
                connections, setConnections,
                transactions, setTransactions    
            }}
        >
            {children}
        </AppContext.Provider>
    )

}

export default AppContextProvider;
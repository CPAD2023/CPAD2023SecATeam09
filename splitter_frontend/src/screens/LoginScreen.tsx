import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { styles as appStyles } from '../styles/styles'
import LoginFragment from '../fragments/LoginFragment'
import SignupFragment from '../fragments/SignupFragment'

export default function LoginScreen() {
    const [toggleLogin, setToggleLogin] = useState(true);

  return (
    <ScrollView keyboardShouldPersistTaps='always'>
        <View>
        <View style={styles.appTitleContainer}>
            <Text style={[appStyles.darkFontColor, styles.title]}>{/* TODO */}</Text>
            <Text style={[appStyles.darkFontColor, styles.title]}>{/* TODO */}</Text>
        </View>
        { toggleLogin ? (
                <LoginFragment />
            ) : (
                <SignupFragment />
            )
        }
        <View style={styles.toggleContainer}>
            {!toggleLogin ? 
            (
                <TouchableOpacity onPress={() => setToggleLogin(!toggleLogin)}>
                    <Text style={[appStyles.darkFontColor, appStyles.linkText]}>Already have an account? Login</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={() => setToggleLogin(!toggleLogin)}>
                    <Text style={[appStyles.darkFontColor, appStyles.linkText]}>Create new account</Text>
                </TouchableOpacity>
            )}
        </View>
        </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    appTitleContainer: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 50 
    },
    title: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'red'
    },
    toggleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    
})
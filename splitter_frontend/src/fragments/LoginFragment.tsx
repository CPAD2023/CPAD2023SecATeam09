import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react';
//import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import { faPhone, faUnlock } from '@fortawesome/free-solid-svg-icons';
import {styles as appStyles} from '../styles/styles';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../apiContoller/api';
import AppContext from '../context/AppContext';

export default function LoginFragment() {
  const {
    setUserSignedIn, 
    setUser,
  } = useContext(AppContext);

  const initValues = {phoneNumber:'', password: ''};

  const loginUser = async (values) => {
    const response = await login(values);
    if (response.status === 200) {
      const responseData = await response.json();
      console.log(responseData);
      AsyncStorage.setItem("userData", JSON.stringify(responseData));
      AsyncStorage.setItem("isUserSignedIn", JSON.stringify(true));
      setUser(responseData);
      setUserSignedIn(true);
    } else if(response.status === 400) {
      const responseData = await response.json();
      console.log(responseData);
    }    
  }

  return (
    <View style={[appStyles.container]}>
      <Formik
        initialValues={initValues}
        onSubmit={values => loginUser(values)}
      >
        {({handleChange, handleSubmit, values}) => (
          <View>
            <View style={styles.inputWrapper}>
              <View style={styles.iconContainer}>
                  <FontAwesomeIcon 
                    icon={faPhone}
                    color={appStyles.textInputPlaceholder.color}
                    size={20}
                  />
              </View>
              <TextInput
                style={[appStyles.darkFontColor, styles.inputStyle]}
                placeholder='Phone Number'
                placeholderTextColor={appStyles.textInputPlaceholder.color}    
                keyboardType='numeric'  
                onChangeText={handleChange('phoneNumber')}  
                value={values.phoneNumber}
              />
            </View>
            <View style={styles.inputWrapper}>
              <View style={styles.iconContainer}>
                  <FontAwesomeIcon 
                    icon={faUnlock}
                    color={appStyles.textInputPlaceholder.color}
                    size={20}
                  />
              </View>
              <TextInput
                style={[appStyles.darkFontColor, styles.inputStyle]}
                placeholder='Password' 
                secureTextEntry={true}
                placeholderTextColor={appStyles.textInputPlaceholder.color}   
                onChangeText={handleChange('password')}  
                value={values.password}   
              />
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={[appStyles.btn, styles.btn]}
                onPress={handleSubmit}
              >
                <Text style={[appStyles.darkFontColor, styles.btnText]}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>

    </View>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: '#2C3335',
    height: 40,
    width: 40,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputStyle: {
    backgroundColor: '#2C3335',
    width: "80%",
    height: 40,
    padding: 8,
    borderRadius: 10,
    marginHorizontal: 8,
  },
  btnContainer: {
    alignItems: 'center'
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('screen').width * 0.5,
    backgroundColor: '#218F76',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold'
  }

})
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import {styles as appStyles} from '../styles/styles';
import { Formik } from 'formik';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faUser, faRightToBracket, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGooglePay} from '@fortawesome/free-brands-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppContext from '../context/AppContext';


export default function ProfileScreen() {
  const icon = {
    color: "#FFFFFF",
    size: 40
  }

  const {
    isUserSignedIn,
    user
  } = useContext(AppContext);

  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
  }, [isUserSignedIn])
  

  const logout = async () => {
    const data = await AsyncStorage.getItem('userData');
    if(data !== null) {
      console.log(data);
    }
    
    await AsyncStorage.setItem("userData", JSON.stringify(null));
    await AsyncStorage.setItem("isUserSignedIn", JSON.stringify(false))
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headericonContainer}>
            <FontAwesomeIcon icon={faUser} color={icon.color} size={icon.size} />
        </View>
      </View>
      <View >
      <Formik
            initialValues={user}
            onSubmit={values => console.log(values)}
          >
            {({handleChange, handleSubmit, values}) => (
              <View>
                <View style={styles.inputWrapper}>
                  <View style={styles.iconContainer}>
                      <FontAwesomeIcon
                        icon={faUser}
                        color={appStyles.textInputPlaceholder.color}
                        size={25}
                      />
                  </View>
                  <TextInput
                    style={[styles.inputStyle]}
                    placeholder='Full Name'
                    placeholderTextColor={appStyles.textInputPlaceholder.color} 
                    onChangeText={handleChange('fullName')}
                    value={values.fullName}  
                    editable={isEditable}   
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <View style={styles.iconContainer}>
                      <FontAwesomeIcon 
                        icon={faPhone}
                        color={appStyles.textInputPlaceholder.color}
                        size={25}
                      />
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    placeholder='Phone Number'
                    placeholderTextColor={appStyles.textInputPlaceholder.color}  
                    keyboardType='numeric'
                    onChangeText={handleChange('phone')}
                    value={values.phoneNumber}
                    editable={isEditable}        
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <View style={styles.iconContainer}>
                      <FontAwesomeIcon 
                        icon={faEnvelope}
                        color={appStyles.textInputPlaceholder.color}
                        size={25}
                      />
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    placeholder='Email'
                    placeholderTextColor={appStyles.textInputPlaceholder.color}    
                    onChangeText={handleChange('email')}
                    value={values.email} 
                    editable={isEditable}       
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <View style={styles.iconContainer}>
                      <FontAwesomeIcon 
                        icon={faGooglePay}
                        color={appStyles.textInputPlaceholder.color}
                        size={40}
                      />
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    placeholder='UPI ID'
                    placeholderTextColor={appStyles.textInputPlaceholder.color}      
                    onChangeText={handleChange('upiId')}
                    value={values.upiId} 
                    editable={isEditable}     
                  />
                </View>
                <View >
                  <TouchableOpacity
                    style={[appStyles.btn, appStyles.btnBlue, styles.btn, {display: isEditable?'flex' : 'none'}]}
                    onPress={() => {
                      setIsEditable(false)  
                      handleSubmit
                    }}
                  >
                    <Text style={[appStyles.darkFontColor, styles.btnText]}>Save Changes</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
      </View>
      <TouchableOpacity
        style={[appStyles.btn, appStyles.btnBlue, styles.btn, {display: isEditable?'none' : 'flex'}]}
        onPress={() => setIsEditable(true)} 
      >
        <FontAwesomeIcon icon={faPenToSquare} size={20} style={styles.btnIcon}/>
        <Text style={[appStyles.darkFontColor, styles.btnText]}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[appStyles.btn, appStyles.btnRed, styles.btn, {display: isEditable?'none' : 'flex'}]}
        onPress={() => logout()} 
      >
        <FontAwesomeIcon icon={faRightToBracket} size={20} style={styles.btnIcon}/>
        <Text style={[appStyles.darkFontColor, styles.btnText]}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginVertical: 30
  },
  headerContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 50
  },
  headericonContainer: {
    width: 150,
    height: 150,
    backgroundColor: '#2C3335',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: "#fff",
    borderWidth: 0.25,
    margin: 10
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
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputStyle: {
    backgroundColor: '#2C3335',
    width: '80%',
    height: 50,
    padding: 8,
    borderWidth: 0.25,
    borderRadius: 5,
    borderColor: '#fff',
    marginHorizontal: 8,
    color: "#fff"
  },
  btn: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 5,
  },
  btnColEdit: {
    width: '50%'
  },
  btnText: {
    fontSize: 18,
  },
  btnIcon: {
    marginRight: 10,
    color: "#fff"
  },

})
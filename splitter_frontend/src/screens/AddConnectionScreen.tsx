import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import {styles as appStyles} from '../../styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAdd, faSearch } from '@fortawesome/free-solid-svg-icons';
import { searchUser, sendConnectionRequest } from '../../api';
import AppContext from '../context/AppContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FriendStackParamList } from '../navigators/FriendsStackNavigation';

export default function AddFriendScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchSuccess, setIsSearchSuccess] = useState(false);
  const [searchResult, setSearchResult] = useState({})
  const {user,connections,setConnections} = useContext(AppContext);
  const navigation = useNavigation<NativeStackNavigationProp<FriendStackParamList>>();
  const search = async () => {
    const response = await searchUser(searchQuery);
    if(response.status === 200) {
      const responseData = await response.json();
      setSearchResult(responseData);
      setIsSearchSuccess(true)
    }
    
  }

  const AddConnectionPopoverUserCard = ({searchedUser}) => {
  
    const sendRequest = async () => {
      const connection = {
        user1Id: user.userId,
        user2Id: searchedUser.userId
      }
      const response = await sendConnectionRequest(connection);
      if(response.status === 201) {
        const responseData = await response.json();
        setConnections([...connections, responseData])
      } else {
        console.log(response);
      }
      navigation.goBack();
    }
    return (
      <View style={styles.cardContainer}>
          <View style={styles.userContainer}>
            <Text style={[appStyles.darkFontColor,styles.userNameTxt]}>
                        {searchedUser.fullName}
            </Text>
            <Text style={[appStyles.darkFontColor,styles.miniTxt]}>E: {searchedUser.email}</Text>
            <Text style={[appStyles.darkFontColor,styles.miniTxt]}>M: {searchedUser.phoneNumber}</Text>
          </View>
          <TouchableOpacity
              style={[appStyles.btn, appStyles.btnGreen, styles.btn]}
              onPress={sendRequest}
            >
              <FontAwesomeIcon icon={faAdd} size={30} style={styles.btnIcon}/>
            </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.popoverContent}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inputStyle}
              placeholder='Search User by Email or Phone Number'
              placeholderTextColor={appStyles.textInputPlaceholder.color} 
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
            <TouchableOpacity 
              style={styles.iconContainer}
              onPress={search}  
            >
                <FontAwesomeIcon 
                  icon={faSearch}
                  color={appStyles.textInputPlaceholder.color}
                  size={25}
                />
            </TouchableOpacity>
          </View>
          {
            isSearchSuccess ? (<AddConnectionPopoverUserCard searchedUser={searchResult} />) : (<Text>Search user by email or phone number!!!</Text>)
          }
        </View>
  )
}

const styles = StyleSheet.create({
  popoverContent: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  popoverCloseBtnContainer:{
    alignContent: 'flex-end',
    justifyContent: 'flex-end'
  },
  popoverCloseBtn: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 10
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
    borderWidth: 1,
    borderRadius: 10,
  },
  iconContainer: {
    backgroundColor: '#2C3335',
    height: 40,
    width: 40,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: "#2C3335",
},
userContainer: {
    flexDirection: 'column',
    width: Dimensions.get('screen').width * 0.7,
    paddingHorizontal: 10,
    paddingVertical: 10
},
userNameTxt: {
    fontSize:20,
},
btn: {
    marginRight: 10,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%'
},
btnIcon: {
  color: "#fff"
},
miniTxt: {
  fontSize: 14
},
})
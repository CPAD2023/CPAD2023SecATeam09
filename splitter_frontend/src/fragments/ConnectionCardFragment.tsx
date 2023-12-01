import { Button, Dimensions, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import type { PropsWithChildren } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {styles as appStyles} from '../../styles'
import AppContext from '../context/AppContext'
import { getText, getTextColor, totalAmountPaidForOtherUser } from '../../formatter'

type FriendCardProps = PropsWithChildren<Connection>;

const icon = {
    color: "#FFFFFF",
    size: 30
}

export default function FriendCardFragment(connection: FriendCardProps): JSX.Element {
    const {
        user,
        transactions
    } = useContext(AppContext);
    
    const anotherUser = connection.user1.userId === user.userId ? connection.user2 : connection.user1;
    const paidByUserTotal = totalAmountPaidForOtherUser(transactions, user.userId, anotherUser.userId);
    const paidByAnotherUserTotal = totalAmountPaidForOtherUser(transactions, anotherUser.userId, user.userId);
    const total = paidByUserTotal - paidByAnotherUserTotal;

    useEffect(() => {}, [transactions])
    
  return (
    <View style={styles.cardContainer}>
        <View style={styles.userContainer}>
            <View style={styles.iconContainer}>
                <FontAwesomeIcon icon={faUser} color={icon.color} size={icon.size} />
            </View>
            <View style={styles.userNameContainer}>
                <Text style={[appStyles.darkFontColor,styles.userNameTxt]}>
                    {   connection.user2.userId !== user.userId ?
                        connection.user2.fullName : connection.user1.fullName
                    }
                </Text>
            </View>
        </View>
        <View style={styles.rightContainer}>
            {
                connection.status === 'APPROVED' && (
                    <View>
                        <Text style={[styles.miniTxt, getTextColor(total)]}>{getText(total)}</Text>
                        <Text style={getTextColor(total)}>{total != 0 && `₹${Math.abs(total).toFixed(2)}`}</Text>
                    </View>
                )
            }
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        marginHorizontal: Dimensions.get('screen').width * 0.01,
        marginVertical: Dimensions.get('screen').height * 0.003,
        justifyContent: 'space-between',
        borderRadius: 10,
        backgroundColor: "#2C3335"
    },
    iconContainer: {
        width: 50,
        height: 50,
        backgroundColor: '#2C3335',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: "#fff",
        borderWidth: 1,
        margin: 10
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userNameContainer: {
        marginStart: 20
    },
    userNameTxt: {
        fontSize:20,
    },
    miniTxt: {
        fontSize: 14
    },
    rightContainer: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    btn: {
        marginRight: 10
    }
})
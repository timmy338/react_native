/*
 * @Author: your name
 * @Date: 2021-08-29 15:16:47
 * @LastEditTime: 2021-09-07 16:26:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\Home\topSearch\index.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import { screenSize } from '../../../utils/tools'
/* ---------------------------- */
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class TopSearch extends Component {
    render() {
        return (
            <View style={styles.mainView}>

                <View style={styles.setFlex}>
                    <View style={{ flexDirection: 'row' ,alignItems:'center'}}>
                        <Ionicons name={'ios-location'} size={14} color={'#999999'} />
                        <Text style={{ fontSize: 12 }}>澳門黑沙環</Text>
                        <Ionicons name={'chevron-down-sharp'} size={14} color={'#999999'} />
                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder="請輸入店名或菜品名"
                    />
                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        width: screenSize.width,
        height: 100,
        backgroundColor: 'white',
    },
    setFlex: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        height: 30,
        width: screenSize.width - 130,
        padding: 10,
        backgroundColor: '#F2F2F2',
        borderRadius: 4
    }
})


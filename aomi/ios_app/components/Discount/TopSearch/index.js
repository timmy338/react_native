/*
 * @Author: your name
 * @Date: 2021-08-29 15:16:47
 * @LastEditTime: 2021-09-06 15:08:36
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
                    <TextInput
                        style={styles.input}
                        placeholder="請輸入套餐名稱"
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
        backgroundColor:'#FF3159',
    },
    setFlex:{
        marginTop: 50,
        flexDirection: 'row', 
        justifyContent:'center'
    },
    input: {
        height: 40,
        width: screenSize.width-30,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 20
    }
})


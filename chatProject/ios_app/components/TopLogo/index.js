/*
 * @Author: your name
 * @Date: 2021-10-03 14:53:40
 * @LastEditTime: 2021-10-03 14:57:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\chatProject\ios_app\components\TopLogo\index.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class TopLogo extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <Ionicons name={"logo-snapchat"} size={36} color={'#1D9BF0'} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    mainView:{
        marginTop:30
    }
})

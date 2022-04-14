/*
 * @Author: your name
 * @Date: 2021-08-26 16:18:44
 * @LastEditTime: 2021-10-07 17:06:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\demo\ios_app\components\Logo\index.js
 */
import React, { Component } from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default class index extends Component {
    render() {
        return (
            <View>
                <Ionicons name={"logo-snapchat"} size={36} color={'#4C9EEB'} />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 106,
        height: 44
    }
});

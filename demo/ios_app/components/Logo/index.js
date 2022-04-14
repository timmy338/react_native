/*
 * @Author: your name
 * @Date: 2021-08-26 16:18:44
 * @LastEditTime: 2021-08-26 16:20:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\demo\ios_app\components\Logo\index.js
 */
import React, { Component } from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'

export default class index extends Component {
    render() {
        return (
            <Image
                style={styles.logo}
                source={require('../../assets/img/logo.png')}
            />
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 106, 
        height: 44
    }
});

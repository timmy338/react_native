/*
 * @Author: your name
 * @Date: 2021-08-28 16:34:54
 * @LastEditTime: 2021-08-28 16:49:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\demo\ios_app\components\PageLoading\index.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet,Image } from 'react-native'
import { screenSize } from '../../utils/tools'
export default class PageLoading extends Component {
    render() {
        return (
            <View style={styles.pageLoading}>
                <Image
                    style={styles.loadingPic}
                    source={require('../../assets/img/loading.gif')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pageLoading: {
        width: screenSize.width,
        height: screenSize.height - 207, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingPic: { 
        width: 60, 
        height: 60 
    }
})

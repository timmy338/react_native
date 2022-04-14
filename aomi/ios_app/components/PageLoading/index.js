/*
 * @Author: your name
 * @Date: 2021-08-28 16:34:54
 * @LastEditTime: 2021-09-01 18:46:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\demo\ios_app\components\PageLoading\index.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet,Image } from 'react-native'
import { screenSize } from '../../utils/tools'
export default class PageLoading extends Component {
    render() {
        const {refreshing}=this.props
        return (
            <View style={[styles.pageLoading,refreshing &&{height:100}]}>
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
        position:'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingPic: { 
        width: 70, 
        height: 70 
    }
})

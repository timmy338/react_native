/*
 * @Author: your name
 * @Date: 2021-08-26 16:18:44
 * @LastEditTime: 2021-09-02 14:03:22
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
            <View style={styles.header}>
                <Ionicons style={styles.item} name='ios-headset-outline' size={20} color='grey' />
                <Ionicons style={styles.item} name='ios-heart-outline' size={20} color='grey' />
                <Ionicons style={styles.item} name='ios-share-social-outline' size={20} color='grey' />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        marginLeft:200,
        flexDirection:'row',
        alignItems:'center'
    },
    item:{
        marginLeft:5,
        marginRight:5
    }
});

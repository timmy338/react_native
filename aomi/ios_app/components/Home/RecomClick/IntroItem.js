/*
 * @Author: your name
 * @Date: 2021-09-05 14:36:03
 * @LastEditTime: 2021-09-05 15:20:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\Home\RecomClick\IntroItem.js
 */
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class IntroItem extends Component {
    render() {
        const { data,styles } = this.props
        return (
            <View style={[styles.setFlex]}>
                <View style={styles.setFlexItem}>
                    <Text style={{marginLeft:10}}> {data.dishNam} </Text>
                    <Text style={{color:'#A7A7A7'}}>({data.dishCopies})</Text>
                </View>
                <Text>${data.dishPrice}</Text>
            </View>
        )
    }
}

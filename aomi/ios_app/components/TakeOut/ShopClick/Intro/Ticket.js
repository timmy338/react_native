/*
 * @Author: your name
 * @Date: 2021-09-10 15:41:10
 * @LastEditTime: 2021-09-11 13:35:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\TakeOut\TakeClick\Intro\ticket.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Ticket extends Component {
    render() {
        const { data } = this.props
        return (
            <View style={{ flexDirection: 'row' ,marginRight:4}}>
                <View style={styles.priceView}>
                    <Text style={{ color: '#FFFFFF' }}> ${data.favorAmount} </Text>
                </View>
                <View style={styles.getView}>
                    <Text style={{ color: '#FFFFFF',fontSize:10 }}>領取</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    priceView: {
        backgroundColor: '#FC6969',
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
        padding: 5,
        paddingLeft: 14,
        paddingRight: 14
    },
    getView: {
        backgroundColor: '#FC6969',
        borderTopLeftRadius: 2,
        borderBottomLeftRadius: 2,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection:'row',
        alignItems:'center'
    }
})

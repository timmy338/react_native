/*
 * @Author: your name
 * @Date: 2021-09-14 15:16:34
 * @LastEditTime: 2021-09-29 16:56:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\TakeOut\ShopClick\Foods\tabLeft.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'

export default class TabLeft extends Component {
    render() {
        const { data, changeClickHeight, activeIndex } = this.props
        /* console.log(data) */
        return (
            <View style={{ flexDirection: 'column' }}>
                {
                    data.map((item, index) => {
                        return (
                            <TouchableWithoutFeedback
                                onPress={() => { changeClickHeight(item.length * 90 + 168 + index * 42, index, 0) }}
                                key={index}>
                                <View style={[styles.leftView, index === activeIndex && { backgroundColor: 'white' }]}>
                                    <Text
                                        style={{
                                            fontSize: 14, textAlign: 'center'
                                        }}
                                        numberOfLines={2}
                                        ellipsizeMode={'tail'}
                                        >
                                        {item.name}</Text>
                                </View>

                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    leftView: {
        width: 70,
        paddingLeft: 5,
        paddingRight: 5,
        height: 50,
        backgroundColor: '#F4F4F4',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

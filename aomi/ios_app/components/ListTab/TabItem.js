/*
 * @Author: your name
 * @Date: 2021-08-28 14:37:40
 * @LastEditTime: 2021-09-03 15:00:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\demo\ios_app\components\ListTab\TabItem.js
 */
import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'

export default class TabItem extends Component {
    render() {
        const {data,onTabClick,curIdx,index,styles}=this.props
        return (
            <View
                style={[styles.tabItem,index===curIdx && styles.tabItemCurrent]}
            >
                <TouchableWithoutFeedback
                    onPress={()=>onTabClick(index)}
                >
                    <Text
                        style={[styles.tabItemText , index===curIdx && styles.tabItemTextCurrent]}
                    >
                        {data.value}
                    </Text>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

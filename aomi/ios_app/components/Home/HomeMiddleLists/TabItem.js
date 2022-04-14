/*
 * @Author: your name
 * @Date: 2021-08-28 14:37:40
 * @LastEditTime: 2021-08-30 17:43:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\demo\ios_app\components\ListTab\TabItem.js
 */
import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'

export default class TabItem extends Component {
    render() {
        const { data, onTabClick, curIdx, index, styles } = this.props
        return (
            <View
                style={styles.tabItem}
            >
                <TouchableWithoutFeedback
                    onPress={() => onTabClick( index)}
                >

                    <View>
                        <Text
                            style={[styles.tabItemText, index === curIdx && styles.tabItemTextCurrent]}
                        >
                            {data.themeName}
                        </Text>
                        <View style={index === curIdx && styles.tabItemCurrent}>
                            <Text style={[styles.tabItemSubText,index === curIdx && styles.tabItemSubTextCurrent]}>{data.subtitleName}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

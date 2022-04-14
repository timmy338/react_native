/*
 * @Author: your name
 * @Date: 2021-08-27 15:58:37
 * @LastEditTime: 2021-09-06 15:22:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\demo\ios_app\components\CourseList\CourseItem.js
 */
import React, { Component } from 'react'
import { Text, View, Image, TouchableNativeFeedback } from 'react-native'

/* ---------------TabItems-------------- */
import { directToPage } from '../../../utils/ext'

export default class TabItem extends Component {
    render() {
        const { data, styles, navigation, index } = this.props
    /*     console.log(data) */
        return (
            <TouchableNativeFeedback
                onPress={() => { directToPage(navigation, 'Detail', { toUrl: data.toAddress }) }}
            >
                <View style={styles.tabItem}>
                    <Image
                        style={styles.imgView}
                        source={{ url: data.iconPath }}
                    >
                    </Image>
                    <Text style={styles.text}>
                        {data.channelName}
                    </Text>
                </View>

            </TouchableNativeFeedback>
        )
    }
}

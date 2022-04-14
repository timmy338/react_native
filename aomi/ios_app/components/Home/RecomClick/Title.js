/*
 * @Author: your name
 * @Date: 2021-09-02 12:05:32
 * @LastEditTime: 2021-09-07 16:05:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\Home\RecomClick\top.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import RecomSwiper from './RecomSwiper'

export default class Title extends Component {
    render() {
        const { data, navigation } = this.props

        return (
            <View style={styles.topView}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.secoundName}>{data.brandName}</Text>
                <View style={styles.setFlex}>
                    <Text
                        style={[styles.require, { maxWidth: 280 }]}
                        numberOfLines={1}
                        ellipsizeMode={'tail'}
                    >
                        隨時退、過期退 | {data.require}
                    </Text>
                    <Text style={{ color: '#A2A2A2' }}>{data.soldOutDesc}</Text>
                </View>

                {
                    data.defaultInfoList != undefined &&
                    <RecomSwiper
                        swiperData={data.defaultInfoList}
                        navigation={navigation}

                    />
                }
            </View >
        )
    }
}
const styles = StyleSheet.create({
    topView: {
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 6
    },
    name: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 10
    },
    secoundName: {
        fontSize: 12,
        marginBottom: 10
    },
    setFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    require: {
        fontSize: 12,
        marginBottom: 10
    }

})

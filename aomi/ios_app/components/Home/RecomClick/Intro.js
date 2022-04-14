/*
 * @Author: your name
 * @Date: 2021-09-05 14:07:35
 * @LastEditTime: 2021-09-05 15:25:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\Home\RecomClick\intro.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import IntroItem from './IntroItem'


export default class Intro extends Component {

    render() {
        const { data, navigation } = this.props
        const rightIcon = ">"
        return (
            <View style={styles.topView}>
                <View style={styles.setFlex}>
                    <Text style={{ fontWeight: '500' }}>套餐內容</Text>
                    <Text style={{ color: '#A8A8A8' }}>圖文詳情 {rightIcon}</Text>
                </View>

                {
                    data &&
                    <View style={{marginLeft:3}}>
                        <Text style={{ fontWeight: '500', fontSize: 12 ,marginBottom:10}}>{data[0].iteamName}</Text>
                        {
                            data[0].dishesDetail.map((item, index) => {
                                return (
                                    <IntroItem
                                        data={item}
                                        styles={styles}
                                    />
                                )
                            })
                        }
                    </View>
                }
 

            </View>
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
    setFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    setFlexItem:{
        flexDirection:'row'
    }
})

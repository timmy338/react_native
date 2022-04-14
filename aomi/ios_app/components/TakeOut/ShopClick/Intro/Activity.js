/*
 * @Author: your name
 * @Date: 2021-09-11 13:47:29
 * @LastEditTime: 2021-09-11 14:04:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\TakeOut\ShopClick\Intro\Activity.js
 */
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Activity extends Component {
    render() {
        const {data}=this.props
        return (
            <View style={{borderWidth:1,borderColor:'#FFDFE5',padding:2,borderRadius:3,marginRight:4}}>
                <Text style={{color:'#FF345C',fontSize:10}}> {data.activityContent} </Text>
            </View>
        )
    }
}

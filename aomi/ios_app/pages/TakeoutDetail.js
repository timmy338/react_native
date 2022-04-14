/*
 * @Author: your name
 * @Date: 2021-09-20 15:46:41
 * @LastEditTime: 2021-09-20 16:18:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\pages\TakeoutDetail.js
 */
import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { screenSize } from '../utils/tools'
export default class TakeoutDetail extends Component {
    render() {
        const { data } = this.props.route.params
        /* console.log(this.props.route.params.data) */
        return (
            <View style={{ backgroundColor: '#F4F4F4' }}>
                <Image
                    style={{ width: screenSize.width, height: screenSize.height / 2 - 100 }}
                    source={{ url: data.menuPicUrl }}
                />
                <View style={{ padding: 10,backgroundColor:'white' }}>
                    <Text style={{ fontSize: 17 }}>{data.menuName}</Text>
                    <Text style={{ color: '#686868', marginTop: 10, fontSize: 13 }}>月售{data.monthSold}</Text>
                    <Text style={{ fontSize: 20, marginTop: 10, color: '#FF4065' }}>${data.menuPrice}</Text>
                </View>
                <View style={{ marginTop: 10,padding: 10,backgroundColor:'white' ,height:screenSize.height }}>
                    <Text style={{ fontSize: 17 }}>商品描述</Text>
                    <Text style={{ marginTop: 10, fontSize: 13 }}>{data.menuDesc}</Text>
                </View>
            </View>
        )
    }
}

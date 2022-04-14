/*
 * @Author: your name
 * @Date: 2021-09-08 15:57:11
 * @LastEditTime: 2021-09-08 16:40:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\TakeOut\RecomSwiper\menuItem.js
 */
import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class MenuItem extends Component {
    render() {
        const { data, styles } = this.props
        return (
            <View style={{ width: 100 }}>
                <Image
                    resizeMode={"cover"}
                    source={{ url: data.picUrl }}
                    style={styles.menuImg}
                />
                <View style={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8, opacity: 0.5, backgroundColor: "black", padding: 2, position: 'absolute', bottom: 17, width: 100 }}>
                    <Text
                        style={{ fontSize: 10, maxWidth: 90, color: 'white' }}
                        numberOfLines={1}
                        ellipsizeMode={'tail'}>
                        {data.name}
                    </Text>
                </View>

                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{ fontSize: 14, color: '#FF325A' }}>${data.price}</Text>
                    {
                        data.originPrice!=null &&
                        <Text style={styles.oldPrice}>${data.originPrice}</Text>
                    }
                </View>


            </View>
        )
    }
}

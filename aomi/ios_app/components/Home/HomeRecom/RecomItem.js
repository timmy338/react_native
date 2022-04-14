/*
 * @Author: your name
 * @Date: 2021-08-31 17:52:50
 * @LastEditTime: 2021-09-06 14:44:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\Home\HomeRecom\RecomItem.js
 */
import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native'
import { directToPage } from '../../../utils/ext'
export default class RecomItem extends Component {
    render() {
        const { data, navigation, styles } = this.props
        return (
            <TouchableWithoutFeedback
                onPress={ ()=>{directToPage(navigation,'homeRecom',{toUrl:'https://aomiapi.aomipay.com/aomi-purchase/gp/tab?id='+data.id,activityTag:data.activityTag})}}
            >
                <View style={styles.item}>
                    <Image
                        style={styles.img}
                        source={{ url: data.picUrl }}
                    >
                    </Image>
                    <View style={styles.textView}>
                        <Text
                            style={styles.title}
                            numberOfLines={2}
                            ellipsizeMode={'tail'}
                        >{data.headTitle}-{data.title}</Text>
                        {data.subTitle!="" &&
                            <Text
                                style={styles.intro}
                                numberOfLines={1}
                                ellipsizeMode={'tail'}
                            >{data.subTitle}</Text>}
                        <Text style={styles.sold}>{data.soldOutDesc} | {data.distance}</Text>
                        <View style={styles.priceView}>
                            <View><Text style={styles.price}>${data.groupPrice}</Text></View>
                            <View><Text style={styles.oldPrice}>${data.oldPrice}</Text></View>

                        </View>
                        <View style={styles.activityTag} ><Text style={{ fontSize: 8, color: "#FF325A" }}>{data.activityTag}</Text></View>

                    </View>

                </View>
            </TouchableWithoutFeedback>

        )
    }
}

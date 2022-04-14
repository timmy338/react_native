/*
 * @Author: your name
 * @Date: 2021-08-29 14:26:26
 * @LastEditTime: 2021-09-06 16:00:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\HomeSwiper\SwiperItem.js
 */
import React, { Component } from 'react'
import { Text, View,TouchableWithoutFeedback,Image } from 'react-native'
import { directToPage } from '../../../utils/ext'

import AniImage from '../../AniImage'

export default class SwiperItem extends Component {
    render() {
        const {data,navigation,style}=this.props
/*         console.log(data.shareUrl) */
        return (
            <TouchableWithoutFeedback
                style={style.swiperSize}
                onPress={ ()=>{directToPage(navigation,'Detail',{toUrl:data.shareUrl})}}
            >
                <Image
                    resizeMode={"strech"}
                    source={{ url:data.img }}
                    style={style.img}
                />
            </TouchableWithoutFeedback>
        )
    }
}

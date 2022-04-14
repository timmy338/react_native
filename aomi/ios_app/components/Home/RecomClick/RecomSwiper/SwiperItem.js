/*
 * @Author: your name
 * @Date: 2021-08-29 14:26:26
 * @LastEditTime: 2021-09-03 17:31:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\HomeSwiper\SwiperItem.js
 */
import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import { directToPage } from '../../../../utils/ext'

import AniImage from '../../../AniImage'

export default class SwiperItem extends Component {
    render() {
        const { data, navigation, style,length } = this.props
        /*         console.log(data.shareUrl) */
        return (
            <TouchableWithoutFeedback
                style={style.swiperSize}
                onPress={() => { directToPage(navigation, 'Detail', { toUrl: data.shareUrl }) }}
            >
                <View>
                    <AniImage
                        styles={style.img}
                        url={data.photoUrl}
                    />
                    {/* <Text style={{color:'white',position:'absolute',bottom:10,right:10}}>heloo/{length}</Text> */}
                </View>

            </TouchableWithoutFeedback>
        )
    }
}

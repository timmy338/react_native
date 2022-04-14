/*
 * @Author: your name
 * @Date: 2021-08-31 17:08:58
 * @LastEditTime: 2021-08-31 17:10:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\Home\HomeBottomAdvertise\BottomItem.js
 */
/*
 * @Author: your name
 * @Date: 2021-08-31 15:55:47
 * @LastEditTime: 2021-08-31 16:57:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\Home\HomeBottomAdvertise\Top\TopItem.js
 */
import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback,Image } from 'react-native'
import { directToPage } from '../../../utils/ext'
export default class BottomItem extends Component {
    
    render() {
        const {data,navigation,styles,index}=this.props
 
        return (
            <TouchableWithoutFeedback
                 onPress={ ()=>{directToPage(navigation,'Detail',{toUrl:data.shareUrl})}} 
            >
                <View >
                    <Image
                        source={{url:data.img}}
                        style={styles.bottomImg}
                    >
                    </Image>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

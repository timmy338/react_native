/*
 * @Author: your name
 * @Date: 2021-08-26 17:10:18
 * @LastEditTime: 2021-08-27 14:46:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\demo\ios_app\components\IndexSwiper\index.js
 */
import React, { Component } from 'react'
import { Image,StyleSheet,Text, TouchableWithoutFeedback, View } from 'react-native'
import { directToPage } from '../../utils/ext'
import { screenSize } from '../../utils/tools'
import AniImage from '../AniImage'
import Swiper from 'react-native-swiper'

class SwiperItem extends Component{
    render(){
        const {data,navigation}=this.props
        return (
            <TouchableWithoutFeedback
                style={styles.swiperSize}
                onPress={ ()=>{directToPage(navigation,'Detail',{courId:data.course_id})}}
            >
                <AniImage 
                    styles={styles.swiperSize}
                    url={data.img}
                />
            </TouchableWithoutFeedback>
        )
    }


}


export default class index extends Component {
    render() {
        const {swiperData,navigation}=this.props
        const swiperHeight=styles.swiperSize.height
        return (
            <View
                height={swiperHeight}
            >
                <Swiper
                    key={swiperData.length}
                    height={swiperHeight}
                    autoplay={true}
                    activeDotColor={'#fff'}
                    loop={true}
                    paginationStyle={styles}
                >
                    {
                        swiperData.map((item,index)=>{
                            return (
                                <SwiperItem
                                    data={item}
                                    key={index}
                                    navigation={navigation}
                                    style={styles}
                                />
                            )
                        })
                    }
                </Swiper>
                
            </View>
        )
    }
}

const styles=StyleSheet.create({
    swiperSize:{
        width:screenSize.width,
        height:screenSize.width*360/1200
    },
    pagination:{
        bottom:5
    }
})

/*
 * @Author: your name
 * @Date: 2021-08-29 14:26:11
 * @LastEditTime: 2021-09-01 14:08:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\HomeSwiper\index.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { screenSize } from '../../../utils/tools'
/* ---------------引入Swiperitem-------------- */
import Swiper from 'react-native-swiper'
import SwiperItem from './SwiperItem'

export default class HomeSwiper extends Component {
    render() {
        const { swiperData, navigation } = this.props
        return (
            <View style={[styles.mainViewSet]}>
                <View style={styles.setPosition}
                    width={340}
                    height={100}
                >
                    <Swiper
                        key={swiperData.length}
                        height={100}
                        autoplay={true}
                        activeDotColor={'#FF3159'}
                        loop={true}
                        paginationStyle={styles}
                    >
                        {
                            swiperData.map((item, index) => {
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainViewSet: {      
        height: 90,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor:'white',
        marginTop:20
    },
    setPosition:{
        position:'absolute',
        top:-20,
        zIndex:1,
    },

    img:{
        width: 340,
        height: 100,
        borderRadius:10
    },
    pagination: {
        bottom: 5
    }
})


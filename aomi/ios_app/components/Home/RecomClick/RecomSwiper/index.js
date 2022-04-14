/*
 * @Author: your name
 * @Date: 2021-08-29 14:26:11
 * @LastEditTime: 2021-09-03 17:33:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\HomeSwiper\index.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
/* ---------------引入Swiperitem-------------- */
import Swiper from 'react-native-swiper'
import SwiperItem from './SwiperItem'

export default class RecomSwiper extends Component {

    render() {
        const { swiperData, navigation } = this.props
        const renderPagination = (index, total, context) => {
            return (
                <View style={styles.page}>
                    <Text style={{color:'white'}}>
                        {index + 1}/{total}
                    </Text>
                </View>
            )
        }
        return (
            <View style={[styles.mainViewSet]}>
                <View style={styles.setPosition}
                    width={340}
                    height={240}
                >
                    <Swiper
                        key={swiperData.length}
                        activeDotColor={'#FF3159'}
                        loop={true}
                        paginationStyle={styles}
                        renderPagination={renderPagination}
                    >
                        {
                            swiperData.map((item, index) => {
                                return (
                                    <SwiperItem
                                        data={item}
                                        key={index}
                                        length={swiperData.length}
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
        height: 240,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginTop: 20,

    },
    setPosition: {
        position: 'absolute',
        top: -20,
        zIndex: 1,
        borderRadius: 5,
        overflow: 'hidden'
    },

    img: {
        width: 340,
        height: 240,

    },
    pagination: {
        bottom: 5
    },
    page:{
        
        position:'absolute',
        bottom:10,
        right:10,
        zIndex:100,
    }
})


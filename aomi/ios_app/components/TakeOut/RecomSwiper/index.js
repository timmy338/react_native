/*
 * @Author: your name
 * @Date: 2021-08-29 14:26:11
 * @LastEditTime: 2021-09-09 11:14:02
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

export default class RecomSwiper extends Component {
    render() {
        const { swiperData, navigation } = this.props
        /* console.log(swiperData) */
        return (
            <View style={[styles.mainViewSet]}>
                <View style={styles.setPosition}
                    width={screenSize.width - 30}
                    height={300}
                >
                    <Swiper
                        key={swiperData.length}
                        height={300}
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
                                        styles={styles}
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
        height: screenSize.width/2-30,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom:140,

    },
    setPosition: {
        position: 'absolute',
        top: -20,
        zIndex: 1,
        backgroundColor:'white',
        borderRadius:7
    },

    bcImg: {
        width: screenSize.width - 30,
        height: 50,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        position: 'absolute'
    },
    shopImg: {
        width: 50,
        height: 50,
        borderRadius: 7
    },
    pagination: {
        bottom: 5
    },
    topTag: {
        backgroundColor: '#1A1917',
        position: 'absolute',
        zIndex: 99,
        padding: 4,
        borderRadius: 7,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 0
    },
    setShopText: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 4,
        marginLeft: 10
    },
    ticketView: {
        borderRadius: 5,
        padding: 2,
        backgroundColor: '#FF315B',
        marginLeft: 4
    },
    intro:{
        fontWeight:'500',
        marginTop:10,
        marginLeft:10
    },
    menuImg:{
        width:100,
        height:100,
        borderRadius:7
    },
    menuFlex:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    oldPrice: {
        marginLeft: 4,
        height: 10,
        fontSize: 10,
        textDecorationLine:'line-through',
        color:'#767676'
    },
})


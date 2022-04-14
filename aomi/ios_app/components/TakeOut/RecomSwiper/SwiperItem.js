/*
 * @Author: your name
 * @Date: 2021-08-29 14:26:26
 * @LastEditTime: 2021-09-08 16:04:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\HomeSwiper\SwiperItem.js
 */
import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback, Image } from 'react-native'
import { directToPage } from '../../../utils/ext'
import MenuItem from './MenuItem'

export default class SwiperItem extends Component {
    render() {
        const { data, navigation, styles } = this.props
        /* console.log(data.bbeBgPic) */
        return (
            <TouchableWithoutFeedback
                style={styles.swiperSize}
                onPress={() => { directToPage(navigation, 'Detail', { toUrl: data.shareUrl }) }}
            >
                <View>
                    <View style={styles.topTag}>
                        <Text style={{ color: '#F9E0BF', fontSize: 10 }}>人氣推薦</Text>
                    </View>
                    <Image
                        resizeMode={"cover"}
                        source={{ url: data.bbeBgPic }}
                        style={styles.bcImg}
                    />
                    <View style={{ flexDirection: 'row', marginTop: 25, marginLeft: 10 }}>
                        <Image
                            resizeMode={"cover"}
                            source={{ url: data.storeThumbnailPic }}
                            style={styles.shopImg}
                        />
                        <View style={styles.setShopText}>
                            <Text
                                style={{ color: 'white', maxWidth: 150, fontWeight: '800' }}
                                numberOfLines={1}
                                ellipsizeMode={'tail'}
                            >
                                {data.storeName}
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                {
                                    data.items.map((item, index) => {
                                        return (
                                            <View
                                                key={index}
                                                style={styles.ticketView}
                                            >
                                                <Text style={{ fontSize: 9, color: 'white' }}>{item}</Text>
                                            </View>
                                        )
                                    })
                                }
                            </View>

                        </View>
                    </View>


                    <Text style={styles.intro}>{data.bbeSubject}</Text>
                    
                    <View style={styles.menuFlex}>
                        {
                            data.menus.map((item,index)=>{
                                return (
                                    <MenuItem
                                        data={item}
                                        key={index}
                                        styles={styles}
                                    />
                                )
                            })
                        }
                    </View>
                </View>



            </TouchableWithoutFeedback>
        )
    }
}

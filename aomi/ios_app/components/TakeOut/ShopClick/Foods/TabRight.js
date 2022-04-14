/*
 * @Author: your name
 * @Date: 2021-09-14 15:55:06
 * @LastEditTime: 2021-09-29 16:35:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\TakeOut\ShopClick\Foods\TabRight.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Button, TouchableWithoutFeedback } from 'react-native'
import { screenSize } from '../../../../utils/tools'
import { directToPage } from '../../../../utils/ext'
export default class TabRight extends Component {

    render() {
        const { data, navigation, addWare } = this.props

        return (
            <View style={{ backgroundColor: 'pink' }}>
                <View style={styles.title}>
                    <Text style={{ color: '#979797' }}> {data.name} </Text>
                </View>

                <View style={{ flexDirection: 'column' }}>
                    {
                        data.menuList &&
                        data.menuList.map((item, index) => {
                            return (
                                <TouchableWithoutFeedback
                                    onPress={() => { directToPage(navigation, 'TakeoutDetail', { data: item }) }}
                                    key={index}

                                >
                                    <View style={styles.itemView}>
                                        <Image
                                            style={{ width: 70, height: 70, borderRadius: 7, marginRight: 5 }}
                                            source={{ url: item.menuPicUrl }}
                                        />
                                        <View>
                                            <Text
                                                style={{ fontWeight: '500', maxWidth: 220, marginBottom: 5 }}
                                                numberOfLines={1}
                                                ellipsizeMode={'tail'}
                                            >{item.menuName}</Text>
                                            {
                                                item.menuDesc != "" &&
                                                <Text
                                                    style={{ fontSize: 10, color: '#B5B5B5', marginBottom: 5, maxWidth: 220 }}
                                                    numberOfLines={1}
                                                    ellipsizeMode={'tail'}>{item.menuDesc}</Text>
                                            }

                                            <Text style={{ fontSize: 10, color: '#B5B5B5' }}>月售{item.monthSold}</Text>
                                            <View style={styles.priceView}>
                                                <Text style={{ fontSize: 18, color: '#FF3159', fontWeight: '500' }}>${item.menuPrice}</Text>
                                                <TouchableWithoutFeedback
                                                    onPress={() => {
                                                   
                                                        var Ware = { name: '', price: '', img: '',length:1 }
                                                        Ware.name = item.menuName
                                                        Ware.price = item.menuPrice
                                                        Ware.img = item.menuPicUrl
                                                
                                                        addWare(Ware)
                                                    }}
                                                >
                                                    <View style={styles.btnView}>
                                                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>+</Text>
                                                    </View>
                                                </TouchableWithoutFeedback>

                                            </View>

                                        </View>

                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    title: {
        width: screenSize.width - 70,
        padding: 5,
        paddingTop: 10,
        paddingBottom: 15,
        backgroundColor: '#fff',
    },
    itemView: {
        height: 90,
        padding: 5,
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    priceView: {
        width: 210,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnView: {
        padding: 5,
        backgroundColor: '#FF3159',
        paddingTop: 0,
        paddingBottom: 0,
        borderRadius: 100,
        alignItems: 'center'
    }
})

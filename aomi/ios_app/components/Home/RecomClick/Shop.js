/*
 * @Author: your name
 * @Date: 2021-09-05 14:51:50
 * @LastEditTime: 2021-09-07 16:19:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\Home\RecomClick\shop.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default class Shop extends Component {
    render() {
        const { data } = this.props
        const rightIcon = '>'
        return (

            <View style={styles.topView}>
                {
                    data &&

                    <View>
                        <View style={[styles.setFlex, { justifyContent: 'space-between', marginBottom: 10 }]}>
                            <Text style={{ fontSize: 15, fontWeight: '500' }}>適用門店</Text>
                            <Text style={{ fontSize: 12, color: '#999999' }}>{data.length}家門店通用 {rightIcon}</Text>
                        </View>

                        <View style={styles.setFlex}>
                            <Image
                                style={styles.img}
                                resizeMode={'strech'}
                                source={{ url: data[0].thumbnailPic }}
                            />
                            <View style={{ marginLeft: 10, width: 250 }}>
                                <Text
                                    style={{ maxWidth: 220 }}
                                    numberOfLines={1}
                                    ellipsizeMode={'tail'}
                                >
                                    {data[0].storeName}
                                </Text>
                                <View style={[styles.setFlex, { width: 210, alignItems: 'center' }]}>

                                    <MaterialCommunityIcons name={'star-box'} size={14} color={'#FFAF39'} />
                                    <MaterialCommunityIcons name={'star-box'} size={14} color={'#FFAF39'} />
                                    <MaterialCommunityIcons name={'star-box'} size={14} color={'#FFAF39'} />
                                    <MaterialCommunityIcons name={'star-box'} size={14} color={'#FFAF39'} />
                                    <MaterialCommunityIcons name={'star-box'} size={14} color={'#FFAF39'} />

                                    <Text>{data[0].totalScore}</Text>
                                </View>

                                <View style={[styles.setFlex, { width: 210 }]}>
                                    <FontAwesome name={'location-arrow'} size={10} color={'#D7D7D7'} />
                                    <Text
                                        style={{ fontSize: 10, maxWidth: 200 }}
                                        numberOfLines={1}
                                        ellipsizeMode={'tail'}
                                    >
                                        {data[0].address}
                                    </Text>
                                </View>
                            </View>
                            <FontAwesome name={'phone'} size={18} color={'#FF5072'} style={{ marginTop: 10 }} />
                        </View>

                    </View>
                }

            </View>
        )
    }
}
const styles = StyleSheet.create({
    topView: {
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 6
    },
    setFlex: {
        flexDirection: 'row',
    },
    img: {
        width: 50,
        height: 50
    }
})

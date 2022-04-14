/*
 * @Author: your name
 * @Date: 2021-09-21 17:00:37
 * @LastEditTime: 2021-09-25 13:11:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\TakeOut\ShopClick\Foods\TrolleyItem.js
 */
/* 可能唔比 換成func */
import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'

export default function TrolleyItem({ trolleyData }) {
    /* console.log(trolleyData) */
    return (
        <View style={{paddingBottom:100,backgroundColor:'white'}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FAFAFA', padding: 14 }}>
                <Text>1號口袋(餐盒費$1)</Text>
                <Text>清空購物車</Text>
            </View>
            <ScrollView height={170} backgroundColor={'white'}>
                {
                    trolleyData.map((item, index) => {
                        return (
                            <View key={index} style={styles.itemView}>
                                <Image
                                    style={{ width: 50, height: 50, borderRadius: 7, marginLeft: 10 }}
                                    source={{ url: item.img }}
                                />
                                <View style={styles.itemIntro}>
                                    <Text>{item.name}</Text>
                                    <Text style={{ color: '#FF4065', fontWeight: '400', marginTop: 5 }}>${item.price}</Text>
                                </View>
                                <View style={styles.count}>
                                    <View style={[styles.btnView, { backgroundColor: 'white' }]}>
                                        <Text style={{ color: '#FF3159', fontSize: 16, fontWeight: '500' }}>-</Text>
                                    </View>
                                    <Text>{item.length}</Text>
                                    <View style={[styles.btnView, { backgroundColor: '#FF3159' }]}>
                                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>+</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    itemView: {
        height: 70,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnView: {
        marginLeft: 5,
        marginRight: 5,
        padding: 5,
        paddingTop: 0,
        paddingBottom: 0,
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#E8E8E8',
        borderWidth: 1
    },
    count: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemIntro: {
        marginLeft: 10,
        width: 230
    }
})

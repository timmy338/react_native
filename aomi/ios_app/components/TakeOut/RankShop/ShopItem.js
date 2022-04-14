/*
 * @Author: your name
 * @Date: 2021-09-08 14:23:13
 * @LastEditTime: 2021-09-08 15:15:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\TakeOut\RankShop\shopItem.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import index from '../../IndexSwiper'


export default class ShopItem extends Component {
    render() {
        const { data } = this.props
        /* console.log(data) */
        return (
            <View style={styles.mainView}>
                <View>
                    <Image
                        resizeMode={'strech'}
                        style={styles.imgView}
                        source={{ url: data.picUrl }}
                    />
                    {data.coupons.length != 0 &&
                        <View style={{ flexDirection: 'row', position: 'absolute', backgroundColor: '#FF3159', borderTopRightRadius: 7, padding: 3, bottom: 1, left: 1 }}>
                            {

                                data.coupons.map((item, index) => {
                                    if (index != data.coupons.length - 1) {
                                        return (
                                            <Text
                                                style={styles.discount}
                                                key={index}
                                            >
                                                {item} |
                                            </Text>
                                        )
                                    }
                                    else {
                                        return (
                                            <Text
                                                style={styles.discount}
                                                key={index}
                                            >
                                                {item}
                                            </Text>
                                        )
                                    }
                                })
                            }
                        </View>
                    }
                </View>

                <Text
                    style={{ fontSize: 12, maxWidth: 100, textAlign: 'center', marginTop: 5, marginBottom: 5 }}
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                >
                    {data.storeName}
                </Text>
                <Text style={{ fontSize: 10, color: '#9C9C9C', textAlign: 'center' }}>{data.recommendMsg}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    mainView: {
        marginTop: 10,

    },
    imgView: {
        width: 100,
        height: 100,
        borderColor: '#FAFAFA',
        borderWidth: 1
    },
    discount: {
        fontSize: 7,
        color: 'white'
    }
})

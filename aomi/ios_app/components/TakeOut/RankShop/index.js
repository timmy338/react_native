/*
 * @Author: your name
 * @Date: 2021-09-07 17:00:05
 * @LastEditTime: 2021-09-08 15:04:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\TakeOut\RankShop\index.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ShopItem from './ShopItem'

export default class RankShop extends Component {
    render() {
        const { data } = this.props
        /* console.log(data) */
        return (
            <View style={styles.mainView}>
                <View style={styles.setTitle}>
                    <FontAwesome name={'circle'} size={7} color={'#D7D7D7'} />
                    <Text style={{ fontSize: 16 }}> 優選商家 </Text>
                    <FontAwesome name={'circle'} size={7} color={'#D7D7D7'} />
                </View>
                <View style={styles.setFlexData}>
                    {
                        data.map((item, index) => {
                            return (
                                <ShopItem
                                    data={item}
                                    key={index}

                                />
                            )

                        })
                    }
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    mainView: {
        marginTop: 10,
        paddingTop: 10,
        marginBottom: 10,
        paddingBottom:10,
        backgroundColor: 'white'
    },
    setTitle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    setFlexData: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',

    }
})

/*
 * @Author: your name
 * @Date: 2021-09-06 14:25:49
 * @LastEditTime: 2021-09-06 14:54:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\Home\RecomClick\buy.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Buy extends Component {
    render() {
        const { data,activityTag } = this.props
        return (
            <View style={styles.topView}>
                <View style={styles.priceView}>
                    <View><Text style={styles.price}>${data.groupPrice}</Text></View>
                    <View style={{marginLeft:10}}>
                        <View style={styles.activityTag} ><Text style={{ fontSize: 8, color: "#FF325A" }}>{activityTag}</Text></View>
                        <Text style={styles.oldPrice}>${data.oldPrice}</Text>
                    </View>

                </View>
                <View style={styles.button}>
                    <Text style={{fontSize:18,fontWeight:'500',color:'white'}}>立即搶購</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    topView: {
        padding: 10,
        paddingBottom:100,
        backgroundColor: 'white',
        borderRadius: 6,
        flexDirection:'row',
        justifyContent:'space-between',
        borderTopColor:'#EBEBEB',
        borderTopWidth:1
    },
    priceView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        marginTop: 3,
        fontSize: 25,
        fontWeight: '600',
        color: '#FF335A'
    },
    oldPrice: {
        height: 10,
        fontSize: 10,
        textDecorationLine: 'line-through',
        color: '#767676'
    },
    activityTag: {
        backgroundColor: 'white',
        padding: 1,
        borderRadius: 5,
        borderBottomLeftRadius:0,
        borderWidth:1,
        borderColor:'#FF325A',
        alignSelf: 'flex-start'
    },
    button:{
        padding:10,
        paddingLeft:20,
        paddingRight:20,
        backgroundColor:'#FF746F',
        borderRadius:20
    }
})

/*
 * @Author: your name
 * @Date: 2021-09-08 16:59:15
 * @LastEditTime: 2021-09-09 11:09:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\TakeOut\nearbyShop\top.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { screenSize } from '../../../utils/tools'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class Top extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.setTitle}>
                    <FontAwesome name={'circle'} size={7} color={'#D7D7D7'} />
                    <Text style={{ fontSize: 16 }}> 附近商家 </Text>
                    <FontAwesome name={'circle'} size={7} color={'#D7D7D7'} />
                </View>
                <View style={[styles.setFlex,{justifyContent:'space-around'}]}>
                    <View style={styles.setMiddleFlex}>
                        <Text>綜合排序 </Text>
                        <FontAwesome name={'angle-down'} size={17} color={'#D7D7D7'} />
                    </View>
                    <View style={styles.setMiddleFlex}>
                        <Text>品類 </Text>
                        <FontAwesome name={'angle-down'} size={17} color={'#D7D7D7'} />
                    </View>
                    <View style={styles.setMiddleFlex}>
                        <Text>篩選 </Text>
                        <FontAwesome name={'angle-down'} size={17} color={'#D7D7D7'} />
                    </View>

                </View>

                <View style={styles.tagView}>
                    <View style={styles.tag}>
                        <Text style={styles.textColor}>會員紅包</Text>
                    </View>
                    <View style={styles.tag}>
                        <Text style={styles.textColor}>減配送費</Text>
                    </View>
                    <View style={styles.tag}>
                        <Text style={styles.textColor}>澳覓專送</Text>
                    </View>
                    <View style={styles.tag}>
                        <Text style={styles.textColor}>店內紅包</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: 'white',
        paddingBottom:10,
        marginBottom:10
    },
    setTitle: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    setFlex:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10
    },
    setMiddleFlex:{
        flexDirection:'row',
        alignItems:'center',
        width:screenSize.width/3-20,
        justifyContent:'center'
    },
    tagView:{
        marginTop:10,

        flexDirection:'row',
        justifyContent:'space-around',

    },
    tag:{
        padding:10,
        paddingLeft:15,
        paddingRight:15,
        borderRadius:7,
        backgroundColor:'#F5F5F5'
    },
    textColor:{
        color:'#999999',
        fontSize:12
    }
})


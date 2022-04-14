/*
 * @Author: your name
 * @Date: 2021-08-29 15:16:47
 * @LastEditTime: 2021-09-01 19:05:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\Home\topSearch\index.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import { screenSize } from '../../../utils/tools'
/* ---------------------------- */
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class TopSearch extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.setFlex}>
                    <TextInput
                        style={styles.input}
                        placeholder="搜索店名"
                    />
                    <View style={{ width: 40, height: 40,marginLeft:10}}>
                        <Ionicons name={'ios-scan-circle-outline'} size={30} color={'white'} style={{textAlign:'center'}}/>
                        <Text style={{ fontSize:10,textAlign:'center',color:'white'}}>掃一掃</Text>
                    </View>
                    <View style={{ width: 40, height: 40,marginLeft:5}}>
                        <Ionicons name={'barcode-outline'} size={30} color={'white'} style={{textAlign:'center'}}/>
                        <Text style={{ fontSize:10,textAlign:'center',color:'white'}}>付款碼</Text>
                    </View>
                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        width: screenSize.width,
        height: 100,
        backgroundColor:'#FF3159',
    },
    setFlex:{
        marginTop: 50,
        display:'flex',
        flexDirection: 'row', 
        flexWrap: 'wrap',
    },
    input: {
        marginLeft: 20,
        height: 40,
        width: 250,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 20
    }
})


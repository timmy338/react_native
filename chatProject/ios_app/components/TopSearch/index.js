/*
 * @Author: your name
 * @Date: 2021-08-29 15:16:47
 * @LastEditTime: 2021-10-16 15:03:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\Home\topSearch\index.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { screenSize } from '../../utils/tools'
/* ---------------------------- */
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class TopSearch extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.setFlex}>
                    <TextInput
                        style={styles.input}
                        placeholder="搜索人物和群組"
                        clearTextOnFocus={true}
                    />

                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({

    setFlex:{
        flexDirection: 'row', 
        justifyContent:'flex-start',
        flexWrap: 'wrap',
    },
    input: {
        height: 40,
        width: screenSize.width-80,
        padding: 10,
        backgroundColor: '#E7ECF0',
        borderRadius: 20
    }
})


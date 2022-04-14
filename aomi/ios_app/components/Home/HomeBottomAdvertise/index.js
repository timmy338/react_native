/*
 * @Author: your name
 * @Date: 2021-08-31 15:44:14
 * @LastEditTime: 2021-08-31 18:09:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\Home\HomeBottomAdvertise\index.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import TopItem from './TopItem';
import BottomItem from './BottomItem';
export default class HomeBottomAdvertise extends Component {
    render() {
        const { advertiseData, navigation } = this.props;
        const dataTop = advertiseData[0];
        const dataBottom = advertiseData[1];
        /*  console.log(dataTop) */
        return (
            <View>
                <View style={styles.topView}>
                    {dataTop &&
                        dataTop.map((item, index) => {
                            return (
                                <TopItem
                                    data={item}
                                    key={index}
                                    index={index}
                                    styles={styles}
                                    navigation={navigation}
                                />
                            )
                        })
                    }
                </View>


                <View  style={[styles.topView,{paddingTop:10}]}>
                    {dataBottom &&
                        dataBottom.map((item, index) => {
                            return (
                                <BottomItem
                                    data={item}
                                    key={index}
                                    index={index}
                                    styles={styles}
                                    navigation={navigation}
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
    topView: {
        paddingTop:10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor:'white'
    },
    topImg: {
        width: 175,
        height: 100,
        borderRadius: 7
    },
    bottomImg:{
        width:114,
        height:140,
        borderRadius: 7
    }

})

/*
 * @Author: your name
 * @Date: 2021-08-27 15:58:27
 * @LastEditTime: 2021-09-06 15:25:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\demo\ios_app\components\tabList\index.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { screenSize } from '../../../utils/tools'

import TabItem from './TabItem'

export default class HomeMiddleTabs extends Component {
    render() {
        const { tabData, navigation } = this.props
        return (
            <View style={styles.tabBoard}>
                {
                    tabData.map((item, index) => {
                        return (
                            <TabItem
                                data={item}
                                styles={styles}
                                index={index}
                                key={index}
                                navigation={navigation}
                            />
                        )
                    })
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabBoard: {
        width:screenSize.width,
        backgroundColor:'white',
        flexDirection: 'row',
        flexWrap: 'wrap',
        position:'relative',
        zIndex:1,
        paddingLeft:10,
        paddingRight:10,
    },
    tabItem: {
        height: 90,
        width:70,
        padding:10,
    },
    text:{
        fontSize:12,
        textAlign:'center',

    },
    imgView: {
        width: 50,
        height: 50,
        marginBottom:5
    },
    infoView: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: screenSize.width,
        height: 80,
        paddingLeft: 152,
        paddingTop: 10,
        paddingBottom: 10
    },
    tabName: {
        lineHeight: 20
    },
    price:{
        color:'#f40',
        marginTop:5
    }
})

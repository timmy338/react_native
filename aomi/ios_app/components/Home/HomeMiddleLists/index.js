/*
 * @Author: your name
 * @Date: 2021-08-28 14:37:47
 * @LastEditTime: 2021-08-30 18:00:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\demo\ios_app\components\ListTab\index.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import TabItem from './TabItem'
export default class HomeMiddleLists extends Component {
    render() {
        const { listData, onTabClick, curIdx } = this.props
        return (
            <View style={styles.tabContainer}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        listData.map((item, index) => {
                            return (
                                <TabItem
                                    data={item}
                                    index={index}
                                    key={index}
                                    curIdx={curIdx}
                                    onTabClick={onTabClick}
                                    styles={styles}
                                />
                            )

                        })
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabContainer: {
        paddingTop:10,
        height: 60,
        backgroundColor: '#fff',
    },
    tabItem: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,

    },
    tabItemCurrent: {
        borderBottomWidth:5,
        borderBottomColor: '#E9845B'
    },
    tabItemText: {
        fontSize: 16,
        fontWeight:"400",
        color: '#333333'
    },
    tabItemSubText: {
        marginTop:5,
        fontSize: 11,
        color: '#BABABA',
        textAlign:'center',
    },
    tabItemTextCurrent: {
        fontSize: 18,
        fontWeight:"800",
        color: 'black'
    },
    tabItemSubTextCurrent: {
        color: 'black'
    },
});

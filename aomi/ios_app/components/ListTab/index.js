/*
 * @Author: your name
 * @Date: 2021-08-28 14:37:47
 * @LastEditTime: 2021-09-03 15:19:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\demo\ios_app\components\ListTab\index.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import TabItem from './TabItem'
export default class ListTab extends Component {
    render() {
        const { data, onTabClick, curIdx } = this.props
        return (
            <View style={styles.tabContainer}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        data.map((item, index) => {
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
        padding:5,
    },
    tabItem: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        paddingLeft: 3,
        paddingRight:3,
        borderBottomWidth: 4,
        borderBottomColor: 'transparent',
        marginRight:5,
    },
    tabItemCurrent: {
        borderBottomColor: '#FF3159',

    },
    tabItemText: {
        fontSize: 11,
        fontWeight:'800',
        color: '#333'
    },
    tabItemTextCurrent: {
        color: '#FF3159'
    }

});

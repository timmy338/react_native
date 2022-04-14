/*
 * @Author: your name
 * @Date: 2021-08-28 14:37:47
 * @LastEditTime: 2021-08-28 15:16:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\demo\ios_app\components\ListTab\index.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import TabItem from './TabItem'
export default class ListTab extends Component {
    render() {
        const { fieldData, onTabClick, curIdx } = this.props
        return (
            <View style={styles.tabContainer}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        fieldData.map((item, index) => {
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
        height: 35,
        backgroundColor: '#fff',
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    tabItem: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomWidth: 2,
        borderBottomColor: 'transparent'
    },
    tabItemCurrent: {
        borderBottomColor: '#23b8ff'
    },
    tabItemText: {
        fontSize: 14,
        color: '#333'
    },
    tabItemTextCurrent: {
        color: '#23b8ff'
    }

});

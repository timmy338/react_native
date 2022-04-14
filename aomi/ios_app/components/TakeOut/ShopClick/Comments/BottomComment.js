/*
 * @Author: your name
 * @Date: 2021-09-26 16:50:01
 * @LastEditTime: 2021-09-29 17:53:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\TakeOut\ShopClick\Comments\Assess.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { screenSize } from '../../../../utils/tools'
import CommentItem from './CommentItem'
export default class BottomComment extends Component {
    render() {
        const { listData } = this.props
        return (
            <View style={styles.mainView}>
                <View style={styles.topView}>
                    <TouchableWithoutFeedback
                        style={[styles.btnView, { backgroundColor: '#FF3159' }]}
                    >
                        <Text style={{ color: 'white' }}>全部</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        style={styles.btnView}
                    >
                        <Text>有圖</Text>
                    </TouchableWithoutFeedback>
                </View>
                <ScrollView>
                    {
                        listData &&
                        listData.map((item, index) => {
                            return (
                                <CommentItem
                                    key={index}
                                    data={item}
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
    mainView: {
        paddingBottom: 200
    },
    topView: {
        width: screenSize.width,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20
    },
    btnView: {
        width: 180,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: '#FF3159',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 7
    }
})

/*
 * @Author: your name
 * @Date: 2021-09-02 12:05:08
 * @LastEditTime: 2021-09-06 14:54:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editss
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\Home\RecomClick\index.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import Intro from './Intro'
import Shop from './Shop'
import Title from './Title'
import Alert from './Alert'
import Buy from './Buy'

export default class RecomClick extends Component {
    render() {
        const { detailData, navigation,activityTag } = this.props
        /* console.log(detailData) */
        return (

            <View>
                <ScrollView
                    style={{ height: 610 }}
                    showsVerticalScrollIndicator={false}
                >
                    {
                        detailData != undefined &&
                        <View>
                            <Title
                                data={detailData}
                                navigation={navigation}
                            />
                            <Intro
                                data={detailData.dishList}
                                navigation={navigation}
                            />
                            <Shop
                                data={detailData.storeInfo}
                            />
                            <Alert
                                data={detailData}
                            />
                        </View>

                    }
                </ScrollView>
                {
                    detailData != undefined && <Buy data={detailData} activityTag={activityTag}/>
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    topView: {
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 6
    },
    name: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 10
    },
    secoundName: {
        fontSize: 12,
        marginBottom: 10
    },
    setFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    require: {
        fontSize: 12,
        marginBottom: 10
    }

})

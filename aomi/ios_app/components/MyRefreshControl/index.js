/*
 * @Author: your name
 * @Date: 2021-08-28 15:56:28
 * @LastEditTime: 2021-09-01 19:08:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\demo\ios_app\components\MyRefreshControl\index.js
 */
import React, { Component } from 'react'
import { RefreshControl, StyleSheet, View, Image } from 'react-native'
import { screenSize } from '../../utils/tools'
export default class MyRefreshControl extends Component {
    render() {
        const { isRefreshing, onPageRefresh } = this.props
        return (
            <RefreshControl
                refreshing={isRefreshing}
                onRefresh={onPageRefresh}
                tintColor='#FF8073'
            >
                {
                    isRefreshing &&
                    <View style={[styles.pageLoading]}>
                        <Image
                            style={styles.loadingPic}
                            source={require('../../assets/img/loading.gif')}
                        />
                    </View>
                }

            </RefreshControl>
        )
    }
}
const styles = StyleSheet.create({
    pageLoading: {
        width: screenSize.width,
        height: 30,
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingPic: {
        position: 'absolute',
        top: 20,
        width: 60,
        height: 60
    }
})

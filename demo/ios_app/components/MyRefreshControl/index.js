/*
 * @Author: your name
 * @Date: 2021-08-28 15:56:28
 * @LastEditTime: 2021-08-28 15:57:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\demo\ios_app\components\MyRefreshControl\index.js
 */
import React, { Component } from 'react'
import { RefreshControl } from 'react-native'

export default class MyRefreshControl extends Component {
    render() {
        const {isRefreshing,onPageRefresh}=this.props
        return (
            <RefreshControl
                refreshing={isRefreshing}
                onRefresh={onPageRefresh}
                tintColor="#666"
                title="正在加載中"
                titleColor="#666"
            />
        )
    }
}

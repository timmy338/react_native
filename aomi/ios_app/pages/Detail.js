/*
 * @Author: your name
 * @Date: 2021-08-25 16:05:18
 * @LastEditTime: 2021-09-20 16:04:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\test\ios_app\pages\Detail.js
 */

import React, { Component } from 'react'
import WebView from 'react-native-webview'
import { Text, View ,StyleSheet } from 'react-native'

/* ---------公用styles--------- */
import commonStyles from '../styles/commonStyle'

export default class DetailPage extends Component {
    render() {
        const {route}=this.props
        const {toUrl}=route.params
        return (
            <WebView
                source={{url:toUrl}}
            />
        )
    }
}

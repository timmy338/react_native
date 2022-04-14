/*
 * @Author: your name
 * @Date: 2021-08-28 17:04:02
 * @LastEditTime: 2021-09-07 15:46:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\demo\ios_app\components\AniImage\index.js
 */
import React, { Component } from 'react'
import { Image, Animated } from 'react-native'

export default class AniImage extends Component {
    render() {
        const { styles, url } = this.props
        this.animatedValue = new Animated.Value(1)

        const imgAnimation = this.animatedValue.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1]
        })
        return (
            <Animated.Image
                resizeMode={"cover"}
                onLoadEnd={() => {
                    Animated.timing(this.animatedValue, {
                        toValue: 100,
                        duration: 500
                    }).start()
                }}
                source={{ url }}
                style={[styles, { opacity: imgAnimation }]}
            />
        )
    }
}

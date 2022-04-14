/*
 * @Author: your name
 * @Date: 2021-08-27 15:58:27
 * @LastEditTime: 2021-08-27 17:04:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\demo\ios_app\components\CourseList\index.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { screenSize } from '../../utils/tools'
import CourseItem from './CourseItem'

export default class CourseList extends Component {
    render() {
        const { courseData, navigation } = this.props

        return (
            <View style={styles.courseBoard}>
                {
                    courseData.map((item, index) => {
                        return (
                            <CourseItem
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
    courseBoard: {
        width:screenSize.width
    },
    courseItem: {
        flexDirection: 'row',
        height: 80,
        backgroundColor: '#fff',
        borderBottomColor: '#eee',
        marginTop: 10
    },
    courseItemFirst: {
        marginTop: 0
    },
    imgView: {
        width: 142,
        height: 80
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
    courseName: {
        lineHeight: 20
    },
    price:{
        color:'#f40',
        marginTop:5
    }
})

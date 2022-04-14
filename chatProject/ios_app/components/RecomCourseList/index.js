/*
 * @Author: your name
 * @Date: 2021-08-27 15:18:49
 * @LastEditTime: 2021-08-27 18:01:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\demo\ios_app\components\RecomCourseList\index.js
 */
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { screenSize } from '../../utils/tools'

import CourseItem from './CourseItem'

export default class RecomCourseList extends Component {
    render() {
        const { recomCourseData, navigation } = this.props
        return (
            <View style={styles.recomCourseBoard}>
                {
                    recomCourseData.map((item, index) => {
                        return (
                            <CourseItem
                                data={item}
                                index={index}
                                styles={styles}
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
    recomCourseBoard: {
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    courseItemFirst:{
        paddingRight:5,
        paddingLeft:10,
    },
    courseItem: {
        paddingTop:10,
        paddingBottom:10,
        paddingRight:10,
        paddingLeft:5,
        backgroundColor: '#fff',
        borderBottomColor: '#eee',
        width: screenSize.width / 2 ,
        padding: 5
    },
    imgView: {
        width: screenSize.width / 2 - 15,
        height: (screenSize.width / 2 - 20) * 1080 / 1920
    },
    courseName: {
        marginTop: 5,
        marginBottom: 5
    },
    courseNameText: {
        fontSize: 13
    },
    teacherInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 30
    },
    teacherImg: {
        width: 25,
        height: 25,
        borderRadius: 12,
        marginRight: 5
    },
    teacherName: {
        fontSize: 12,
        color: '#666'
    },
    price: {
        alignItems: 'flex-end',
        marginTop: 5,
        marginRight:10
    },
    priceNum: {
        color: '#f40'
    }

})

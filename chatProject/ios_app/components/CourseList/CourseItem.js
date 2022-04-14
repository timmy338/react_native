/*
 * @Author: your name
 * @Date: 2021-08-27 15:58:37
 * @LastEditTime: 2021-08-27 17:09:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\demo\ios_app\components\CourseList\CourseItem.js
 */
import React, { Component } from 'react'
import { Text, View, Image, TouchableNativeFeedback } from 'react-native'

import { directToPage } from '../../utils/ext'

export default class CourseItem extends Component {
    render() {
        const { data, styles, navigation ,index} = this.props
        return (
            <TouchableNativeFeedback
                onPress={() => { directToPage(navigation, 'Detail', { courId: data.id }) }}
            >
                <View style={[styles.courseItem, index === 0 && styles.courseItemFirst]}>
                    <View style={styles.imgView}>
                        <Image
                            style={styles.imgView}
                            source={{ url: data.img }}
                        >
                        </Image>
                    </View>

                    <View style={styles.infoView}>
                        <Text
                            numberOfLines={2}
                            style={styles.courseName}
                        >
                            { data.course_name }
                        </Text>
                        <Text
                            style={styles.price}
                        >
                            {data.price==0?'免費':`$${data.price}.00`}
                        </Text>
                    </View>
                </View>

            </TouchableNativeFeedback>
        )
    }
}

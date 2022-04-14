/*
 * @Author: your name
 * @Date: 2021-08-27 15:18:43
 * @LastEditTime: 2021-08-27 17:59:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\demo\ios_app\components\RecomCourseList\CourseItem.js
 */
import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View ,Image} from 'react-native'
import { directToPage } from '../../utils/ext'


export default class CourseItem extends Component {
    render() {
        const {data,styles,navigation,index}=this.props
        return (
            <TouchableWithoutFeedback
                onPress= {()=>{directToPage(navigation,'Detail',{courId:data.id})}}
            >
                <View style={[styles.courseItem ,!index && styles.courseItemFirst]}>
                    <View style={styles.imgView}>
                        <Image
                            style={styles.imgView}
                            source={{url:data.course_img}}
                        />
                    </View>
                    <View style={styles.courseName}>
                        <Text
                            style={styles.courseNameText}
                        >
                            {data.course_name}
                        </Text>
                    </View>
                    <View style={styles.teacherInfo}>
                        <Image
                            style={styles.teacherImg}
                            source={{url:data.teacher_img}}
                        />
                        <Text
                            style={styles.teacherName}
                        >
                            {data.teacher_name}
                        </Text>
                    </View>
                    <View style={styles.price}>
                        <Text
                            style={styles.priceNum}
                        >
                            ${data.price}.00
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

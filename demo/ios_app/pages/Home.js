/*
 * @Author: your name
 * @Date: 2021-08-25 16:05:03
 * @LastEditTime: 2021-08-28 16:00:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\test\ios_app\pages\Home.js
 */
import React, { Component } from 'react'
import {  ScrollView, View } from 'react-native'
import { getCourseDatas } from '../models/myAxios'

import IndexSwiper from '../components/IndexSwiper'
import MainTitle from '../components/MainTitle'
import RecomCourseList from '../components/RecomCourseList'
import CourseList from '../components/CourseList'
import MyRefreshControl from '../components/MyRefreshControl' 
import { filterFieldData } from '../utils/ext'

export default class HomePage extends Component {
    state = {
        swiperData: [],
        fieldData: [],
        courseData: [],
        recomCourseData: [],
        isRefreshing: true
    }

    setCourseData() {
        getCourseDatas().then(response => {
            const data = response.data.result
            setTimeout(() => {
                this.setState({
                    swiperData: data.swipers,
                    fieldData: [{field_name:'推荐课程',field:''}].concat(data.fields),
                    courseData: data.courses,
                    recomCourseData: data.recomCourses,
                }, () => {
                    if (this.state.isRefreshing) {
                        this.setState({
                            isRefreshing: false
                        })
                    }
                })
            },1000)

        })
    }

    rederMainTitle(data, title) {
        if (data) {
            return <MainTitle title={data.field_name} />
        }
        return <MainTitle title={title} />
    }
    onPageRefresh=()=> {
        if (this.state.isRefreshing) {
            return;
        }

        this.setState({
            isRefreshing: true
        })

        this.setCourseData();
    }
  
    componentDidMount() {
        this.setCourseData()
    }
    render() {
        const { navigation } = this.props
        const { swiperData, fieldData, courseData, recomCourseData, isRefreshing } = this.state
        /*         const {swiperData}=this.state
                console.log(swiperData) */

        return (
            <View>
                <ScrollView
                    automaticallyAdjustContentInsets={false}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <MyRefreshControl 
                            isRefreshing={isRefreshing}
                            onPageRefresh={this.onPageRefresh}
                        />
                    }
                >
                    <IndexSwiper
                        swiperData={swiperData}
                        navigation={navigation}
                    />
                    {this.rederMainTitle(fieldData[0])}
                    <RecomCourseList
                        recomCourseData={recomCourseData}
                        navigation={navigation}
                    />
                    {this.rederMainTitle(fieldData[1])}
                    <CourseList
                        courseData={filterFieldData(courseData, '0', true)}
                        navigation={navigation}
                    />
                    {this.rederMainTitle(fieldData[2])}
                    <CourseList
                        courseData={filterFieldData(courseData, '1', true)}
                        navigation={navigation}
                    />
                    {this.rederMainTitle(fieldData[3])}
                    <CourseList
                        courseData={filterFieldData(courseData, '2', true)}
                        navigation={navigation}
                    />
                    {this.rederMainTitle(fieldData[4])}
                    <CourseList
                        courseData={filterFieldData(courseData, '3', true)}
                        navigation={navigation}
                    />

                </ScrollView>

            </View>
        )
    }
}

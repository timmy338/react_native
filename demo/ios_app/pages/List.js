/*
 * @Author: your name
 * @Date: 2021-08-26 15:42:08
 * @LastEditTime: 2021-08-28 16:54:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\demo\ios_app\pages\List.js
 */

import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import ListTab from '../components/ListTab'
import { getCourseFields, getCourses } from '../models/myAxios'
import commonStyles from '../styles/commonStyle'
import CourseList from '../components/CourseList'
import MyRefreshControl from '../components/MyRefreshControl'
import PageLoading from '../components/PageLoading'

export default class ListPage extends Component {
    state = {
        fieldData: [],
        courseData: {},
        curIdx: 0,
        curField: 'all',
        isRefreshing: false,
        pageLoadingShow:false
    }
    componentDidMount() {
        this.setCoursesFields()
        this.setCourses(this.state.curField)
    }
    setCoursesFields() {
        getCourseFields().then((response) => {
            const data = response.data.result

            this.setState({
                fieldData: [{ field_name: '全部課程', field: 'all' }].concat(data)
            })
            /* console.log(data) */
        })
    }
    onPageRefresh=()=> {
        const { curField, isRefreshing } = this.state;
        if (isRefreshing) {
            return;
        }

        this.setState({
            isRefreshing: true
        },()=>{
            this.setCourses(curField)
        })

        setTimeout(()=>{
            this.setState({
                isRefreshing:false
            })
        },1000)
    }
    setCourses(field) {
        this.setState({
            pageLoadingShow:true
        })
        getCourses(field).then((response) => {
            this.state.courseData[field] = response.data.result

            setTimeout(() => {
                this.setState({
                    courseData: this.state.courseData,
                    pageLoadingShow:false
                })
            }, 1000)
            /* console.log(data) */
        })
    }

    onTabClick = (field, index) => {
        this.setState({
            curIdx: index,
            curField: field,

        }, () => {
            const { courseData, curField } = this.state
            !courseData[curField] && this.setCourses(curField)
        })
    }


    render() {
        const {navigation}=this.props
        const { fieldData, curIdx, courseData, curField, isRefreshing,pageLoadingShow } = this.state
        return (
            <View style={commonStyles.container}>
                <ListTab
                    fieldData={fieldData}
                    curIdx={curIdx}
                    onTabClick={this.onTabClick}
                />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <MyRefreshControl 
                            isRefreshing={isRefreshing}
                            onPageRefresh={this.onPageRefresh}
                        />
                    }
                >
                    {
                        pageLoadingShow?
                        <PageLoading/>:
                        <CourseList
                            courseData={courseData[curField] || []}
                            navigation={navigation}
                        />
                    }

                </ScrollView>
            </View>
        )
    }
}

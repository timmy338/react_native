/*
 * @Author: your name
 * @Date: 2021-08-25 16:05:03
 * @LastEditTime: 2021-10-14 16:46:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\test\ios_app\pages\Home.js
 */
import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Text, TouchableWithoutFeedback, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { screenSize } from '../utils/tools'
import Drawer from 'react-native-drawer'
import StorageUtils from '../utils/storage'
import AniImage from '../components/AniImage'


import { getCourseDatas } from '../models/myAxios'
import IndexSwiper from '../components/IndexSwiper'
import MainTitle from '../components/MainTitle'
import RecomCourseList from '../components/RecomCourseList'
import CourseList from '../components/CourseList'
import MyRefreshControl from '../components/MyRefreshControl'
import { filterFieldData } from '../utils/ext'
import InformationService from '../components/InformationService'

export default class HomePage extends Component {
    state = {
        swiperData: [],
        fieldData: [],
        courseData: [],
        recomCourseData: [],
        drawerOpen: false,
        isRefreshing: true,
        userData: {}
    }

    setCourseData() {
        getCourseDatas().then(response => {
            const data = response.data.result
            setTimeout(() => {
                this.setState({
                    swiperData: data.swipers,
                    fieldData: [{ field_name: '推荐课程', field: '' }].concat(data.fields),
                    courseData: data.courses,
                    recomCourseData: data.recomCourses,
                }, () => {
                    if (this.state.isRefreshing) {
                        this.setState({
                            isRefreshing: false
                        })
                    }
                })
            }, 1000)

        })
    }
    openDrawer = () => {
        this._drawer.open()
    }//左邊個人信息抽屜
    rederMainTitle(data, title) {
        if (data) {
            return <MainTitle title={data.field_name} />
        }
        return <MainTitle title={title} />
    }
    onPageRefresh = () => {
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
        StorageUtils.get('user').then((value) => {
            if (value && value !== '') {
                const jsonValue = JSON.parse(value)
                this.setState({
                    userData: jsonValue
                })
            }
        })

    }
    render() {
        const { navigation } = this.props
        const { swiperData, fieldData, courseData, recomCourseData, isRefreshing, drawerOpen, userData } = this.state
        /*         const {swiperData}=this.state
                console.log(swiperData) */

        return (
            <View style={{ flex: 1 }}>
                <Drawer
                    ref={(ref) => this._drawer = ref}
                    type='displace'
                    content={<InformationService data={userData} navigation={navigation} />}
                    tapToClose={true}
                    onOpen={() => {
                        this.setState({ drawerOpen: true });
                    }}
                    onClose={() => {
                        this.setState({ drawerOpen: false });
                    }}
                    panOpenMask={0.9} //拉开抽屉的响应区域
                    openDrawerOffset={0.2} // 20% gap on the right side of drawer
                    panCloseMask={0.2}
                    negotiatePan={true}
                    styles={drawerStyles}
                    tweenDuration={200}
                    tweenHandler={(ratio) => ({ main: { opacity: (2 - ratio) / 2 } })}
                >
                    <View>
                        <View style={styles.topLogo}>
                            <View style={{ width: 37 }}>
                                {
                                    !drawerOpen &&
                                    <TouchableWithoutFeedback
                                        onPress={() => this.openDrawer()}
                                    >
                                        <View style={{ width: 37 }}>
                                            <AniImage
                                                styles={{ width: 40, height: 40, borderRadius: 20 }}
                                                url={'http://4e422651q3.qicp.vip' + userData.faceImage}
                                            />
                                        </View>

                                    </TouchableWithoutFeedback>
                                }
                            </View>


                            <Ionicons name={"logo-snapchat"} size={36} color={'#4C9EEB'} />
                            <Ionicons name={"bonfire-outline"} size={30} color={'#4C9EEB'} />
                        </View>
                        {/*      <ScrollView
                            automaticallyAdjustContentInsets={false}
                            showsVerticalScrollIndicator={false}
                            refreshControl={
                                <MyRefreshControl
                                    isRefreshing={isRefreshing}
                                    onPageRefresh={this.onPageRefresh}
                                />
                            }
                        > */}
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

                        {/*  </ScrollView> */}
                    </View>
                </Drawer>




            </View>
        )
    }
}
const styles = StyleSheet.create({
    topLogo: {
        paddingHorizontal: 20,
        paddingTop: 40,
        width: screenSize.width,
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})
const drawerStyles = {
    drawer: {
        shadowColor: '#000000',
        shadowOpacity: 0.4,
        shadowRadius: 3
    },
    mainOverlay: {
        backgroundColor: 'black',
        opacity: 0,
    },
    main: { paddingLeft: 0 },
}
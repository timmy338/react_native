/*
 * @Author: your name
 * @Date: 2021-08-26 15:42:08
 * @LastEditTime: 2021-10-16 16:00:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\demo\ios_app\pages\List.js
 */

import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { screenSize } from '../utils/tools'
import AniImage from '../components/AniImage'
import Drawer from 'react-native-drawer'
import InformationService from '../components/InformationService'
import Ionicons from 'react-native-vector-icons/Ionicons'
import StorageUtils from '../utils/storage'
import TopSearch from '../components/TopSearch'
import CameraView from '../components/Camera'

import { getCourseFields, getCourses } from '../models/myAxios'
import commonStyles from '../styles/commonStyle'
import CourseList from '../components/CourseList'
import MyRefreshControl from '../components/MyRefreshControl'
import PageLoading from '../components/PageLoading'

export default class ListPage extends Component {
    state = {
        isRefreshing: false,
        pageLoadingShow: false,
        userData: {},
        drawerOpen: false,
        cameraShow: false,
    }

    cameraControl = () => {
        console.log('click')
        this.setState({ cameraShow: !this.state.cameraShow })
    }
    componentDidMount() {
        StorageUtils.get('user').then((value) => {
            if (value && value !== '') {
                const jsonValue = JSON.parse(value)
                this.setState({
                    userData: jsonValue
                })
            }
        })
    }
    openDrawer = () => {
        this._drawer.open()
    }//左邊個人信息抽屜



    render() {
        const { navigation } = this.props
        const { cameraShow, userData, drawerOpen, setType, type } = this.state
        return (
            <View style={commonStyles.container}>
                {
                    cameraShow &&
                    <View style={{
                        width: screenSize.width,
                        height: screenSize.height,
                        position:'absolute',
                        zIndex:119999
                    }}>
                        <CameraView
                            cameraControl={this.cameraControl}
                        />
                    </View>

                }

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
                        <Text style={{ fontWeight: '600', fontSize: 18 }}>私人訊息</Text>
                        <Ionicons name={"settings-outline"} size={26} color={'#4C9EEB'} />

                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        width: screenSize.width,
                        paddingHorizontal: 10,
                        height: 70,
                        backgroundColor: 'white',
                        borderBottomColor: '#D0D6DD',
                        borderBottomWidth: 1
                    }}>
                        <TopSearch />
                        <TouchableOpacity
                            onPress={() => { this.cameraControl() }}
                        >
                            <Ionicons name={"scan-circle-outline"} size={38} color={'#4C9EEB'} />
                        </TouchableOpacity>

                    </View>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >


                    </ScrollView>
                </Drawer >

            </View >
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
        alignItems: 'center',
        backgroundColor: 'white'
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
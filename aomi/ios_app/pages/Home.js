/*
 * @Author: your name
 * @Date: 2021-08-29 11:31:50
 * @LastEditTime: 2021-09-02 17:39:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edi
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\pages\Home.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

/* ---------引入components--------- */
import TopSearch from '../components/Home/TopSearch'
import HomeSwiper from '../components/Home/HomeSwiper'
import HomeMiddleTabs from '../components/Home/HomeMiddleTabs'
import HomeMiddleLists from '../components/Home/HomeMiddleLists'
import List from '../components/Home/HomeMiddleLists/List'
import HomeBottomAdvertise from '../components/Home/HomeBottomAdvertise'
import HomeRecom from '../components/Home/HomeRecom'
import MyRefreshControl from '../components/MyRefreshControl'
/* ---------公用styles--------- */
import commonStyles from '../styles/commonStyle'

/* ---------接口--------- */
import { getHomeSwiper, getMiddleLists, getMiddleTabs, getAdvertise, getBottomSwiper, getRecom } from '../models/myAxios'



export default class HomePage extends Component {
    state = {
        homeSwiperData: [],
        homeMiddleTabsData: [],
        homeMiddleListTabData: [],
        homeMiddleListsData: [],
        homeBottomAdvertise: [],
        homeBottomSwiperData: [],
        homeBottomRecom: [],
        bgColor: '',
        jumpAddress: '',
        curIdx: 0,
        isRefreshing: true,
        nowRecomPage: 1,
    }

    setHomeSwiper() {
        getHomeSwiper().then((res) => {
            /* console.log(res.data.detailMsg) */
            this.setState({ homeSwiperData: res.data.detailMsg })
        })
    }

    setMiddleTabs() {
        getMiddleTabs().then((res) => {
            /* console.log(res.data.detailMsg) */
            this.setState({ homeMiddleTabsData: res.data.detailMsg })

        })
    }

    setMiddleLists() {
        getMiddleLists().then((res) => {
            /* console.log(res.data) */
            this.setState({ homeMiddleListTabData: res.data.detailMsg })
        })
    }
    setMiddleListData(index) {
        getMiddleLists().then((res) => {
            /* console.log(res.data.detailMsg[index].tabThemeDetailVos) */
            this.setState({ homeMiddleListsData: res.data.detailMsg[index].tabThemeDetailVos, bgColor: res.data.detailMsg[index].backGroundColor, jumpAddress: res.data.detailMsg[index].jumpAddress })

        })
    }

    setAdvertise() {
        getAdvertise().then((res) => {
            /* console.log('start')
            console.log(res.data.detailMsg)  */
            this.setState({ homeBottomAdvertise: res.data.detailMsg })
        })
    }

    setBottomSwiper() {
        getBottomSwiper().then((res) => {
            /* console.log(res.data)  */
            this.setState({ homeBottomSwiperData: res.data.detailMsg })
        })
    }
    setBottomRecom() {
        const { nowRecomPage } = this.state
        getRecom(nowRecomPage).then((res) => {
            /* console.log(res.data)  */
            this.setState({ homeBottomRecom: res.data.detailMsg.groupList })
        })
    }
    onTabClick = (index) => {
        this.setState({
            curIdx: index,
            /*      curField: field, */

        }, () => {
            const { curIdx } = this.state
            this.setMiddleListData(curIdx)
        })
    }

    onPageRefresh = () => {
        if (this.state.isRefreshing) {
            return;
        }

        this.setState({
            isRefreshing: true
        })

        this.getAllData()
    }
    getAllData() {
        setTimeout(() => {
            this.setHomeSwiper()
            this.setMiddleTabs()
            this.setMiddleLists()
            this.setMiddleListData(this.state.curIdx)
            this.setAdvertise()
            this.setBottomSwiper()
            this.setBottomRecom()
            if (this.state.isRefreshing) {
                this.setState({
                    isRefreshing: false
                })
            }
        }, 1000)

    }
    addRecomData() {
        const { nowRecomPage, homeBottomRecom } = this.state
        getRecom(nowRecomPage).then((res) => {
            /* console.log(res.data)  */
            newRecomData = [...homeBottomRecom, ...res.data.detailMsg.groupList]
            /* console.log('get')
            console.log(newRecomData) */
            this.setState({ homeBottomRecom: newRecomData })
        })
    }

    componentDidMount() {
        this.getAllData()
    }
    render() {
        const { homeSwiperData, homeMiddleTabsData, homeMiddleListTabData, curIdx, homeMiddleListsData, bgColor, jumpAddress, homeBottomAdvertise, homeBottomSwiperData, homeBottomRecom, isRefreshing } = this.state
        const { navigation } = this.props
        var _scrollToBottomY
        return (
            <View style={{ backgroundColor: '#FF3159' }}>
                <TopSearch />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    alwaysBounceVertical={false}
                    vertical={true}
                    onMomentumScrollEnd={(event) => {
                        let { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
                        let [offsetY, visibleH, contentH] = [contentOffset.y, layoutMeasurement.height, contentSize.height];
                        /* console.log(event.nativeEvent.contentOffset.y,contentH-visibleH -100) */
                        //距离底部100距离
                        //滑动距离     scrollView contentSize高度     scrollView高度
                        if (offsetY >= contentH - visibleH - 200) {
                            this.setState({ nowRecomPage: this.state.nowRecomPage++ }, this.addRecomData())
                        }
                    }}
                    /* onMomentumScrollEnd={this.checkEnd} */
                    refreshControl={
                        <MyRefreshControl
                            isRefreshing={isRefreshing}
                            onPageRefresh={this.onPageRefresh}
                        />
                    }
                >
                    <HomeSwiper
                        swiperData={homeSwiperData}
                        navigation={navigation}
                    />
                    <HomeMiddleTabs
                        tabData={homeMiddleTabsData}
                        navigation={navigation}
                    />
                    <HomeMiddleLists
                        listData={homeMiddleListTabData}
                        curIdx={curIdx}
                        onTabClick={this.onTabClick}
                    />
                    <List
                        recomData={homeMiddleListsData}
                        curIdx={curIdx}
                        bgColor={bgColor}
                        jumpAddress={jumpAddress}
                        navigation={navigation}
                    />
                    <HomeBottomAdvertise
                        advertiseData={homeBottomAdvertise}
                        navigation={navigation}
                    />
                    <View style={{ backgroundColor: 'white', paddingTop: 10 }}>
                        <HomeSwiper
                            swiperData={homeBottomSwiperData}
                            navigation={navigation}
                        />
                    </View>
                    <HomeRecom
                        recomData={homeBottomRecom}
                        navigation={navigation}
                    />
                </ScrollView>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    mainTopMargin: {
        marginTop: 20
    },
})
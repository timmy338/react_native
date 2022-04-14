/*
 * @Author: your name
 * @Date: 2021-08-29 11:31:50
 * @LastEditTime: 2021-09-11 13:18:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edi
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\pages\Home.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

/* ---------引入components--------- */
import TopSearch from '../components/TakeOut/TopSearch'
import TopSwiper from '../components/IndexSwiper'
import RecomSwiper from '../components/TakeOut/RecomSwiper'
import RankShop from '../components/TakeOut/RankShop'
import HomeMiddleTabs from '../components/Home/HomeMiddleTabs'
import HomeBottomAdvertise from '../components/Home/HomeBottomAdvertise'
import Recom from '../components/TakeOut/nearbyShop/Recom'
import Top from '../components/TakeOut/nearbyShop/TopList'

import MyRefreshControl from '../components/MyRefreshControl'
/* ---------公用styles--------- */
import commonStyles from '../styles/commonStyle'

/* ---------接口--------- */
import { getAdvertise } from '../models/myAxios'
import { getTopSwiper, getTopTabs, getRankShop, getRecomSwiper,getBottomShop } from '../models/takeOutAxios'


export default class TakeOutPage extends Component {
    state = {
        topSwiperData: [],
        topTabsData: [],
        middleRankData: [],

        bottomRecomSwiperData: [],

        homeBottomAdvertise: [],
        bottomRecomSwiperData: [],
        bottomRecomShopData: [],
        bgColor: '',
        jumpAddress: '',
        curIdx: 0,
        isRefreshing: true,
        nowRecomPage: 0,
    }

    setHomeSwiper() {
        getTopSwiper().then((res) => {
            /* console.log(res.data.detailMsg) */
            this.setState({ topSwiperData: res.data.detailMsg })
        })
    }

    setTopTabs() {
        getTopTabs().then((res) => {
            /* console.log(res.data.detailMsg) */
            this.setState({ topTabsData: res.data.detailMsg })

        })
    }

    setMiddleRank() {
        getRankShop().then((res) => {
            this.setState({ middleRankData: res.data.detailMsg.voList })
        })
    }

    setBottomRecomSwiper() {
        getRecomSwiper().then((res) => {
            /* console.log(res.data.detailMsg) */
            this.setState({ bottomRecomSwiperData: res.data.detailMsg })
        })
    }

    setAdvertise() {
        getAdvertise().then((res) => {
            /* console.log('start')
            console.log(res.data.detailMsg)  */
            this.setState({ homeBottomAdvertise: res.data.detailMsg })
        })
    }

    setBottomRecom() {
        const { nowRecomPage } = this.state
        getBottomShop(nowRecomPage).then((res) => {
            /* console.log(res.data)  */
            this.setState({ bottomRecomShopData: res.data.detailMsg.takeOutStoreInfoList })
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
            this.setTopTabs()
            this.setMiddleRank()
            this.setBottomRecomSwiper()

            this.setAdvertise()
            this.setBottomRecom()
            if (this.state.isRefreshing) {
                this.setState({
                    isRefreshing: false
                })
            }
        }, 1000)

    }
    addRecomData() {
        const { nowRecomPage, bottomRecomShopData } = this.state
        getBottomShop(nowRecomPage).then((res) => {
            /* console.log(res.data)  */
            newRecomData = [...bottomRecomShopData, ...res.data.detailMsg.takeOutStoreInfoList]
            /* console.log('get')
            console.log(newRecomData) */
            this.setState({ bottomRecomShopData: newRecomData })
        })
    }

    componentDidMount() {
        this.getAllData()
    }
    render() {
        const { topSwiperData, topTabsData, middleRankData, curIdx, bgColor, jumpAddress, homeBottomAdvertise, bottomRecomSwiperData, bottomRecomShopData, isRefreshing } = this.state
        const { navigation } = this.props
        var _scrollToBottomY
        return (
            <View style={{ backgroundColor: '#F4F4F4' }}>
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
                        if (offsetY >= contentH - visibleH - 400) {
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
                    <TopSwiper
                        swiperData={topSwiperData}
                        navigation={navigation}
                    />
                    <HomeMiddleTabs
                        tabData={topTabsData}
                        navigation={navigation}
                    />

                    <RankShop
                        data={middleRankData}
                        navigation={navigation}
                    />

                    <HomeBottomAdvertise
                        advertiseData={homeBottomAdvertise}
                        navigation={navigation}
                    />
                    <View style={{ paddingTop: 10}}>
                        <RecomSwiper
                            swiperData={bottomRecomSwiperData}
                            navigation={navigation}
                        />
                    </View>
                    
                    <Top/>
                    
                    <Recom
                        recomData={bottomRecomShopData}
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
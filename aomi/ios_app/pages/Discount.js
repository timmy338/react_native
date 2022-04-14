/*
 * @Author: your name
 * @Date: 2021-08-29 11:31:50
 * @LastEditTime: 2021-09-07 16:00:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edi
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\pages\Home.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableWithoutFeedback, Image } from 'react-native'
import { screenSize } from '../utils/tools'
import { directToPage } from '../utils/ext'
/* ---------引入components--------- */
import TopSearch from '../components/Discount/TopSearch'
import HomeSwiper from '../components/Home/HomeSwiper'
import HomeTopTabs from '../components/Home/HomeMiddleTabs'
import HomeMiddleLists from '../components/Home/HomeMiddleLists'
import List from '../components/Home/HomeMiddleLists/List'
import ListTab from '../components/ListTab'


import Recom from '../components/Discount/Recom'
import MyRefreshControl from '../components/MyRefreshControl'
/* ---------公用styles--------- */
import commonStyles from '../styles/commonStyle'

/* ---------接口--------- */
import { getRecom } from '../models/myAxios'
import { getTopTab, getMiddleImg, getMiddleLists, getBottomSwiper, getBottomRecom, getBottomNew } from '../models/discountAxios'


export default class DiscountPage extends Component {
    state = {
        topListTabsData: [],
        middleImgData: {},
        middleListTabData: [],
        middleListsData: [],
        bottomSwiperData: [],
        bottomTabs: [{ value: '推薦優惠' }, { value: '最新優惠' }],


        showBottomData: [],
        bgColor: '',
        jumpAddress: '',
        curIdx: 0,
        bottomCurIdx: 0,
        isRefreshing: true,
        nowRecomPage: 1,
        isRecom:true
    }

    setTopTabs() {
        getTopTab().then((res) => {
            this.setState({ topListTabsData: res.data.detailMsg })
        })
    }

    setMiddleImg() {
        getMiddleImg().then((res) => {
            this.setState({ middleImgData: res.data.detailMsg[0] })
        })
    }

    setMiddleLists() {
        getMiddleLists().then((res) => {
            /* console.log(res.data) */
            this.setState({ middleListTabData: res.data.detailMsg })
        })
    }
    setMiddleListData(index) {
        getMiddleLists().then((res) => {
            /* console.log(res.data.detailMsg[index].tabThemeDetailVos) */
            this.setState({ middleListsData: res.data.detailMsg[index].tabThemeDetailVos, bgColor: 'FFFFFF', jumpAddress: res.data.detailMsg[index].jumpAddress })

        })
    }

    setBottomSwiper() {
        getBottomSwiper().then((res) => {
            /* console.log(res.data)  */
            this.setState({ bottomSwiperData: res.data.detailMsg })
        })
    }


    setBottomRecom() {
        const { nowRecomPage } = this.state
        getBottomRecom(nowRecomPage).then((res) => {
            /* console.log(res.data.detailMsg.groupList)  */
            this.setState({ showBottomData: res.data.detailMsg.groupList })
        })
    }
    setBottomNew() {
        const { nowRecomPage } = this.state
        getBottomNew(nowRecomPage).then((res) => {
            /* console.log(res.data) */
            this.setState({ showBottomData: res.data.detailMsg.groupList })
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

    onBottomTabClick = (index) => {
        this.setState({
            bottomCurIdx: index,
        }, () => {
            const {bottomCurIdx}=this.state
            if(bottomCurIdx==0){
                this.setBottomRecom()
            }
            else{
                this.setBottomNew()
            }
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
            this.setTopTabs()
            this.setMiddleImg()
            this.setMiddleLists()
            this.setMiddleListData(this.state.curIdx)
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
        const { nowRecomPage, showBottomData,bottomCurIdx } = this.state
        if(bottomCurIdx==0){
            getBottomRecom(nowRecomPage).then((res) => {
                /* console.log(res.data)  */
                newRecomData = [...showBottomData, ...res.data.detailMsg.groupList]
                /* console.log('get')
                console.log(newRecomData) */
                this.setState({ showBottomData: newRecomData })
            })
        }
        else{
            getBottomNew(nowRecomPage).then((res) => {
                /* console.log(res.data)  */
                newRecomData = [...showBottomData, ...res.data.detailMsg.groupList]
                /* console.log('get')
                console.log(newRecomData) */
                this.setState({ showBottomData: newRecomData })
            })
        }
    }

    componentDidMount() {
        this.getAllData()
    }
    render() {
        const { topListTabsData, middleImgData, middleListTabData, curIdx, middleListsData, bgColor, jumpAddress, bottomSwiperData, showBottomData, isRefreshing, bottomTabs, bottomCurIdx } = this.state
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
                    <HomeTopTabs
                        tabData={topListTabsData}
                        navigation={navigation}
                    />

                    {
                        middleImgData &&
                        <View style={{ padding: 10, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableWithoutFeedback
                                onPress={() => { directToPage(navigation, 'Detail', { toUrl: middleImgData.toAddress }) }}
                            >
                                <Image
                                    resizeMode={'strech'}
                                    source={{ url: middleImgData.img }}
                                    style={{ width: screenSize.width - 30, height: 100, borderRadius: 7 }}
                                />
                            </TouchableWithoutFeedback>
                        </View>

                    }

                    <HomeMiddleLists
                        listData={middleListTabData}
                        curIdx={curIdx}
                        onTabClick={this.onTabClick}
                    />
                    <List
                        recomData={middleListsData}
                        curIdx={curIdx}
                        bgColor={bgColor}
                        jumpAddress={jumpAddress}
                        navigation={navigation}
                    />

                    <View style={{ backgroundColor: 'white' }}>
                        <HomeSwiper
                            swiperData={bottomSwiperData}
                            navigation={navigation}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white' }}>
                        <View style={styles.shadow}>
                            <ListTab
                                data={bottomTabs}
                                curIdx={bottomCurIdx}
                                onTabClick={this.onBottomTabClick}
                            />
                            <Recom
                                recomData={showBottomData}
                                navigation={navigation}
                            />
                        </View>

                    </View>


                </ScrollView>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    mainTopMargin: {
        marginTop: 20
    },
    shadow: {
        width: screenSize.width - 30,
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 0.10,
        backgroundColor: '#FFFFFF',
        borderRadius: 7
    }
})
/*
 * @Author: your name
 * @Date: 2021-08-29 11:31:50
 * @LastEditTime: 2021-09-06 14:45:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\pages\List.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import ListTab from '../components/ListTab'
import RecomClick from '../components/Home/RecomClick'


import { getRecomId, getRecomDetail } from '../models/myAxios'
/* ---------公用styles--------- */
import commonStyles from '../styles/commonStyle'

export default class homeRecomPage extends Component {
    state = {
        idData: [],
        pageData: [],
        nowPageData: {},
        curIdx: 0,
    }
    setDetailId() {
        const { toUrl } = this.props.route.params
        /* console.log(toUrl) */
        getRecomId(toUrl).then((res) => {
            /* console.log(res.data) */
            this.setState({ idData: res.data.detailMsg }, () => { this.setDetail() })
        })
    }
    async setDetail() {
        const { idData, pageData } = this.state
        var newPageData=[]
        for (var i = 0; i < idData.length; i++) {
            await getRecomDetail(idData[i].id).then((res) => {
                newPageData = [...newPageData, res.data.detailMsg]                
                this.setState({ pageData: newPageData },()=>this.onTabClick(0))
            })
        }
    }

    onTabClick = (index) => {
        const { pageData } = this.state
        this.setState({
            curIdx: index,
            nowPageData:pageData[index]
        })
    }

    componentDidMount() {
        this.setDetailId()
        
    }
    render() {
        const { route, navigation } = this.props
        const { toUrl,activityTag } = route.params
        const { idData, pageData, curIdx ,nowPageData} = this.state

        return (
            <View>
                <ListTab
                    data={idData}
                    curIdx={curIdx}
                    onTabClick={this.onTabClick}
                />
                <RecomClick
                    detailData={nowPageData}
                    navigation={navigation}
                    activityTag={activityTag}
                />
                
            </View>
        )
    }
}
const styles = StyleSheet.create({

})
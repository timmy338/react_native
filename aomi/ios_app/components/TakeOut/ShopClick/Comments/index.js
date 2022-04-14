/*
 * @Author: your name
 * @Date: 2021-09-11 14:13:23
 * @LastEditTime: 2021-09-29 17:51:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\TakeOut\ShopClick\Intro\Comments\index.js
 */
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { getComments } from '../../../../models/takeOutAxios'
import Assess from './Assess'
import BottomComment from './BottomComment'
export default class Comments extends Component {
    state = {
        data: {},
        nowPage: 1
    }
    setData(id, page) {
        getComments(id, page).then((res) => {
            this.setState({ data: res.data.detailMsg },()=>this.addCommentData())
        })
    }
    addCommentData() {
        console.log('update')
        const { nowPage, data } = this.state
        var page=nowPage+1
        this.setState({ nowPage: page }, () => {
            getComments(this.props.shopId, nowPage).then((res) => {
                newData = [...data, ...res.data.detailMsg]
                this.setState({ data: newData })
            })
        })

    }

    componentDidMount() {
        const { nowPage } = this.state
        this.setData(this.props.shopId, nowPage)
    }
    render() {
        const { data } = this.state
        return (
            <View style={{ marginTop: 50 }}>
                <Assess></Assess>
                <BottomComment
                    listData={data.list}
                />
            </View>
        )
    }
}

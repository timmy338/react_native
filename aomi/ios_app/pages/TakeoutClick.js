/*
 * @Author: your name
 * @Date: 2021-09-09 16:19:53
 * @LastEditTime: 2021-09-29 17:02:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\pages\TakeoutClick.js
 */
import React, { Component } from 'react'
import { Text, View } from 'react-native'


import { getClick,getComments } from '../models/takeOutAxios'
import { screenSize } from '../utils/tools'
import App from './test'
import Trolley from '../components/TakeOut/ShopClick/Foods/Trolley'

export default class TakeoutClickPage extends Component {
    state = {
        data: {},
        clickHeight: 0,
        activeIndex: 0,
        pay: 0,
        trolleyData: [],
        countAllWare: 0,
        isFirstOpenTrolley: false,
        isVisible: false,
        commentData:{}
    }
    countAllWareLength() {
        const { trolleyData } = this.state
        var count = 0
        trolleyData.map((item) => {
            count += item.length
        })
        this.setState({ countAllWare: count })
    }
    addWare = (ware) => {
        const { trolleyData, pay } = this.state

        var had = trolleyData.find(item => item.name == ware.name)
        if (had == undefined) {
            var newTrolleyData =trolleyData
            newTrolleyData.push(ware)
        }
        else{
            var newTrolleyData = trolleyData.filter(item => item.name != ware.name)
            var newWare = trolleyData.filter(item => item.name == ware.name)
            newWare[0].length++
            newTrolleyData.push(newWare[0])
        }

        var getPay = pay
        getPay += ware.price
        this.setState({ trolleyData: newTrolleyData, pay: getPay }, () => this.countAllWareLength())
    }
    showItem = () => {
        this.setState({
            isVisible: !this.state.isVisible,
            isFirstOpenTrolley: true
        }, () => {

        })
    }
    changeClickHeight = (height, scope, handle) => {
        this.setState({ clickHeight: height })
        if (handle === 1) {
            /* console.log(this.state.clickHeight) */
            this.changeActive(scope)
        }
        else {
            this.setState({ activeIndex: scope })
        }

    }

    changeActive = (scope) => {
        const { clickHeight } = this.state
        if (clickHeight <= 168) {
            this.setState({ activeIndex: 0 })
        }
        else if(clickHeight >=scope[scope.length-1].length * 90 + 168 +(scope.length-1)* 42)
        {
            this.setState({ activeIndex: scope.length-1 })
        }
        else {
            for (var i = 0; i < scope.length - 1; i++) {
                /* console.log('---------')
                console.log(scope[i].length * 90 + 168 + i * 42, scope[i + 1].length * 90 + 168 + (i + 1) * 42, clickHeight) */
                if (scope[i].length * 90 + 168 + i * 42 <= clickHeight && scope[i + 1].length * 90 + 168 + i * 42 >= clickHeight) {
                    this.setState({ activeIndex: i })
                    /* console.log(i)
                    console.log('-----------------------') */
                    break;
                }
                
            }
        }

    }

    setData() {
        const { toUrl } = this.props.route.params
        /* toUrl = "https://aomiapi.aomipay.com/service/interface/v6/TakeoutGetStoreInfo.do?storeId=20313&userId=8530000001&lon=113.560737&lat=22.189237" */
        getClick(toUrl).then((res) => {
            /* console.log(res.data)  */
            this.setState({ data: res.data.detailMsg }/* , () => { this.setDetail() } */)
        })
    }


    componentDidMount() {
        this.setData()
    }



    render() {
        /*  console.log(this.props.route.params) */
        const { data, clickHeight, activeIndex, pay, trolleyData, countAllWare } = this.state
        const { navigation } = this.props
        /* const Tab = createMaterialTopTabNavigator(); */

        return (
            <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
                <App data={data} clickHeight={clickHeight} changeClickHeight={this.changeClickHeight} activeIndex={activeIndex} navigation={navigation} addWare={this.addWare} commentId={this.props.route.params.id}/>

                <Trolley
                    data={data}
                    pay={pay}
                    trolleyData={trolleyData}
                    isVisible={this.state.isVisible}
                    isFirstOpenTrolley={this.state.isFirstOpenTrolley}
                    setIsVisible={this.showItem}
                    countAllWare={countAllWare}
                />



            </View >

        )
    }
}

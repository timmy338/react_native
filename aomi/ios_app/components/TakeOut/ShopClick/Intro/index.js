/*
 * @Author: your name
 * @Date: 2021-09-10 15:13:27
 * @LastEditTime: 2021-09-29 17:57:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\TakeOut\TakeClick\Intro\index.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import { screenSize } from '../../../../utils/tools'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Activity from './Activity'

import Ticket from './Ticket'

export default class Intro extends Component {

    render() {
        const { data } = this.props
        /* console.log(data) */
        return (
            <View style={{ padding: 15}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text
                        style={styles.shopName}
                        numberOfLines={1}
                        ellipsizeMode={'tail'}
                    >
                        {data.name}
                    </Text>
                    <Image
                        style={{ width: 50, height: 50, borderRadius: 7 }}
                        source={{ url: data.picUrl }}
                    />
                </View>

                <Text
                    style={styles.notice}
                    numberOfLines={1}
                    ellipsizeMode={'tail'}>
                    公告 : {data.notice}
                </Text>
                <ScrollView
                    style={{ flexDirection: 'row', marginTop: 10 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                >
                    {
                        data.redpacket &&
                        data.redpacket.map((item, index) => {
                            return (
                                <Ticket
                                    data={item}
                                    key={index}
                                />
                            )
                        })

                    }
                </ScrollView>

                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            {
                                data.activityList &&

                                data.activityList.map((item, index) => {
                                    return (
                                        <Activity
                                            data={item}
                                            key={index}
                                        />
                                    )
                                })
                            }
                        </View>
                    </View>
                </ScrollView>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    shopName: {
        marginTop: 25,
        fontSize: 18,
        fontWeight: '500',
        maxWidth: screenSize.width - 90
    },
    notice: {
        color: '#A7A7A7',
        marginTop: 10,
        fontSize: 12,
        maxWidth: screenSize.width - 40
    }
})

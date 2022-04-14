/*
 * @Author: your name
 * @Date: 2021-09-05 16:04:53
 * @LastEditTime: 2021-09-06 14:32:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\Home\RecomClick\Alert.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export default class Alert extends Component {
    state = {
        click: false
    }
    clickMore() {
        this.setState({ click: true })
    }
    render() {
        const { data } = this.props
        return (
            <View style={styles.topView}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: '500' }}> 購物使用須知 </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontWeight: '200', color: '#363636' }}> 如何使用到店優惠 </Text>
                        <Ionicons name={'alert-circle-outline'} size={16} color={'#D7D7D7'} />
                    </View>

                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <FontAwesome name={'circle'} size={7} color={'#D7D7D7'} />
                    <Text style={styles.textTitle}> 預約要求 :</Text>
                </View>

                <Text style={styles.text}>{data.require}</Text>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <FontAwesome name={'circle'} size={7} color={'#D7D7D7'} />
                    <Text style={styles.textTitle}> 可用時段 :</Text>
                </View>



                <Text style={styles.text}>{data.availablePeriod}</Text>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <FontAwesome name={'circle'} size={7} color={'#D7D7D7'} />
                    <Text style={styles.textTitle}> 有效日期 :</Text>
                </View>

                <Text style={styles.text}>請在商戶營業時間消費,{data.groupVisibleBeginTime}至{data.groupVisibleEndTime}</Text>

                {
                    !this.state.click &&
                    <TouchableWithoutFeedback
                        onPress={() => { this.clickMore() }}
                    >
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                            <Text>查看更多信息 </Text>
                            <FontAwesome name={'caret-down'} size={17} color={'#D7D7D7'} />
                        </View>
                    </TouchableWithoutFeedback>
                }
                {
                    this.state.click &&
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <FontAwesome name={'circle'} size={7} color={'#D7D7D7'} />
                            <Text style={styles.textTitle}> 不可用日期 :</Text>
                        </View>

                        <Text style={styles.text}>{data.unUseDate}</Text>


                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <FontAwesome name={'circle'} size={7} color={'#D7D7D7'} />
                            <Text style={styles.textTitle}> 退款須知 :</Text>
                        </View>

                        <Text style={styles.text}>隨時退、過期退 :</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <FontAwesome name={'circle'} size={7} color={'#D7D7D7'} />
                            <Text style={styles.textTitle}> 使用限制 :</Text>
                        </View>

                        <Text style={styles.text}>{data.useRestrict}</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <FontAwesome name={'circle'} size={7} color={'#D7D7D7'} />
                            <Text style={styles.textTitle}> 溫馨提示 :</Text>
                        </View>

                        <Text style={styles.text}>{data.prompt}</Text>
                    </View>

                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    topView: {
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 6,
    },
    text: {
        marginLeft: 10,
        marginTop: 7,
        fontSize: 12,
        marginBottom: 5
    },
    textTitle: {
        color: '#9D9D9D',
        fontSize: 12,
        lineHeight: 14
    }
})

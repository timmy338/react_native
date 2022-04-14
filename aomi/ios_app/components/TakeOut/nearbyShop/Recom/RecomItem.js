/*
 * @Author: your name
 * @Date: 2021-08-31 17:52:50
 * @LastEditTime: 2021-09-29 16:54:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\Home\HomeRecom\RecomItem.js
 */
import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native'
import { directToPage } from '../../../../utils/ext'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export default class RecomItem extends Component {
    render() {
        const { data, navigation, styles } = this.props
        data.activityList = data.activityList.splice(0, 2)
        return (
            <TouchableWithoutFeedback
                onPress={() => { directToPage(navigation, 'TakeoutClick', { toUrl: 'https://aomiapi.aomipay.com/service/interface/v6/TakeoutGetStoreInfo.do?storeId='+data.id+'&userId=8530000001&lon=113.560737&lat=22.189237',id:data.id}) }}
            >
                <View style={[styles.item, { flexDirection: 'row' }]}>
                    <Image
                        style={styles.img}
                        source={{ url: data.picUrl }}
                    >
                    </Image>
                    <View style={styles.textView}>
                        <Text
                            style={styles.title}
                            numberOfLines={1}
                            ellipsizeMode={'tail'}
                        >{data.name}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginTop:5 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <FontAwesome name={'star'} size={10} color={'#FF8A00'} />
                                <Text style={styles.score}>{data.totalScore} </Text>
                                <Text style={{ color: '#7C7C7C', fontSize: 10 }}>月售{data.soldOut}</Text>
                            </View>
                            {
                                data.riderCornerTips != null &&
                                <View style={styles.aomiCorner}>
                                    <Text style={{ color: 'white', fontSize: 10 }}>{data.riderCornerTips}</Text>
                                </View>
                            }
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 250,marginTop:5 }}>
                            <View style={[styles.priceView]}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.beginPrice}>起送${data.defaultBeginSendAmount} </Text>
                                    <Text style={styles.riderPrice}>配送{data.amountOfSendVal} </Text>
                                </View>

                            </View>

                            <View  >
                                <Text style={{ fontSize: 10, color: "#868686" }}>
                                    {data.maxAmountOfSend}分鐘 {data.distance}
                                </Text>
                            </View>
                        </View>

                        {
                            data.signBoards!=[] &&
                            <View style={{ flexDirection: 'row', width: 100 ,alignItems:'center'}}>
                                {
                                    data.signBoards.map((item, index) => {
                                        return (
                                            <View key={index} style={{ padding: 2, marginRight: 5, borderRadius: 3 ,backgroundColor:'#FFF3EF',flexDirection:'row',marginTop:5}}>
                                                <Image
                                                    style={{width:10,height:10}}
                                                    source={{ url: item.logo }}
                                                />
                                                <Text style={{ fontSize: 8, color: '#FF7345', }}>{item.signBoard}</Text>
                                            </View>
                                        )
                                    })

                                }

                            </View>
                        }


                        <View style={{ flexDirection: 'row', width: 100,marginTop:5, }}>
                            {
                                data.activityList.map((item, index) => {
                                    return (
                                        <View key={index} style={{ padding: 2, borderWidth: 1, borderColor: '#FFEDF0', marginRight: 5, borderRadius: 3,flexDirection:'row',alignItems:'center' }}>
                                            <Text style={{ fontSize: 8, color: '#FF5F7E' }}>{item.activityContent}</Text>
                                        </View>
                                    )
                                })

                            }
                            {
                                data.pickItem != "" &&
                                <View style={{ padding: 2, borderWidth: 1, borderColor: '#FFEDF0', marginRight: 5, borderRadius: 3 ,flexDirection:'row',alignItems:'center'}}>
                                    <Text style={{ fontSize: 8, color: '#737373' }}>
                                        {data.pickItem}
                                    </Text>
                                </View>
                            }
                        </View>

                    </View>

                </View>
            </TouchableWithoutFeedback>

        )
    }
}

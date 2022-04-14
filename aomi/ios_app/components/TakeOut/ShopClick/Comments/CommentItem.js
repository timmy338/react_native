/*
 * @Author: your name
 * @Date: 2021-09-26 18:57:20
 * @LastEditTime: 2021-09-29 17:56:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\TakeOut\ShopClick\Comments\CommentItem.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { screenSize } from '../../../../utils/tools';
export default class CommentItem extends Component {
    setTime(val) {
        var date = new Date(val);
        return (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes()
    }
    render() {
        const { data } = this.props
        return (
            <View style={styles.mainView}>
                <View style={{ flexDirection: 'row' }}>
                    {
                        data.userPic != null ?
                            <Image
                                style={{ width: 50, height: 50, borderRadius: 50, marginRight: 5 }}
                                source={{ url: data.userPic }}
                            />
                            :
                            <Image
                                style={{ width: 50, height: 50, borderRadius: 50, marginRight: 5 }}
                                source={require('../../../../assets/img/user.jpg')}
                            />
                    }
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {
                                data.userName != null ?
                                    <Text>匿名用戶</Text>
                                    :
                                    <Text>{data.userName}</Text>
                            }
                            <View style={{ padding: 4, backgroundColor: '#EB4B61', borderRadius: 4, marginLeft: 5 }}>
                                <Text style={{ color: '#fff', fontSize: 10 }}>消費後</Text>
                            </View>
                        </View>

                        <Text style={{ color: '#8C8C8C', marginTop: 4 }}>{this.setTime(data.createTime)}</Text>
                        <Text style={{ color: '#8C8C8C', marginTop: 4 }}>{data.reviewItemDetail}</Text>
                        <View style={{ marginTop: 4, width: 280 }}>
                            <Text style={{ fontSize: 14 }}>{data.content}</Text>
                        </View>
                        <View>
                            {
                                data.medias &&
                                data.medias.map((item, index) => {
                                    return (
                                        <Image
                                            key={index}
                                            style={{ width: 100, height: 100,  marginRight: 5,marginTop:20 }}
                                            source={{ url: item }}
                                        />
                                    )



                                })

                            }
                        </View>

                    </View>

                </View>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    mainView: {
        marginTop: 10,
        width: screenSize.width - 30,
        paddingBottom:30,
        marginLeft: 15,
        marginRight: 15,
        borderBottomColor: '#F1F1F1',
        borderBottomWidth: 1
    }
})

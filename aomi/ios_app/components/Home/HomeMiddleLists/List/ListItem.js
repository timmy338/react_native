/*
 * @Author: your name
 * @Date: 2021-08-27 15:18:43
 * @LastEditTime: 2021-09-01 11:45:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\demo\ios_app\components\RecomCourseList\viewItem.js
 */
import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native'
import { directToPage } from '../../../../utils/ext'


export default class ListItem extends Component {

    showIf(data, styles) {
        if (data.consume != 0) {
            if (data.themeName == null) {
                return (
                    <View style={styles.price}>
                        <Text style={styles.priceNum}>${data.consume}/人</Text>
                        <Text style={styles.distance}>{data.disTance}</Text>
                    </View>
                )
            }
            else {
                return (
                    <View style={styles.themePrice}>
                        <Text style={styles.priceNum}>${data.salePrice}/人</Text>
                        <Text
                            numberOfLines={1}
                            ellipsizeMode={'tail'}
                            style={styles.subTheme}
                        >{data.subtitleName}</Text>
                    </View>
                )
            }
        }
        else {
            return (
                <View>
                    <View style={styles.price}>
                        <Text style={styles.distance}>{data.disTance}</Text>
                    </View>
                </View>

            )
        }
    }

    render() {
        const { data, styles, navigation, index } = this.props
        return (
            <TouchableWithoutFeedback
                onPress={() => { directToPage(navigation, 'Detail', { courId: data }) }}
            >
                <View style={[styles.viewItem, index === 0 && styles.viewFirst]}>
                    <View style={styles.imgView}>
                        <Image
                            resizeMode={'strech'}
                            style={styles.imgView}
                            source={{ url: data.picUrl }}
                        />
                    </View>
                    <View style={styles.storeName}>
                        {
                            data.themeName == null &&
                            <Text
                                numberOfLines={4}
                                ellipsizeMode={'tail'}
                                style={styles.storeNameText}
                            >
                                {data.storeName}
                            </Text>
                        }
                        {
                            data.themeName != null &&
                            <Text
                                numberOfLines={4}
                                ellipsizeMode={'tail'}
                                style={styles.storeNameText}
                            >
                                {data.themeName}
                            </Text>
                        }
                    </View>
                    {
                        this.showIf(data, styles)
                    }


                </View>
            </TouchableWithoutFeedback>
        )
    }
}

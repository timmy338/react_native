/*
 * @Author: your name
 * @Date: 2021-08-27 15:18:49
 * @LastEditTime: 2021-09-06 17:05:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\demo\ios_app\components\RecomCourseList\index.js
 */
import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { screenSize } from '../../../../utils/tools'
import { directToPage } from '../../../../utils/ext'
import ListItem from './ListItem'

export default class List extends Component {
    render() {
        const { recomData, navigation, bgColor, jumpAddress } = this.props
        return (
            <View style={styles.recomDataBoard} >
                <View style={[styles.recomBoardSet, { backgroundColor: '#' + bgColor }]} >
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {
                            recomData.map((item, index) => {
                                return (
                                    <ListItem
                                        data={item}
                                        index={index}
                                        styles={styles}
                                        key={index}
                                        navigation={navigation}
                                    />
                                )
                            })
                        }
                        <TouchableWithoutFeedback
                            onPress={ ()=>{directToPage(navigation,'Detail',{toUrl:jumpAddress})}} 
                        >
                            <View style={styles.moreView}>
                                <View style={{}}>
                                    <Text style={styles.moreText}>查看更多</Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </ScrollView>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    recomDataBoard: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom:10,
        width: screenSize.width,
        backgroundColor: 'white'
    },
    recomBoardSet: {
        width: 350,
        height: 240,
        borderRadius: 8,
        padding: 10,
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 0.10

    },

    viewItem: {
        backgroundColor: '#fff',
        borderBottomColor: '#eee',
        width: 160,
        marginLeft: 6,
        backgroundColor: 'white',
        borderRadius: 8
    },
    viewFirst: {
        marginLeft: 0
    },
    imgView: {
        width: 160,
        height: 160,
        borderRadius: 8
    },
    storeName: {
        marginTop: 5,
        marginBottom: 5,
    },
    storeNameText: {
        maxHeight: 26,
        fontSize: 15,
        marginLeft: 10,
        textAlign: 'left'
    },

    price: {
        width: 200,
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 5,
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    themePrice: {
        width: 200,
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 5,
        alignContent: 'center'
    },
    subTheme: {
        maxWidth: 70,
        color: '#AAAAAA'
    },
    priceNum: {
        color: '#f40',
        marginRight: 10
    },
    distance: {
        width: 100,
        color: '#AAAAAA'
    },
    moreView: {
        marginLeft: 5,
        borderRadius: 8,
        borderColor: '#FF3B61',
        borderWidth: 1,
        backgroundColor: 'white',
        width: 50,
        height: 220,
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection:'column',
        justifyContent:'center'
    },
    moreText: {
        color: '#FF3B61',
        fontSize: 15,
        fontWeight: '400',
    }
})

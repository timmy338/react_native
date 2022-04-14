/*
 * @Author: your name
 * @Date: 2021-08-31 17:52:42
 * @LastEditTime: 2021-09-02 14:09:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\Home\HomeRecom\index.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import RecomItem from './RecomItem'

export default class HomeRecom extends Component {
    render() {
        const { recomData, navigation } = this.props
        return (
            <View style={styles.main}>
                <Text style={styles.mainTitle}>推薦優惠</Text>
                <View style={styles.itemViews}>
                    {
                        recomData != undefined &&
                        recomData.map((item, index) => {
                            return (
                                <RecomItem
                                    data={item}
                                    key={index}
                                    styles={styles}
                                    navigation={navigation}

                                />
                            )
                        })
                    }
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    main: {
        padding: 15,
        backgroundColor: 'white',
        paddingBottom:140
    },
    mainTitle: {
        fontSize: 20,
        fontWeight:'500',
        color: '#FE4E70',
    },
    itemViews: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
       
    },
    item: {
        marginTop: 10,
        width: 170,
        alignSelf: 'flex-start',
        backgroundColor: 'white',
        borderRadius: 7,
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 0.10
    },
    img: {
        width: 170,
        height: 120,
        borderRadius: 7
    },
    textView: {
        padding: 5,
    },
    title: {
        fontSize: 13.5,
        fontWeight: '500',
    },
    intro: {
        marginTop: 4,
        maxWidth: 150,
        color: "#767676",
        fontSize: 12
    },
    sold: {
        marginTop: 4,
        maxWidth: 150,
        color: "#767676",
        fontSize: 10
    },
    priceView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        marginTop: 3,
        color: '#FF335A'
    },
    oldPrice: {
        marginLeft: 4,
        height: 10,
        fontSize: 10,
        textDecorationLine:'line-through',
        color:'#767676'
    },
    activityTag:{
        backgroundColor:'#FFECEC',
        padding:4,
        borderRadius:5,
        alignSelf: 'flex-start' 
    }
})

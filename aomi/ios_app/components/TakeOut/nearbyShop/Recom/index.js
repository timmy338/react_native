/*
 * @Author: your name
 * @Date: 2021-08-31 17:52:42
 * @LastEditTime: 2021-09-09 16:17:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\Home\HomeRecom\index.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import RecomItem from './RecomItem'
import { screenSize } from '../../../../utils/tools'
export default class Recom extends Component {
    render() {
        const { recomData, navigation } = this.props
        return (
            <View style={styles.main}>
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
        padding: 5,
        paddingTop:0,
        backgroundColor: 'white',
        paddingBottom:140
    },
    mainTitle: {
        fontSize: 20,
        fontWeight:'500',
        color: '#FE4E70',
    },
    itemViews: {
        flexDirection:'row',
        justifyContent: 'center',
        flexWrap: 'wrap' 
    },
    item: {
        marginTop: 10,
        width:screenSize.width-50,
        backgroundColor: 'white',
        borderRadius: 7,
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 0.10
    },
    img: {
        marginLeft:5,
        marginTop:5,
        width: 60,
        height: 60,
        borderRadius: 7
    },
    textView: {
        padding: 5,
        flexDirection:'column',
        justifyContent:'space-around'
    },
    title: {
        fontSize: 13.5,
        fontWeight: '500',
        maxWidth:230,
    },
    intro: {
        marginTop: 4,
        maxWidth: 150,
        color: "#767676",
        fontSize: 12
    },
    score: {
        color: "#FF8A00",
        fontSize: 12,
        fontWeight:'600'
    },
    priceView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    beginPrice: {
        color: '#7F7F7F',
        fontSize:10,
        fontWeight:'600'
    },
    riderPrice: {
        marginLeft: 4,
        height: 10,
        fontSize: 10,
/*         textDecorationLine:'line-through', */
        color:'#868686'
    },

    aomiCorner:{
        padding:3,
        backgroundColor:'#FF8B76',
        borderTopRightRadius:7,
        borderBottomLeftRadius:7
    }
})

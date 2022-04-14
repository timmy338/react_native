/*
 * @Author: your name
 * @Date: 2021-09-20 14:54:55
 * @LastEditTime: 2021-09-29 18:01:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\TakeOut\ShopClick\Foods\Trolley.js
 */

import React, { Component, useEffect } from 'react'
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback, ScrollView } from 'react-native'
import { screenSize } from '../../../../utils/tools'
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

import TrolleyItem from './TrolleyItem';

const styles = StyleSheet.create({
    mainView: {
        position: 'absolute',
        bottom: 0,
        width: screenSize.width,
        height: 30
    },
    shop: {
        height: 80,
        backgroundColor: '#F4F4F4',
        flexDirection: 'row',
        alignContent: 'center'
    },
    zIndexSet: {
        position: 'absolute',
        zIndex: 10
    }
})

export default function Trolley({ data, pay, trolleyData, isVisible, setIsVisible, isFirstOpenTrolley, countAllWare }) {
    const sheetRef = React.useRef(null)

    useEffect(() => {
        if (isVisible === true) {
            sheetRef.current.snapTo(0)
        }
    }, [isVisible]) // 仅在 isVisible 更改时更新


    return (

        <View style={styles.mainView}>

            {
                isFirstOpenTrolley === true
                &&
                isVisible === true
                &&

                <BottomSheet
                    ref={sheetRef}
                    snapPoints={[300, 0]}
                    borderRadius={10}
                    onCloseEnd={() => setIsVisible()}
                    renderContent={() => <TrolleyItem trolleyData={trolleyData} />}
                />

            }

            <View style={{
                position: 'absolute',
                zIndex: 101,
                bottom: 0,
            }}>
                {
                    isVisible == false &&
                    data.activityList &&
                    data.activityList.find(item => item.activityType == 'FULLCUT') != undefined
                    &&
                    <View style={{ width: screenSize.width, height: 30, backgroundColor: '#FAF8DC', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        {

                            data.activityList.map((item, index) => {
                                if (item.activityType == 'FULLCUT' && index == 0) {
                                    return (
                                        <View key={index}>
                                            <Text style={{ color: '#D37C42', fontSize: 12 }}>{item.activityContent}</Text>
                                        </View>
                                    )
                                }
                                else if (item.activityType == 'FULLCUT') {
                                    return (
                                        <View key={index}>
                                            <Text style={{ color: '#D37C42', fontSize: 12 }}>,{item.activityContent}</Text>
                                        </View>
                                    )
                                }

                            })
                        }
                    </View>
                }

                <View style={styles.shop}>
                    <View style={{ width: screenSize.width * 2 / 3, flexDirection: 'row', height: 60, alignItems: 'center', backgroundColor: 'black' }}>
                        <TouchableWithoutFeedback onPress={() => { setIsVisible() }}>
                            <View>
                                {
                                    trolleyData.length != 0 ?

                                        <Image
                                            style={{ width: 60, height: 60, marginLeft: 10, position: 'relative', top: -10 }}
                                            source={require('../../../../assets/cart2.png')}
                                        />

                                        :
                                        <Image
                                            style={{ width: 60, height: 60, marginLeft: 10, position: 'relative', top: -10 }}
                                            source={require('../../../../assets/cart1.png')}
                                        />
                                }
                            </View>
                        </TouchableWithoutFeedback>
                        {
                            trolleyData.length != 0 &&
                            <View style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: '#FF3159', position: 'absolute', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', left: 60, top: -5 }}>
                                <Text style={{ color: 'white', fontSize: 10 }}>{countAllWare}</Text>
                            </View>
                        }

                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: 'white', fontSize: 18 }}>${pay}</Text>
                            {
                                data &&
                                <Text style={{ color: '#757575', fontSize: 12, marginTop: 4 }}>配送費: ${data.defaultAmountOfSend}</Text>
                            }
                        </View>


                    </View>
                    {
                        trolleyData.length == 0 ?
                            <View style={{ backgroundColor: '#8B8B8B', height: 60, width: screenSize.width / 3, alignItems: 'center', justifyContent: 'center' }}>
                                {
                                    data &&
                                    <Text style={{ color: 'white', fontSize: 15 }}>請選擇商品</Text>
                                }

                            </View>
                            :
                            <View style={{ backgroundColor: '#FF3159', height: 60, width: screenSize.width / 3, alignItems: 'center', justifyContent: 'center' }}>
                                {
                                    data &&
                                    <Text style={{ color: 'white', fontSize: 15 }}>下單</Text>
                                }
                            </View>
                    }

                </View>
            </View>






        </View >

    );
}
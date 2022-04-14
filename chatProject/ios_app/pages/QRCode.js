/*
 * @Author: your name
 * @Date: 2021-10-10 15:17:35
 * @LastEditTime: 2021-10-14 17:56:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\chatProject\ios_app\pages\QRCode.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { screenSize } from '../utils/tools'
import StorageUtils from '../utils/storage'
export default class QRCode extends Component {
    state = {
        userData: {},
    }
    componentDidMount() {

        StorageUtils.get('user').then((value) => {
            if (value && value !== '') {
                const jsonValue = JSON.parse(value)
                this.setState({
                    userData: jsonValue
                }, () => { console.log(this.state.userData) })
            }
        })
    }
    render() {
        const { userData } = this.state
        return (
            <View style={styles.mainView}>
                <View style={{ position: 'absolute' }}>
                    <Image
                        style={{ width: screenSize.width, height: screenSize.height, opacity: 0.2 }}
                        source={require('../assets/img/test.jpg')}
                    />
                    {/*  <Ionicons name={"logo-snapchat"} size={screenSize.width * 2} color={'#E8E9F0'} /> */}
                </View>

                <View style={styles.QRCodeLable}>

                    <Text style={{ marginTop: 50, fontWeight: '700', fontSize: 20 }}>{userData.nickname}</Text>
                    <Text style={{ marginTop: 5, fontWeight: '400', fontSize: 15, color: '#8D909C' }}>Account: @{userData.username}</Text>

                    <Image
                        style={{ width: 250, height: 250 }}
                        source={{ url: 'http://4e422651q3.qicp.vip' + userData.qrcode }}
                    />

                    <Image
                        style={{ width: 80, height: 80, borderRadius: 80, position: 'absolute', top: -40 }}
                        source={{ url: 'http://4e422651q3.qicp.vip' + userData.faceImage }}
                    />

                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    mainView: {
        height: screenSize.height - 200,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    QRCodeLable: {
        width: screenSize.width - 120,
        height: 360,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowRadius: 10,

    },

})

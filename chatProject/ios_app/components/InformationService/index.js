/*
 * @Author: your name
 * @Date: 2021-10-08 15:34:51
 * @LastEditTime: 2021-10-14 17:43:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\chatProject\ios_app\components\InformationService\index.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { directToPage } from '../../utils/ext'
import { screenSize } from '../../utils/tools'
export default class InformationService extends Component {

    render() {
        const { data, navigation } = this.props
        return (
            <View>
                {
                    data &&
                    <View style={styles.mainView}>




                        <Image
                            style={styles.ImageView}
                            source={{ url: 'http://4e422651q3.qicp.vip' + data.faceImage }}
                        />
                        <View style={{flexDirection:'row',justifyContent:'space-between',width:280}}>
                        <Text style={{ fontWeight: '700', fontSize: 20, marginLeft: 20 }}>{data.nickname}</Text>
                            <TouchableWithoutFeedback
                                onPress={() => { directToPage(navigation, 'QRcode') }}
                            >
                                <Ionicons name={"qr-code"} size={25} color={'#63676D'} />
                            </TouchableWithoutFeedback>
                            
                        </View>

                        <Text style={{ color: '#909BA2', fontSize: 16, marginLeft: 20 }}>@{data.username}</Text>

                        <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 16, fontWeight: '700' }}>6 </Text>
                                <Text style={{ fontSize: 16, color: '#909BA2' }}>跟隨中</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: '700' }}>1 </Text>
                                <Text style={{ fontSize: 16, color: '#909BA2' }}>跟隨者</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 20, borderBottomColor: '#EFEFEF', borderBottomWidth: 1 }}>
                            <View style={styles.setBtn}>
                                <FontAwesome5 name={"user-astronaut"} size={25} color={'#63676D'} />
                                <Text style={styles.btnTitle}>個人檔案</Text>
                            </View>
                            <View style={styles.setBtn}>
                                <FontAwesome5 name={"list"} size={25} color={'#63676D'} />
                                <Text style={styles.btnTitle}>列表</Text>
                            </View>
                            <View style={styles.setBtn}>
                                <Ionicons name={"ios-chatbubble-ellipses-outline"} size={25} color={'#63676D'} />
                                <Text style={styles.btnTitle}>主題</Text>
                            </View>
                            <View style={styles.setBtn}>
                                <Ionicons name={"bookmarks-outline"} size={25} color={'#63676D'} />
                                <Text style={styles.btnTitle}>書籤</Text>
                            </View>
                            <View style={styles.setBtn}>
                                <Ionicons name={"newspaper-outline"} size={25} color={'#63676D'} />
                                <Text style={styles.btnTitle}>新聞</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.setBtn}>
                                <Text style={styles.btnTitle}>設定和隱私</Text>
                            </View>
                            <View style={styles.setBtn}>
                                <Text style={styles.btnTitle}>說明中心</Text>
                            </View>
                        </View>
                    </View >
                }
            </View>


        )
    }
}
const styles = StyleSheet.create({
    mainView: {
        width: screenSize.width - 82,
        height: screenSize.height,
        backgroundColor: 'white'
    },
    ImageView: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 5,
        marginTop: 50,
        marginBottom: 10,
        marginLeft: 20
    },
    setBtn: {
        flexDirection: 'row',
        width: screenSize.width - 120,
        height: 40,
        alignItems: 'center',
        marginTop: 10,
        marginVertical: 10,
        marginLeft: 20
    },
    btnTitle: {
        marginLeft: 10,
        fontSize: 17,
        fontWeight: '500'
    },

})

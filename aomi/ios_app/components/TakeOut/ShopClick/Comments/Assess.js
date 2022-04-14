/*
 * @Author: your name
 * @Date: 2021-09-26 16:50:01
 * @LastEditTime: 2021-09-26 18:36:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\components\TakeOut\ShopClick\Comments\Assess.js
 */
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Assess extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <View style={{width:200,height:100,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#FF3159',fontSize:30,fontWeight:'500'}}>9.0</Text>
                    <Text style={{marginTop:5}}>商家評分</Text>
                </View>
                <View>
                    <View style={{width:200,height:50,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                        <Text>口味 </Text>
                        <MaterialCommunityIcons name={'star-box'} size={17} color={'#FFC602'} />
                        <MaterialCommunityIcons name={'star-box'} size={17} color={'#FFC602'} />
                        <MaterialCommunityIcons name={'star-box'} size={17} color={'#FFC602'} />
                        <MaterialCommunityIcons name={'star-box'} size={17} color={'#FFC602'} />
                        <MaterialCommunityIcons name={'star-box'} size={17} color={'#FFC602'} />
                        <Text> 8.0</Text>
                    </View>
                    <View style={{width:200,height:50,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                        <Text>包裝 </Text>
                        <MaterialCommunityIcons name={'star-box'} size={17} color={'#FF731F'} />
                        <MaterialCommunityIcons name={'star-box'} size={17} color={'#FF731F'} />
                        <MaterialCommunityIcons name={'star-box'} size={17} color={'#FF731F'} />
                        <MaterialCommunityIcons name={'star-box'} size={17} color={'#FF731F'} />
                        <MaterialCommunityIcons name={'star-box'} size={17} color={'#FF731F'} />
                        <Text> 9.1</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row'
    }
})

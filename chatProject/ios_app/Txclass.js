/*
 * @Author: your name
 * @Date: 2021-08-25 14:52:34
 * @LastEditTime: 2021-10-10 16:16:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\test\ios_app\Txclass.js
 */

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
/* -------------引入icon包------------- */
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

/* -------------tab頁------------- */
import HomePage from './pages/Home';
import ListPage from './pages/List';
import DetailPage from './pages/Detail';
import QRCodePage from './pages/QRCode';
import Logo from './components/Logo'
import Login from './Login'
function BottomTab() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case '首頁': iconName = 'house-damage'
                            return <FontAwesome5 name={iconName} size={size} color={color} />
                        case '搜索': iconName = 'cloud-search'
                            return <MaterialCommunityIcons name={iconName} size={size} color={color} />
                        case '通知': iconName = 'email'
                            return <MaterialCommunityIcons name={iconName} size={size} color={color} />
                    }
                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    )
                },
                headerShown: false
            })}
            tabBarOptions={{
                activeTintColor: '#23b8ff',
                inactiveTintColor: '#999'
            }}

        >
            <Tab.Screen
                name="通知"
                component={ListPage}
            />
            <Tab.Screen
                name="首頁"
                component={HomePage}
            />
            <Tab.Screen
                name="搜索"
                component={HomePage}
            />

        </Tab.Navigator>
    )
}

function Txclass() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerTitle: '', headerShown: false }} />
                <Stack.Screen name="QRcode" component={QRCodePage} options={{ headerTitle: '我的二維碼', headerBackTitle: '返回' }} />
                <Stack.Screen name="Tab" component={BottomTab} options={{ headerTitle: '', headerShown: false }} />
             
                <Stack.Screen name="Detail" component={DetailPage} options={{ headerTitle: '我的二維碼', headerBackTitle: '返回' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Txclass


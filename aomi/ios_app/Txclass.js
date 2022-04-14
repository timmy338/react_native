/*
 * @Author: your name
 * @Date: 2021-08-25 14:52:34
 * @LastEditTime: 2021-09-29 16:45:37
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
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
/* -------------tab頁------------- */
import HomePage from './pages/Home';
import ExplorePage from './pages/Explore';
import DiscountPage from './pages/Discount';
import MyselfPage from './pages/Myself';
import TakeoutPage from './pages/Takeout';
import DetailPage from './pages/Detail';
import homeRecomPage from './pages/homeRecom'
import TakeoutClickPage from './pages/TakeoutClick';

import Logo from './components/Logo'
import TakeOutLogo from './components/TakeOut/ShopClick/Logo'
import TakeoutDetail from './pages/TakeoutDetail';

function BottomTab() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case '首頁': iconName = 'ios-home'
                            break;
                        case '堂食優惠': iconName = 'ticket'
                            return (
                                <FontAwesome name={iconName} size={size} color={color} />
                            )
                        case '外賣': iconName = 'motorcycle'
                            return (
                                <FontAwesome name={iconName} size={size} color={color} />
                            )
                        case '發現': iconName = 'ios-planet'
                            break;
                        case '我': iconName = 'user'
                            return (
                                <AntDesign name={iconName} size={size} color={color} />
                            )
                    }
                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    )
                },
                headerShown: false
            })}
            tabBarOptions={{
                activeTintColor: '#FE336D',
                inactiveTintColor: '#A7A5A5'
            }}

        >

            <Tab.Screen
                name="首頁"
                component={HomePage}
            />
            <Tab.Screen
                name="堂食優惠"
                component={DiscountPage}
            />
            <Tab.Screen
                name="外賣"
                component={TakeoutPage}
            />
            <Tab.Screen
                name="發現"
                component={ExplorePage}
            />
            <Tab.Screen
                name="我"
                component={MyselfPage}
            />
        </Tab.Navigator>
    )
}

function Txclass() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tab" component={BottomTab} options={{/*  headerTitle: props => <Logo {...props} /> ,*/headerShown: false }} />
                <Stack.Screen name="TakeoutClick" component={TakeoutClickPage} options={{ headerTitle: props => <TakeOutLogo {...props} />, headerBackTitle: '返回', headerTintColor: '#363636' }} />
                <Stack.Screen name="Detail" component={DetailPage} options={{ headerTitle: '', headerBackTitle: '返回', headerTintColor: '#363636' }} />
                <Stack.Screen name="homeRecom" component={homeRecomPage} options={{ headerTitle: props => <Logo {...props} />, headerBackTitle: '返回', headerTintColor: '#363636' }} />
                <Stack.Screen name="TakeoutDetail" component={TakeoutDetail} options={{ headerTitle: '', headerBackTitle: '返回' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Txclass


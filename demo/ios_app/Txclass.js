/*
 * @Author: your name
 * @Date: 2021-08-25 14:52:34
 * @LastEditTime: 2021-08-26 17:26:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\test\ios_app\Txclass.js
 */

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomePage from './pages/Home';
import ListPage from './pages/List';
import DetailPage from './pages/Detail';
import Logo from './components/Logo'
/* import axios from 'axios'
const BASE_URL='http://txcourseapi.jsplusplus.com/';
 */
//npm install axios -S

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
                        case '列表': iconName = 'ios-list'
                            break;
                    }
                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    )
                },
                headerShown:false
            })}
            tabBarOptions={{
                activeTintColor:'#23b8ff',
                inactiveTintColor:'#999'
            }}
            
        >
            <Tab.Screen
                name="首頁"
                component={HomePage}
            />
            <Tab.Screen
                name="列表"
                component={ListPage}
            />
        </Tab.Navigator>
    )
}

function Txclass() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tab" component={BottomTab} options={{ headerTitle: props=><Logo {...props}/> }} />
                <Stack.Screen name="Detail" component={DetailPage} options={{ headerTitle: props=><Logo {...props}/>, headerBackTitle: '返回' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Txclass
/*     getCourseDatas(){
        axios.get(BASE_URL+'course/v2/get_course_datas').then(
            response=>{alert('successful:',response.data);},
            error=>{console.log('fail',error)}
        )
    }
    getCourses(field){
        axios.get(BASE_URL+'course/v2/get_courses/'+field).then(
            response=>{console.log('successful:',response.data);},
            error=>{console.log('fail',error)}
        )
    }
    getCourseFields(){
        axios.get(BASE_URL+'course/v2/get_course_fields').then(
            response=>{console.log('successful:',response.data);},
            error=>{console.log('fail',error)}
        )
    }

    componentDidMount(){
        this.getCourseDatas
        this.getCourses('all');
        this.getCourseFields
    } */


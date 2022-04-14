/*
 * @Author: your name
 * @Date: 2021-08-25 16:08:31
 * @LastEditTime: 2021-08-25 17:50:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\test\ios_app\utils\tools.js
 */

import { Dimensions } from "react-native";

const screenSize={
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
}

export {
    screenSize
}
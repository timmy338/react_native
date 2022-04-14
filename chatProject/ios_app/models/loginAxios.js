/*
 * @Author: your name
 * @Date: 2021-10-06 15:19:31
 * @LastEditTime: 2021-10-10 16:21:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\chatProject\ios_app\models\loginAxios.js
 */
import axios from 'axios'
const BASE_URL = 'http://4e422651q3.qicp.vip/';

function login(name,pwd){
    return axios.get( BASE_URL+'chatlogin?password='+pwd+'&username='+name )
}  
function register(name,pwd){
    return axios.get( BASE_URL+'register?password='+pwd+'&username='+name )
}  

export {
    login,register
}
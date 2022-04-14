/*
 * @Author: your name
 * @Date: 2021-09-06 15:18:06
 * @LastEditTime: 2021-09-07 15:03:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\models\discountAxios.js
 */
import axios from 'axios'
const BASE_URL = 'http://txcourseapi.jsplusplus.com/';


/* function axiosGet(url){
    return axios.get(BASE_URL+url)
} */

let headers2 = {
    'channel': 3,
    'citycode': 'MO',
    'content-type': 'application/json;charset=UTF-8',
    'devicepsver': '',
    'devicetype': 'iphone 6+',
    'lantype': 1,
    'origin': 'https://wap.aomi.mo',
    'referer': 'https://wap.aomi.mo/spa/',
     //'sign': md5.hexdigest(),
    'time': Number(Date.now()),
    'userid': 8530000001,
    'token': '',
    'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
}

axios.defaults.headers=headers2

/* ----------------Discount------------ */
function getTopTab(){
    return axios.get('https://aomiapi.aomipay.com/aomi-home-page/groupPurchase/getGroupIcons.do')
}

function getMiddleImg(){
    return axios.get('https://aomiapi.aomipay.com/aomi-ads/ad/adDetailList?locationId=0001003002')
}

function getMiddleLists(){
    return axios.get('https://aomiapi.aomipay.com//aomi-home-page/product/v2/getList.do?position=3&lon=121.530496&lat=25.033778')
}

function getBottomSwiper(){
    return axios.get('https://interface.aomiapp.com//aomi-ads/ad/adDetailList?locationId=0001003003')
}

function getBottomRecom(page){
    return axios.get('https://aomiapi.aomipay.com/service/interface/v6/GetRecommendGroup.do?pageNo='+page)
}

function getBottomNew(page){
    return axios.get('https://aomiapi.aomipay.com/service/interface/v3/getLastGroupPurchase.do?pageNo='+page+'&lat=&lon=')
}
/* ----------------Discount------------ */

export {
    getTopTab,getMiddleImg,getMiddleLists,getBottomSwiper,getBottomRecom,getBottomNew
}
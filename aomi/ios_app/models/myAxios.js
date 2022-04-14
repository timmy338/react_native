/*
 * @Author: your name
 * @Date: 2021-08-25 16:04:22
 * @LastEditTime: 2021-09-07 14:25:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\test\ios_app\models\index.js
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
/* ----------------Home------------ */
/* 1.首頁輪播圖 */
const getHomeSwiper=()=>{
    return axios.get('https://aomiapi.aomipay.com/service/carouselads/getCarousels.do')
}
/* 2.中間的一些tabs */
const getMiddleTabs=()=>{
    return axios.get('https://aomiapi.aomipay.com/aomi-home-page/product/v2/getHomeIcons.do')
}
/* 3.超抵美食...... */
const getMiddleLists=()=>{
    return axios.get('https://aomiapi.aomipay.com/aomi-home-page/product/v2/getList.do?position=1&lon=121.530496&lat=25.033778')
}
/* 下方某些廣告圖吧 */
const getAdvertise=()=>{
    return axios.get('https://aomiapi.aomipay.com/aomi-home-page/ad/adRowList?locationId=0001001007')
}

/*下方的輪播圖  */
const getBottomSwiper=()=>{
    return axios.get('https://aomiapi.aomipay.com/aomi-home-page/ad/adDetailList?locationId=0001001006')
}

/* 最下方的推薦*/
function getRecom(page){
    return axios.get('https://aomiapi.aomipay.com/aomi-purchase/purchase/list/search.do?type=0&lon=113.560737&lat=22.189237&sequenceType=1&pageNo='+page+'&groupClazzId=&businessCenterID=&searchVal=')
}
/* 最下方的推薦click*/
function getRecomId(url){
    /* console.log(url+'') */
    return axios.get(url+'')
}

function getRecomDetail(id){
    /* console.log('https://aomiapi.aomipay.com/aomi-purchase/purchase/v5/GetGroupPurchaseInfo.do?ID='+id+'&lat=25.033778&lon=121.530496&activityType=0&loglocation=2005')  */
    return axios.get('https://aomiapi.aomipay.com/aomi-purchase/purchase/v5/GetGroupPurchaseInfo.do?ID='+id+'&lat=25.033778&lon=121.530496&activityType=0&loglocation=2005')
    
}
/* ----------------Home------------ */


const getCourses=(field)=>{
    return axios.get(BASE_URL + 'course/v2/get_courses/' + field)
}

export {
    getCourses,getHomeSwiper,getMiddleTabs,getMiddleLists,getAdvertise,getBottomSwiper,getRecom,getRecomId,getRecomDetail
}
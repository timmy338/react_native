/*
 * @Author: your name
 * @Date: 2021-09-07 16:39:19
 * @LastEditTime: 2021-09-26 16:49:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\aomi\ios_app\models\takeOutAxios.js
 */
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
function getTopSwiper(){
    return axios.get('https://interface.aomiapp.com/aomi-ads/ad/adDetailList?locationId=0001005001')
}
function getTopTabs(){
    return axios.get('https://aomiapi.aomipay.com/service/aomiicon/v2/getIconInfos.do?target=1')
}

function getRankShop(){
    return axios.get('https://interface.aomiapp.com//aomi-takeout-restful/interface/takeoutStoreRecommend?lon=113.552458&lat=22.200815')
}

function getRecomSwiper(){
    return axios.get('https://interface.aomiapp.com/service/interface/bbeActivity/storeList?clazzId=&lat=22.200815&lon=113.552458')
}   

function getBottomShop(page){
    return axios.get('https://aomiapi.aomipay.com/service/interface/v7/TakeoutGetStoreList.do?type=4&lon=113.560737&lat=22.189237&pageNo='+page+'&sortType=1&isPickUp=0&isDisCount=0&isFullCut=0&isFullOfGifts=0&searchKey=&isRider=0&loglocation=1')
}

function getComments(id,page){
    return axios.get(`https://aomiapi.aomipay.com/aomi-review-server/review-list-view?storeIds=`+id+`&pageSize=10&type=AFTER_TAKE_OUT&pageNum=`+page)
}

function getClick(url){
    /* console.log(url+'') */
    return axios.get(url+'')
}

/* ----------------Discount------------ */

export {
    getTopSwiper,getTopTabs,getRankShop,getRecomSwiper,getBottomShop,getClick,getComments
}
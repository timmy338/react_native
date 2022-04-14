/*
 * @Author: your name
 * @Date: 2021-08-25 16:07:48
 * @LastEditTime: 2021-08-25 17:59:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\test\ios_app\utils\contension.js
 */
function filterFieldData(courseData,field,doSlice){
    const data=courseData.filter((item,index)=>{
        if(field==='all'){
            return true;
        }
        return item.field === field;
    })
    return doSlice ? data.slice(0,4) : data
}

function directToPage(navigation,pageName,params){
    return function (){
        navigation.navigate(pageName,parms);
    }
}

export {
    filterFieldData,directToPage
}
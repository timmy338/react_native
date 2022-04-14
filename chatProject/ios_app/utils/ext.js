/*
 * @Author: your name
 * @Date: 2021-08-25 16:07:48
 * @LastEditTime: 2021-08-27 17:01:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\test\ios_app\utils\contension.js
 */
function filterFieldData(courseData,field,doSlice){
    const _data=courseData.filter((item)=>{
        if(item.field==='all'){
            return true;
        }
        return item.field === field;
    })
    return doSlice ? _data.slice(0,4) : _data
    
}

function directToPage(navigation,pageName,params){
    navigation.navigate(pageName,params);
}

export {
    filterFieldData,directToPage
}
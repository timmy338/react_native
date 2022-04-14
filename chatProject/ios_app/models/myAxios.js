/*
 * @Author: your name
 * @Date: 2021-08-25 16:04:22
 * @LastEditTime: 2021-08-27 18:09:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\test\ios_app\models\index.js
 */
import axios from 'axios'
const BASE_URL = 'http://txcourseapi.jsplusplus.com/';

/* function axiosGet(url){
    return axios.get(BASE_URL+url)
} */
const getCourseDatas=()=> {
    return axios.get(BASE_URL+'course/v2/get_course_datas')
}  
const getCourses=(field)=>{
    return axios.get(BASE_URL + 'course/v2/get_courses/' + field)
}
const getCourseFields=()=>{
    return axios.get(BASE_URL + 'course/v2/get_course_fields')
}
export {
    getCourseDatas,getCourses,getCourseFields,
}
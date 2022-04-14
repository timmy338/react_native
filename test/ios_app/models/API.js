/*
 * @Author: your name
 * @Date: 2021-08-25 16:04:22
 * @LastEditTime: 2021-08-25 17:32:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\test\ios_app\models\index.js
 */
import axios from 'axios'
const BASE_URL='http://txcourseapi.jsplusplus.com/';

export default class API{
    getCourseDatas(){
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
}

/*
 * @Author: your name
 * @Date: 2021-10-03 14:50:01
 * @LastEditTime: 2021-10-16 15:41:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\chatProject\ios_app\loginIn.js
 */
import React, { Component } from 'react'
import { KeyboardAvoidingView, Text, View, StyleSheet, TextInput, Image, Keyboard } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { screenSize } from './utils/tools'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import StorageUtils from './utils/storage'
import { login, register } from './models/loginAxios'
import { directToPage } from './utils/ext'
export default class Login extends Component {
    state = {
        userName: '',
        userPassword: '',
        firstLogin: true,
        KeyboardShown: false,
   
    }


    checkLogin() {
        const { navigation } = this.props
        const { userName, userPassword, firstLogin } = this.state

        if (userName == "" || userPassword == "") {
            alert("請輸入完整信息")
        }
        else {
            login(userName, userPassword).then((res) => {
                /* console.log(res.data.data) */
                if (res.data.msg == "successful" && firstLogin) {
                    StorageUtils.save('user', res.data.data)
                    directToPage(navigation, 'Tab')
                }
                else if (res.data.msg == "successful" && !firstLogin) {
                    directToPage(navigation, 'Tab')
                }
                else if (res.data.msg == "null") {
                    alert("沒有該帳戶")
                }
                else {
                    alert("密碼錯誤")
                }
            })
        }
    }
    checkRegister() {
        const { navigation } = this.props
        const { userName, userPassword } = this.state
        if (userName == "" || userPassword == "") {
            alert("請輸入完整信息")
        }
        else {
            register(userName, userPassword).then((res) => {
                /* console.log(res.data.data) */
                if (res.data.msg == "successful") {
                    alert('完成注冊')
                }
                else {
                    alert("帳戶已存在")
                }
            })
        }
    }
    componentDidMount() {
        StorageUtils.get('user').then((value) => {
            if (value && value !== '') {
                const jsonValue = JSON.parse(value)
                this.setState(
                    {
                        userName: jsonValue.username,
                        userPassword: jsonValue.password,
                        firstLogin: true
                    }
                )
            }
        })
    }
    /* 
        componentDidMount() {
            Keyboard.addListener('keyboardDidShow', this.keyboardDidShowHandler.bind(this));
            Keyboard.addListener('keyboardDidHide', this.keyboardDidHideHandler.bind(this));
        }
        componentWillUnmount() {
            // 移除监听事件
            if (this.keyboardDidShowListener != null) {
                this.keyboardDidShowListener.remove();
            }
            //卸载键盘隐藏事件监听
            if (this.keyboardDidHideListener != null) {
                this.keyboardDidHideListener.remove();
     
            }
        }
     
        //键盘弹出事件响应
        keyboardDidShowHandler(event) {
            this.setState({ KeyboardShown: true });
        }
     
        //键盘隐藏事件响应
        keyboardDidHideHandler(event) {
            this.setState({ KeyboardShown: false })
        } */


    render() {
        const { userName, userPassword } = this.state
        return (
            <View style={{ flex: 1 }}>
                <Image
                    style={styles.background}
                    source={require('./assets/img/bcg2.jpg')}
                />
                <KeyboardAvoidingView
                    behavior="padding"
                    style={{ flex: 1 }}
                >
                    <TouchableWithoutFeedback
                        onPress={Keyboard.dismiss}
                    >
                        <View style={styles.mainView}>

                            <View style={styles.logo}>
                                <Ionicons name={"logo-snapchat"} size={136} color={'white'} />
                            </View>
                            <View style={styles.input}>
                                <Fontisto name={"user-secret"} size={36} color={'#fff'} />
                                <TextInput
                                    style={{ height: 40, width: screenSize.width - 140, marginLeft: 10 }}
                                    onChangeText={(userName) => this.setState({ userName })}
                                    value={userName}
                                />
                            </View>
                            <View style={styles.input}>
                                <Fontisto name={"locked"} size={36} color={'#fff'} />
                                <TextInput
                                    password={true}
                                    style={{ height: 40, width: screenSize.width - 140, marginLeft: 10 }}
                                    onChangeText={(userPassword) => this.setState({ userPassword })}
                                    value={userPassword}
                                />
                            </View>
                            <TouchableWithoutFeedback
                                onPress={() => { this.checkLogin() }}
                            >
                                <View style={styles.btn}>
                                    <Text style={{ fontSize: 20, fontWeight: '600', color: 'white' }}>登入</Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: screenSize.width - 120, marginTop: 10 }}>
                                <View style={{ borderBottomWidth: 2, borderColor: '#046FA6', width: screenSize.width / 2 - 80, marginTop: 5 }}></View>
                                <Text style={{ marginTop: 5, color: '#046FA6', fontSize: 18, fontWeight: '500' }}>OR</Text>
                                <View style={{ borderBottomWidth: 2, borderColor: '#046FA6', width: screenSize.width / 2 - 80, marginTop: 5 }}></View>
                            </View>


                            <TouchableWithoutFeedback
                                onPress={() => { this.checkRegister() }}
                            >
                                <View style={[styles.btn, { marginTop: 10 }]}>
                                    <Text style={{ fontSize: 20, fontWeight: '600', color: 'white' }}>注冊</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>

                    </TouchableWithoutFeedback>

                </KeyboardAvoidingView>
            </View>




        )
    }
}
const styles = StyleSheet.create({
    mainView: {
        justifyContent: "space-around",
        alignItems: 'center',
        padding: 10,
    },
    logo: {
        marginTop: 80,
        flexDirection: 'row',
        justifyContent: 'center'

    },
    input: {
        marginTop: 10,
        width: screenSize.width - 100,
        borderBottomColor: '#EEF5FA',
        borderBottomWidth: 3,
        paddingBottom: 4,
        flexDirection: 'row'
    },
    background: {
        position: 'absolute',
        width: screenSize.width,
        height: screenSize.height + 100,
        opacity: 0.6
    },
    btn: {
        marginTop: 20,
        width: screenSize.width - 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#74B9E8'/* '#3F669B' */,
        borderColor: '#EEF5FA',
        borderWidth: 2,
        height: 45,
        borderRadius: 10,

    }
})

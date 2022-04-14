/*
 * @Author: your name
 * @Date: 2021-10-09 15:37:45
 * @LastEditTime: 2021-10-09 15:53:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \todos_pagec:\Users\timmy\react\react_native\chatProject\ios_app\utils\storage.js
 */

/**
 * AsyncStorage异步、持久化的key-value存储系统
 */
import { AsyncStorage } from 'react-native';

class StorageUtils {
    /**
     * 根据key获取json数据
     */
    static get(key) {
        return AsyncStorage.getItem(key)
   
    }

    /**
     * 保存key对应的json数值
     * @param key
     * @param value
     */
    static save(key, value) {
        return AsyncStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * 更新key对应的json数值
     * @param key
     * @param value
     * @returns {*}
     */
    static update(key, value) {
        return AsyncStorage.get(key)
            .then(item => {
                value = typeof value === 'string' ? value : Object.assign({}, item, value);
                return AsyncStorage.setItem(key, JSON.stringify(value));
            });
    }

    /**
     * 删除key对应的json数值
     * @param key
     * @returns {SVGLength | void | string | SVGTransform | SVGPathSeg | SVGNumber | DOMPoint}
     */
    static deleteItem(key) {
        return AsyncStorage.removeItem(key);
    }

    /**
     * 清空所有数据
     */
    static clear() {
        return AsyncStorage.clear();
    }
}

export default StorageUtils;

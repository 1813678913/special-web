import {  userRegister, userLogin } from '@/api/login.js'
import { setToken, getToken, removeToken, setUserName, getUserName, removeUserName, removeBread } from '@/untils/systemStorage.js'

const state = {
    token: getToken() || '',
    userName: getUserName() || ''
};

const mutations = {
    SET_TOKEN(state, value) {
        state.token = value
    },
    SET_USERNAME(state, value) {
        state.userName = value
    },
};

const actions = {
    // 注册
    register(context, payLoad) {
        return new Promise((resolve, reject) => {
            userRegister(payLoad).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
    // 登录
    login({ commit }, payLoad) {
        return new Promise((resolve, reject) => {
            userLogin(payLoad).then(response => {
                const userData = response.data.data
                commit('SET_TOKEN', userData.token)
                commit('SET_USERNAME', userData.username)
                setToken(userData.token)
                setUserName(userData.username)
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
    // 退出
    loginOut({ commit }, payLoad) {
        return new Promise((resolve) => {
            commit('SET_TOKEN', '')
            commit('SET_USERNAME', '')
            removeToken()
            removeUserName()
            removeBread()
            resolve()
        })
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}
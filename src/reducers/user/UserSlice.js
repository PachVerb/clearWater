/*
 * @LastEditTime: 2022-05-08 00:55:34
 * @Description: 用户状态相关
 * @Date: 2022-04-28 23:29:43
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { asyncRouterMap } from '@/config/router.config'
import { createSlice } from '@reduxjs/toolkit'

// import { asyncRouterMap } from '@/config/router.config'

export const User = createSlice({
    name: 'user',
    initialState: {
        sessionId: localStorage.getItem('sessionId') || '',
        auth: null,
        userInfo: null,
        routesMap:
            (localStorage.getItem('routes') &&
                JSON.parse(localStorage.getItem('routes'))) ||
            []
    },
    reducers: {
        login(state) {
            state.sessionId = new Date().getTime()
            localStorage.setItem('sessionId', state.sessionId)
        },
        getUserInfo(state, preload) {
            console.log(preload)
            state.userInfo = {
                name: 'admin',
                nickName: 'Pachverb',
                descrip: 'hello, welcome back'
            }
            state.routesMap = JSON.stringify(asyncRouterMap[0].children)
            localStorage.setItem(
                'routes',
                JSON.stringify(asyncRouterMap[0].children)
            )
            state.auth = ['1', '0']
        }
    }
})
// 导出action-type，用于分发action-handle
export const { login, getUserInfo } = User.actions

// 异步thunk

// 获取用户信息
export const getUserInfos = (preload) => (dispatch, getState) => {
    return new Promise((res) => {
        setTimeout(() => {
            dispatch(getUserInfo(preload))
            res({
                ...getState().userInfo
            })
        }, 3000)
    })
}
// 登陆
export const handleLogin = (preload) => (dispatch, getState) => {
    return new Promise((res) => {
        setTimeout(() => {
            dispatch(login(preload))
            res({
                sessionId: getState().user.sessionId,
                message: '登陆成功',
                state: 200
            })
        }, 3000)
    })
}
// 导出Reducer,用于注册到store
export const user = User.reducer

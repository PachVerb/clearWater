/*
 * @LastEditTime: 2022-05-02 16:41:52
 * @Description: 用户状态相关
 * @Date: 2022-04-28 23:29:43
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { createSlice } from '@reduxjs/toolkit'

import { asyncRouterMap } from '@/config/router.config'

export const User = createSlice({
    name: 'user',
    initialState: {
        sessionId: '',
        auth: null,
        userInfo: null,
        routesMap: []
    },
    reducers: {
        login(state) {
            state.sessionId = new Date().getTime()
        },
        getUserInfo(state) {
            state.userInfo = {
                name: 'admin',
                nickName: 'Pachverb',
                descrip: 'hello, welcome back'
            }
            state.routesMap = asyncRouterMap
            state.auth = ['1', '0']
        }
    }
}).reducer

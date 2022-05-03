/*
 * @LastEditTime: 2022-05-04 02:49:40
 * @Description: 应用状态store
 * @Date: 2022-03-28 00:51:24
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import counter from '@/reducers/common/counterReducer.js'
import { user } from '@/reducers/user/UserSlice'
/**
 * redux状态机：默认包含一个根级别的reducer
 * 然后根级别的rootReducer在组合其他的切片子级reducer
 *
 */
// 手动调用所有reducer, 来组织store中的state
// function rootReducer(store = {}, action) {
//     return {
//         counter: counterSlice(store.counter, action)
//     }
// }
export default configureStore({
    // 组织state
    // 方法一:
    // reducer: {
    //     // 传递切片对象，默认redux会将切片reducers传递给combineReducers.
    //     counter: counterSlice,
    //     userState: User
    // }
    // 方法二
    // redux/tookit自动调用处理所有reducer
    // reducer: rootReducer
    // 方法三
    reducer: combineReducers({
        // 组织所有reducer
        counter,
        user
    })
})

// export const BaseCounter = createStore(Counter)

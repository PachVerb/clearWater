/*
 * @LastEditTime: 2022-04-29 00:42:01
 * @Description: 路由鉴权
 * @Date: 2022-04-28 23:03:45
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import BasicLayout from '@/layout/BasicLayout'
export function AuthorRequire({ children }) {
    // const user = useSelector((state) => state.userState)
    // console.log(user)
    return false ? (
        <Navigate to="/login" replace={true} />
    ) : (
        <Route path="/" element={<BasicLayout />}>
            {children}
        </Route>
    )
}

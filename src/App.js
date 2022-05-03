/*
 * @LastEditTime: 2022-05-04 03:53:40
 * @Description:
 * @Date: 2022-03-15 23:30:51
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom' //Switch 更新为 Routes

import { AuthorRequire } from '@/components/AuthorRequre/index'
import { constantRouterMap, asyncRouterMap } from '@/config/router.config.js'

import '@/style/global/App.scss'

export default function App() {
    const session =
        useSelector((state) => state.user.sessionId) ||
        localStorage.getItem('sessionId')
    console.log(session)
    useEffect(() => {
        console.log('更新')
    })
    return (
        <Routes>
            {/* 私有路由 */}
            {session ? (
                AuthorRequire(asyncRouterMap, session)
            ) : (
                <Route
                    path="/"
                    element={<Navigate to="/login" replace={true}></Navigate>}
                ></Route>
            )}

            {/* 公共路由配置 */}
            {constantRouterMap.map((route, idx) => {
                if (route.redirect && !session) {
                    return (
                        <Route key={idx} element={<route.component />}>
                            {route.children.map((route, idx) => (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    element={<route.component />}
                                />
                            ))}
                        </Route>
                    )
                } else {
                    return (
                        <Route
                            key={route.name}
                            path={route.path}
                            element={<route.component />}
                        />
                    )
                }
            })}
        </Routes>
    )
}

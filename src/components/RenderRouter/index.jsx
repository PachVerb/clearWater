/*
 * @LastEditTime: 2022-05-08 00:37:48
 * @Description:
 * @Date: 2022-05-07 23:48:37
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { useEffect } from 'react'

import { Routes, Route, Navigate, useNavigate } from 'react-router-dom' //Switch 更新为 Routes

import { AuthorRequire } from '@/components/AuthorRequre/index'
import { constantRouterMap, asyncRouterMap } from '@/config/router.config.js'

export default function RenderRouter({ sessionID, locationc }) {
    const navcate = useNavigate()

    // 路由守卫逻辑
    useEffect(() => {
        if (!sessionID && locationc.pathname != '/login') {
            navcate('/login', {
                replace: true
            })
        } else if (sessionID && locationc.pathname === '/') {
            navcate('/dashboard', {
                replace: true
            })
        }
    })

    return (
        <Routes>
            {/* 私有路由 */}
            {AuthorRequire(asyncRouterMap, sessionID)}
            {/* 公共路由 */}
            {constantRouterMap.map((route, idx) => {
                if (route.redirect) {
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

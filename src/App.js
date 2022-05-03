/*
 * @LastEditTime: 2022-05-04 00:47:44
 * @Description:
 * @Date: 2022-03-15 23:30:51
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import { Routes, Route } from 'react-router-dom' //Switch 更新为 Routes

import { constantRouterMap, asyncRouterMap } from '@/config/router.config.js'

import { AuthorRequire } from '@/components/AuthorRequre/index'

import '@/style/global/App.scss'

export default class App extends React.Component {
    render() {
        return (
            <Routes>
                {/* 私有路由 */}
                {AuthorRequire(asyncRouterMap)}

                {/* 公共路由配置 */}
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
}

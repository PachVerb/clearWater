/*
 * @LastEditTime: 2022-04-27 00:05:52
 * @Description:
 * @Date: 2022-03-15 23:30:51
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom' //Switch 更新为 Routes

import { constantRouterMap, asyncRouterMap } from '@/config/router.config.js'
import UserLayout from '@/layout/UserLayout.jsx'
import { Auth } from '@/utils/author.js'
import '@/style/global/App.scss'

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route element={<UserLayout />}>
                        {constantRouterMap.map((route, idx) => {
                            return (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    element={<route.component />}
                                />
                            )
                        })}
                    </Route>
                    {Auth()}
                    <Route
                        path="*"
                        element={<div>notthing is here</div>}
                    ></Route>
                </Routes>
            </BrowserRouter>
        )
    }
}

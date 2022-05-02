/*
 * @LastEditTime: 2022-05-02 23:19:04
 * @Description:
 * @Date: 2022-03-15 23:30:51
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import { Routes, Route } from 'react-router-dom' //Switch 更新为 Routes

import { constantRouterMap, asyncRouterMap } from '@/config/router.config.js'
import UserLayout from '@/layout/UserLayout.jsx'
import BasicLayout from '@/layout/BasicLayout'

import { AuthorRequire } from '@/components/AuthorRequre/index'
import { RouteHanle } from '@/core/permission'

import '@/style/global/App.scss'

export default class App extends React.Component {
    render() {
        return (
            <Routes>
                {/* <Route path="/" axact element={BasicLayout}></Route> */}
                {/* <Route element={<UserLayout />}>
                    {constantRouterMap.map((route, idx) => {
                        return (
                            <Route
                                key={idx}
                                path={route.path}
                                element={<route.component />}
                            />
                        )
                    })}
                </Route> */}
                {/* <Route path="/" element={<AuthorRequire></AuthorRequire>}>
                    <RouteHanle routes={asyncRouterMap}></RouteHanle>
                </Route> */}
                <Route path="*" element={<div>notthing is here</div>}></Route>
            </Routes>
        )
    }
}

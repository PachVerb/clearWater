/*
 * @LastEditTime: 2022-05-03 02:40:57
 * @Description:
 * @Date: 2022-03-15 23:30:51
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import {
    Routes,
    Route,
    BrowserRouter as Router,
    HashRouter as HRouter
} from 'react-router-dom' //Switch 更新为 Routes

import { constantRouterMap, asyncRouterMap } from '@/config/router.config.js'

import BasicLayout from '@/layout/BasicLayout'
import UsesrLayout from './layout/UserLayout'
import PageA from '@/pages/page1'
import PageB from '@/pages/page2'
import Login from '@/pages/login/index'
import Dashboard from './pages/Dashboard'
import Production from '@/pages/production/ProductionSearch/index'

import '@/style/global/App.scss'

export default class App extends React.Component {
    render() {
        return (
            <HRouter>
                <Routes>
                    <Route path="/" element={<BasicLayout />}>
                        <Route index element={<UsesrLayout />} />
                        <Route path="teams" element={<Dashboard />}>
                            <Route path=":teamId" element={<PageA />} />
                            <Route path="new" element={<PageB />} />
                            <Route index element={<Production />} />
                        </Route>
                    </Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route
                        path="*"
                        element={<div>notthing is here</div>}
                    ></Route>
                </Routes>
            </HRouter>
        )
    }
}

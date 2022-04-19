/*
 * @LastEditTime: 2022-04-19 10:52:25
 * @Description: 路由配置
 * @Date: 2022-03-17 00:30:51
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import App from '@/App.js'
import NotFund from '@/pages/common/404'

import loadable from '@loadable/component'

// import Loadable from 'react-loadable'
// import { AsyncComponent } from '@/core/asyncComponent.js'
let router = [
    {
        path: '/',
        name: 'home',
        component: App,
        children: [
            {
                path: '/index',
                menuname: 'Page-1',
                name: 'user',
                component: loadable(() =>
                    import(/*webpackChunkName: "Page1" */ '@/pages/page1/index')
                )
            },
            {
                path: '/page2',
                menuname: 'Page-2',
                name: 'post',
                component: loadable(() =>
                    import(/*webpackChunkName: "Page2"*/ '@/pages/page2/index')
                )
            }
        ]
    },
    {
        path: '*',
        name: '404',
        component: NotFund
    }
]

export default router

/*
 * @LastEditTime: 2022-05-04 00:58:04
 * @Description: 用户登陆页布局
 * @Date: 2022-04-20 11:39:34
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Outlet } from 'react-router-dom'

import '@/style/layout.scss'

export default function UsesrLayout() {
    return (
        <div className="user-layout-container">
            <div className="layout-left-bg"></div>
            <div className="layout-right-content">
                <Outlet />
            </div>
        </div>
    )
}

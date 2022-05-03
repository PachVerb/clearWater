/*
 * @LastEditTime: 2022-05-03 20:29:55
 * @Description: 二级页面展示
 * @Date: 2022-04-20 15:17:50
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Outlet } from 'react-router-dom'
export default function PageView() {
    return (
        <div>
            二级路由页面-
            <Outlet />
        </div>
    )
}

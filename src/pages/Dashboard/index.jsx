/*
 * @LastEditTime: 2022-05-03 01:34:03
 * @Description: 首页
 * @Date: 2022-04-21 10:25:39
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Outlet } from 'react-router-dom'
export default function Dashboard() {
    return (
        <div>
            <h3>首页</h3>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

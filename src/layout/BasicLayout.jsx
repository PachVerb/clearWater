/*
 * @LastEditTime: 2022-04-21 15:38:53
 * @Description: 基本内容布局
 * @Date: 2022-04-20 11:43:01
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Outlet } from 'react-router-dom'
export default function BasicLayout() {
    return (
        <div>
            <Outlet />
        </div>
    )
}

/*
 * @LastEditTime: 2022-04-27 23:58:56
 * @Description: 基本内容布局
 * @Date: 2022-04-20 11:43:01
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Outlet } from 'react-router-dom'
export default function BasicLayout() {
    return (
        <div>
            <h2>baselyout</h2>
            <Outlet />
        </div>
    )
}

/*
 * @LastEditTime: 2022-05-03 01:37:59
 * @Description: 基本内容布局
 * @Date: 2022-04-20 11:43:01
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Outlet, Link, useNavigate } from 'react-router-dom'

const rstyle = {
    display: 'flex'
}

export default function BasicLayout() {
    return (
        <div style={rstyle}>
            <div
                style={{
                    width: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px',
                    justifyContent: 'space-around'
                }}
            >
                <Link to="/">首页</Link>
                <Link to="teams">teams</Link>
                <Link to="/login">登陆</Link>
            </div>
            <div>
                <h3>right</h3>
                <Outlet />
            </div>
        </div>
    )
}

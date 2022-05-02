/*
 * @LastEditTime: 2022-05-03 02:06:05
 * @Description:
 * @Date: 2022-04-18 18:17:53
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function () {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const nagetive = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        console.log(name, password)
        alert('登陆成功')
        // nagetive('/teams/new', {
        //     replace: true // 清除历史栈，跳转路由
        // })
        nagetive(`/teams/${'from-login=transfer-params'}`, {
            replace: true
        })
    }

    return (
        <div>
            <h3>登录页</h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button>提交</button>
                </form>
            </div>
        </div>
    )
}

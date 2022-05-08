/*
 * @LastEditTime: 2022-05-08 18:27:49
 * @Description:
 * @Date: 2022-03-15 23:30:51
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom' //Switch 更新为 Routes

import RenderRouter from './components/RenderRouter'

import '@/style/global/App.scss'

export default function App() {
    const session =
        useSelector((state) => state.user.sessionId) ||
        localStorage.getItem('sessionId')
    const locationc = useLocation()
    return <RenderRouter sessionID={session} locationc={locationc} />
}

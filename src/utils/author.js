/*
 * @LastEditTime: 2022-05-08 17:44:23
 * @Description:
 * @Date: 2022-04-26 23:58:03
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Navigate, Route, useLocation } from 'react-router-dom'
export function Auth() {
    console.log(history)
    return true ? (
        <Route
            path="/"
            element={<Navigate to={'/login'} replace={true} />}
        ></Route>
    ) : (
        <Route
            path="/login"
            element={<Navigate to={'/login'} replace={true} />}
        ></Route>
    )
}

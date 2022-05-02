/*
 * @LastEditTime: 2022-04-28 00:13:56
 * @Description:
 * @Date: 2022-04-26 23:58:03
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Navigate, Route, useLocation } from 'react-router-dom'
export function Auth() {
    // const history = useLocation()
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

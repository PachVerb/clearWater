/*
 * @LastEditTime: 2022-04-27 00:00:41
 * @Description:
 * @Date: 2022-04-26 23:58:03
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Navigate, Route } from 'react-router-dom'
export function Auth() {
    return (
        <Route
            path="/"
            element={<Navigate to={'/login'} replace={true} />}
        ></Route>
    )
    // return <Navigate to={'/login'} replace={true} />
}

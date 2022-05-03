/*
 * @LastEditTime: 2022-05-04 00:40:42
 * @Description: 路由鉴权
 * @Date: 2022-04-28 23:03:45
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Route, Navigate, Routes, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export function AuthorRequire(p) {
    // const user = useSelector((state) => state.userState)
    // console.log(user)
    // const routes = p.route
    // const location = useLocation()
    const routes = p
    const isLogin = false
    // console.log(routes)
    // return isdeep ? (
    //     <Navigate to="/login" replace={true} />
    // ) : (

    // 登陆鉴权
    if (isLogin) {
        return (
            <>
                {routes.map((rte, idx) => {
                    // console.log(rte.name, rte.component, rte.path)
                    return (
                        <Route
                            key={rte.name}
                            path={rte.path}
                            exact
                            element={<rte.component />}
                        >
                            {rte.children && rte.children.length
                                ? // <AuthorRequire route={rte.children} />
                                  AuthorRequire(rte.children)
                                : null}
                        </Route>
                    )
                })}
            </>
        )
    } else {
        return (
            <Route
                path="/"
                element={<Navigate to="/login" replace={true} />}
            ></Route>
        )
    }
}

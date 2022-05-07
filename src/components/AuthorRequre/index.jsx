/*
 * @LastEditTime: 2022-05-07 23:48:42
 * @Description: 路由鉴权
 * @Date: 2022-04-28 23:03:45
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import { Route } from 'react-router-dom'

export function AuthorRequire(p, isLogin) {
    // const routes = p.route
    // const location = useLocation()
    const routes = p
    // console.log(routes)
    // return isdeep ? (
    //     <Navigate to="/login" replace={true} />
    // ) : (
    console.log('更新, author')
    // 登陆鉴权
    console.log(isLogin)
    // if (isLogin) {
    return (
        <>
            {routes.map((rte) => {
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
    // } else {
    //     return (
    //         <Route
    //             path="/"
    //             element={<Navigate to="/login" replace={true} />}
    //         ></Route>  //     )
    // }
}

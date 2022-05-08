/*
 * @LastEditTime: 2022-05-08 17:47:23
 * @Description: 路由鉴权
 * @Date: 2022-04-28 23:03:45
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import { Route } from 'react-router-dom'

export function AuthorRequire(p) {
    const routes = p
    console.log('更新, author')

    return (
        <>
            {routes.map((rte) => {
                return (
                    <Route
                        key={rte.name}
                        path={rte.path}
                        exact
                        element={<rte.component />}
                    >
                        {rte.children && rte.children.length
                            ? AuthorRequire(rte.children)
                            : null}
                    </Route>
                )
            })}
        </>
    )
}

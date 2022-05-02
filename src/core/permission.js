/*
 * @LastEditTime: 2022-04-29 00:24:29
 * @Description: 权限管理
 * @Date: 2022-04-28 23:20:44
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Route } from 'react-router-dom'
export function RouteHanle({ routes }) {
    // const routes = useSelector((s) => s.user.routesMap)
    if (!routes) {
        return null
    }
    return routes.map((v) => {
        return (
            <>
                <Route path={v.path} element={<v.component />}></Route>
                {RouteHanle(routes.children)}
            </>
        )
    })
}

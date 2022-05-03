import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/*
 * @LastEditTime: 2022-05-03 20:39:33
 * @Description:
 * @Date: 2022-04-18 18:17:53
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { asyncRouterMap } from '@/config/router.config'
import { Deep } from '@/components/deep'
export default function () {
    const location = useLocation()
    console.log(location)
    // useEffect(() => {
    //     console.log(location)
    // })
    return (
        <div>
            <h3>Page-1</h3>
            <Deep list={asyncRouterMap} />
        </div>
    )
}

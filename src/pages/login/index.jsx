import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/*
 * @LastEditTime: 2022-05-04 00:48:23
 * @Description:
 * @Date: 2022-04-18 18:17:53
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Button } from 'antd'
export default function () {
    const location = useLocation()

    // useEffect(() => {
    //     console.log(location)
    // })
    return (
        <div>
            <Button type="primary">Primary Button</Button>
        </div>
    )
}

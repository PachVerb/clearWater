/*
 * @LastEditTime: 2022-05-03 02:08:54
 * @Description:
 * @Date: 2022-04-18 18:17:53
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { useParams } from 'react-router-dom'
export default function () {
    const params = useParams()
    console.log(params)
    return (
        <div>
            <h3>Page-1</h3>
            <div>{params.teamId}</div>
        </div>
    )
}

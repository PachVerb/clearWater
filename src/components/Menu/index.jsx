/*
 * @LastEditTime: 2022-05-08 17:27:18
 * @Description:
 * @Date: 2022-05-08 02:16:10
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    AppstoreOutlined,
    MoneyCollectOutlined,
    NodeExpandOutlined,
    GroupOutlined,
    DatabaseOutlined,
    SettingOutlined,
    HourglassOutlined,
    FileOutlined
} from '@ant-design/icons'
import { Menu } from 'antd'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { transFormTree } from '@/utils/helper'

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type
    }
}

function createMenu(routes) {
    return routes.map((v) => {
        if (v.children) {
            return getItem(v.menuname, v.path, <AppstoreOutlined />, [
                ...createMenu(v.children)
            ])
        } else {
            return getItem(v.menuname, v.path, <AppstoreOutlined />)
        }
    })
}

export default function Menus() {
    const routes = useSelector((state) => state.user.routesMap)
    const navigate = useNavigate()
    let item = null
    if (routes) {
        item = createMenu(transFormTree(JSON.parse(routes)))
    }

    return (
        <Menu
            onClick={(e) => navigate(e.key)}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            theme="dark"
            mode="inline"
            items={item}
        />
    )
}

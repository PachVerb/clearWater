/*
 * @LastEditTime: 2022-05-08 19:12:17
 * @Description:
 * @Date: 2022-05-08 02:16:10
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import {
    AppstoreOutlined,
    SettingOutlined,
    FileOutlined,
    DollarOutlined,
    ShareAltOutlined,
    DeploymentUnitOutlined,
    DatabaseOutlined,
    FunnelPlotOutlined
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
const menuIcon = {
    dashboard: <AppstoreOutlined />,
    contract: <FileOutlined />,
    finance: <DollarOutlined />,
    productionSchedul: <ShareAltOutlined />,
    productionCenter: <DeploymentUnitOutlined />,
    storage: <DatabaseOutlined />,
    statistics: <FunnelPlotOutlined />,
    system: <SettingOutlined />
}
function createMenu(routes, menuIcon) {
    return routes.map((v) => {
        if (v.children) {
            if (menuIcon[v.name]) {
                return getItem(v.menuname, v.path, menuIcon[v.name], [
                    ...createMenu(v.children, menuIcon)
                ])
            } else {
                return getItem(v.menuname, v.path, '', [
                    ...createMenu(v.children, menuIcon)
                ])
            }
        } else {
            return getItem(
                v.menuname,
                v.path,
                menuIcon[v.name] ? menuIcon[v.name] : ''
            )
        }
    })
}

export default function Menus() {
    const routes = useSelector((state) => state.user.routesMap)
    const navigate = useNavigate()
    let item = null
    if (routes) {
        item = createMenu(transFormTree(JSON.parse(routes)), menuIcon)
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

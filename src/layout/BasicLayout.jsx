/*
 * @LastEditTime: 2022-05-08 02:35:26
 * @Description: 基本内容布局
 * @Date: 2022-04-20 11:43:01
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SettingOutlined
} from '@ant-design/icons'
import { Layout, Dropdown, Space, Menu } from 'antd'
import { Outlet } from 'react-router-dom'

import '@/style/layout.scss'
import Menus from '@/components/Menu'

const { Header, Sider, Content } = Layout
class SiderDemo extends React.Component {
    state = {
        collapsed: false
    }
    constructor() {
        super()

        this.menu = (
            <Menu
                items={[
                    {
                        label: (
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.antgroup.com"
                            >
                                1st menu item
                            </a>
                        )
                    },
                    {
                        label: (
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.aliyun.com"
                            >
                                2nd menu item (disabled)
                            </a>
                        ),
                        icon: <SettingOutlined />,
                        disabled: true
                    },
                    {
                        label: (
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.luohanacademy.com"
                            >
                                3rd menu item (disabled)
                            </a>
                        ),
                        disabled: true
                    },
                    {
                        danger: true,
                        label: 'a danger item'
                    }
                ]}
            />
        )
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        // this.items = this.createMenu()
        // console.log(this.items)
        return (
            <Layout className="layout-container">
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menus />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{ padding: 0 }}
                    >
                        {React.createElement(
                            this.state.collapsed
                                ? MenuUnfoldOutlined
                                : MenuFoldOutlined,
                            {
                                className: 'trigger',
                                onClick: this.toggle
                            }
                        )}
                        <Dropdown overlay={this.menu}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>Hover me</Space>
                            </a>
                        </Dropdown>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
const BasicLayout = () => <SiderDemo />
export default BasicLayout

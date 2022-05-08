/*
 * @LastEditTime: 2022-05-08 03:24:47
 * @Description: 基本内容布局
 * @Date: 2022-04-20 11:43:01
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'

import Nav from './Nav'
import Menus from '@/components/Menu'
import '@/style/layout.scss'

const { Header, Sider, Content } = Layout
class SiderDemo extends React.Component {
    state = {
        collapsed: false
    }
    constructor() {
        super()
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    loginOut() {}

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
                        <Nav />
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

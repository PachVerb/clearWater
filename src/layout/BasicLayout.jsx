/*
 * @LastEditTime: 2022-05-04 05:12:32
 * @Description: 基本内容布局
 * @Date: 2022-04-20 11:43:01
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
import { Layout, Menu, Dropdown, Space } from 'antd'
import { Outlet } from 'react-router-dom'

const { Header, Sider, Content } = Layout

import '@/style/layout.scss'
class SiderDemo extends React.Component {
    state = {
        collapsed: false
    }
    constructor() {
        super()

        this.items = [
            this.getItem('看板', 'dashboard', <AppstoreOutlined />),
            this.getItem('合同中心', 'sub1', <FileOutlined />, [
                this.getItem('意向合同', '4'),
                this.getItem('订单管理', '6'),
                this.getItem('冻结订单', '7'),
                this.getItem('外协订单', '8')
            ]),

            this.getItem('财务中心', 'sub2', <MoneyCollectOutlined />, [
                this.getItem('入账单', '9'),
                this.getItem('收款单', '10'),
                this.getItem('核销单', '11'),
                this.getItem('退款单', '12')
            ]),
            this.getItem('排产中心', 'sub3', <NodeExpandOutlined />, [
                this.getItem('订单转排产', '13'),
                this.getItem('排查策略管理', '14')
            ]),
            this.getItem('生产中心', 'sub4', <HourglassOutlined />, [
                this.getItem('生产搜索', '50'),
                this.getItem('备料清单', '51'),
                this.getItem('生产任务', '52')
            ]),
            this.getItem('仓储中心', 'sub5', <GroupOutlined />, [
                this.getItem('成品仓管理', '15'),
                this.getItem('原材料仓管理', '16'),
                this.getItem('物料管理', '17'),
                this.getItem('五金打包', '18')
            ]),
            this.getItem('数据统计', 'sub6', <DatabaseOutlined />, [
                this.getItem('运营数据', '19'),
                this.getItem('报工数据', '20'),
                this.getItem('工作中心数据', '21')
            ]),
            this.getItem('工厂配置', 'sub7', <SettingOutlined />, [
                this.getItem('配置中心', '22'),
                this.getItem('部门级员工管理', '23'),
                this.getItem('客户管理', '24'),
                this.getItem('供应商管理', '25'),
                this.getItem('产线管理', '26'),
                this.getItem('工作中心管理', '27'),
                this.getItem('组件分拣管理', '28'),
                this.getItem('报工异常原因配置', '29'),
                this.getItem('提示设置', '30')
            ])
        ]

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

    getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type
        }
    }
    onClick = (e) => {
        console.log('click ', e)
    }

    render() {
        return (
            <Layout className="layout-container">
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menu
                        onClick={this.onClick}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        theme="dark"
                        mode="inline"
                        items={this.items}
                    />
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

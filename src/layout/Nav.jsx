/*
 * @LastEditTime: 2022-05-08 17:34:07
 * @Description:
 * @Date: 2022-05-08 03:01:36
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Modal, notification, Space } from 'antd'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { hanldeLogout } from '@/reducers/user/UserSlice'

const { confirm } = Modal

export default function Nav() {
    const navigate = useNavigate()
    const dispath = useDispatch()
    function handleNav(e) {
        const magicRoute = {
            setting() {
                navigate('/system/manage', {
                    replace: true
                })
            },
            async loginout() {
                confirm({
                    title: '确认退出系统?',
                    icon: <ExclamationCircleOutlined />,
                    content: '',
                    async onOk() {
                        await dispath(hanldeLogout('login'))
                        navigate('/login', {
                            replace: true
                        })
                        notification.success({
                            message: '提示',
                            description: '操作成功'
                        })
                    }
                })
            }
        }
        magicRoute[e.key]()
    }
    return (
        <Dropdown
            overlay={
                <Menu
                    onClick={(e) => handleNav(e)}
                    items={[
                        {
                            key: 'setting',
                            label: '设置'
                        },
                        {
                            key: 'loginout',
                            label: '注销'
                        }
                    ]}
                />
            }
        >
            <a onClick={(e) => e.preventDefault()}>
                <Space>Pachverb</Space>
            </a>
        </Dropdown>
    )
}

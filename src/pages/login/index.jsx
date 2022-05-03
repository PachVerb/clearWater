/*
 * @LastEditTime: 2022-05-04 03:12:38
 * @Description:
 * @Date: 2022-04-18 18:17:53
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import { useState } from 'react'

import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Form, Input, Button, Checkbox, notification } from 'antd'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { handleLogin, getUserInfo } from '@/reducers/user/UserSlice'

import '@/pages/login/login.scss'

const NormalLoginForm = () => {
    const [loading, setLoading] = useState(false)
    const dispath = useDispatch()
    const navigate = useNavigate()

    const onFinish = async (values) => {
        console.log('Received values of form: ', values)
        setLoading(true)
        const res = await dispath(handleLogin(values))
        console.log(res)
        await dispath(getUserInfo(res.sessionId))
        setLoading(false)
        navigate('/dashboard', {
            replace: true
        })
        notification.success({
            message: '提示',
            description: '登陆成功!'
        })
    }

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!'
                    }
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!'
                    }
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button
                    loading={loading}
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                >
                    登陆
                </Button>
            </Form.Item>
        </Form>
    )
}

const Login = () => <NormalLoginForm />

export default Login

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/*
 * @LastEditTime: 2022-05-04 02:13:07
 * @Description:
 * @Date: 2022-04-18 18:17:53
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import '@/pages/login/login.scss'

const NormalLoginForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values)
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

export default () => <NormalLoginForm />

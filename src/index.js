/*
 * @LastEditTime: 2022-04-21 18:14:45
 * @Description: 应用打包入口文件
 * @Date: 2022-03-15 00:37:34
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import ReactDOM from 'react-dom'

import '@/style/global/index.scss'

import store, { BaseCounter } from './app/store'
import { Provider } from 'react-redux'
import App from './App'

const render = () =>
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    )
render()

// BaseCounter.subscribe(render) // redux基础库实现状态管理，并订阅视图更新

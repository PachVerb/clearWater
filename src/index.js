/*
 * @LastEditTime: 2022-05-02 22:37:32
 * @Description: 应用打包入口文件
 * @Date: 2022-03-15 00:37:34
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import '@/style/global/index.scss'

import store from './app/store'
import { Provider } from 'react-redux'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
const render = () =>
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <ErrorBoundary>
                        <App />
                    </ErrorBoundary>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
render()

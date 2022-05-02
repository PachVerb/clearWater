/*
 * @LastEditTime: 2022-03-27 17:49:36
 * @Description: 主题context
 * @Date: 2022-03-26 00:23:21
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { createContext } from 'react/cjs/react.development'
export const theme = {
    light: {
        foreground: '#000000',
        background: '#eeeeee'
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222'
    }
}
export const ThemeContextFull = createContext(theme.dark)
// 确保传递给 createContext 的默认值数据结构是调用的组件（consumers）所能匹配的！
export const ThemerInner = createContext({
    theme: theme.dark,
    toggleTheme: () => {} // 必须
})

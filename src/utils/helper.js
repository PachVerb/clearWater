/*
 * @LastEditTime: 2022-05-08 01:40:47
 * @Description:
 * @Date: 2022-03-19 03:36:03
 * @Author: wangshan
 * @LastEditors: wangshan
 */
export function Cbind(context, fn) {
    return (...args) => {
        fn(...args)
    }
}

// 摄氏温度转华氏温度
export function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9
}
// 华氏温度转摄氏温度
export function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32
}

// 数结构格式化
/**
 * @param data {Array} 树结构数据
 *
 */
export function transFormTree(data, root = '/') {
    return data.map((v) => {
        const prepath = root == '/' ? root + v.path : root + '/' + v.path
        if (v.children) {
            return {
                path: prepath,
                menuname: v.meta.title,
                children: transFormTree(v.children, prepath)
            }
        } else {
            return {
                path: prepath,
                menuname: v.meta.title
            }
        }
    })
}

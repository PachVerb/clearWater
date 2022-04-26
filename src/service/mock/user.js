/*
 * @LastEditTime: 2022-04-26 22:57:55
 * @Description:
 * @Date: 2022-04-26 22:38:08
 * @Author: wangshan
 * @LastEditors: wangshan
 */

const { func } = require('prop-types')

const admin = [
    {
        name: 'admin',
        password: 'admin'
    },
    {
        name: 'xialuoke',
        password: '123456'
    }
]
const insertSession = []
const userInfoList = []
function login(checkValue) {
    const { name, password } = checkValue
    const checkStatus = admin.find((v) => v.name === name)
    if (checkStatus && checkStatus.password === password) {
        const sessionId = new Date().getTime()

        insertSession.push(sessionId)

        userInfoList[sessionId] = {
            auth: ['admin'],
            timestate: new Date().getTime(),
            nickName: 'pachverb',
            welcome: 'hello, Pachverb! welcome back.',
            comment: '全宇宙最靓仔的就是我，哈哈哈!!'
        }

        return {
            status: 'ok',
            code: 200,
            sessionId,
            timestap: 233435681212
        }
    } else {
        return {
            status: 'ok',
            code: 200,
            message: '账号或密码错误'
        }
    }
}

function getUserInfo(sesssionId) {
    if (insertSession.includes[sesssionId]) {
        return userInfoList[sesssionId]
    }
}

export { insertSession, getUserInfo }

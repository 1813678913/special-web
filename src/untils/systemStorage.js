import cookie from 'cookie_js'

const ccToken = 'cc_token'
const ccUserName = 'cc_username'
const ccBread = 'cc_bread'
const ccTheme = 'cc_theme'

// token
export function setToken(token) {
    return cookie.set(ccToken, token)
}

export function getToken() {
    return cookie.get(ccToken)
}

export function removeToken() {
    return cookie.remove(ccToken)
}

// 用户名
export function setUserName(username) {
    return cookie.set(ccUserName, username)
}

export function getUserName() {
    return cookie.get(ccUserName)
}

export function removeUserName() {
    return cookie.remove(ccUserName)
}

// 面包屑
export function setBread(bread) {
    return cookie.set(ccBread, bread)
}

export function getBread() {
    return cookie.get(ccBread)
}

export function removeBread() {
    return cookie.remove(ccBread)
}

// 主题
export function setTheme(theme) {
    return cookie.set(ccTheme, theme)
}

export function getTheme() {
    return cookie.get(ccTheme)
}

export function removeTheme() {
    return cookie.remove(ccTheme)
}
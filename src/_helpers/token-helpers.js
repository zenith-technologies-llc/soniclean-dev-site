import Cookies from 'universal-cookie'

export const tokenName = 'access_token'
export const userIdName = 'userId'

export const getToken = () => {
    const cookies = new Cookies()
    return cookies.get(tokenName)
}

export const getUserId = () => {
    const cookies = new Cookies()
    return cookies.get(userIdName)
}

export const setToken = (token, created, ttl, userId) => {
    const cookies = new Cookies()
    cookies.set(tokenName, token, { maxAge: ttl })
    cookies.set(userIdName, userId)
}

export const removeToken = () => {
    const cookies = new Cookies()
    cookies.remove(tokenName)
    cookies.remove(userIdName)
}

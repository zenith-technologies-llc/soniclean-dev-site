import { createAction, handleActions } from 'redux-actions'

import { defineLoopActions, 
    requestSuccess,
    requestFail,
    requestResetState
} from 'utils/state'

import { setToken, removeToken, getToken } from '_helpers/token-helpers'
import { history } from '_helpers/history'

import {
    LOGIN,
    LOGOUT
} from './constants'

/* Initial state */

const initialState = {
    loggingIn: false,
    loggedIn: !!getToken(),
    userEmail: "",
    errorLogin: false,
};

/* API Fetch function */

export const fetchLogin = (email, password) => {
    return dispatch => {
        dispatch(login())
        const userToken = 'userToken'
        setToken(userToken)
        setTimeout(() => dispatch(loginSuccess()), 2000)
        history.push('/sales')
        
    }
}

export const fetchLogout = () => {
    return dispatch => {
        removeToken()
        dispatch(logout())
        history.push('/login')
    }
}

/* Action creators */

export const {
    start: login,
    success: loginSuccess,
    fail: loginFail,
} = defineLoopActions(LOGIN)

export const logout = createAction(LOGOUT)

/* Reducer */

export const authReducer = handleActions({

    [LOGIN]: (state) => {
        return {
            ...state,
            loggingIn: true,
            errorLogin: false
        };
    },

    [requestSuccess(LOGIN)]: (state) => {
        return {
            ...state,
            loggingIn: false,
            errorLogin: false,
            loggedIn: true
        }   
    },

    [LOGOUT] : (state) => {
        return {
            loggingIn: false,
            errorLogin: false,
            loggedIn: false
        }
    }


}, initialState)
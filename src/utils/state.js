import { createAction } from 'redux-actions'

export const requestSuccess = (actionType) => `${actionType}/success`

export const requestFail = (actionType) => `${actionType}/fail`

export const requestResetState = (actionType) => `${actionType}/reset`

export const defineLoopActions = (actionType) => ({
    start: createAction(actionType),
    success: createAction(requestSuccess(actionType)),
    fail: createAction(requestFail(actionType)),
    reset: createAction(requestResetState(actionType))
})
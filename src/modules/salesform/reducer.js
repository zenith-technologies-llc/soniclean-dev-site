import { createAction, handleActions } from 'redux-actions'

import {
    SALESFORM_ORDERTYPE,
    SELECT_INVENTORY,
    SELECT_SHIP,
    SELECT_SHIPPINGINFO
} from './constants'

const initialState = {
    orderType: -1,
    inventory: [],
    ship: [],
    shippinginfor: -1
};


/* Action creators */

export const selectOrderType = createAction(SALESFORM_ORDERTYPE)
export const selectInventory = createAction(SELECT_INVENTORY)
export const selectShip = createAction(SELECT_SHIP)
export const selectShippingInfor = createAction(SELECT_SHIPPINGINFO)

export const SalesFormReducer = handleActions({

    [SALESFORM_ORDERTYPE]: (state, {payload}) => {
        return {
            ...state,
            orderType: payload
        };
    },

    [SELECT_INVENTORY]: (state, { payload }) => {
        return {
            ...state,
            inventory: payload
        };
    },
    [SELECT_SHIP]: (state, { payload }) => {
        return {
            ...state,
            ship: payload
        };
    },
    [SELECT_SHIPPINGINFO]: (state, { payload }) => {
        return {
            ...state,
            shippinginfor: payload
        };
    },
}, initialState)
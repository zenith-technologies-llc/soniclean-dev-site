import { salesformConstants } from "../../_actionConstants";
import { history } from '../../_helpers/history'

export const salesformActions = {
    selectOrderType,
    selectInventory,
    selectShip,
    selectShippingInfor
};

function selectOrderType(orderType) {
    return dispatch => {
        dispatch({ type: salesformConstants.SALESFORM_ORDERTYPE, payload: orderType });
    }
}

function selectInventory(data) {
    return dispatch => {
        dispatch({ type: salesformConstants.SELECT_INVENTORY, payload: data})
    }
}

function selectShip(data) {
    return dispatch => {
        dispatch({ type: salesformConstants.SELECT_SHIP, payload: data })
    }
}

function selectShippingInfor(data) {
    return dispatch => {
        dispatch({type: salesformConstants.SELECT_SHIPPINGINFO, payload: data})
    }
}
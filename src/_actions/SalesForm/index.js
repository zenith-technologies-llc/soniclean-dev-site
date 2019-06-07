import { salesformConstants } from "../../_actionConstants";
import { history } from '../../_helpers/history'

export const salesformActions = {
    selectOrderType,
};

function selectOrderType(orderType) {
    return dispatch => {
        dispatch({ type: salesformConstants.SALESFORM_ORDERTYPE, payload: orderType });
    }
}

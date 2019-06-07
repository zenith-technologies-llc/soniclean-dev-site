import { salesformConstants } from "../../_actionConstants";

const INITIAL_STATE = {
   orderType: -1
};

export function SalesFormReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case salesformConstants.SALESFORM_ORDERTYPE:
        return {
          ...state,
            orderType: action.payload
        };
      default:
        return state;
    }
}
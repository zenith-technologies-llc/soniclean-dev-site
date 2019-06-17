import { salesformConstants } from "../../_actionConstants";

const INITIAL_STATE = {
   orderType: -1,
   inventory: [],
   ship: [],
   shippinginfor: -1
};

export function SalesFormReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case salesformConstants.SALESFORM_ORDERTYPE:
        return {
          ...state,
            orderType: action.payload
        };
        case salesformConstants.SELECT_INVENTORY:
          return {
            ...state,
            inventory: action.payload
          }
        case salesformConstants.SELECT_SHIP:
          return {
            ...state,
            ship: action.payload
          }
        case salesformConstants.SELECT_SHIPPINGINFO:
          return {
            ...state,
            shippinginfor: action.payload
          }
        case salesformConstants.LOGOUT:
          return {
            orderType: -1,
            inventory: [],
            ship: []
          }
      default:
        return state;
    }
}
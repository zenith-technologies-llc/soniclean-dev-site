import { userConstants } from "../../_actionConstants";

const INITIAL_STATE = {
    stateData: []
};

export function BrandReducer(state = INITIAL_STATE, action) {
   
    switch (action.type) {
        case userConstants.FETCH_BRANDS_RECEIVED:
            return {
                ...state,
                brandData: action.payload,
            };;
        default:
            return state;
    }
}
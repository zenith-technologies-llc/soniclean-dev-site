import { userConstants } from "../../_actionConstants";

const INITIAL_STATE = {
    stateData: []
};

export function StateReducer(state = INITIAL_STATE, action) {
   
    switch (action.type) {
        case userConstants.FETCH_STATES_RECEIVED:
            console.log("StateReducer FETCH_STATES_RECEIVED");
            console.log( action.payload);
            const ss={
                ...state,
                stateData: action.payload,
            };
            return ss;
        default:
            return state;
    }
}
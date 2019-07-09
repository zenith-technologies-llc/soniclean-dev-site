import { handleActions } from 'redux-actions'
import {STATE } from './constants'

const initialState = {
    stateData: []
};

export const fetchStates = () => {
    return dispatch => {
        const appBaseURL = process.env.REACT_APP_API_URL;
        fetch(appBaseURL + "states/1", {
            method: "GET",
            headers: [
                ["Content-Type", "application/json"],
            ]
        })
            .then(response => response.json())
            .then(data =>  {               
                var stateOptions = data.data.map(state => { return { value: state.id, label: state.name } })
                dispatch({
                    type: STATE,
                    payload: stateOptions
                });
            });
    }
}

export const StateReducer = handleActions({
    [STATE]: (state, {payload}) => {
        return {
            ...state,
            stateData: payload,
        };
    },
}, initialState)

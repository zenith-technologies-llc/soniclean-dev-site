import { handleActions } from 'redux-actions'
import {BRANDS } from './constants'

const initialState = {
    brandData: []
};

export const  fetchBrands =() => {
    return dispatch => {
        const appBaseURL = process.env.REACT_APP_API_URL
        fetch(appBaseURL + "brands", {
            method: "GET",
            headers: [
              ["Content-Type", "application/json"],
            ]})
            .then(response => response.json())
            .then(data => {             
                var new_data = data.data.map(brand => { return { value: brand.id, label: brand.brandname } })
                dispatch({
                    type: BRANDS,
                    payload: new_data
                });
            });
    }
}

export const BrandReducer = handleActions({
    [BRANDS]: (state, {payload}) => {      
        return {
            ...state,
            brandData: payload,
        };
    },
}, initialState)

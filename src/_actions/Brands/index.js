import { userConstants } from "../../_actionConstants";

export const brandActions = {
    fetchBrands
};

function fetchBrands() {
 
    return dispatch => {
        const appBaseURL = process.env.REACT_APP_API_URL
        fetch(appBaseURL + "brands", {
            method: "GET",
            headers: [
              ["Content-Type", "application/json"],
            ]})
            .then(response => response.json())
            .then(data => {
                console.log(data);
                var new_data = data.data.map(brand => { return { value: brand.id, label: brand.brandname } })
                dispatch({
                    type: userConstants.FETCH_BRANDS_RECEIVED,
                    payload: new_data
                });
            });
    }
}
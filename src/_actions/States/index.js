import { userConstants } from "../../_actionConstants";

export const stateActions = {
    fetchStates
};

function fetchStates() {
    return dispatch => {
        const appBaseURL = process.env.REACT_APP_API_URL;

        fetch(appBaseURL + "states/1", {
            method: "GET",
            headers: [
                ["Content-Type", "application/json"],
            ]
        })
            .then(response => response.json())
            .then(data => {
                var stateOptions = data.data.map(state => { return { value: state.id, label: state.name } })
                dispatch({
                    type: userConstants.FETCH_STATES_RECEIVED,
                    payload: stateOptions
                });
            });
    }
}


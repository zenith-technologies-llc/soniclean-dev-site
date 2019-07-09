//import { userConstants, salesformConstants } from "../../_actionConstants";
import { userConstants } from "../../_actionConstants";
import { userService } from '../../_services'
import { history } from '../../_helpers/history'

export const userActions = {
    login,
    logout
};

function login(email, password) {
    return dispatch => {

        var user = {};
        user.accessToken = "token"
        user.username = 'token'

        console.log(email)

        dispatch(success(user))
        history.push('/')

        // dispatch(request({ email}));

        // userService.login(email, password)
        // .then(user=> {
        //     if(user.token!==undefined) {
        //         dispatch(success(user))
        //         history.push('/')
        //     } else {
        //         dispatch(failure(user.error));    
        //         console.log("a")
        //     }

        // }, error=>{
        //     dispatch(failure(error.toString()));
        // })
    }
    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) {
        return {
            type: userConstants.LOGIN_SUCCESS,
            payload: {
                accessToken: user.token,
                userEmail: email
            }
        };
    }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    return dispatch => {
        dispatch({ type: userConstants.LOGOUT });
     //   dispatch({ type: salesformConstants.LOGOUT })
    }
}
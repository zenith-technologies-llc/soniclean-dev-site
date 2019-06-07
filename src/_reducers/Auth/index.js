import { userConstants } from "../../_actionConstants";

const INITIAL_STATE = {
    loggingIn: false,
    loggedIn: false,
    accessToken: {},
    userEmail: "",
    errorLogin: false,
};

export function AuthReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case userConstants.LOGIN_REQUEST:
        return {
          ...state,
          loggingIn: true,
          errorLogin: false
        };
        case userConstants.LOGIN_SUCCESS:
        return {
          ...state,
          loggedIn: true,
          loggingIn: false,
          errorLogin: false,
          accessToken: action.payload.accessToken,
          userEmail: action.payload.username
        };
      case userConstants.LOGIN_FAILURE:
        return {
          ...state,
          loggingIn: false,
          errorLogin: true,
          loggedIn: false
        };
        case userConstants.LOGOUT:
        return {
          ...INITIAL_STATE
        };
        case userConstants.UPDATE_USER_TOKEN:
        return {
          ...state,
          accessToken: action.accessToken
        };
      default:
        return state;
    }
}
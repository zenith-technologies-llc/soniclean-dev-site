import { combineReducers } from "redux";
import {authReducer} from './auth';
import {salesFormReducer} from './salesform'
const appReducers = combineReducers({
    auth: authReducer,
    salesform: salesFormReducer
});

const VisualbitlizerApp = (state, action) => {
    return appReducers(state, action);
};

export default VisualbitlizerApp;
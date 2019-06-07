import { combineReducers } from "redux";
import { AuthReducer } from './Auth';
import { SalesFormReducer } from './SalesForm'

const appReducers = combineReducers({
    auth: AuthReducer,
    salesform: SalesFormReducer
});

const VisualbitlizerApp = (state, action) => {
    return appReducers(state, action);
};

export default VisualbitlizerApp;
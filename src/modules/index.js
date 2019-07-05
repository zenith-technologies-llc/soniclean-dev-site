import { combineReducers } from "redux";
import { AuthReducer } from './Auth';
import { SalesFormReducer } from './salesForm'
 import { StateReducer } from './States'
 import { BrandReducer } from './Brands'

const appReducers = combineReducers({
    auth: AuthReducer,
    salesform: SalesFormReducer ,
     states: StateReducer,
     brands: BrandReducer
     // but its referenced here
     
});

const VisualbitlizerApp = (state, action) => {
    return appReducers(state, action);
};

export default VisualbitlizerApp; 
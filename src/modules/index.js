import { combineReducers } from "redux";
import { AuthReducer } from './Auth';
import { SalesFormReducer } from './salesForm';
import { StateReducer } from './States';
import { BrandReducer } from './Brands'
//import { EmailNotificationReducer } from './EmailNotification'


const appReducers = combineReducers({
    auth: AuthReducer,
    salesform: SalesFormReducer ,
    states: StateReducer,
    brands: BrandReducer,
   // emailNotificationList: EmailNotificationReducer
     // but its referenced here
     
});

const VisualbitlizerApp = (state, action) => {
    return appReducers(state, action);
};

export default VisualbitlizerApp; 
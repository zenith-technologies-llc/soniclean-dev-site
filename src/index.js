import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./_helpers/store";

import { history } from './_helpers/history'

import App from './App';
import "./index.css";

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <Provider store={store}>
        <Router history={history} >
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

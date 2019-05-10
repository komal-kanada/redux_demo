import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from "react-redux";
import { createStore, applyMiddleware,compose } from "redux";
import reducer from "./store/reducers/reducer";
import thunk from "redux-thunk";

// *********** Manual Middleware ***********
// const logAction = store => {
//     return next => {
//         return action => { 
//             const result = next(action);
//             console.log(`middleware ${ JSON.stringify(result) }`);
//             return result;
//         }
//     }
// };

// const store = createStore(reducer,applyMiddleware(logAction));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer ,composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();

import {createStore} from 'redux';
import rootReducer from '../reducers';

let store;
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    let reduxDevToolConnector = window.__REDUX_DEVTOOLS_EXTENSION__();
    store = createStore(
        rootReducer,
        reduxDevToolConnector
    );
} else {
    store = createStore(
        rootReducer
    );
}

export default store;

import React from "react";
import ReactDOM from "react-dom";
import {Router, Route} from "react-router";
import {Provider} from 'react-redux';
import routes from "./routes";
import history from "./utils/history";
import "./styles.css";
import {getCookie} from "./utils/cookie"
import store from './reduxStore';

if (!getCookie("loggedIn")) {
    history.push("/login")
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
            {routes.map(({title, mount, component}) => <Route key={title} path={mount} component={component}/>)}
        </Router>
    </Provider>,
    document.getElementById('root')
);

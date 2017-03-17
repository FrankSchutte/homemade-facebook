import React from "react";
import ReactDOM from "react-dom";
import {Router, Route} from "react-router";
import routes from "./routes";
import history from "./utils/history";
import "./styles.css";
import {getCookie} from "./utils/cookie"

if (!getCookie("loggedIn")) {
    history.push("/login")
}

ReactDOM.render(
    <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
        {routes.map(({title, mount, component}) => <Route key={title} path={mount} component={component}/>)}
    </Router>,
    document.getElementById('root')
);

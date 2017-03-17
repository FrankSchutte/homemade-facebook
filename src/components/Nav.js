import React from "react";
import history from "../utils/history";
import "./Nav.css";

export default props => (
    <span className={"navigator" + (props.active ? " active" : "")} onClick={() => history.push(props.to)}>{props.children}</span>
);
import React from "react";
import history from "../utils/history";
import "./Header.css";

export default () => (
  <div className="header">
    <button className="navigate" onClick={() => history.push("/")}>Home</button>
    <button className="navigate" onClick={() => history.push("/admin")}>Admin</button>
  </div>
);
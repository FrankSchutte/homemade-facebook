import React from "react";
import "./Content.css";

export default props => (
  <div className={"content " + props.className || ""}>{props.children}</div>
);
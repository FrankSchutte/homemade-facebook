import React from "react";
import marked from "marked";

export default ({data}) => (
    <div className="marked"><span dangerouslySetInnerHTML={{__html: marked(data)}}/></div>
);


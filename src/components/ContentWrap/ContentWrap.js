import React from "react";
import "./ContentWrap.css";

const ContentWrap = props => (
<div className="container">
    <div className="row">
    {props.children}
    </div>
</div>);

export default ContentWrap;

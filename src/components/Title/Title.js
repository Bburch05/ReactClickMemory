import React from "react";
import "./Title.css";

const Title = props => <h1 className="title">
{props.children}<br />
Score: {props.scores.curr} <br />
High Score: {props.scores.high}
</h1>;

export default Title;

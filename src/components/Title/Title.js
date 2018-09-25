import React from "react";
import "./Title.css";

const Title = props => <h1 className="title">
{props.children}<br />
Score: {props.score}
High Score: {props.highscore}
</h1>;

export default Title;

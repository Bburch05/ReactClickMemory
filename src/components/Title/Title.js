import React from "react";
import "./Title.css";

const Title = props => 
    <div>
        <div className="topinfo">
            <div className="container">
            
                <div className="row">

                    <div className="col-md-6">
                        <h1 className="header-title">{props.children}</h1>
                        <h5 className="text-right">Click an image to earn a point! Don't click the same image twice!</h5>
                        <h3 className="clickResult text-left">{props.clickResult}</h3>
                    </div>

                    <div className="col-md-3 offset-md-3">
                        <div className="scoreDiv">
                            <ul>
                                <li>Your Score: <span>{props.scores.curr}</span></li>
                                <li>High Score: <span>{props.scores.high}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default Title;

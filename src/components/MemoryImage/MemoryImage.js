import React from "react";
import "./MemoryImage.css"

const MemoryImage = props => (
  <div className="col-md-2">
    <div className="card" onClick={()=> props.removeFriend(props.id)}>
      <div className="card-img memory">
        <img className="img-fluid" alt={props.name} src={props.image} />
      </div>
    </div>
  </div>
);

export default MemoryImage;

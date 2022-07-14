import React from "react";

const ItemInspect = ({ vote, image,title,voteCount }) => {
  return (
    <div className="container-sm  px-1 pt-3 pb-3">
      <h1>{title}</h1>
      <div className="row d-flex">
        <div className="col-sm-12 col-lg-6 px-1">
          <div className="container px-1">
            <img className="img-fluid" src={image}></img>
          </div>
        </div>
        <div className="col-lg-6">
          <h3>rated with: {vote}, from {voteCount} votes</h3>
          <h3>eso</h3>
          <h3>eso</h3>
          <h3>eso</h3>
          
        </div>
      </div>
    </div>
  );
};

export default ItemInspect;

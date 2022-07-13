import React from "react";

const ItemInspect = ({ vote, image }) => {
  return (
    <div className="container-sm  px-1 pt-3 pb-3">
      <h1>{vote}</h1>
      <div className="row">
        <div className="col-sm-9 px-1">
          <div className="container px-1">
            <img className="img-fluid" src={image}></img>
          </div>
        </div>
        <div className="col-sm-3"> eso</div>
        <div className="col-sm-3"> eso</div>
        <div className="col-sm-3"> eso</div>
        <div className="col-sm-3"> eso</div>
      </div>
    </div>
  );
};

export default ItemInspect;

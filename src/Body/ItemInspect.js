import React from "react";

const ItemInspect = ({ vote, image }) => {
  return (
    <div className="container-sm  px-1 pt-3 pb-3">
      <h1>{vote}</h1>
      <div className="row d-flex">
        <div className="col-sm-12 col-lg-6 px-1">
          <div className="container px-1">
            <img className="img-fluid" src={image}></img>
          </div>
        </div>
        <div className="col-lg-6">
          <div>eso</div>
          <div>eso</div>
          <div>eso</div>
          <div>eso</div>
        </div>
      </div>
    </div>
  );
};

export default ItemInspect;

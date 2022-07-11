import React from "react";

const ItemInspect = ({ adult, image }) => {
  return (
    <div className="col-xl-3 col-md-4 col-sm-6 mt-5">
      <h1>{adult}</h1>
      <img className="img-fluid" src={image}></img>
    </div>
  );
};

export default ItemInspect;

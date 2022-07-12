import React from "react";

const ItemInspect = ({ adult, image }) => {
  return (
    <div className="container-xxl">
      <h1>{adult}</h1>
      <div className="container-xxl">
      <img className="img-fluid" src={image}></img>
      </div>
    </div>
  );
};

export default ItemInspect;

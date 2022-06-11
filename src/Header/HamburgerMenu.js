import React from "react";

const HamburgerMenu = ({onClick}) => {
  return (
    <div className="d-flex justify-content-center m-3">
    <button  onClick={onClick} className=" d-block d-md-none btn-primary btn-lg " type="button">
     ☰
    </button>
    </div>
  );
};

export default HamburgerMenu;

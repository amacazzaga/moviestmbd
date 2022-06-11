import React from "react";

const HamburgerMenu = ({onClick}) => {
  return (
    <button  onClick={onClick} className=" d-block d-md-none " type="button">
     ☰
    </button>
  );
};

export default HamburgerMenu;

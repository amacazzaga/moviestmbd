import React from "react";

const HamburgerMenu = ({onClick}) => {
  return (
    <button onClick={onClick} className="container-sm  d-block d-sm-none " type="button">
      HamburgerMenu
    </button>
  );
};

export default HamburgerMenu;
import React from "react";
import { Link } from "react-router-dom";

const LogoFooter = () => {
  return (
    <Link  to={"/"}>
        <button
        class=" btn-outline-secondary  tmbd  "
        type="button"
      >
     TMBD
      </button>
    </Link>
  );
};

export default LogoFooter;
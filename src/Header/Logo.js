import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link  to={"/"}>
        <button
        class=" btn-outline-secondary d-none d-lg-block tmbd  "
        type="button"
      >
     TMBD
      </button>
    </Link>
  );
};

export default Logo;

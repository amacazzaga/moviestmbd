import React from "react";

import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link  to={"/"}>
        <button
        class=" btn-outline-secondary dropdown-toggle align-self-center "
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
       Home
      </button>
    </Link>
  );
};

export default Logo;

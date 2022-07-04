import React from "react";

import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link  to={"/"}>
        <button
        class=" btn-outline-secondary tmbd d-none d-lg-block p-0 pb-3"
        type="button"
      >
       TMBD
      </button>
    </Link>
  );
};

export default Logo;

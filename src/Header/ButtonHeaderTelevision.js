import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const television = [
  {
    name: "on_the_air",
  },
  {
    name: "latest",
  },
  {
    name: "top_rated",
  },
  {
    name: "popular",
  },
];
const ButtonHeaderTelevision = ({ text }) => {
  const [dropdown, setDropdown] = useState("dropdown-menu");
  return (
    <div class="list-group-item   dropdown">
      <button
        onClick={() => {
          if (dropdown === "dropdown-menu") {
            setDropdown("dropdown-menu show");
          } else {
            setDropdown("dropdown-menu");
          }
        }}
        class=" btn-outline-secondary dropdown-toggle "
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {text}
      </button>
      <ul class={dropdown} aria-labelledby="dropdownMenuButton1">
        <li>
          <Link to={`/television/${television[0].name}`}>
            <a class="dropdown-item">On The Air</a>
          </Link>
          <Link to={`/television/${television[1].name}`}>
            <a class="dropdown-item">Latest</a>
          </Link>
          <Link to={`/television/${television[2].name}`}>
            <a class="dropdown-item">Top Rated</a>
          </Link>
          <Link to={`/television/${television[3].name}`}>
            <a class="dropdown-item">Popular</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ButtonHeaderTelevision;
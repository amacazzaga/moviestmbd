import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const movies = [
  {
    name: "action",
    id: "28",
  },
];

const ButtonHeaderMovie = ({ text }) => {
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
          <Link >
            <a class="dropdown-item">Action</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ButtonHeaderMovie;

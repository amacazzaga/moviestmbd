import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const movies = [
  {
    name: "top_rated",
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
          <Link to={`/movie/${movies[0].name}`} >
            <a class="dropdown-item">Top Rated</a>
          </Link>
          <Link >
            <a class="dropdown-item">Now Playing</a>
          </Link>
          <Link >
            <a class="dropdown-item">Popular</a>
          </Link>
          <Link >
            <a class="dropdown-item">Top Rated</a>
          </Link>
          <Link >
            <a class="dropdown-item">Upcoming</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ButtonHeaderMovie;

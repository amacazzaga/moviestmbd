import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const movies = [
  {
    name: "upcoming",
  },
  {
    name:"top_rated"
  },
{
  name:"now_playing",
  lenguage:"&language=en-US&page=1"
}
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
          <Link to={`/movie/${movies[0].name}/${""}`}>
            <a class="dropdown-item">Upcoming</a>
          </Link>
          <Link to={`/movie/${movies[1].name}/${""}`}>
            <a class="dropdown-item">Top Rated</a>
          </Link>
          <Link to={`/movie/${movies[2].name}/${movies[2].lenguage}`}>
            <a class="dropdown-item">Now Playing</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ButtonHeaderMovie;

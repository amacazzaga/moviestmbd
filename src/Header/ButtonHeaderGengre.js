import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const genres = [{
  name:"action",
  id:"28"
},{
  name:"adventure",
  id:"16"
}]

const ButtonHeaderGengre = ({ text, getMoviesByGenre }) => {
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
          <Link to={`/genre/${genres[0].name}/${genres[0].id}`}>
            <a class="dropdown-item">Action</a>
          </Link>
        </li>
        <li>
          <Link to={`/genre/${genres.adventure}`}>
            <a class="dropdown-item">Adventure</a>
          </Link>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Something else here
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ButtonHeaderGengre;

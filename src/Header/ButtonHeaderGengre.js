import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const genres = {
  action: "28",
  adventure: "12",
  animation: "16",
  comedy: "35",
  crime : "80",
  documentary:"99",
  drama : "18",
  family : "10751",
  fantasy: "14",
  history:"36",
  horror: "27",
  music:"10402",
  mystery:"9648",
  romance: "10749",
  scienceFiction:"878",
  thriller:"53",
  war:"10752",
  western:"37"
};

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
          <Link to={`/genre/${genres.action}`}>
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

import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const ButtonHeader = ({ text, getMoviesByGenre }) => {
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
          <Link to="/action">
            <a
              class="dropdown-item"
              onClick={() => {
                const baseUrl = "https://api.themoviedb.org/3/discover/movie?/";
                const genre =
                  "with_genres=18&sort_by=vote_average.desc&vote_count.gte=300&api_key=0f0c22bee45b529c07d02b1f2dc14e01";
                const url = baseUrl + genre;
                getMoviesByGenre(url);
              }}
            >
              Action
            </a>
          </Link>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Another action
          </a>
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

export default ButtonHeader;

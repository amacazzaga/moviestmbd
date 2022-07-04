import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const genres = [
  {
    name: "action",
    id: "28",
  },
  {
    name: "adventure",
    id: "12",
  },
  {
    name: "animation",
    id: "16",
  },

  {
    name: "comedy",
    id: "35",
  },
  {
    name: "crime",
    id: "80",
  },
  {
    name: "documentary",
    id: "99",
  },
  {
    name: "drama",
    id: "18",
  },
  {
    name: "family",
    id: "10751",
  },
  {
    name: "fantasy",
    id: "14",
  },
  {
    name: "history",
    id: "36",
  },
  {
    name: "horror",
    id: "27",
  },
  {
    name: "music",
    id: "10402",
  },
  {
    name: "mystery",
    id: "9648",
  },
  {
    name: "romance",
    id: "10749",
  },
  {
    name: "sciencefiction",
    id: "878",
  },
  {
    name: "thriller",
    id: "53",
  },
  {
    name: "war",
    id: "10752",
  },
  {
    name: "western",
    id: "37",
  },
];

const ButtonHeaderGengre = ({ text }) => {
  const [dropdown, setDropdown] = useState("dropdown-menu");

  return (
    <div class="list-group-item   dropdown">
      <button
        onClick={(e) => {
          if (dropdown === "dropdown-menu") {
            setDropdown("dropdown-menu show");
          } else {
            setDropdown("dropdown-menu");
          }
        }}
        class=" btn-outline-secondary dropdown-toggle  "
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
          <Link to={`/genre/${genres[1].name}/${genres[1].id}`}>
            <a class="dropdown-item">Adventure</a>
          </Link>
        </li>
        <li>
          <Link to={`/genre/${genres[2].name}/${genres[2].id}`}>
            <a class="dropdown-item">Animation</a>
          </Link>
        </li>
        <li>
          <Link to={`/genre/${genres[3].name}/${genres[3].id}`}>
            <a class="dropdown-item">Comedy</a>
          </Link>
        </li>
        <li>
          <Link to={`/genre/${genres[4].name}/${genres[4].id}`}>
            <a class="dropdown-item">Crime</a>
          </Link>
        </li>
        <li>
          <Link to={`/genre/${genres[5].name}/${genres[5].id}`}>
            <a class="dropdown-item">Documentary</a>
          </Link>
        </li>
        <li>
          <Link to={`/genre/${genres[6].name}/${genres[6].id}`}>
            <a class="dropdown-item">Drama</a>
          </Link>
        </li>
        <li>
          <Link to={`/genre/${genres[7].name}/${genres[7].id}`}>
            <a class="dropdown-item">Family</a>
          </Link>
        </li>
        <li>
          <Link to={`/genre/${genres[8].name}/${genres[8].id}`}>
            <a class="dropdown-item">Fantasy</a>
          </Link>
        </li>
        <li>
          <Link to={`/genre/${genres[9].name}/${genres[9].id}`}>
            <a class="dropdown-item">History</a>
          </Link>
        </li>
        <li>
          <Link to={`/genre/${genres[10].name}/${genres[10].id}`}>
            <a class="dropdown-item">Horror</a>
          </Link>
        </li>
        <li>
          <Link to={`/genre/${genres[11].name}/${genres[11].id}`}>
            <a class="dropdown-item">Music</a>
          </Link>
        </li>
        <li>
          <Link to={`/genre/${genres[12].name}/${genres[12].id}`}>
            <a class="dropdown-item">Mystery</a>
          </Link>
        </li>
        <li>
          <Link to={`/genre/${genres[13].name}/${genres[13].id}`}>
            <a class="dropdown-item">Romance</a>
          </Link>
        </li>
        <li>
          <Link to={`/genre/${genres[14].name}/${genres[14].id}`}>
            <a class="dropdown-item">Science Fiction</a>
          </Link>
        </li>
        <li>
          <Link to={`/genre/${genres[15].name}/${genres[15].id}`}>
            <a class="dropdown-item">Thriller</a>
          </Link>
        </li>
        <li>
          <Link to={`/genre/${genres[16].name}/${genres[16].id}`}>
            <a class="dropdown-item">War</a>
          </Link>
        </li>
        <li>
          <Link to={`/genre/${genres[17].name}/${genres[17].id}`}>
            <a class="dropdown-item">Western</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ButtonHeaderGengre;

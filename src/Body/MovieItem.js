import { useState } from "react";
const MovieItem = ({ title, overview, image }) => {
  const [dropdown, setDropdown] = useState("dropdown-menu");
  return (
    <div className="card bg-transparent">
      <img src={image} className="card-img-top img-fluid" alt="..."></img>
      <div className="card-body">
        <button
          onClick={() => {
            if (dropdown === "dropdown-menu") {
              setDropdown("dropdown-menu show");
            } else {
              setDropdown("dropdown-menu");
            }
          }}
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuClickableOutside"
          data-bs-toggle="dropdown"
          data-bs-auto-close="inside"
          aria-expanded="false"
        >
          Overview
        </button>
        <ul
          class={dropdown}
          aria-labelledby="dropdownMenuClickableOutside"
        >
          <p className="card-text">{overview}</p>
        </ul>
      </div>
    </div>
  );
};

export default MovieItem;

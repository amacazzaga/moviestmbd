import { useState } from "react";
const TelevisionItem = ({ overview, image }) => {
  const [dropdown, setDropdown] = useState("dropdown-menu");
  return (
    <div>
      <div className="card bg-transparent">
        <img className="img-fluid" src={image} />
        <div className="card-body">
          <button
            onClick={() => {
              if (dropdown === "dropdown-menu") {
                setDropdown("dropdown-menu show");
              } else {
                setDropdown("dropdown-menu");
              }
            }}
            class="btn btn-secondary dropdown-toggle ;
          "
            type="button"
            id="dropdownMenuClickableOutside"
            data-bs-toggle="dropdown"
            data-bs-auto-close="inside"
            aria-expanded="false"
          >
            Overview
          </button>
          <ul class={dropdown} aria-labelledby="dropdownMenuClickableOutside">
            <p className="card-text m-2">{overview}</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TelevisionItem;

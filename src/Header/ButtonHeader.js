import React from "react";
import { useState } from "react";

const ButtonHeader = ({ text }) => {
  const [dropdown, setDropdown] = useState("dropdown-menu");

  return (
    <div class="dropdown">
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
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {text}
      </button>
      <ul class={dropdown} aria-labelledby="dropdownMenuButton1">
        <li>
          <a class="dropdown-item" href="#">
            Action
          </a>
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

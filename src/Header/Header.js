import React from "react";
import ButtonHeader from "./ButtonHeader";
import InputSearch from "./InputSearch";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
const Header = ({getMoviesByGenre}) => {
  const [collapse, setCollapse] = useState("collapse");

  return (
    <header className="container-xxl mt-15 shadow-lg  rounded ">
      <nav class=" navbar-expand-md  ">
        <div class="container-xl  ">
          <HamburgerMenu
            onClick={() => {
              if (collapse === "collapse") {
                setCollapse("collapse show");
              } else {
                setCollapse("collapse");
              }
            }}
            className="navbar-toggler"
            aria-expanded="true"
          />

          <div class={`collapse navbar-${collapse}`}>
            <ul className="m-2 p-1 ">
              <li class="list-group list-group-horizontal d-flex">
                <ButtonHeader getMoviesByGenre={getMoviesByGenre} text={"Genre"} />
                <ButtonHeader text={"Movies"} />
                <ButtonHeader text={"On TV"} />

                <ul class="dropdown-menu" aria-labelledby="navbarDropdown"></ul>
              </li>
            </ul>
            <div className="container-md">
              <form class="d-flex ">
                <InputSearch />
              </form>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

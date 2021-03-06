import React from "react";
import ButtonHeaderGenre from "./ButtonHeaderGengre";
import ButtonHeaderMovie from "./ButtonHeaderMovie";
import Logo from "./Logo";
import ButtonHeaderTelevision from "./ButtonHeaderTelevision";
import InputSearch from "./InputSearch";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";

const Header = ({ gengremovie, getMoviesByGenre }) => {
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
               
                <span className="d-flex align-self-center"> <Logo /></span>
                <ButtonHeaderGenre
                  getMoviesByGenre={getMoviesByGenre}
                  text={"Genre"}
                />
                <ButtonHeaderMovie text={"Movies"} />
                <ButtonHeaderTelevision text={"On TV"} />
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown"></ul>
              </li>
            </ul>
            <div className="container-md">
              <form class="d-flex ">
                <InputSearch
                  gengremovie={gengremovie}
                  getMoviesByGenre={getMoviesByGenre}
                />
              </form>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

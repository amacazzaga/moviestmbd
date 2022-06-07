import React from "react";
import ButtonHeader from "./ButtonHeader";
import InputSearch from "./InputSearch";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <header className="container-xxl mt-15 ">
      <nav class=" navbar-expand-sm ">
        <div class="container-fluid">
          <HamburgerMenu className="navbar-toggler" aria-expanded="true" />

          <div class="collapse navbar-collapse show" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <ButtonHeader text={"Genre"} />
                  <ButtonHeader text={"Movies"} />
                  <ButtonHeader text={"On TV"} />
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown"></ul>
              </li>
            </ul>
            <form class="d-flex">
              <InputSearch />
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

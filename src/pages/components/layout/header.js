import React, { useState } from "react";
import { Logo } from "../../../assets/assets";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [navExp, setNavExp] = useState(false);

  const [navli, setnavli] = useState([
    { li: "Home", path: "home" },
    { li: "About Me", path: "aboutMe" },
    { li: "Services", path: "services" },
    { li: "Projects", path: "projects" },
    { li: "Contact", path: "contact" },
  ]);
  const navExpand = () => {
    setNavExp(!navExp);
  };
  return (
    <header className="header theme-background-second-layer d-flex">
      <img src={Logo} alt="img" className="logo nav-logo pt-3" />
      <menu className="menu pt-3">
        <ul className="navbar-ul list-unstyled m d-flex justify-content-between fw-bold  h-100 mb-0 align-items-center">
          {navli.map((value, index) => {
            return (
              <>
                <NavLink
                  to={value.path}
                  className={`nav-li-link text-decoration-none `}
                  activeClassName="active-link"
                >
                  <li className="navbar-li align-self-center general-text">
                    {value.li}
                    <div className="link-underline d-none  rounded-pill"></div>
                  </li>
                </NavLink>
              </>
            );
          })}
        </ul>

        <div
          class="t-parent-link   d-flex justify-content-end align-items-center d-lg-none"
          onClick={navExpand}
        >
          <div class="t-parent d-flex flex-column  justify-content-between  align-items-end h-50  ">
            <div class="t-lines t-top   rounded-pill w-75"></div>
            <div class="t-lines t-midddle  rounded-pill w-75"></div>
            <div class="t-lines  t-bottom  rounded-pill w-75"></div>
          </div>
        </div>
      </menu>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import { Logo, Toggle, CrossToggle } from "../../../assets/assets";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [navExp, setNavExp] = useState(false);

  const [navli] = useState([
    { li: "Home", path: "home" },
    { li: "About", path: "aboutMe" },
    { li: "Services", path: "services" },
    { li: "Projects", path: "projects" },
    { li: "Contact", path: "contact" },
  ]);
  const navExpand = () => {
    if (window.innerWidth <= 991) {
      setNavExp(!navExp);
    }
  };
  useEffect(() => {
    if (window.innerWidth >= 992) {
      setNavExp(true);
        console.log("its working with out event listener")
    }
      else if(window.innerWidth < 992){
                  console.log("its working with out event listener")

      }
  }, []);
  return (
    <>
      {/* <HidingHeader> */}

      <header className={`header w-100  ${navExp ? "sticky-header" : ""} `}>
        <NavLink to={"/"}>
          <img
            src={Logo}
            alt="img"
            className="logo nav-logo pt-0 pt-lg-3 "
            onClick={() => {
              setNavExp(false);
            }}
          />
        </NavLink>
        {navExp ? (
          <img
            src={CrossToggle}
            alt="img"
            className=" d-lg-none crossToggle-img"
            onClick={navExpand}
          />
        ) : (
          <img
            src={Toggle}
            alt="img"
            className=" d-lg-none toggle-img"
            onClick={navExpand}
          />
        )}
        <menu
          className={`menu pt-3  d-lg-block  ${navExp ? "active-menu" : ""}`}
        >
          <ul
            className={`navbar-ul list-unstyled m d-flex justify-content-between fw-bold  h-100 mb-0 align-items-center `}
          >
            {navli.map((value, index) => {
              return (
                <NavLink
                  key={index}
                  to={value.path}
                  className={`nav-li-link text-decoration-none `}
                  activeClassName="active-link"
                  onClick={navExpand}
                >
                  <li className="navbar-li align-self-center general-text">
                    {value.li}
                    <div className="link-underline d-none  rounded-pill"></div>
                  </li>
                </NavLink>
              );
            })}
          </ul>
          {/* <div
            className="t-parent-link   d-flex justify-content-end align-items-center d-lg-none"
            onClick={navExpand}
          >
            <div className="t-parent d-flex flex-column  justify-content-between  align-items-end h-50  ">
              <div className="t-lines t-top   rounded-pill w-75"></div>
              <div className="t-lines t-midddle  rounded-pill w-75"></div>
              <div className="t-lines  t-bottom  rounded-pill w-75"></div>
            </div>
          </div> */}
        </menu>
      </header>

      <style jsx>{`
        div div .scrollBar-Top,
        .bh-widget-page-wrapper {
          display: ${navExp ? "none!important" : ""};
        }
      `}</style>
    </>
  );
};

export default Header;

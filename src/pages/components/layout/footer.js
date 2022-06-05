import React from "react";
import { date } from "yup";
import {
  Github,
  Facebook,
  Linkdin,
  Whatsapp,
  ScrollToTop,
} from "../../../assets/assets";
const Footer = () => {
  const scrolltotop = () => {
    window.scrollTo(0, 0);
  };
  window.addEventListener("scroll", function () {
    var scroll = document.querySelector(".scrollBar-Top");
    scroll.classList.toggle("active-scrollToTop", window.scrollY > 250);
  });

  return (
    <>
      <footer className="d-flex flex-column  align-items-center justify-content-center footer theme-background-second-layer mx-auto mt-0 py-5 ">
        <span className="created-text mb-1">Designed and developed by</span>
        <h1 className="website-creator text-white">
          Dawood<span className="footer-slash mx-1">/</span>A
        </h1>

        <div className="footer-icon-parent d-flex align-items-center justify-content-between py-4">
          <a
            href="https://github.com/Dawod-Ahmed"
            className="footer-icon d-flex align-items-center justify-content-center mx-3 github"
          >
            <img src={Github} alt="img" className="footer-icon-img w-50 h-50" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100066460706518"
            className="footer-icon d-flex align-items-center justify-content-center mx-3 facebook"
          >
            <img
              src={Facebook}
              alt="img"
              className="footer-icon-img w-50 h-50"
            />
          </a>
          <a
            href="./"
            className="footer-icon d-flex align-items-center justify-content-center mx-3 linkdin"
          >
            <img
              src={Linkdin}
              alt="img"
              className="footer-icon-img w-50 h-50"
            />
          </a>
          <a
            href="https://wa.me/+971521996785"
            className="footer-icon d-flex align-items-center justify-content-center mx-3 whatsapp"
          >
            <img
              src={Whatsapp}
              alt="img"
              className="footer-icon-img w-50 h-50"
            />
          </a>
        </div>
        <p className="copyrights-text general-text">
          &copy; {new Date().getFullYear().toString()} All Rights Reserved
        </p>
        <img
          src={ScrollToTop}
          alt="img"
          className="scrollBar-Top position-fixed d-none "
          onClick={scrolltotop}
        />
      </footer>
    </>
  );
};

export default Footer;

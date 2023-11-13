import React from "react";
import logo from "../logo.svg";
import "./Header.css";
import menu from "../menu.svg";

function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="" id="logo" />
        <div className="searching">
          <input type="text" placeholder="Search" />
          <i className="fas fa-search"></i>
        </div>
        <div className="details flex-center">
          <div className="place flex-center">
            <i className="fa-solid fa-arrow-pointer"></i>
            <span>Lusail, Qatar</span>
          </div>
          <div className="lang flex-center">EN</div>
          <div className="profile flex-center">
            <i className="fa-regular fa-user"></i>
          </div>
          <div className="menu flex-center">
            <img src={menu} alt="" />
            <span>1</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

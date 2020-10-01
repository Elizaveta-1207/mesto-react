import React from "react";
import logo from "../images/header-logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="логотип" className="logo" />
    </header>
  );
}

export default Header;

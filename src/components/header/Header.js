import React from "react";
import { Link } from "react-router-dom";
import userico from "../../assets/images/useico.png";
import Logo from "../../assets/images/Logo2.png";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="navContainer">
        <Link to="/" className="BrandContainer link">
          <img src={Logo} alt="logo" className="logoImg" />
          <h1 className="logo">SnapIMDb</h1>
        </Link>
        <div className="tabsContainer ">
          <Link to="/" className="tab link">
            Home
          </Link>
          <Link to="/movies" className="tab link">
            Movies
          </Link>
          <Link to="/webshows" className="tab link">
            Web Shows
          </Link>
          <div className="user-image">
            <img src={userico} alt="user" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import userico from "../../assets/images/useico.png";
import Logo from "../../assets/images/Logo2.png";
import "./Header.scss";
import { BiSlideshow, BiHomeSmile } from "react-icons/bi";
import { MdLocalMovies } from "react-icons/md";
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
            <BiHomeSmile className="tab-icon" />
            <span>Home</span>
          </Link>
          <Link to="/movies" className="tab link">
            <MdLocalMovies className="tab-icon" />
            <span>Movies</span>
          </Link>
          <Link to="/webshows" className="tab link">
            <BiSlideshow className="tab-icon" />
            <span>Web Shows</span>
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

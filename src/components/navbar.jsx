
import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <li>
          <Link to="/">
            <img
              id="logoImg"
              src="https://cdn.discordapp.com/attachments/840237326700904451/915133473033973760/logo.jpeg"
              alt="logo"
            ></img>
            GameCrit
          </Link>
        </li>
      </div>
      <div className="nav">
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <a href="#catNav">Category</a>
        </li>
        {/* <li>
          <Link to="/about">About</Link>
        </li> */}
      </div>
    </div>
  );
};
export default Navbar;

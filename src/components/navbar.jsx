
import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <li>
          <Link to="/">GameTitle</Link>
        </li>
      </div>
      <div className="nav">
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/games">Category</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </div>
    </div>
  );
};
export default Navbar;

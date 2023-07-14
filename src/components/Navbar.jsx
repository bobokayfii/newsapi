import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="nav-link" exact to="/">
        <p> News App</p>
      </NavLink>
      <div className="right">
        <NavLink className="nav-link" exact to="/">
          <p> Home</p>
        </NavLink>
        <NavLink className="nav-link" exact to="/general">
          <p> Iphone</p>
        </NavLink>
        <NavLink className="nav-link" exact to="/business">
          <p>Business</p>
        </NavLink>
        <NavLink className="nav-link" exact to="/health">
          <p> Health</p>
        </NavLink>
        <NavLink className="nav-link" exact to="/science">
          <p> Tesla</p>
        </NavLink>
        
        
       
      </div>
    </div>
  );
};

export default Navbar;

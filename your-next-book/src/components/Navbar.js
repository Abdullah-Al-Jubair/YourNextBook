import React from "react";
import {Link}from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light" style={{backgroundColor: `#008080`}} >
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo" style={{ marginLeft: 20 }}>
            Your Next Book
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Popular Books</a>
            </li>
            <li>
              <a href="badges.html">Novels</a>
            </li>
            <li>
              <a href="collapsible.html">Profile</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

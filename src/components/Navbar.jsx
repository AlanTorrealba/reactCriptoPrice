import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="mb-2">
      <nav
        className="navbar is-link"
        role="navigation"
        aria-label="main navigation"
      >
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to={"/Home"} className="navbar-item">
              Home
            </Link>

            <Link to={"/About"} className="navbar-item">
              About
            </Link>
            <Link to={"/Employee"} className="navbar-item">
              Employee
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/" className="button is-primary">
                  <strong>Sign up</strong>
                </Link>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

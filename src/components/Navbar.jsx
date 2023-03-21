import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="mb-2">
      <nav class="navbar is-link" role="navigation" aria-label="main navigation">
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <Link to={'/'} className="navbar-item">Home</Link>

            <Link to={'/About'} class="navbar-item">About</Link>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">More</a>

              <div class="navbar-dropdown">
                <a class="navbar-item">About</a>
                <a class="navbar-item">Jobs</a>
                <a class="navbar-item">Contact</a>
                <hr class="navbar-divider" />
                <a class="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

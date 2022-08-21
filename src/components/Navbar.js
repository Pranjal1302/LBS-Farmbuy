import React from "react";

import "./Navbar.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Navbar() {


  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-dark d-flex justify-content-center bg-dark sticky-nav" sticky="top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            FarmBuy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" id="google_element">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tokenPage">
                  Token Page
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/newscomponent">
                  News
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/translate">
                  Translate
                </Link>
              </li> */}
              </ul>
            <Link to="login">
           <Button variant="contained">LOGIN</Button>
           </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
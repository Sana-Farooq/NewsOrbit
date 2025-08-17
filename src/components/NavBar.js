import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logoNewsOrbit from "../asset/logoNewsOrbit.png";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg bg-dark">
        <div className="container-fluid d-flex justify-content-between">
          <div className="navbar-brand d-flex align-items-center">
            <img
              src={logoNewsOrbit}
              alt="Logo"
              style={{ height: "40px", marginRight: "10px" }}
            />
            <span className="fw-bold text-light">NewsOrbit</span>
          </div>
          <button
            className="navbar-toggler bg-light color-white"
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/business">
                  Business
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/entertainment">
                  Entertainment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/health">
                  Health
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/science">
                  Science
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/sports">
                  Sports
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/technology">
                  Technology
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

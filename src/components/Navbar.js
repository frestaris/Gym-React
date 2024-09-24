import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <nav className="navbar  navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid m-2">
          <Link className="navbar-brand" to="/">
            Bro's Gym
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/memberships"
                  className={`nav-link ${
                    location.pathname === "/memberships" ? "active" : ""
                  }`}
                >
                  MEMBERSHIPS & PRICING
                </Link>
              </li>
              <li className="nav-item nav-link">CLASSES</li>
              <li className="nav-item">
                <Link
                  to="/free-trial"
                  className={`nav-link ${
                    location.pathname === "/free-trial" ? "active" : ""
                  }`}
                >
                  FREE TRIAL
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/timetable"
                  className={`nav-link ${
                    location.pathname === "/timetable" ? "active" : ""
                  }`}
                >
                  TIMETABLE
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about-us"
                  className={`nav-link ${
                    location.pathname === "/about-us" ? "active" : ""
                  }`}
                >
                  ABOUT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

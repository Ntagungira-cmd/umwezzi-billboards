import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/UMWEZI.svg";
import "../styles/header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="#">
          <img src={logo} alt="logo" width="100" height="100" />
        </Link>
      </div>
      <div className="header-links">
        <ul className=" nav">
          <li className="nav-item">
            <Link className="nav-link link" to="#">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link link" to="#">
              Sitemap
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link link" to="#">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link link" to="#">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="links">
        <Link className="signup" to="#">
          signup
        </Link>
        <button className="loginbutton">
          <Link className="login" to="#">
            Login
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Header;

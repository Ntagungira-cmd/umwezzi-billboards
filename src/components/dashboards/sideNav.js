import React from "react";
import { Link } from "react-router-dom";
import "./../assets/css/material-dashboard.css?v=3.0.2";
import "./../assets/css/nucleo-icons.css";
import "./../assets/css/nucleo-svg.css";

export default function sideNav() {
  return (
    <>
      <div
        className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
        id="sidenav-main"
      >
        <div className="sidenav-header">
          <Link className="navbar-brand m-0" to="#">
            <span className="ms-1 font-weight-bold text-white">
              Admin dashboard
            </span>
          </Link>
        </div>
        <hr className="horizontal light mt-0 mb-2" />
        <div
          className="collapse navbar-collapse  w-auto "
          id="sidenav-collapse-main"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link text-white active bg-gradient-primary"
                to="#"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center"></div>
                <span className="nav-link-text ms-1 text-white">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white " to="#">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center"></div>
                <span className="nav-link-text ms-1 text-white">My boards</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white " to="#">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center"></div>
                <span className="nav-link-text ms-1 text-white">
                  Notifications
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="#">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center"></div>
                <span className="nav-link-text ms-1 text-white">Profile</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

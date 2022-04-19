import React from 'react'
import { Link } from "react-router-dom";
import './../assets/css/material-dashboard.css?v=3.0.2';
import './../assets/css/nucleo-icons.css';
import './../assets/css/nucleo-svg.css';

export default function navBar() {
  return (
    <>


<nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
      <div className="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li className="breadcrumb-item text-sm">
            <Link className="opacity-5 text-dark" to="javascript:;">
                Pages
            </Link>
            </li>
            <li className="breadcrumb-item text-sm text-dark active" aria-current="page">
                Dashboard
            </li>
          </ol>
          <h6 className="font-weight-bolder mb-0">Dashboard</h6>
        </nav>

        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">           
          </div>
          <ul className="navbar-nav  justify-content-end">
            <li className="nav-item d-flex align-items-center">
              <Link to="javascript:;" className="nav-link text-body font-weight-bold px-0">
                {/* <i className="fa fa-user me-sm-1"></i> */}
                <span className="d-sm-inline d-none">Signn</span>
              </Link>
            </li>
            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
              <Link to="javascript:;" className="nav-link text-body p-0" id="iconNavbarSidenav">
                <div className="sidenav-toggler-inner">
                 
                </div>
              </Link>
            </li>
            <li className="nav-item px-3 d-flex align-items-center">
            </li>
            <li className="nav-item dropdown pe-2 d-flex align-items-center">
              <Link to="javascript:;" className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                
              </Link>
              <ul className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                <li className="mb-2">
                  <Link className="dropdown-item border-radius-md" to="javascript:;">
                    <div className="d-flex py-1">
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          <span className="font-weight-bold">New Borrow</span> by Laur
                        </h6>
                        <p className="text-xs text-secondary mb-0">
                          
                          13 minutes ago
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="dropdown-item border-radius-md" to="javascript:;">
                    <div className="d-flex py-1">
                    
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          <span className="font-weight-bold">New Borrow</span> by Rockefeller
                        </h6>
                        <p className="text-xs text-secondary mb-0">
                         
                          1 day
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item border-radius-md" to="javascript:;">
                    <div className="d-flex py-1">
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          Successfully uploaded a nw board
                        </h6>
                        <p className="text-xs text-secondary mb-0">                   
                          2 days
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </>
  )
}

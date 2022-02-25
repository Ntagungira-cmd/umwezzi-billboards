import React from "react";
import { Link } from 'react-router-dom'
import logo from '../assets/UMWEZI.svg'

function Header() {
  return (
    <nav className="nav">
      <Link to="#">
        <img src={logo} alt="logo"/>
      </Link>
      <h1>Hey</h1>
    </nav>
  );
}

export default Header;
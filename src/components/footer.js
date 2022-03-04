import React from "react";
import logo from "../assets/UMWEZI.svg";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import "../styles/footer";

export default function Footer() {
  return (
    <div className="footer">
      <div className="subfooter">
        <div className="description">
          <img src={logo} alt="logo" width="120" height="120" />
          <p>
            Employees' attitudes at Jonstone Electric Company should be
            improved. The workers do not feel that they are a working team
            instead of just individuals. If people felt they were a part of a
            team, they would not misuse the tools, or deliberately undermine the
            work of others.
          </p>
        </div>
        <div className="sitemap">
          <h4 className="title">Sitemap</h4>
          <ul>
            <li>
              <Link to="#">Home page</Link>
            </li>
            <li>
              <Link to="#">Contact us</Link>
            </li>
            <li>
              <Link to="#">How it works</Link>
            </li>
          </ul>
        </div>
        <div className="follow">
          <h4 className="title">Follow us on</h4>
          <ul>
            <li>
              <Link to="#">
                <BsFacebook /> facebook
              </Link>
            </li>
            <li>
              <Link to="#">
                <BsInstagram /> Insatgram
              </Link>
            </li>
            <li>
              <Link to="#">
                <BsLinkedin /> Linkedin
              </Link>
            </li>
          </ul>
        </div>
        <div className="follow">
          <h4 className="title">Follow us on</h4>
          <ul>
            <li>
              <Link to="#">
                <BsFacebook />
              </Link>
            </li>
            <li>
              <Link to="#">Contact us</Link>
            </li>
            <li>
              <Link to="#">How it works</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

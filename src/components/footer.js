import React from "react";
import logo from "../assets/UMWEZI.svg";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="subfooter">
        <div className="description">
          <img src={logo} className="img" alt="logo" />
          <p>
            Employees' attitudes at Jonstone Electric Company should be
            improved. The workers do not feel that they are a working team
            instead of just individuals. If people felt they were a part of a
          </p>
        </div>
        <div className="sitemap">
          <h4>Sitemap</h4>
          <ul>
            <li>
              <Link className="links" to="#">
                Home page
              </Link>
            </li>
            <li>
              <Link className="links" to="#">
                Contact us
              </Link>
            </li>
            <li>
              <Link className="links" to="#">
                How it works
              </Link>
            </li>
          </ul>
        </div>
        <div className="follow">
          <h4>Follow us on</h4>
          <ul>
            <li>
              <Link className="links" to="#">
                <BsFacebook /> facebook
              </Link>
            </li>
            <li>
              <Link className="links" to="#">
                <BsInstagram /> Insatgram
              </Link>
            </li>
            <li>
              <Link className="links" to="#">
                <BsLinkedin /> Linkedin
              </Link>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h4 className="title">Let's get in touch</h4>
          <ul>
            <li>
              <Link className="links" to="#">
                (+250)781351171
              </Link>
            </li>
            <li>
              <Link className="links" to="#">
                umwezimediaconsult@gmail.com
              </Link>
            </li>
            <li>
              <Link className="links" to="#">
                Nyabugogo
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="subfooter2">
        <p>
          <span>UmweziMediaConsult </span>@ 2022 all Rights Reserved
        </p>
        <div>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms and Conditions</Link>
        </div>
      </div>
    </div>
  );
}

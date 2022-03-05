import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/LandingPage.css";
import { IoDiscSharp } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="contain">
      <div className="main">
        <Header />
        <div className="content">
          <div className="text">
            <h1 className="prom-text">
              Advertising with <br />
              <span>Umwezi Media Consult</span>
              <br />
              <IoDiscSharp className="disc" />
              add value to your <br />
              services.
            </h1>
            <p>
              Best Solution to get your bussiness known to all your clients in
              an easy and affordable way.
            </p>
            <div className="toolTip">
              <button className="callButton">
                <BsTelephone />
              </button>
              <div className="toolTipText">
                <p id="toolTipTextOne">Nyabugogo-Kigali</p>
                <br />
                <p id="toolTipTextTwo">umwezimediaconsult@gmail.com</p>
              </div>
              <button className="getStarted">
                <Link to="#" className="login">
                  Get started today
                </Link>
              </button>
            </div>
          </div>
          <div className="video">
            {/* <video width="400" height="350">
            <source
              src="../../public/resources/React App - Google Chrome 2022-01-19 10-11-52.mp4"
              type="videos/mp4"
            />
            <source
              src="../../public/resources/React App - Google Chrome 2022-01-19 10-11-52.webm"
              type="video/webm"
            />
          </video> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;

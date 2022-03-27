import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
//import Video from "../components/Video";
import webCam from "../assets/Component2.svg";
import billboard from "../assets/billboard-logo-png.svg";
import board from "../assets/board.svg";
import poster from "../assets/Get in touch-rafiki.svg";
import "../styles/LandingPage.css";
// import { IoDiscSharp } from "react-icons/io5";
// import { BsTelephone } from "react-icons/bs";
// import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <div className="contain">
      <div className="main">
        <Header />
        <div className="content">
          {/* <div className="text">
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
          </div> */}
          {/* <div className="video">
            <Video />
          </div> */}
        </div>
      </div>
      <div className="howItWorks">
        <h1>How it all works</h1>
        <p>Follow these steps to get startes with our services</p>
        <div className="instructions">
          {/* <div><img src={bg} alt="background"/></div> */}
          <div className="createAccount">
            <div className="accountInstruction">
              <h5>connect and create your account</h5>
              <div className="subdiv">
                <img src={webCam} alt="camera" width="60" height="60" />
                <p>
                  To create your account you have to fill in the required
                  personal details to create an account.
                </p>
              </div>
            </div>
            <div className="billboard">
              <img src={billboard} alt="billboard" width="250" height="300" />
            </div>
          </div>
          <div className="otherInstructions">
            <div className="Holder2">
              <h5>Connect and create a free account</h5>
              <div className="subdiv">
                <img src={webCam} alt="camera" width="60" height="60" />
                <p>
                  Now everything is simple and away forward just select the
                  desired board book and pay online in a few steps.
                </p>
              </div>
            </div>

            <div className="Holder">
              <h5>View all available boards</h5>
              <div className="subdiv">
                <img src={board} alt="camera" width="60" height="60" />
                <p>
                  After completely creating you account then you will be able to
                  see all available boards for rent with corresponding prices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerContent">
        <div className="formHolder">
          <div className="poster">
            <img className="posterImg" src={poster} alt="poster" />
          </div>
          <div className="contactForm">
            <h3 className="formTitle">Lets get in touch</h3>
            <form className="row g-2 form">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="full names"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="email address"
                  required
                />
              </div>
              <div className="col-md-12">
                <textarea
                  className="form-control"
                  placeholder="your message"
                  rows="4"
                  cols="50"
                ></textarea>
              </div>
              <div className="col-md-6">
                <button type="submit" className="Submit">
                  submit message
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;

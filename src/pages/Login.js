import React from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css";
import pic from "../assets/Get in touch-rafiki.svg"

function Login() {
  return (
    <div className="main">
      <div className="login">
        <div className="img">
          <img src={pic}  alt="Poster" width="100%" height="400px"/>
        </div>
        <div className="form">
          <h1 className="mb-5">Log in</h1>
          <form>
            <div className="mb-4">
              <label for="InputEmailOrPhone" className="form-label label">
                Email or Phone
              </label>
              <input
                type="text"
                className="form-control input"
                id="InputEmailOrPhone"
              />
            </div>
            <div className="mb-4">
              <label for="Password" className="form-label label">
                Password
              </label>
              <input
                type="password"
                className="form-control input"
                id="Password"
              />
              <Link to="#" className="Link">
                Forgot password?
              </Link>
            </div>
            <div class="mb-5">
              <button type="submit" class= "mb-3 text">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

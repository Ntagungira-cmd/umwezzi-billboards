import React from "react";
import "../styles/Auth.css";
import pic from "../assets/Get in touch-rafiki.svg";

function SignUp() {
  return (
    <div className="main">
      <div className="login">
        <div className="img">
          <img src={pic} alt="Poster" width="100%" height="400px" />
        </div>
        <div className="form">
          <h1 className="mb-3">Sign Up</h1>
          <form>
            <div className="mb-3">
              <label for="InputName" className="form-label label">
                Email or Phone
              </label>
              <input
                type="text"
                className="form-control input"
                id="InputName"
              />
            </div>
            <div className="mb-3">
              <label for="InputEmail" className="form-label label">
                Email
              </label>
              <input
                type="email"
                className="form-control input"
                id="InputEmail"
              />
            </div>
            <div className="mb-3">
              <label for="InputPhone" className="form-label label">
                Phone
              </label>
              <input
                type="tel"
                className="form-control input"
                id="InputPhone"
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
            </div>
            <div class="mb-3">
              <button type="submit" class="mb-3 text">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

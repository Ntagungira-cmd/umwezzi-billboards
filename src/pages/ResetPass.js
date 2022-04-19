import React from "react";
import "../styles/Auth.css";
import pic from "../assets/Get in touch-rafiki.svg";

function ResetPass() {
  return (
    <div className="main">
      <div className="login">
        <div className="img">
          <img src={pic} alt="Poster" width="100%" height="400px" />
        </div>
        <div className="form">
          <h1 className="mb-5">Reset Password</h1>
          <form>
            <div className="mb-4">
              <label for="InputPass" className="form-label label">
                New Password
              </label>
              <input
                type="password"
                className="form-control input"
                id="InputEmailOrPhone"
              />
            </div>
            <div className="mb-5">
              <label for="Password" className="form-label label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control input"
                id="Password"
              />
            </div>
            <div class="mb-5">
              <button type="submit" class="mb-3 text">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPass;

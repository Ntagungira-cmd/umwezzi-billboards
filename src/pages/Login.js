import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { login } from "../slices/auth";
import { clearMessage } from "../slices/message";
import { Link } from "react-router-dom";
import "../styles/Auth.css";
import pic from "../assets/Get in touch-rafiki.svg";

function Login() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    emailOrPhone: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    emailOrPhone: Yup.string("Enter your Email/Phone Number")
      .required("Email/Phone Number is required")
      .test("test-name", "Enter Valid Phone/Email", function (value) {
        const emailRegex =
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        const phoneRegex =
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        let isValidEmail = emailRegex.test(value);
        let isValidPhone = phoneRegex.test(value);
        if (!isValidEmail && !isValidPhone) {
          return false;
        }
        return true;
      }),
    password: Yup.string()
      .min(4, "Too short must 4 characters or above")
      .required("Password is Required"),
  });

  const handleLogin = (formValue) => {
    const { emailOrPhone, password } = formValue;
    setLoading(true);
    dispatch(login({ emailOrPhone, password }))
      .unwrap()
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  if (isLoggedIn) {
    navigate("/home");
  }

  return (
    <div className="main">
      <div className="login">
        <div className="img">
          <img src={pic} alt="Poster" width="100%" height="400px" />
        </div>
        <div className="form">
          <h1 className="mb-5">Log in</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            <Form>
              <div className="mb-4">
                <label htmlFor="InputEmailOrPhone" className="form-label label">
                  Email or Phone
                </label>
                <Field
                  type="text"
                  name="emailOrPhone"
                  className="form-control input"
                  id="InputEmailOrPhone"
                />
                <ErrorMessage
                  name="emailOrPhone"
                  component="div"
                  className="alert-danger"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Password" className="form-label label">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  className="form-control input"
                  id="Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert-danger"
                />
                <Link to="#" className="Link">
                  Forgot password?
                </Link>
              </div>
              <div class="mb-5">
                <button type="submit" className="mb-3 text">
                  Log In
                  {loading && (
                    <span className="spinner-border spinner-border-sm loader"></span>
                  )}
                </button>
              </div>
            </Form>
          </Formik>
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router"
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../slices/auth";
import { clearMessage } from "../slices/message";
import "../styles/Auth.css";
import pic from "../assets/Get in touch-rafiki.svg";

function SignUp() {
  const phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  let navigate = useNavigate();
  const [successful, setSuccessful] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    names: "",
    email: "",
    phone: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    names: Yup.string()
      .max(30, "Must be 30 characters or5 less")
      .required("Name is Required"),
    email: Yup.string()
      .email("Invalid email Address")
      .required("Email is Required"),
    phone: Yup.string()
      .matches(phone, "Invalid phone number")
      .required("Phone number Required"),
    password: Yup.string()
      .min(4, "Too short must 4 characters or above")
      .required("Password is Required"),
  });

  const handleRegister = (formValue) => {
    const { names, email, phone, password } = formValue;
    setSuccessful(false);
    setIsloading(true);
    dispatch(register({ names, email, phone, password }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
        setIsloading(false);
        navigate("/login");
      })
      .catch(() => {
        setSuccessful(false);
        setIsloading(false);
      });
  };

  return (
    <div className="main">
      <div className="login">
        <div className="img">
          <img src={pic} alt="Poster" width="100%" height="400px" />
        </div>
        <div className="form">
          <h1 className="mb-3">Sign Up</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
          >
            <Form>
              {!successful && (
                <>
                  <div className="mb-3">
                    <label htmlFor="InputName" className="form-label label">
                      Name
                    </label>
                    <Field
                      type="text"
                      name="names"
                      className="form-control input"
                      id="InputName"
                    />
                    <ErrorMessage
                      name="names"
                      component="div"
                      className="alert-danger"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="InputEmail" className="form-label label">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      className="form-control input"
                      id="InputEmail"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="alert-danger"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="InputPhone" className="form-label label">
                      Phone
                    </label>
                    <Field
                      type="tel"
                      name="phone"
                      className="form-control input"
                      id="InputPhone"
                    />
                    <ErrorMessage
                      name="phone"
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
                  </div>
                  <div className="mb-3">
                    <button type="submit" className="mb-3 text">
                      sign Up
                      {isLoading && (
                        <span className="spinner-border spinner-border-sm loader"></span>
                      )}
                    </button>
                  </div>
                </>
              )}
            </Form>
          </Formik>
          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;

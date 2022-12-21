import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onForgotPassword } from "../redux/actions/authActions";
import { useNavigate, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Navbar, Row } from "react-bootstrap";
import logo from "../assets/logo.svg";
import LoadingSpinner from "./LoadingSpinner";

const ForgotPass = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [forgotPassError, setForgotPassError] = useState();
  const [loading, setLoading] = useState(false);

  const sendEmail = () => {
    localStorage.setItem("unify_email", email);
    setLoading(true);
    const data = {
      email: email,
    };
    dispatch(onForgotPassword(data, navigate, setForgotPassError, setLoading));
  };

  return (
    <>
      {" "}
      <div className="bg-body-wrapper">
        <div className="container">
          <div className="width_100_sm newnav_v2_wauto">
            <a href="/">
              <Navbar.Brand>
                <img src={logo} className="img-fluid rounded-top" alt="" />
              </Navbar.Brand>
            </a>
          </div>
          <div className="bg_body">
            <div className="sign_form_shap"></div>
            <div className="sign_form_shapb"></div>
            <div className="forgot_pass_container">
              <div className="heading">Forgot Password</div>
              <Form.Group className="email_input">
                <Form.Label htmlFor="email">Enter Email Address</Form.Label>
                <div className="email_inp">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#808080"
                    className="forgot_pass_email_icon"
                    viewBox="0 0 16 16"
                    style={{ top: 15 }}
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setForgotPassError();
                    }}
                    required
                    isInvalid={forgotPassError}
                  />
                  <Form.Control.Feedback type="invalid">
                    {forgotPassError
                      ? forgotPassError
                      : "Please choose a username."}
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
              <div style={{ width: "95%" }}>
                <div className="forgot_pass_btn">
                  <Button
                    variant=""
                    className="fpbc"
                    onClick={() => {
                      navigate("/signin");
                    }}
                  >
                    CANCEL
                  </Button>

                  <Button variant="" className="fpbs" onClick={sendEmail}>
                    SEND
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading ? <LoadingSpinner /> : null}
    </>
  );
};

export default ForgotPass;

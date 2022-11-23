import React, { useState } from "react";
import OTPInput from "otp-input-react";
import { useDispatch, useSelector } from "react-redux";
import { onResendOtp, onVerifySignup } from "../redux/actions/authActions";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Navbar } from "react-bootstrap";
import logo from "../assets/logo.svg";

const VerifySignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const verifyOtpError = useSelector((state) => state.auth.verifyOtpError);

  const submitVerifyOTP = () => {
    const data = {
      email: localStorage.getItem("unify_email"),
      otp: otp,
    };
    dispatch(onVerifySignup(data, navigate));
  };

  const resendOtp = () => {
    const data = {
      email: localStorage.getItem("unify_email"),
    };
    dispatch(onResendOtp(data));
  };

  return (
    <div className="bg-body-wrapper">
      <div className="container">
        <div className="width_100_sm newnav_v2_wauto">
          <Link to="/">
            <Navbar.Brand>
              <img src={logo} className="img-fluid rounded-top" alt="" />
            </Navbar.Brand>
          </Link>
        </div>
        <div className="bg_body">
          <div className="sign_form_shap"></div>
          <div className="sign_form_shapb"></div>
          <div className="otp_container">
            <div className="heading">Please enter the one time password</div>
            <span style={{ fontSize: "14px", color: "rgb(78 78 78)" }}>
              Sent a verification code on your register mail id
            </span>
            {/* <span style={{ fontSize: "14px", color: "rgb(78 78 78)" }}>
              {localStorage.getItem("unify_email")}
            </span> */}
            <div className="otp_inputs">
              <OTPInput
                value={otp}
                onChange={setOtp}
                autoFocus
                OTPLength={4}
                otpType="number"
                disabled={false}
              />
            </div>
            <span className="signup-error">{verifyOtpError}</span>
            <div className="otp_submit_btn">
              <Button variant="" onClick={submitVerifyOTP}>
                VERIFY
              </Button>
            </div>
            <div className="suggetion_resend">
              Don't get the code ? <span onClick={resendOtp}>Resend</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifySignUp;

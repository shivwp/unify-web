import React, { useState } from "react";
import OTPInput from "otp-input-react";
import { useDispatch, useSelector } from "react-redux";
import { onResendOtp, onVerifyForgot } from "../redux/actions/authActions";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Form, Navbar } from "react-bootstrap";
import logo from "../assets/logo.svg";
import { useEffect } from "react";

const VerifyForgotOTP = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState();
  const [message, setMessage] = useState("");
  const [otpSuccess, setOtpSuccess] = useState();
  const [time, setTime] = useState(60);
  const [reOtp, setReOtp] = useState(true);

  useEffect(() => {
    setReOtp(false);

    let i = 1;

    const timeout2 = setInterval(() => {
      setTime(time - i);
      i = i + 1;
    }, 1000);

    setTimeout(() => {
      setReOtp(true);
      clearInterval(timeout2);
      setTime(60);
    }, 60000);
  }, []);

  const onInputChange = (value) => {
    setOtp(value);
    setErrors();
    setMessage("");
    setOtpSuccess("");
  };

  const onVerify = () => {
    let errorExist = false;
    let errorsObject = {};

    if (otp === "") {
      errorsObject.otp = "Please enter the OTP";
      errorExist = true;
    } else if (otp && otp.length < 4) {
      errorsObject.otp = "The OTP must be 4 digit";
      errorExist = true;
    }

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }

    const data = {
      email: localStorage.getItem("unify_email"),
      otp: otp,
    };

    dispatch(onVerifyForgot(data, navigate, setMessage));
  };

  const resendOtp = () => {
    const data = {
      email: localStorage.getItem("unify_email"),
    };
    dispatch(onResendOtp(data, setOtpSuccess));
    setReOtp(false);

    let i = 1;

    const timeout2 = setInterval(() => {
      setTime(time - i);
      i = i + 1;
    }, 1000);

    setTimeout(() => {
      setReOtp(true);
      clearInterval(timeout2);
      setTime(60);
    }, 60000);
  };

  var staredEmail = localStorage.getItem("unify_email");
  staredEmail =
    staredEmail.slice(0, 2) +
    "***" +
    staredEmail.slice(10, localStorage.getItem("unify_email").length);

  return (
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
          <div className="otp_container">
            <div className="heading">Please enter the one time password</div>
            <span style={{ fontSize: "14px", color: "rgb(78 78 78)" }}>
              We have sent code to your email:
            </span>
            <span style={{ fontSize: "14px", color: "rgb(78 78 78)" }}>
              {staredEmail}
            </span>
            <div className="otp_inputs">
              <OTPInput
                value={otp}
                onChange={(e) => onInputChange(e)}
                autoFocus
                OTPLength={4}
                otpType="number"
                disabled={false}
              />
            </div>

            {errors?.otp ? (
              <span className="signup-error">{errors?.otp}</span>
            ) : otpSuccess ? (
              <span className="signup-error" style={{ color: "green" }}>
                {otpSuccess}
              </span>
            ) : message ? (
              <span className="signup-error">{message}</span>
            ) : null}

            <div className="otp_submit_btn">
              <Button variant="" onClick={onVerify}>
                VERIFY
              </Button>
            </div>
            {reOtp ? (
              <div className="suggetion_resend">
                Don't get the code ? <span onClick={resendOtp}>Resend</span>
              </div>
            ) : (
              <div className="suggetion_resend">
                You can resend OTP after {time} seconds
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyForgotOTP;

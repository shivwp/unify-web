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
    staredEmail?.slice(0, 2) +
    "***" +
    staredEmail?.slice(10, localStorage.getItem("unify_email").length);

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
            <div className="verifyOtpHeding">
              <div className="heading">Please enter the one time password</div>
              <Link to="/pages/help-support">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                  >
                    <g
                      id="Group_3689"
                      data-name="Group 3689"
                      transform="translate(-1406.088 -385.088)"
                    >
                      <circle
                        id="Ellipse_778"
                        data-name="Ellipse 778"
                        cx="16"
                        cy="16"
                        r="16"
                        transform="translate(1406.088 385.088)"
                        fill="#f1a2d1"
                      />
                      <path
                        id="Path_4820"
                        data-name="Path 4820"
                        d="M6.848-12.708A6.652,6.652,0,0,1,11.386-11.2a5.1,5.1,0,0,1,1.73,4.043,4.867,4.867,0,0,1-1.843,4.191A8.228,8.228,0,0,1,6.281-1.6L6.2.958H3.956L3.842-3.3h.822a9.825,9.825,0,0,0,4.4-.809,3.1,3.1,0,0,0,1.588-3.046A3.316,3.316,0,0,0,9.627-9.716a3.894,3.894,0,0,0-2.751-.943,3.991,3.991,0,0,0-2.765.9A3.145,3.145,0,0,0,3.1-7.29H.666a5.257,5.257,0,0,1,.766-2.844,5.077,5.077,0,0,1,2.169-1.9A7.42,7.42,0,0,1,6.848-12.708ZM5.062,6.483A1.743,1.743,0,0,1,3.814,6,1.574,1.574,0,0,1,3.3,4.812a1.574,1.574,0,0,1,.51-1.186,1.743,1.743,0,0,1,1.248-.485,1.66,1.66,0,0,1,1.205.485,1.6,1.6,0,0,1,.5,1.186A1.6,1.6,0,0,1,6.267,6,1.66,1.66,0,0,1,5.062,6.483Z"
                        transform="translate(1415.873 404.054)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </div>
              </Link>
            </div>
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

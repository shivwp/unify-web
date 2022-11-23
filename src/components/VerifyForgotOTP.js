import React, { useState } from "react";
import OTPInput from "otp-input-react";
import { useDispatch, useSelector } from "react-redux";
import { onResendOtp, onVerifyForgot } from "../redux/actions/authActions";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Form, Navbar } from "react-bootstrap";
import logo from "../assets/logo.svg";

const VerifyForgotOTP = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [OTP, setOTP] = useState("");
  const [reOtp, setReOtp] = useState(true);
  const [time, setTime] = useState(60);

  const forgotOTPError = useSelector((state) => state?.auth?.forgotOTPError);
  const onVerify = () => {
    const data = {
      email: localStorage.getItem("unify_email"),
      otp: OTP,
    };

    dispatch(onVerifyForgot(data, setReOtp, navigate));
    if (!reOtp) {
      let i = 1;
      const timeout1 = setInterval(() => {
        setTime(time - i);
        i = i + 1;
      }, 1000);
      setTimeout(() => {
        setReOtp(true);
        clearInterval(timeout1);
        setTime(60);
      }, 60000);
    }
  };

  const resendOtp = () => {
    const data = {
      email: localStorage.getItem("unify_email"),
    };
    dispatch(onResendOtp(data));
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
              We have sent code to your email:
            </span>
            <span style={{ fontSize: "14px", color: "rgb(78 78 78)" }}>
              {localStorage.getItem("unify_email")}
            </span>
            <div className="otp_inputs">
              <OTPInput
                value={OTP}
                onChange={setOTP}
                autoFocus
                OTPLength={4}
                otpType="number"
                disabled={false}
              />
            </div>

            {forgotOTPError ? (
              <p className="forgot_otp_error">{forgotOTPError}</p>
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
                You can send OTP after {time} seconds
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyForgotOTP;

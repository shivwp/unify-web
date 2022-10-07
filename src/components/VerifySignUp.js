import React, { useState } from "react";
import OTPInput from "otp-input-react";
import { useDispatch } from "react-redux";
import { onResendOtp, onVerifySignup } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const VerifySignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");

  console.log(otp);

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
    <>
      <div className="bg_body">
        <div className="otp_container">
          <div className="heading">Please enter the one time password</div>
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
          <div className="otp_submit_btn">
            <button onClick={submitVerifyOTP}>VERIFY</button>
          </div>
          <div className="suggetion_resend">
            Don't get the code <span onClick={resendOtp}>Resend</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifySignUp;

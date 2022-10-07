import React, { useState } from 'react';
import OTPInput, { ResendOTP } from "otp-input-react";
import { useDispatch } from 'react-redux';
import { onResendOtp, onVerifyForgot } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

const VerifyForgotOTP = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [OTP, setOTP] = useState("");

  const onVerify = ()=>{
    const data={
      email: localStorage.getItem('unify_email'),
      otp: OTP
    }
    dispatch(onVerifyForgot(data, navigate))
  }

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
          <div className="heading">
            Please enter the one time password
          </div>
          <div className="otp_inputs">
            <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false}  />
          </div>
          <div className="otp_submit_btn">
            <button onClick={onVerify}>VERIFY</button>
          </div>
          <div className="suggetion_resend">
            Don't get the code <span onClick={resendOtp}>Resend</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default VerifyForgotOTP

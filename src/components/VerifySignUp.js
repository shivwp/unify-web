import OTPInput, { ResendOTP } from "otp-input-react";
import React, { useState } from 'react';

const VerifySignUp = () => {
  const [OTP, setOTP] = useState("");
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
            <button>VERIFY</button>
          </div>
          <div className="suggetion_resend">
            Don't get the code <span>Resend</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default VerifySignUp

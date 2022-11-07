import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { onForgotPassword } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ForgotPass = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState();

  const sendEmail = () => {
    localStorage.setItem("unify_email", email);

    const data = {
      email: email,
    };
    dispatch(onForgotPassword(data, navigate));
  };

  return (
    <>
      <div className="bg_body">
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
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
              <Form.Control
                type="text"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </Form.Group>
          <div className="forgot_pass_btn">
            <Button variant="" onClick={sendEmail}>SEND</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPass;

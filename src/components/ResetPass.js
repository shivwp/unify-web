import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { onResetPassword } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form'

const ResetPass = () => {
  const [hidePass, setHidePass] = useState(true);
  const [hideConfPass, setHideConfPass] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState({});

  const onInputChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onUpdate = () => {
    const data = {
      email: localStorage.getItem("unify_email"),
      password: value.password,
      confirm_password: value.confirm_password,
    };
    dispatch(onResetPassword(data, navigate));
  };
  return (
    <>
      <div className="bg_body">
        <div className="reset_pass_container">
          <div className="heading">New Password</div>
          <div className="pass_inputs">
            <div className="pass_inp">
              <label htmlFor="email">Enter New Password</label>
              <Form.Control
                type={hidePass ? "password" : "text"}
                name="password"
                placeholder="********"
                onChange={(e) => onInputChange(e)}
              />
              {hidePass ? (
                <i
                  className="fa fa-eye-slash showInpPass"
                  onClick={() => setHidePass(!hidePass)}
                  aria-hidden="true"
                  style={{ top: 9 }}
                ></i>
              ) : (
                <i
                  className="fa fa-eye showInpPass"
                  style={{ top: 9 }}
                  onClick={() => setHidePass(!hidePass)}
                  aria-hidden="true"
                ></i>
              )}
            </div>
            <div className="pass_inp">
              <label htmlFor="email">Confirm New Password</label>
              <Form.Control
                type={hideConfPass ? "password" : "text"}
                name="confirm_password"
                placeholder="********"
                onChange={(e) => onInputChange(e)}
              />
              {hideConfPass ? (
                <i
                  className="fa fa-eye-slash showInpPass"
                  onClick={() => setHideConfPass(!hideConfPass)}
                  aria-hidden="true"
                  style={{ top: 47 }}
                ></i>
              ) : (
                <i
                  className="fa fa-eye showInpPass"
                  style={{ top: 47 }}
                  onClick={() => setHideConfPass(!hideConfPass)}
                  aria-hidden="true"
                ></i>
              )}
            </div>
          </div>
          <div className="reset_pass_btn">
            <button onClick={onUpdate}>UPDATE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPass;

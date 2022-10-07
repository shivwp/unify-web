import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { onResetPassword } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const ResetPass = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
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
    dispatch(onResetPassword(data, navigate))
  };
  return (
    <>
      <div className="bg_body">
        <div className="reset_pass_container">
          <div className="heading">New Password</div>
          <div className="pass_inputs">
            <div className="pass_inp">
              <label htmlFor="email">Enter New Password</label>
              <input
                type="password"
                name="password"
                placeholder="********"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="pass_inp">
              <label htmlFor="email">Confirm New Password</label>
              <input
                type="password"
                name="confirm_password"
                placeholder="********"
                onChange={(e) => onInputChange(e)}
              />
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

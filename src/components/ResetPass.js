import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { onResetPassword } from "../redux/actions/authActions";
import { useNavigate, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Navbar } from "react-bootstrap";
import logo from "../assets/logo.svg";

const ResetPass = () => {
  const [hidePass, setHidePass] = useState(true);
  const [hideConfPass, setHideConfPass] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const onUpdate = () => {
    let errorExist = false;
    let errorsObject = {};

    if (values.password !== values.confirm_password) {
      errorsObject.confirm_password =
        "Confirm password should be match with password";
      errorExist = true;
    }

    if (
      values.password === "" ||
      values.password === null ||
      values.password === undefined
    ) {
      errorsObject.password = "Please Enter Your Password";
      errorExist = true;
    }

    if (values.password && values.password.length < 8) {
      errorsObject.password = "Password must be at least 8 digit long";
      errorExist = true;
    }

    if (
      values.confirm_password === "" ||
      values.confirm_password === null ||
      values.confirm_password === undefined
    ) {
      errorsObject.confirm_password = "Please Enter Your Password";
      errorExist = true;
    }

    if (values.confirm_password && values.confirm_password.length < 8) {
      errorsObject.confirm_password = "Password must be at least 8 digit long";
      errorExist = true;
    }

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }

    const data = {
      email: localStorage.getItem("unify_email"),
      password: values?.password,
      confirm_password: values?.confirm_password,
    };
    dispatch(onResetPassword(data, navigate));
  };

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
          <div className="reset_pass_container">
            <div className="heading">New Password</div>
            <div className="pass_inputs">
              <Form.Group className="pass_inp">
                <Form.Label htmlFor="email">Enter New Password</Form.Label>
                <Form.Control
                  type={hidePass ? "password" : "text"}
                  name="password"
                  placeholder="********"
                  onChange={(e) => onInputChange(e)}
                />
                <span className="signup-error">
                  {errors.password && errors.password}
                </span>
                {hidePass ? (
                  <i
                    className="fa fa-eye-slash showInpPass"
                    onClick={() => setHidePass(!hidePass)}
                    aria-hidden="true"
                  ></i>
                ) : (
                  <i
                    className="fa fa-eye showInpPass"
                    onClick={() => setHidePass(!hidePass)}
                    aria-hidden="true"
                  ></i>
                )}
              </Form.Group>
              <Form.Group className="pass_inp">
                <Form.Label htmlFor="email">Confirm New Password</Form.Label>
                <Form.Control
                  type={hideConfPass ? "password" : "text"}
                  name="confirm_password"
                  placeholder="********"
                  onChange={(e) => onInputChange(e)}
                />
                <span className="signup-error">
                  {errors.confirm_password && errors.confirm_password}
                </span>
                {hideConfPass ? (
                  <i
                    className="fa fa-eye-slash showInpPass"
                    onClick={() => setHideConfPass(!hideConfPass)}
                    aria-hidden="true"
                  ></i>
                ) : (
                  <i
                    className="fa fa-eye showInpPass"
                    onClick={() => setHideConfPass(!hideConfPass)}
                    aria-hidden="true"
                  ></i>
                )}
              </Form.Group>
            </div>
            <div className="reset_pass_btn">
              <Button variant="" onClick={onUpdate}>
                UPDATE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;

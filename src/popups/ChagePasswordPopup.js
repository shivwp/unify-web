import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import Form from "react-bootstrap/Form";
import { onPasswordChange } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";

const ChagePasswordPopup = ({
  onCloseModal,
  open,
  successPopup,
  setSuccessPopup,
}) => {
  const [hideNewPass, setHideNewPass] = useState(true);
  const dispatch = useDispatch();
  const [hideOldPass, setHideOldPass] = useState(true);
  const [hideConfPass, setHideConfPass] = useState(true);
  const [values, setValues] = useState();
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState();

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
    setMessage();
  };


  const onSubmit = () => {
    let errorExist = false;
    let errorsObject = {};

    if (
      values?.old_password === "" ||
      values?.old_password === null ||
      values?.old_password === undefined
    ) {
      errorsObject.old_password = "Please enter your old password";
      errorExist = true;
    }
    // else if (
    //   !/^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/.test(
    //     values?.old_password
    //   )
    // ) {
    //   errorsObject.old_password =
    //     "Password must be at least 8 characters with 1 Special & 1 Number";
    //   errorExist = true;
    // }

    if (
      values?.new_password === "" ||
      values?.new_password === null ||
      values?.new_password === undefined
    ) {
      errorsObject.new_password = "Please enter new password";
      errorExist = true;
    } else if (
      !/^(?=.*\d)(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/.test(
        values?.new_password
      )
    ) {
      errorsObject.new_password =
        "Password must be at least 8 characters with 1 Special & 1 Number";
      errorExist = true;
    }
    if (
      values?.confirm_password === "" ||
      values?.confirm_password === null ||
      values?.confirm_password === undefined
    ) {
      errorsObject.confirm_password = "Please enter confirm password";
      errorExist = true;
    } else if (values.new_password !== values.confirm_password) {
      errorsObject.confirm_password =
        "Confirm password should be match with new password";
      errorExist = true;
    }
    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }
    dispatch(
      onPasswordChange(
        values,
        onCloseModal,
        successPopup,
        setSuccessPopup,
        setMessage
      )
    );
  };

  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{ modal: "change-password-popup" }}
        center
      >
        <h5 style={{ marginBottom: "25px" }}>Change Password</h5>
        <Form>
          <div className="password-inp">
            <Form.Label className="inp-label">Old Password</Form.Label>
            <div className="input-grp">
              <Form.Control
                type={hideOldPass ? "password" : "text"}
                className="font-size-13px"
                onChange={(e) => handleOnChange(e)}
                name="old_password"
                value={values?.old_password}
                placeholder=" "
              />
              {hideOldPass ? (
                <i
                  className="fa fa-eye-slash showInpPass"
                  onClick={() => setHideOldPass(!hideOldPass)}
                  aria-hidden="true"
                ></i>
              ) : (
                <i
                  className="fa fa-eye showInpPass"
                  onClick={() => setHideOldPass(!hideOldPass)}
                  aria-hidden="true"
                ></i>
              )}
              <span className="signup-error">
                {errors.old_password ? errors.old_password : message}
              </span>
            </div>
          </div>
          <div className="password-inp">
            <Form.Label className="inp-label">New Password</Form.Label>
            <div className="input-grp">
              <Form.Control
                type={hideNewPass ? "password" : "text"}
                name="new_password"
                value={values?.new_password}
                onChange={(e) => handleOnChange(e)}
                className="font-size-13px"
                placeholder=" "
              />
              {hideNewPass ? (
                <i
                  className="fa fa-eye-slash showInpPass"
                  onClick={() => setHideNewPass(!hideNewPass)}
                  aria-hidden="true"
                ></i>
              ) : (
                <i
                  className="fa fa-eye showInpPass"
                  onClick={() => setHideNewPass(!hideNewPass)}
                  aria-hidden="true"
                ></i>
              )}
              <span className="signup-error">
                {errors.new_password && errors.new_password}
              </span>
            </div>
          </div>
          <div className="password-inp">
            <Form.Label className="inp-label">Confirm New Password</Form.Label>
            <div className="input-grp">
              <Form.Control
                type={hideConfPass ? "password" : "text"}
                name="confirm_password"
                value={values?.confirm_password}
                onChange={(e) => handleOnChange(e)}
                className="font-size-13px"
                placeholder=" "
              />
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
              <span className="signup-error">
                {errors.confirm_password && errors.confirm_password}
              </span>
            </div>
          </div>
          <div className="alert-inp">
            <Form.Check type="checkbox" /> {"  "}{" "}
            <span>
              All Device will be required to sign in with new password
            </span>
          </div>
        </Form>

        <div className="btn_foot_sec no-border flex-wrap d-flex">
          <div className="fo_btn_c next_b_btn_c">
            <button className="remove-posting-btns" onClick={onCloseModal}>
              CANCEL
            </button>
          </div>
          <div className="fo_btn_c next_b_btn_c">
            <button
              type="submit"
              className="active_btn_blue"
              onClick={onSubmit}
            >
              SAVE
            </button>
          </div>
        </div>
      </Modal>
      {successPopup}
    </>
  );
};

export default ChagePasswordPopup;

import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { onPasswordChange } from "../../../../../redux/actions/authActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
const CloseIcon = () => {
  return (
    <svg
      fill="#B2B2B2"
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="CloseIcon"
    >
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
    </svg>
  );
};

const ChangePassword = ({ setSuccessPopup, successPopup, Popup }) => {
  const dispatch = useDispatch();
  const [hideNewPass, setHideNewPass] = useState(true);
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
    } else if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/.test(
        values?.old_password
      )
    ) {
      errorsObject.old_password =
        "Password must be at least 8 characters with 1 Special & 1 Number";
      errorExist = true;
    }

    if (
      values?.new_password === "" ||
      values?.new_password === null ||
      values?.new_password === undefined
    ) {
      errorsObject.new_password = "Please enter new password";
      errorExist = true;
    } else if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/.test(
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
      onPasswordChange(values, Popup, successPopup, setSuccessPopup, setMessage)
    );
  };

  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Change Password</div>
            <div className="close_pp_btn" onClick={() => Popup()}>
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
            <div className="mt-2 pt-1 mb-4"></div>

            <div className="mb-4 changePasswordRespPopup">
              <div
                className="popup_form_element"
                style={{ position: "relative" }}
              >
                <Form.Label className="text-black font-size-13px font-weight-500">
                  Old Password
                </Form.Label>
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
                    className="fa fa-eye-slash showPassFreelancer"
                    onClick={() => setHideOldPass(!hideOldPass)}
                    aria-hidden="true"
                  ></i>
                ) : (
                  <i
                    className="fa fa-eye showPassFreelancer"
                    onClick={() => setHideOldPass(!hideOldPass)}
                    aria-hidden="true"
                  ></i>
                )}
                <span className="signup-error">
                  {errors.old_password ? errors.old_password : message}
                </span>
              </div>
              <Row className="mt-1">
                <Col md={6}>
                  <div
                    className="popup_form_element"
                    style={{ position: "relative" }}
                  >
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      New password
                    </Form.Label>
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
                        className="fa fa-eye-slash showPassFreelancer"
                        onClick={() => setHideNewPass(!hideNewPass)}
                        aria-hidden="true"
                      ></i>
                    ) : (
                      <i
                        className="fa fa-eye showPassFreelancer"
                        onClick={() => setHideNewPass(!hideNewPass)}
                        aria-hidden="true"
                      ></i>
                    )}
                    <span className="signup-error">
                      {errors.new_password && errors.new_password}
                    </span>
                  </div>
                </Col>
                <Col md={6}>
                  <div
                    className="popup_form_element"
                    style={{ position: "relative" }}
                  >
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Confirm New Password
                    </Form.Label>
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
                        className="fa fa-eye-slash showPassFreelancer"
                        onClick={() => setHideConfPass(!hideConfPass)}
                        aria-hidden="true"
                      ></i>
                    ) : (
                      <i
                        className="fa fa-eye showPassFreelancer"
                        onClick={() => setHideConfPass(!hideConfPass)}
                        aria-hidden="true"
                      ></i>
                    )}
                    <span className="signup-error">
                      {errors.confirm_password && errors.confirm_password}
                    </span>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button variant="" onClick={() => Popup()} className="trans_btn">
                Cancel
              </Button>
              <Button variant="" onClick={() => onSubmit()}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChangePassword;

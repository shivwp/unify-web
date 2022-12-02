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

const SecurityQuestionPopup = ({ setSuccessPopup, successPopup, Popup }) => {
  const dispatch = useDispatch();
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
            <div className="p_header_hding">Security Question</div>
            <div className="close_pp_btn" onClick={() => Popup()}>
              <CloseIcon />
            </div>
          </div>
          <div className="securityPopupSubHead">
            Before you can set a new security question, you'll have to answer
            your current one correctly
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
            <div className="mt-4 pt-1 securityPopup2ndHead ">
              Current Question
            </div>
            <div className="mb-4 mt-1 securityHeading ">
              Your Mother's Middle name
            </div>

            <div className="mb-2 securityRespFirstAns">
              <div
                className="popup_form_element"
                style={{ position: "relative" }}
              >
                <Form.Label className="text-black font-size-13px font-weight-500">
                  Answer
                </Form.Label>
                <select name="cars" id="cars" className="font-size-13px">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            <div className="mb-2 securityRespFirstAns ">
              <div
                className="popup_form_element"
                style={{ position: "relative" }}
              >
                <Form.Label className="text-black font-size-13px font-weight-500">
                  New Question
                </Form.Label>
                <select name="cars" id="cars" className="font-size-13px">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            <div className="mb-2 securityRespFirstAns">
              <div
                className="popup_form_element"
                style={{ position: "relative" }}
              >
                <Form.Label className="text-black font-size-13px font-weight-500">
                  Answer
                </Form.Label>
                <Form.Control className="font-size-13px" placeholder=" " />
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div className="sign_l_n_text">
                <Form.Check type="checkbox" name="agree_terms" />
                <Form.Label className="tb_mob_f12px">
                  I understand my account will be locked if I am unable to
                  answer this question
                </Form.Label>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div className="sign_l_n_text">
                <Form.Check type="checkbox" name="agree_terms" />
                <Form.Label className="tb_mob_f12px">
                  Keep me logged in on this device
                </Form.Label>
              </div>
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
export default SecurityQuestionPopup;

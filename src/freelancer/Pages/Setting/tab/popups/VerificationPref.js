import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";

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
const VerificationPref = (props) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };
  const onSubmit = () => {
    let errorExist = false;
    let errorsObject = {};
    if (
      values?.freelancerBefore === "" ||
      values?.freelancerBefore === null ||
      values?.freelancerBefore === undefined
    ) {
      errorsObject.freelancerBefore = "Please select at least one";
      errorExist = true;
    } 
    if (
      values?.freelancerBeforeTwo === "" ||
      values?.freelancerBeforeTwo === null ||
      values?.freelancerBeforeTwo === undefined
    ) {
      errorsObject.freelancerBeforeTwo = "Please select at least one";
      errorExist = true;
    }
    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }
  };

  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">
              Set your verification preferences
            </div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.Popup();
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
            <div className="mt-2 pt-1 mb-4"></div>

            <div className="mb-3">
              <div className="popup_form_element agrement_ineoeu mt-3 pt-1">
                <div className="headiwuewopiu">
                  If we need to confirm it's you, which should we try first?
                </div>
                <Form.Label className="text-black font-size-13px font-weight-500 mt-3 pb-1 radiolablepopo">
                  <Form.Check
                    type="radio"
                    value="firstBox"
                    name="freelancerBefore"
                    onChange={(e) => onInputChange(e)}
                  />
                  Authenticator app code
                </Form.Label>
                <Form.Label className="text-black font-size-13px font-weight-500 mt-1 pb-1 radiolablepopo">
                  <Form.Check
                    type="radio"
                    value="secondBox"
                    name="freelancerBefore"
                    onChange={(e) => onInputChange(e)}
                  />
                  Mobile app prompt
                </Form.Label>
                <Form.Label className="text-black font-size-13px font-weight-500 mt-1 pb-1 radiolablepopo">
                  <Form.Check
                    type="radio"
                    value="thirdBox"
                    name="freelancerBefore"
                    onChange={(e) => onInputChange(e)}
                  />
                  Text message
                </Form.Label>
                <span
                  style={{
                    color: "red",
                    fontWeight: "300",
                    fontSize: "13px"
                  }}
                >
                  {errors.freelancerBefore && errors.freelancerBefore}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <div className="popup_form_element agrement_ineoeu mt-3 pt-1">
                <div className="headiwuewopiu">When should we confirm?</div>
                <Form.Label className="text-black font-size-13px font-weight-500 mt-3 pb-1 radiolablepopo">
                  <Form.Check
                    type="radio"
                    value="fourBox"
                    name="freelancerBeforeTwo"
                    onChange={(e) => onInputChange(e)}
                  />
                  <span style={{ fontWeight: 500 }}>
                    When my login or activity seems risky
                  </span>
                </Form.Label>
                <Form.Label className="text-black font-size-13px font-weight-500 mt-1 pb-1 radiolablepopo">
                  <Form.Check
                    type="radio"
                    value="fiveBox"
                    name="freelancerBeforeTwo"
                    onChange={(e) => onInputChange(e)}
                  />
                  <span style={{ fontWeight: 500 }}>
                    At every login and when my login or activity seems risky
                  </span>
                </Form.Label>
                <span
                  style={{
                    color: "red",
                    fontWeight: "300",
                    fontSize: "13px"
                  }}
                >
                  {errors.freelancerBeforeTwo && errors.freelancerBeforeTwo }
                </span>
              </div>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button
                variant=""
                className="trans_btn"
                onClick={() => {
                  props.Popup();
                }}
              >
                Cancel
              </Button>
              <Button
                variant=""
                className="btnhovpple"
                onClick={() => onSubmit()}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default VerificationPref;

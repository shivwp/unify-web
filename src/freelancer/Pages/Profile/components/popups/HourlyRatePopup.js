import React from "react";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onEditHourPerWeek } from "../../../../../redux/actions/profileAction";
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

const HourlyRatePopup = ({
  Popup,
  data,
  setSuccessPopup,
  successPopup,
  setLoading,
}) => {
  const [values, setValues] = useState(data ? { hours_price: data } : null);
  const percent = 20;
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const afterSuccess = () => {
    window.location.reload();
    setSuccessPopup(false);
  };

  const onSave = () => {
    setLoading(true);
    let errorExist = false;
    let errorsObject = {};
    if (values?.hours_price < 3) {
      errorsObject.hours_price = "Hourly price must be minimum 3 $";
      errorExist = true;
    }
    if (errorExist) {
      setLoading(false);
      setErrors(errorsObject);
      return false;
    }
    dispatch(
      onEditHourPerWeek(
        values,
        Popup,
        successPopup,
        setSuccessPopup,
        afterSuccess,
        setLoading
      )
    );
  };
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Hourly Rate</div>
            <div className="close_pp_btn" onClick={() => Popup()}>
              <CloseIcon />
            </div>
          </div>
          <div className="hourly_rate">
            <Row className="m-1">
              <div className="pbx_pdd_sp2 pb-0" style={{ border: "none" }}>
                <Col sm={12}>
                  <div className="mt-2">
                    <div className="hraet_pdd_sp">Hourly Rate *</div>
                    <div className="tamoun_pdd_sp">
                      Total amount the client will see on your proposal
                    </div>
                  </div>
                </Col>
                <Col sm={12}>
                  <div>
                    <div className="sli_bdg_pddsp"></div>
                    <div className="d-flex">
                      <div
                        className="inp_bdg_pdsp"
                        style={{ position: "relative", marginBottom: 10 }}
                      >
                        $
                        <Form.Control
                          type="number"
                          placeholder={`10.00`}
                          name="hours_price"
                          className="project_details_Num_inp send_proposal_num_inp"
                          onChange={(e) => handleChange(e)}
                          onWheel={(e) => e.target.blur()}
                          value={values?.hours_price || null}
                        />
                      </div>
                      <div className="slsh_hr"> /hour </div>
                    </div>
                    <span className="jobSignInError">
                      {errors.hours_price && errors.hours_price}
                    </span>
                  </div>
                </Col>
              </div>
              <div className="pbx_pdd_sp2 py-0" style={{ border: "none" }}>
                <Col sm={12}>
                  <div className="mt-2">
                    <div className="hraet_pdd_sp">Unify Service Fee</div>
                    <div className="tamoun_pdd_sp">
                      The unify Service fee is 20% when you begin a contract
                      with a new client.
                    </div>
                  </div>
                </Col>
                <Col sm={12}>
                  <div className="d-flex align-items-center">
                    <div className="d-flex">
                      <div className="inp_bdg_pdsp">
                        $
                        <Form.Control
                          type="text"
                          disabled
                          placeholder={`02.00`}
                          name="unify_service_fee"
                          value={
                            values
                              ? ((values?.hours_price / 100) * percent).toFixed(
                                  2
                                )
                              : null
                          }
                        />
                      </div>
                      <div className="slsh_hr"> /hour </div>
                    </div>
                  </div>
                </Col>
              </div>
              <div className="pbx_pdd_sp2 pb-0" style={{ border: "none" }}>
                <Col sm={12}>
                  <div className="mt-2">
                    <div className="hraet_pdd_sp">You'll receive</div>
                    <div className="tamoun_pdd_sp">
                      The estimated amount you'll receive after service fees
                    </div>
                  </div>
                </Col>
                <Col sm={12}>
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="inp_bdg_pdsp">
                        $
                        <Form.Control
                          type="text"
                          disabled
                          placeholder={`10.00`}
                          name="reciving_amt"
                          value={
                            values
                              ? (
                                  values?.hours_price -
                                  (values?.hours_price / 100) * percent
                                ).toFixed(2)
                              : null
                          }
                        />
                      </div>
                      <div className="slsh_hr"> /hour </div>
                    </div>
                  </div>
                </Col>
              </div>
            </Row>
          </div>
          <div className="theme_btns">
            <button className="first_button" onClick={() => Popup()}>
              Back
            </button>
            <button
              className="second_button"
              disabled={
                values?.hours_price == 0 ||
                values?.hours_price == "" ||
                values?.hours_price == undefined ||
                values?.hours_price == null
              }
              onClick={onSave}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      {successPopup}
    </>
  );
};

export default HourlyRatePopup;

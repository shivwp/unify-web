import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  onEditHourPerWeek,
  setHourlyPrice,
} from "../../../../redux/actions/profileAction";

const HourlyRate = ({ setCurrentTab, profileList }) => {
  const [values, setValues] = useState({});
  const percent = 20;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [successPopup, setSuccessPopup] = useState(false);
  const [popup, setPopup] = useState();
  const [isChange, setIsChange] = useState(false);

  console.log(values);
  console.log(profileList);
  useEffect(() => {
    if (profileList) {
      setValues({ hours_price: profileList?.amount });
    }
  }, [profileList]);
  const afterSuccess = () => {
    setCurrentTab("publishProfile");
    navigate(`/freelancer/profile-intro/publishProfile`);
  };

  const onSave = () => {
    if (isChange) {
      dispatch(
        onEditHourPerWeek(
          values,
          popup,
          successPopup,
          setSuccessPopup,
          afterSuccess
        )
      );
    } else {
      setCurrentTab("publishProfile");
      navigate(`/freelancer/profile-intro/publishProfile`);
    }
  };

  return (
    <>
      <div className="container">
        <div className="container_border">
          <div className="startIntroIn">
            <h5 className="startIntroTwoH5">Show me the money!</h5>
            <p className="startIntroTwoP mt-3">
              This will appear on your profile as your standard hourly rate. You
              may find projects that are above or below this, and can change
              this every time you are interested in a new project.
            </p>
            <Row className="m-1">
              <div className="pbx_pdd_sp2">
                <Col sm={9}>
                  <div className="mt-2">
                    <div className="hraet_pdd_sp">Hourly Rate</div>
                    <div className="tamoun_pdd_sp">
                      Total amount the client will see on your proposal
                    </div>
                  </div>
                </Col>
                <Col sm={3}>
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
                          placeholder="0.00"
                          name="hours_price"
                          className="project_details_Num_inp send_proposal_num_inp"
                          onChange={(e) => {
                            setValues({ [e.target.name]: e.target.value });
                            setIsChange(true);
                          }}
                          value={values?.hours_price || null}
                        />
                      </div>
                      <div className="slsh_hr"> /hour </div>
                    </div>
                  </div>
                </Col>
              </div>
              <div className="pbx_pdd_sp2 mt-1 mb-1">
                <Col sm={9}>
                  <div className="mt-2">
                    <div className="hraet_pdd_sp">Unify Service Fee</div>
                    <div className="tamoun_pdd_sp">
                      The unify Service fee is 20% when you begin a contract
                      with a new client.
                    </div>
                  </div>
                </Col>
                <Col sm={3}>
                  <div className="d-flex align-items-center">
                    <div className="d-flex">
                      <div className="inp_bdg_pdsp">
                        $
                        <Form.Control
                          type="text"
                          className="hourlyRateDisableInp"
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
              <div className="pbx_pdd_sp2">
                <Col sm={9}>
                  <div className="mt-2">
                    <div className="hraet_pdd_sp">You'll receive</div>
                    <div className="tamoun_pdd_sp">
                      The estimated amount you'll receive after service fees
                    </div>
                  </div>
                </Col>
                <Col sm={3}>
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="inp_bdg_pdsp">
                        $
                        <Form.Control
                          type="text"
                          className="hourlyRateDisableInp"
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
            <div className="theme_btns mt-0">
              <button
                className="first_button"
                onClick={() => {
                  setCurrentTab("servicesOffer");
                  navigate(`/freelancer/profile-intro/servicesOffer`);
                }}
              >
                Back
              </button>
              <button
                className="second_button"
                disabled={!values?.hours_price}
                onClick={onSave}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {successPopup}
    </>
  );
};

export default HourlyRate;

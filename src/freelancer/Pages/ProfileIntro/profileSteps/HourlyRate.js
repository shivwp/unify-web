import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const HourlyRate = ({ setCurrentTab }) => {
  return (
    <>
      <div className="container">
        <div className="container_border">
          <div className="startIntroIn">
            <h5 className="startIntroTwoH5">
              Now, Lets's set your hourly rate.
            </h5>
            <p className="startIntroTwoP">
              Clients will se this rate on your profile and in search result
              once you publish your profile. You can adjust your rate every time
              you submit a proposal
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
                    <div className="sli_bdg_pddsp">
                      {/* Client’s budget:
                                                {singleJobDetails?.budget_type === "fixed"
                                                    ? ` $${singleJobDetails?.price}`
                                                    : singleJobDetails?.budget_type === "hourly"
                                                        ? ` $${singleJobDetails?.min_price} - $${singleJobDetails?.price} /hr`
                                                        : null} */}
                    </div>
                    <div className="d-flex">
                      <div
                        className="inp_bdg_pdsp"
                        style={{ position: "relative", marginBottom: 10 }}
                      >
                        $
                        <Form.Control
                          type="number"
                          placeholder={`15.00`}
                          name="bid_amount"
                          className="project_details_Num_inp send_proposal_num_inp"
                          // value={values?.bid_amount}
                          // onChange={(e) => handleOnChange(e)}
                          // isInvalid={errors?.bid_amount}
                          // feedback={errors?.bid_amount}
                          // onWheel={(e) => e.target.blur()}
                        />
                        {/* <Form.Control.Feedback
                                                        type="invalid"
                                                        style={{ position: "absolute", top: 44, left: 0 }}
                                                    >
                                                        {errors?.bid_amount}
                                                    </Form.Control.Feedback> */}
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
                      with a new client. Once you bill over $500 with your
                      client, the fee will be 10%
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
                          // value={(values?.bid_amount / 100) * percent}
                          disabled
                          placeholder={`03.00`}
                          name="unify_service_fee"
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
                          placeholder={`12.00`}
                          // disabled
                          // value={
                          //     values?.bid_amount -
                          //     (values?.bid_amount / 100) * percent
                          // }
                          name="reciving_amt"
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
                onClick={() => setCurrentTab("servicesOffer")}
              >
                Back
              </button>
              <button
                className="second_button"
                onClick={() => setCurrentTab("publishProfile")}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HourlyRate;

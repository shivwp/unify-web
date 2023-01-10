import React from "react";
import { Col, Row, Form } from "react-bootstrap";

const HourlyBid = ({ project_data, values, setValues, errors, setErrors }) => {
  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  return (
    <>
      <Row className="mt-3">
        <Col lg={8}>
          <div className="send_prp_blew_hsp">Terms</div>
          <div className="send_propo_hdsp mt-2">
            What is the rate you'd like to bid for this job?
          </div>
          {/* <div className="sphd_btext_protection mt-2">
                Your profile rate: $15.00/hr
              </div> */}
          <div className="pbx_pdd_sp">
            <div className="mt-2">
              <div className="hraet_pdd_sp">Hourly Rate</div>
              <div className="tamoun_pdd_sp">
                Total amount the client will see on your proposal
              </div>
            </div>
            <div>
              <div className="sli_bdg_pddsp">
                Client’s budget:
                {project_data?.budget_type === "fixed"
                  ? ` $${project_data?.price}`
                  : project_data?.budget_type === "hourly"
                  ? ` $${project_data?.min_price} - $${project_data?.price} /hr`
                  : null}
              </div>
              <div className="d-flex">
                <div
                  className="inp_bdg_pdsp"
                  style={{ position: "relative", marginBottom: 10 }}
                >
                  $
                  <Form.Control
                    type="number"
                    placeholder={`0.00`}
                    min="1"
                    name="bid_amount"
                    className="project_details_Num_inp send_proposal_num_inp"
                    value={values?.bid_amount}
                    onChange={(e) => handleOnChange(e)}
                    isInvalid={errors?.bid_amount}
                    feedback={errors?.bid_amount}
                    onWheel={(e) => e.target.blur()}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ position: "absolute", top: 44, left: 0 }}
                  >
                    {errors?.bid_amount}
                  </Form.Control.Feedback>
                </div>
                <div className="sli_bdg_pddsp d-flex align-items-center slsh_rh">
                  /hr
                </div>
              </div>
            </div>
          </div>
          <div className="pbx_pdd_sp mt-1 mb-1">
            <div className="mt-2 d-flex align-items-center">
              <div className="hraet_pdd_sp">20% Unify Service Fee</div>
            </div>
            <div className="d-flex align-items-center">
              <div className="d-flex">
                <div className="inp_bdg_pdsp">
                  $
                  <Form.Control
                    type="text"
                    value={(
                      (values?.bid_amount / 100) *
                      project_data?.service_fee
                    )?.toFixed(2)}
                    disabled
                    placeholder={`0.00`}
                    name="unify_service_fee"
                  />
                </div>
                <div className="sli_bdg_pddsp d-flex align-items-center slsh_rh">
                  /hr
                </div>
              </div>
            </div>
          </div>
          <div className="pbx_pdd_sp no-border">
            <div className="mt-2">
              <div className="hraet_pdd_sp">You'll receive</div>
              <div className="tamoun_pdd_sp">
                The estimated amount you'll receive after service fees
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <div className="inp_bdg_pdsp">
                  $
                  <Form.Control
                    type="text"
                    placeholder={`0.00`}
                    disabled
                    value={(
                      values?.bid_amount -
                      (values?.bid_amount / 100) * project_data?.service_fee
                    )?.toFixed(2)}
                    name="reciving_amt"
                  />
                </div>
                <div className="sli_bdg_pddsp d-flex align-items-center slsh_rh">
                  /hr
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className="bc_vrwprotection">
            <div className="img_bx_protection">
              <img src="/assets/protection.png" alt="" />
            </div>
            <div className="css-name-proetction mt-3">
              Includes Unify Protection.
            </div>
            {/* <div className="css-rve-prt pt-1">Learn More</div> */}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HourlyBid;

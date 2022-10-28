import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Select from "react-select";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";

const AddCompAddress = () => {
  const options1 = [{ name: "india", label: "india" }];
  return (
    <>
      <Container className="add_comp_address">
        <div className="comp_address_title">Hire Mario Speedwagon</div>
        <div className="back_to_offer">Back to Offer Details</div>
        <Row>
          <Col lg={8}>
            <div className="box_vs_m mt-0 col_left">
              <h5 className="page_title">1. Add Company Address</h5>
              <div className="add_details">
                <form>
                  <Row>
                    <Col lg-6>
                      <div className="add_address_inp">
                        <span>Country</span>
                        <Select
                          className="custom_css_select"
                          placeholder="India"
                          options={options1}
                        />
                      </div>
                      <div className="add_address_inp">
                        <span>City</span>
                        <Select
                          className="custom_css_select"
                          placeholder="India"
                          options={options1}
                        />
                      </div>
                    </Col>
                    <Col lg-6>
                      <div className="add_address_inp">
                        <span>Address</span>
                        <Form.Control type="text" name="address" id="address" />
                      </div>
                      <div className="add_address_inp">
                        <span>Postal Code(optional)</span>
                        <Form.Control
                          type="text"
                          name="postal-code"
                          id="postal-code"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Link to="/hire-freelancer/edit-address">
                    <button
                      type="button"
                      className="save_Address"
                      style={{ fontWeight: 600 }}
                    >
                      Save
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="box_vs_m mt-0 _col_right">
              <div className="Add_Address_profile">
                <div className="freelancer_img_in_r online_profile">
                  <img src="/assets/PRO-2.png" alt="" />
                </div>
                <div className="freel_det_bin">
                  <p>
                    Hire Mario Speedwagon for: I need a designer to changes in
                    my...
                  </p>
                </div>
              </div>
              <div className="Escrow_deposit_box">
                <div className="Escrow_deposit">
                  Escrow deposit <span>?</span>
                </div>
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span className="_amount">$ 30.00</span>
                </div>
              </div>
              <div className="market_place_fee_box">
                <div className="market_place">
                  <span> Marketplace Fee</span>
                  <span className="_amount">$ 0.90</span>
                </div>
                <div className="see_more">Learn more about fees</div>
              </div>
              <div className="Estimated_taxes_box">
                <div className="Estimated_taxes">
                  <span> Estimated Taxes</span>
                  <span className="_amount">$ 0.90</span>
                </div>
                <div className="see_more">Learn more about fees</div>
              </div>
              <div className="Estimated_total_box">
                <div className="Estimated_total">
                  <span> Estimated Total</span>
                  <span>$ 0.90</span>
                </div>
              </div>
              <div className="find_and_hire_button add_Addr">
                <button
                  type="button"
                  className="find_contact"
                  style={{
                    padding: "10px 20px",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  Find Contact & Hire
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddCompAddress;

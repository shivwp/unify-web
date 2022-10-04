import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Select from "react-select";
import { Link } from "react-router-dom";

const EditCompAddress = () => {
  return (
    <>
      <Container className="add_comp_address Edit_comp_address">
        <div className="comp_address_title">Hire Mario Speedwagon</div>
        <div className="back_to_offer">Back to Offer Details</div>
        <Row>
          <Col lg={8}>
            <div className="box_vs_m mt-0 col_left">
              <div className="Edit_details">
                <div className="_edit">
                  <h5 className="page_title">1. Edit Company Address</h5>
                  <Link to="/hire-freelancer/addAddress" className="_edit_btn">
                    <span className="_edit_btn">Edit</span>
                  </Link>
                </div>
                <div className="_address">
                  <p>
                    C-56 First floor, Extension, Nami Nagar, Vaishali Nagar,
                    Jaipur, Rajasthan 302021
                  </p>
                </div>
              </div>
              <div className="Select_payment_method_box">
                <h5 className="page_title">2. Select a billing method</h5>

                <div className="_payment_methods">
                  <ul className="setting_pay_inp">
                    <li>
                      <input type="radio" name="p" /> Payment card
                    </li>
                    <li>
                      <input type="radio" name="p" />{" "}
                      <img src="/assets/paypal.png" alt="" />
                    </li>
                  </ul>
                </div>
                <div className="payment_btn">
                  <button type="button" className="pay_with_btn">
                    Pay With PayPal
                  </button>
                </div>
              </div>
              <p className="_payment_alert">
                *Any available balance you have will be applied towards your
                total amount.
              </p>
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
              <div className="find_and_hire_button">
                <button type="button" className="find_contact">
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

export default EditCompAddress;

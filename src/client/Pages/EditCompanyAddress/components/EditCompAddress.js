import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CardDetailsPopup from "../../../../freelancer/Pages/Setting/tab/popups/CardDetailsPopup";

const EditCompAddress = () => {
  const [popup, SetPopup] = useState();
  return (
    <>
      <Container className="add_comp_address Edit_comp_address">
        <div className="comp_address_title">Hire Mario Speedwagon</div>
        <div className="back_to_offer">Back to Offer Details</div>
        <Row>
          <Col lg={8}>
            <div className="box_vs_m mt-0 col_left">
              <div className="Edit_details">
                <Row>
                  <Col lg={9} md={9}>
                    <div className="_edit">
                      <h5 className="page_title">Billing method </h5>
                      <p>Your balance due is $0.00</p>
                    </div>
                  </Col>
                  <Col lg={3} md={3}>
                    <div className="_address">
                      <img
                        src="/assets/stripLogo.png"
                        alt=""
                        className="stripClientLogo"
                      />
                      <p className="clientStrip">(Secured by Stripe)</p>
                    </div>
                  </Col>
                  <div>
                    <div className="btn_foot_sec no-border mb-3 mt-0 p-0 fo_btn_c next_b_btn_c clientPayBtn">
                      <Button
                        variant=""
                        className="clientCardbtn "
                        onClick={() => {
                          SetPopup(<CardDetailsPopup Popup={SetPopup} />);
                        }}
                      >
                        Add Card
                      </Button>
                    </div>
                  </div>
                </Row>
              </div>
              <div className="Select_payment_method_box">
                <div className="clientCardList">
                  <h5>Cards List</h5>
                  <div className="clientCardDetList">
                    <div className="clientCardDet">
                      <img
                        src="/assets/cardImg.png"
                        alt=""
                        className="cardLogoSize"
                      />
                      <span> 1922 **** **** **** 0416 </span>
                    </div>
                    <div className="clientCardDet">
                      <img
                        src="/assets/cardImg.png"
                        alt=""
                        className="cardLogoSize"
                      />
                      <span> 1922 **** **** **** 0416 </span>
                    </div>
                  </div>
                </div>
                <div className="payment_btn">
                  <Button variant="" type="button" className="pay_with_btn">
                    Pay With Stripe
                  </Button>
                </div>
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
              <div className="find_and_hire_button Edit_Addr">
                <Button
                  variant=""
                  type="button"
                  className="find_contact"
                  style={{
                    padding: "10px 20px",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  Find Contact & Hire
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {popup}
    </>
  );
};

export default EditCompAddress;

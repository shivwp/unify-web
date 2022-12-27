import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import CardDetailsPopup from "../../../../freelancer/Pages/Setting/tab/popups/CardDetailsPopup";
import CancleSubscription from "../../../../freelancer/Pages/Setting/tab/popups/CancleSubscriptionPopup";

const SettingBilling = () => {
  return (
    <>
      <Col lg={9} className="billingTop">
        <div className="s_nav_body">
          <div className="s_b_head no-border">
            <h2 className="f-size-35">Billing & Payments</h2>
          </div>
          <div className="r-box_setting">
            <div className="d-flex pt-1 pb-3 flex-wrap b-bottom-gr billingStripSection">
              <div className=" billingSectionDivide ">
                <div className="setting_b_head_s">
                  Manage Billing Methods for received payment
                </div>
                <div className="sett_y_b">Your balance due is $0.00</div>
              </div>
              <div className="btn_foot_sec no-border mt-0 mb-0 p-0 fo_btn_c next_b_btn_c billingSectionDivide2">
                <div className="billingStripTab ">
                  <div>
                    <img
                      src="/assets/stripLogo.png"
                      alt=" stripe logo"
                      className="billingStripLogo"
                    />
                  </div>
                  <div className="billingStripText">(Secured by Stripe)</div>
                </div>
              </div>
            </div>
            <div>
              <div className="btn_foot_sec no-border mt-0 mb-0 p-0 fo_btn_c next_b_btn_c">
                <Button variant="" className="bg-transparent h-color-b mt-4">
                  Add Card
                </Button>
              </div>
            </div>
          </div>
          <div className="Select_payment_method_box mb-0">
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
          </div>
          <div className="r-box_setting">
            <div className="d-flex justify-content-between align-items-center b-bottom-gr pt-1 pb-3 flex-wrap">
              <div>
                <div className="setting_b_head_s">Subscriptions</div>
                <div className="sett_y_b">$0.00/month</div>
              </div>
              <div className="btn_foot_sec no-border mt-0 mb-0 p-0 fo_btn_c next_b_btn_c">
                <Button variant="" className="bg-transparent h-color-b">
                  Cancel
                </Button>
              </div>
            </div>
            <Link to="/freelancer/subscription">
              <div className="see_cat_link mt-3 mb-1">Change Subscription</div>
            </Link>
          </div>
        </div>
      </Col>
    </>
  );
};
export default SettingBilling;

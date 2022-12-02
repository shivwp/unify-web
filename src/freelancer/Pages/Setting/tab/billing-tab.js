import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import SideNav from "./site_nav";
import Title from "../../../../components/title";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import CardDetailsPopup from "./popups/CardDetailsPopup";
import CancleSubscription from "./popups/CancleSubscriptionPopup";

const Screen = () => {
  Title(" | Billing & Payments");
  const [popup, SetPopup] = useState();
  return (
    <div className="bg-f2f8ff min_pad_m">
      <Container>
        <Row>
          <SideNav />
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
                      <div className="billingStripText">
                        (Secured by Stripe)
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="btn_foot_sec no-border mt-0 mb-0 p-0 fo_btn_c next_b_btn_c">
                    <Button
                      variant=""
                      className="bg-transparent h-color-b mt-4"
                      onClick={() => {
                        SetPopup(<CardDetailsPopup Popup={SetPopup} />);
                      }}
                    >
                      Add Card
                    </Button>
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
                    <Button
                      variant=""
                      className="bg-transparent h-color-b"
                      onClick={() => {
                        SetPopup(<CancleSubscription Popup={SetPopup} />);
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
                <Link to="/freelancer/subscription">
                  <div className="see_cat_link mt-3 mb-1">
                    Change Subscription
                  </div>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {popup}
    </div>
  );
};
export default Screen;

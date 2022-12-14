import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import SideNav from "./site_nav";
import Title from "../../../components/title";
import { Link } from "react-router-dom";
import { useState } from "react";

const AddNEFTDetails = (props) => {
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn paypopradouy pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding addpay_header_hdin">
              Add Bank Account Details
            </div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.Popup();
              }}
            >
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
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
            <div className="mb-4 ">
              <Row>
                <Col md={12}>
                  <div className="popup_form_element payformelent">
                    <label className="text-black font-size-13px font-weight-500">
                      Beneficiary Name
                    </label>
                    <input
                      type="text"
                      className="font-size-13px"
                      placeholder="Manish"
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element payformelent">
                    <label className="text-black font-size-13px font-weight-500">
                      Back Name
                    </label>
                    <input
                      type="text"
                      className="font-size-13px"
                      placeholder="HDFC Bank"
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element payformelent">
                    <label className="text-black font-size-13px font-weight-500">
                      Account Number
                    </label>
                    <input
                      type="text"
                      className="font-size-13px"
                      placeholder="xxxxxxxxxxxxxxxxxx"
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element payformelent">
                    <label className="text-black font-size-13px font-weight-500">
                      Re-enter Account Number
                    </label>
                    <input
                      type="text"
                      className="font-size-13px"
                      placeholder="xxxxxxxxxxxxxxxxxx"
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element payformelent">
                    <label className="text-black font-size-13px font-weight-500">
                      IFSC
                    </label>
                    <input
                      type="text"
                      className="font-size-13px"
                      placeholder="HDFC0000"
                    />
                  </div>
                </Col>
              </Row>
            </div>

            <div className="popup_btns_new flex-wrap">
              <button
                onClick={() => {
                  props.Popup();
                }}
                style={{ fontWeight: 600, padding: "8px 45px" }}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  props.Popup();
                }}
                style={{ fontWeight: 600, padding: "8px 45px" }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Screen = () => {
  const [popup, SetPopup] = useState();

  Title(" | Billing & Payments");
  return (
    <div className="bg-fff min_pad_m">
      <Container>
        <Row>
          <SideNav />
          <Col lg={9}>
            <div className="s_nav_body">
              <div className="s_b_head no-border">
                <h2 className="f-size-35">Billing & Payments</h2>
              </div>
              {/* <div className="r-box_setting">
                <div className="d-flex justify-content-between align-items-center flex-wrap pt-1 pb-3">
                  <div>
                    <div className="setting_b_head_s">Balance Due</div>
                    <div className="sett_y_b">Your balance due is $0.00</div>
                  </div>
                  <div className="btn_foot_sec no-border mt-0 mb-0 p-0 fo_btn_c next_b_btn_c">
                    <button className="bg-transparent h-color-b">
                      Pay Now
                    </button>
                  </div>
                </div>
              </div> */}
              <div className="r-box_setting">
                <div className="d-flex justify-content-between align-items-center pt-1 pb-3 flex-wrap b-bottom-gr">
                  <div>
                    <div className="setting_b_head_s">
                      Add a Billing Methods
                    </div>
                    <div className="sett_y_b">Your balance due is $0.00</div>
                  </div>
                </div>
                <div>
                  <ul className="setting_pay_inp d-flex sflex_spance">
                    <li>
                      <input
                        type="radio"
                        name="p"
                        onClick={() => {
                          SetPopup(<AddNEFTDetails Popup={SetPopup} />);
                        }}
                      />{" "}
                      NEFT{" "}
                    </li>
                    <li>
                      <input type="radio" name="p" />{" "}
                      <img src="/assets/paypal.png" alt="" />
                    </li>
                  </ul>

                  {/* <div className="btn_foot_sec no-border mt-0 mb-0 p-0 fo_btn_c next_b_btn_c">
                                        <button className="bg-transparent h-color-b">Pay With PayPal</button>
                                    </div> */}
                </div>
              </div>
              <div className="r-box_setting">
                <div className="d-flex justify-content-between align-items-center pt-1 pb-3 flex-wrap">
                  <div>
                    <div className="setting_b_head_s">Subscriptions</div>
                    <div className="sett_y_b">
                      You don't have any subscription plan
                    </div>
                  </div>
                  <div className="btn_foot_sec no-border mt-0 mb-0 p-0 fo_btn_c next_b_btn_c">
                    <Link to="/freelancer/subscription">
                      <button className="bg-transparent h-color-b">
                        Add Subscription
                      </button>
                    </Link>
                  </div>
                </div>
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

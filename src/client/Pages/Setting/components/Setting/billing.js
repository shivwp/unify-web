import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import SideNav from "./site_nav";
import Title from "../../../../../components/title";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Screen = () => {
  Title(" | Setting - Billing & Payment");
  return (
    <div className="bg-f2f8ff min_pad_m">
      <Container>
        <Row>
          <SideNav />
          <Col lg={9}>
            <div className="s_nav_body">
              <div className="s_b_head no-border">
                <h2>Billing & Payment</h2>
              </div>
              <div className="r-box_setting">
                <div className="d-flex justify-content-between align-items-center flex-wrap pt-1 pb-3">
                  <div>
                    <div className="setting_b_head_s">Balance Due</div>
                    <div className="sett_y_b">Your balance due is $0.00</div>
                  </div>
                  <div className="btn_foot_sec no-border mt-0 mb-0 p-0 fo_btn_c next_b_btn_c">
                    <Button variant="" className="bg-transparent h-color-b">
                      Pay Now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="r-box_setting">
                <div className="d-flex justify-content-between align-items-center pt-1 pb-3 flex-wrap b-bottom-gr">
                  <div>
                    <div className="setting_b_head_s">Billing Methods</div>
                    <div className="sett_y_b">Your balance due is $0.00</div>
                  </div>
                  <div className="btn_foot_sec no-border mt-0 mb-0 p-0 fo_btn_c next_b_btn_c">
                    <Button variant="" className="bg-transparent h-color-b">
                      Add a new billing method
                    </Button>
                  </div>
                </div>
                <div>
                  <ul className="setting_pay_inp">
                    <li>
                      <Form.Check type="radio" name="p" /> Payment card
                    </li>
                    <li>
                      <Form.Check type="radio" name="p" />{" "}
                      <img src="/assets/paypal.png" alt="" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="r-box_setting">
                <div className="d-flex justify-content-between align-items-center flex-wrap pt-1 pb-3 b-bottom-gr">
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
                <div className="chan_sub_n_s">
                  <Link to="#" className="mt-2">
                    Change Subscription
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Screen;

import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Title from "../../../components/title";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Subscriptionplan = () => {
  Title(" | Subscription plan");
  return (
    <>
      <Layout>
        <Container>
          <div className="question_box">
            <div className="questio_heading no-border blue_lin mt-2 mb-2">
              <h1 className="text-center font-fiftie">Subscription plan</h1>
            </div>
            <Row className="justify-content-center">
              <Col
                lg={4}
                className="sub_col_c lg-flex-right-subs subscriptionResp"
              >
                <Form.Label>
                  <div className="subscription_box_r">
                    <div className="sub_radio new_sub_rad">
                      <Form.Check type="radio" name="s" />
                    </div>
                    <div className="sub_sm_tex">Just Learn</div>
                    <div className="sub_pric">$0.00 /month</div>
                    <ul className="sub_list_ul">
                      <li>Free job post & verified freelancer work history</li>
                      <li>Free proposals from talent</li>
                      <li>Unify Payment Protection</li>
                      <li>On-demand sourcing services </li>
                      <li>Team project tracking & collaboration tools </li>
                      <li>
                        Additional freelancer invites, report & tracking
                        capabilities
                      </li>
                    </ul>
                    <div>
                      <Link to="/freelancer/dashboard">
                        <Button
                          variant=""
                          className="btn_chose_pl btnhovpple subscriptionResp"
                        >
                          CHOOSE PLAN
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Form.Label>
              </Col>
              <Col
                lg={4}
                className="sub_col_c lg-flex-right-subs subscriptionResp"
              >
                <Form.Label>
                  <div className="subscription_box_r">
                    <div className="sub_radio new_sub_rad">
                      <Form.Check type="radio" name="s" />
                    </div>
                    <div className="sub_sm_tex">JUST EARN</div>
                    <div className="sub_pric">$50.00 /month</div>
                    <ul className="sub_list_ul">
                      <li>Free job post & verified freelancer work history</li>
                      <li>Free proposals from talent</li>
                      <li>Unify Payment Protection</li>
                      <li>On-demand sourcing services </li>
                      <li>Team project tracking & collaboration tools </li>
                      <li>
                        Additional freelancer invites, report & tracking
                        capabilities
                      </li>
                    </ul>
                    <div>
                      <Link to="/freelancer/dashboard">
                        <Button variant="" className="btn_chose_pl btnhovpple">
                          CHOOSE PLAN
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Form.Label>
              </Col>
              <Col lg={4} className="sub_col_c lg-flex--subs subscriptionResp">
                <Form.Label>
                  <div className="subscription_box_r">
                    <div className="sub_radio new_sub_rad">
                      <Form.Check type="radio" name="s" />
                    </div>
                    <div className="sub_sm_tex">LEARN & EARN</div>
                    <div className="sub_pric">$100.00/year</div>
                    <ul className="sub_list_ul">
                      <li>Free job post & verified freelancer work history</li>
                      <li>Free proposals from talent</li>
                      <li>Unify Payment Protection</li>
                      <li>On-demand sourcing services </li>
                      <li>Team project tracking & collaboration tools </li>
                      <li>
                        Additional freelancer invites, report & tracking
                        capabilities
                      </li>
                    </ul>
                    <div>
                      <Link to="/freelancer/dashboard">
                        <Button variant="" className="btn_chose_pl btnhovpple">
                          CHOOSE PLAN
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Form.Label>
              </Col>
            </Row>
          </div>
        </Container>
      </Layout>
    </>
  );
};
export default Subscriptionplan;

import NavbarHeader from "./navbarlogin";
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Footer from './footer';
import Title from './title';
import { Link } from "react-router-dom";


const Subscriptionplan = () => {
    Title(" | Subscription plan");
    return (
        <>
            <NavbarHeader />
            <Container>
                <div className="question_box">
                    <div className="questio_heading no-border blue_lin mt-2 mb-2">
                        <h1 className="text-center font-fiftie">Subscription plan</h1>
                    </div>
                    <Row className="justify-content-center">
                        <Col lg={6} className="sub_col_c">
                            <label>
                                <div className="subscription_box_r">
                                    <div className="sub_radio new_sub_rad"><input type="radio" name="s"/></div>
                                    <div className="sub_sm_tex">BASIC</div>
                                    <div className="sub_pric">$0.00 /month</div>
                                    <ul className="sub_list_ul">
                                        <li>Free job post & verified freelancer work history</li>
                                        <li>Free proposals from talent</li>
                                        <li>Unify Payment Protection</li>
                                        <li>On-demand sourcing services </li>
                                        <li>Team project tracking & collaboration tools </li>
                                        <li>Additional freelancer invites, report & tracking capabilities</li>
                                    </ul>
                                    <div>
                                    <Link to="/dashboard"><button className="btn_chose_pl">CHOOSE PLAN</button></Link>
                                    </div>
                                </div>
                            </label>
                        </Col>
                        <Col lg={6} className="sub_col_c">
                            <label>
                                <div className="subscription_box_r">
                                    <div className="sub_radio new_sub_rad"><input type="radio"  name="s"/></div>
                                    <div className="sub_sm_tex">PLUS</div>
                                    <div className="sub_pric">$50.00/year</div>
                                    <ul className="sub_list_ul">
                                        <li>Free job post & verified freelancer work history</li>
                                        <li>Free proposals from talent</li>
                                        <li>Unify Payment Protection</li>
                                        <li>On-demand sourcing services </li>
                                        <li>Team project tracking & collaboration tools </li>
                                        <li>Additional freelancer invites, report & tracking capabilities</li>
                                    </ul>
                                    <div>
                                    <Link to="/dashboard"><button className="btn_chose_pl">CHOOSE PLAN</button></Link>
                                    </div>
                                </div>
                            </label>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Footer />
        </>
    )
}
export default Subscriptionplan
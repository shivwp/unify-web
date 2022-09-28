import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import SideNav from './site_nav';
import Title from '../../../components/title'

const Screen = () => {
    Title(' | Get Paid')
    return (
        <div className='bg-f2f8ff min_pad_m'>
            <Container>
                <Row>
                    <SideNav />
                    <Col lg={9}>
                        <div className="s_nav_body">
                            <div className="s_b_head no-border"><h2 className='f-size-35'>Get Paid</h2></div>
                            <div className="r-box_setting">
                                <div className="d-flex justify-content-between align-items-center flex-wrap pt-1 pb-3">
                                    <div>
                                        <div className='setting_b_head_s'>Balance</div>
                                        <div className='sett_y_b'>Your balance due is $0.00</div>
                                    </div>
                                    <div className="btn_foot_sec no-border mt-0 mb-0 p-0 fo_btn_c next_b_btn_c">
                                        <button className="bg-transparent h-color-b">Get Paid Now</button>
                                     </div>
                                </div>
                            </div>
                            <div className="r-box_setting">
                                <div className="d-flex justify-content-between align-items-center pt-2 pb-4 flex-wrap b-bottom-gr">
                                    <div>
                                        <div className='setting_b_head_s'>Payment Methods</div>
                                    </div>
                                    <div className="btn_foot_sec no-border mt-0 mb-0 p-0 fo_btn_c next_b_btn_c">
                                        <button className="bg-transparent h-color-b">Add payment method</button>
                                    </div>
                                </div>
                                <Row>
                                    <Col lg={12} className="d-flex justify-content-between pt-2 pb-3 flex-wrap">
                                        <div className='d-flex mb-2 mt-3 justify-content-between w-100'>
                                            <div className="w-55">
                                                <div className='c_name_s_v font-14-px'>You have not set up any payment methods yet.</div>
                                                <div className="c_name_sett pt-0 font-color-light font-12-px">Tell us how you want to receive your funds. It may take up to 3 days to activate your payment method.</div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                             </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Screen
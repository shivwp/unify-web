import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import SideNav from './site_nav';
import Title from '../../../components/title'

const Screen = () => {
    Title(' | Billing & Payments')
    return (
        <div className='bg-f2f8ff min_pad_m'>
            <Container>
                <Row>
                    <SideNav />
                    <Col lg={9}>
                        <div className="s_nav_body">
                            <div className="s_b_head no-border"><h2>Billing & Payments</h2></div>
                            <div className="r-box_setting">
                                <div className="d-flex justify-content-between align-items-center pt-1 pb-0">
                                    <div className='setting_b_head_s'>Account</div>
                                </div>

                                <Row>
                                    <Col lg={12} className="d-flex justify-content-between flex-wrap">
                                        <div className='d-flex mb-2 mt-3 justify-content-between w-100 flex-wrap'>
                                            <div className="w-55">
                                                <div className='c_name_s_v'>Manage billing methods</div>
                                                <div className="c_name_sett pt-0 font-color-light">Add, update, or remove your billing methods</div>
                                            </div>
                                            <div className="btn_foot_sec flex-wrap d-flex pt-0 pb-0 m-0 no-border">
                                                <div className='fo_btn_c d-flex align-items-center width-max-content next_b_btn_c'><button>Add a New Billing Method</button></div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={12} className="d-flex justify-content-between b-bottom-gr pb-4 flex-wrap">
                                        <div className='d-flex mb-2 mt-3 justify-content-between w-100'>
                                            <div className="w-55">
                                                <div className='c_name_s_v'>Primary</div>
                                                <div className="c_name_sett pt-0 font-color-light">Your primary billing method is used for all recurring payments</div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={12} className="d-flex justify-content-between flex-wrap">
                                        <div className='d-flex mb-2 mt-3 justify-content-between w-100'>
                                            <div className="w-55">
                                                <div className="c_name_sett pt-0 font-color-light">
                                                    <img src="/assets/visa.png" height="35" alt="" />
                                                    Visa ending in 1234
                                                </div>
                                            </div>
                                            <div className="trans_bg_btns_paym">
                                                <button>Edit</button>
                                                <button>Remove</button>
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
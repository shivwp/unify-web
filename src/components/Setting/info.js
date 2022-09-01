import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import SideNav from './site_nav';
import Title from '../title'
import '../job.css'

const Screen = () => {
    Title(' | Setting - Myinfo')
    return (
        <div className='bg-f2f8ff min_pad_m'>
            <Container>
                <Row>
                    <SideNav />
                    <Col lg={9}>
                        <div className="s_nav_body">
                            <div className="s_b_head no-border"><h2>My Info</h2></div>
                            <div className="r-box_setting">
                                <div className="d-flex justify-content-between align-items-center b-bottom-gr pt-1 pb-3">
                                    <div className='setting_b_head_s'>Account</div>
                                    <div>
                                        <button className="round_b_btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D4D4D5" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between mt-3'>
                                    <div className="d-flex">
                                        <div className='setting_pro_r_big'>
                                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" alt="" />
                                        </div>
                                        <div>
                                            <div className='user_nme_set'>John Doe</div>
                                            <div className='user_mal_set'>johndoe123@gmail.com</div>
                                        </div>
                                    </div>
                                    <div className="btn_foot_sec no-border mt-0 fo_btn_c next_b_btn_c">
                                        <button className="bg-transparent h-color-b">Upload Profile Photo</button>
                                    </div>
                                </div>
                            </div>
                            <div className="r-box_setting">
                                <div className="d-flex justify-content-between align-items-center b-bottom-gr pt-1 pb-3">
                                    <div className='setting_b_head_s'>Company Details</div>
                                    <div>
                                        <button className="round_b_btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D4D4D5" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <Row>
                                    <Col lg={4}>
                                        <div className='mb-2 mt-1'>
                                            <div className="c_name_sett">Company name</div>
                                            <div className='c_name_s_v'>Riztech info solution</div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className='mb-2 mt-1'>
                                            <div className="c_name_sett">Website</div>
                                            <div className='c_name_s_v'>www.riztech.com</div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className='mb-2 mt-1'>
                                            <div className="c_name_sett">Tagline</div>
                                            <div className='c_name_s_v'>Expert in Web & App Design</div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='mb-2 mt-2'>
                                            <div className="c_name_sett">Description</div>
                                            <div className='c_name_s_v'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="r-box_setting">
                                <div className="d-flex justify-content-between align-items-center b-bottom-gr pt-1 pb-3">
                                    <div className='setting_b_head_s'>Company Contacts</div>
                                    <div>
                                        <button className="round_b_btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D4D4D5" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <Row>
                                    <Col lg={4}>
                                        <div className='mb-2 mt-1'>
                                            <div className="c_name_sett">Owner email</div>
                                            <div className='c_name_s_v'>johndoe123@gmail.com</div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className='mb-2 mt-1'>
                                            <div className="c_name_sett">Phone</div>
                                            <div className='c_name_s_v'>+91 98-76-54-3210</div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className='mb-2 mt-1'>
                                            <div className="c_name_sett">VAT ID</div>
                                            <div className='c_name_s_v'>Enter your VAT ID to enable VAT invoicing</div>
                                        </div>
                                    </Col>
                                    <Col lg={7}>
                                        <div className='mb-2 mt-2'>
                                            <div className="c_name_sett">Time Zone</div>
                                            <div className='c_name_s_v'>UTC+05:30 Mumbai, Kolkata, Chennai, New Delhi</div>
                                        </div>
                                    </Col>
                                    <Col lg={5}>
                                        <div className='mb-2 mt-2'>
                                            <div className="c_name_sett">Address</div>
                                            <div className='c_name_s_v'>India</div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='acc_inf_c_s'>This is a <b>Client</b> account</div>
                            <div className="btn_foot_sec flex-wrap d-flex no-border">
                                <div className='fo_btn_c next_b_btn_c'><button>Create New Account</button></div>
                                <div className='fo_btn_c next_b_btn_c'><button className="active_btn_blue">Close Account</button></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Screen
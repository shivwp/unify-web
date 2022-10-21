import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import SideNav from './site_nav';
import Title from '../../../../components/title'
import EditAccountPopup from "./popups/EditAccountPopup";
import { useState } from "react";

const Screen = () => {
    Title(' | Contact Info')
    const [openEditTeam, setOpenEditTeam] = useState(false);
    return (
        <div className='bg-f2f8ff min_pad_m'>
            <Container>
                <Row>
                    <SideNav />
                    <Col lg={9}>
                        <div className="s_nav_body">
                            <div className="s_b_head no-border"><h2 className='f-size-35'>Contact info</h2></div>
                            <div className="r-box_setting">
                                <div className="d-flex justify-content-between align-items-center pt-1 pb-0">
                                    <div className='setting_b_head_s'>Account</div>
                                    <div>
                                        <button className="round_b_btn" onClick={() => setOpenEditTeam(true)} >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D4D4D5" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <Row>
                                        <Col md={12}>
                                            <div className='mb-2 mt-2'>
                                                <div className='c_name_s_v pb-0 f_new_contact_info'>User ID</div>
                                                <div className="c_name_sett mt-0 pt-0">Expert Web Technologies</div>
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <div className='mb-2 mt-2'>
                                                <div className='c_name_s_v pb-0 f_new_contact_info'>Name</div>
                                                <div className="c_name_sett mt-0 pt-0">Shiv Kumar Ku,awat</div>
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <div className='mb-2 mt-2'>
                                                <div className='c_name_s_v pb-0 f_new_contact_info'>Email</div>
                                                <div className="c_name_sett mt-0 pt-0">shiv.kumar@gmail.com</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                            </div>
                            <div className="r-box_setting">
                                <div className="b-bottom-gr pt-1 pb-3">
                                    <div className='setting_b_head_s'>Additional accounts</div>
                                    <div className="c_name_sett mt-0 pt-0">Creating a new account allows you to use Upwork in different ways, while still having just one login.</div>
                                </div>
                                <Row>
                                    <Col lg={12} className="d-flex justify-content-between flex-wrap">
                                        <div className='d-flex mb-2 mt-3 flex-wrap justify-content-between w-100'>
                                            <div className="w-55">
                                                <div className='c_name_s_v'>Client Account</div>
                                                <div className="c_name_sett pt-0 font-color-light">Hire, manage and pay as a different company. Each client company has its own
                                                    freelancers, payment methods and reports.</div>
                                            </div>
                                            <div className="btn_foot_sec flex-wrap d-flex pt-0 pb-0 m-0 no-border">
                                                <div className='fo_btn_c d-flex align-items-center width-max-content next_b_btn_c '><button className='min-width-226'>New Client Account</button></div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={12} className="d-flex justify-content-between flex-wrap">
                                        <div className='d-flex mb-2 mt-3 justify-content-between w-100 flex-wrap'>
                                            <div className="w-55">
                                                <div className='c_name_s_v'>Agency Account</div>
                                                <div className="c_name_sett pt-0 font-color-light">Find jobs and earn money as manager of a team of freelancers.</div>
                                            </div>
                                            <div className="btn_foot_sec flex-wrap d-flex pt-0 pb-0 m-0 no-border">
                                                <div className='fo_btn_c d-flex align-items-end width-max-content next_b_btn_c'><button className='min-width-226'>New Agency Account</button></div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="r-box_setting">
                                <div className="d-flex justify-content-between align-items-center b-bottom-gr pt-1 pb-3">
                                    <div className='setting_b_head_s'>Location</div>
                                    <div>
                                        <button className="round_b_btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D4D4D5" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <Row>
                                        <Col md={12}>
                                            <div className='mb-2 mt-2'>
                                                <div className='c_name_s_v pb-0 f_new_contact_info'>Time Zone</div>
                                                <div className="c_name_sett mt-0 pt-0 font-color-light">UTC-07:00 Pacific Time (US & Canada); Tijuana</div>
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <div className='mb-2 mt-2'>
                                                <div className='c_name_s_v pb-0 f_new_contact_info'>Address</div>
                                                <div className="c_name_sett mt-0 pt-0 font-color-light">
                                                    Address
                                                    12 Tiwari ji ka bagh adarsh nagar jaipur
                                                    Surya Bekri
                                                    Jaipur, RJ 302004
                                                    India
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <div className='mb-2 mt-2'>
                                                <div className='c_name_s_v pb-0 f_new_contact_info'>Phone</div>
                                                <div className="c_name_sett mt-0 pt-0 font-color-light">987-654-3210</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
      {openEditTeam && (
        <EditAccountPopup
          open={openEditTeam}
          onCloseModal={() => setOpenEditTeam(false)}
        />
      )}
        </div>
    );
}
export default Screen
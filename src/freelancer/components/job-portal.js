import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import star from '../../icons/star.svg';
import Button from 'react-bootstrap/Button'

const JobPortal = () => {
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col lg={6}><div className="jp_h3_no"><h3 className="f-ffive">HRM Recruitment Center</h3></div></Col>
                    <Col lg={6}>
                        <div className='jp_btn_m_no flex-wrap'>
                            <Button variant="">Browse Project Catelog</Button>
                            <Button variant="">Post a Job</Button>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col lg={8}>
                        <div className="s_nav_body mt-4 s_trans_bos">
                            <div className="d-flex justify-content-between snb_heading kwxnow flex-wrap">
                                <h1>My Postings</h1>
                                <div className="all_pos_tex">All Posting</div>
                            </div>
                            <div className="tabs_v_one flex-wrap">
                                <div className='v_tab_btn v_on_tab_active'>Active (20)</div>
                                <div className='v_tab_btn'>Recently filled</div>
                            </div>
                            <div className="tab_data_li">
                                <div className="post_head_h1"><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1></div>
                                <div className="pos_fle_ni flex-wrap">
                                    <div>
                                        <div className="post_pric">Fixed Price</div>
                                        <div className='post_uptime'>Public - Created 23 days ago</div>
                                    </div>
                                    <div className="count_post_dta">
                                        <div className='box_con_pos'>
                                            <div className="count_os">23</div>
                                            <div className="count_nam">Proposals</div>
                                        </div>
                                        <div className='box_con_pos'>
                                            <div className="count_os">23</div>
                                            <div className="count_nam">Messaged</div>
                                        </div>
                                        <div className='box_con_pos'>
                                            <div className="count_os">23</div>
                                            <div className="count_nam">Hired</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab_data_li">
                                <div className="post_head_h1"><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1></div>
                                <div className="pos_fle_ni flex-wrap">
                                    <div>
                                        <div className="post_pric">Fixed Price</div>
                                        <div className='post_uptime'>Public - Created 23 days ago</div>
                                    </div>
                                    <div className="count_post_dta">
                                        <div className='box_con_pos'>
                                            <div className="count_os">23</div>
                                            <div className="count_nam">Proposals</div>
                                        </div>
                                        <div className='box_con_pos'>
                                            <div className="count_os">23</div>
                                            <div className="count_nam">Messaged</div>
                                        </div>
                                        <div className='box_con_pos'>
                                            <div className="count_os">23</div>
                                            <div className="count_nam">Hired</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="s_nav_body mt-4 s_trans_bos">
                            <div className="d-flex justify-content-between snb_heading kwxnow flex-wrap">
                                <h1>My Drafts</h1>
                                <div className="all_pos_tex">All drafts</div>
                            </div>
                            <div className="tab_data_li tab_data_draft">
                                <div className="post_head_h1">
                                    <h1>Arabic Speaking - Social Media  </h1>
                                    <div className='post_uptime draft_time'>Saved 23 days ago</div>
                                </div>
                                <div>
                                    <div className="draf_menu_icon">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="s_nav_body mt-4 s_trans_bos">
                            <div className="d-flex justify-content-between snb_heading kwxnow flex-wrap">
                                <h1>My Pending Contracts</h1>
                                <div className="all_pos_tex">All Pending Contracts</div>
                            </div>
                            <div className="d-flex pending_con_node justify-content-between align-items-center">
                                <div className="tab_data_li no-border">
                                    <div className="post_head_h1">
                                        <h1>Arabic Speaking - Social Media  </h1>
                                    </div>
                                    <div className="d-flex">
                                        <div className="contractor_profil"><img src="/assets/PRO-2.png" alt="" /></div>
                                        <div className="d-flex align-items-center contrc_data">
                                            <div>
                                                <div className="contractor_nam">Lauren Palmer</div>
                                                <div className="contract_post_tm">8:00 AM  in Liverpool</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Button variant="" className="viewoffbtn">view offer</Button>
                                    <div className="offertime_sen">offer sent 5 minutes ago</div>
                                </div>
                            </div>
                        </div>
                        <div className="s_nav_body mt-4 s_trans_bos">
                            <div className="d-flex justify-content-between snb_heading kwxnow flex-wrap">
                                <h1>My Contracts</h1>
                                <div className="all_pos_tex">All Contracts</div>
                            </div>
                            <div className="tabs_v_one flex-wrap">
                                <div className='v_tab_btn v_on_tab_active'>All</div>
                                <div className='v_tab_btn'>Awaiting Funding (20)</div>
                            </div>

                            <div className="d-flex pending_con_node justify-content-between align-items-center">
                                <div className="tab_data_li no-border">
                                    <div className="post_head_h1">
                                        <h1>Arabic Speaking - Social Media  </h1>
                                    </div>
                                    <div className="d-flex">
                                        <div className="contractor_profil"><img src="/assets/PRO-2.png" alt="" /></div>
                                        <div className="d-flex align-items-center contrc_data">
                                            <div>
                                                <div className="contractor_nam">Lauren Palmer</div>
                                                <div className="contract_post_tm">8:00 AM  in Liverpool</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='milestone_text'>Milestones 02 : Arabic Speaking … more  </div>
                                </div>
                                <div>
                                    <div>
                                        <div className="d-flex justify-content-end">
                                            <Button variant="" className="viewoffbtn pay_now_btn">Pay Now</Button>
                                            <div className="draf_menu_icon">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                        <div className="contract_price">$124.00</div>
                                        <div className="in_acc_text">in Accord</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className='side_box_port mt-4'>
                            <div className='heat_lef'>
                                <img src={star} alt="" />
                            </div>
                            <div className='bg-img-port'>
                                <img src="/assets/uk-renewable-power.jpg" alt="" />
                            </div>
                            <div className="port_name">UX Development</div>
                            <div className='port_para'>
                                We are a computerized wellbeing startup with a spry and high-speed climate. We are searching for a Senior, RELIABLE portable application…
                            </div>
                            <div className='d-flex justify-content-center pt-2 pb-5'><Button variant="" className='port_lern_btn'>Learn More</Button></div>
                        </div>
                        <div className='side_box_port mt-2'>
                            <div className="port_name p-1 p_lef_20 text-left"> Job Templates</div>
                        </div>
                        <br />
                        <div className='port_tabs_box'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-folder" viewBox="0 0 16 16">
                                    <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
                                </svg>
                            </div>
                            <div>Projects Devolpment</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                        </div>
                        <div className='port_tabs_box'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-folder" viewBox="0 0 16 16">
                                    <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
                                </svg>
                            </div>
                            <div>Legal & Clients</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                        </div>
                        <div className='port_tabs_box'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-folder" viewBox="0 0 16 16">
                                    <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
                                </svg>
                            </div>
                            <div>Accounting & Payments</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                        </div>
                        <div className='port_tabs_box'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-folder" viewBox="0 0 16 16">
                                    <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
                                </svg>
                            </div>
                            <div>Design & Development</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default JobPortal
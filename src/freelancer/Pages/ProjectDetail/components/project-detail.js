import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import star from '../../../../icons/star.svg';
import '../../../../styles/freelancer.css'
import { Link } from 'react-router-dom';

function ListProposals() {
    const card = [1, 2, 3];
    return (
        <>
            {card.map((person, index) => (
                <div className='propo_box' key={index}>
                    <Row className='bo_bot_pad'>
                        <Col lg={9}>
                            <div>
                                <div className='flex_pro_bo'>
                                    <div className='projec_cli_prof'><img src="/assets/PRO-2.png" alt="" /></div>
                                    <div className='pro_cli_det'>
                                        <div>
                                            <h3>Hannah Finn</h3>
                                            <div className='pro_cli_sm_te flex-wrap'>
                                                <span className='space_wa'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                                    </svg>
                                                </span>
                                                3 months ago
                                                <div className='rev_aox'>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill fill-none" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                    </span>
                                                    <p>Reviews</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="price_ar_jjob pt-0">
                                <h1>$140.00</h1>
                                <p>(Hourly)</p>
                            </div>
                        </Col>
                    </Row>
                    <div className='pd_par_for'>
                        <p>
                            Hello, I am attaching my portfolio with this cover letter. If you need anything else regarding my portfolio or against my jobs? Do let me know. Hope you have a project from you. Regards
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
}


const projectdetail = () => {
    return (
        <>
            <Container className="mt-5">
                <Row className='flex_reverse_768'>
                    <Col lg={9} md={12}>
 
                        <div className="s_trans_bos s_nav_body box_web_req">
                            <div className='fl_end_b abso_cen'>
                                <div className="fb_btns_s_pro pd_n_fbspro">
                                    <button className='bg-trans_s_pro bg_li_grey wlistbtn_xe'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill heart_btn" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                        </svg>
                                    </button>
                                    <Link to="/freelancer/send-proposal"><button className="pd_n_sendp">Send Proposal</button></Link>
                                </div>
                            </div>
                            <div className='pd_head_on pd_head_h1'><h1>Website Designer Required For Directory Theme</h1></div>
                            <div className='over_s_wor_area flex-wrap'>
                                <div className='fle_wor_box'>
                                    <div className='wor_svg'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                    </div>
                                    <div className='wor_name wn_freelancer'>Digital Marketing</div>
                                </div>
                                <div className='fle_wor_box'>
                                    <div className='wor_svg'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                    </div>
                                    <div className='wor_name wn_freelancer'>Remote</div>
                                </div>
                                <div className='fle_wor_box'>
                                    <div className='wor_svg'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                        </svg>
                                    </div>
                                    <div className='wor_name wn_freelancer'>January 15, 2021</div>
                                </div>
                            </div>
                            <div className='proj_det_li'>
                                <div className='flex_itm flex-wrap'>
                                    <div className="f_b_obx">
                                        <div className="ex_name_fb">Freelancer Type</div>
                                        <div className="ex_val_f pd_evf_n">Individual</div>
                                    </div>
                                    <div className="f_b_obx">
                                        <div className="ex_name_fb">Project Duration</div>
                                        <div className="ex_val_f pd_evf_n">1-5 Days</div>
                                    </div>
                                    <div className="f_b_obx">
                                        <div className="ex_name_fb">Level</div>
                                        <div className="ex_val_f pd_evf_n">Moderate </div>
                                    </div>
                                    <div className="f_b_obx">
                                        <div className="ex_name_fb">English Level</div>
                                        <div className="ex_val_f pd_evf_n">Native</div>
                                    </div>
                                    <div className="f_b_obx">
                                        <div className="ex_name_fb">Languages</div>
                                        <div className="ex_val_f pd_evf_n">Arabic English </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="s_nav_body mt-4 s_trans_bos">
                            <div className="bl_head pd_n_bh"><h3>Description</h3></div>
                            <div className="bl_apra pd_n_blpara">
                                <p>
                                    This is a Great  Moment for us to announce a designer job for our company, The candidate who falls in the criteria can apply. We'll call the candidates who are eligible for an interview.

                                    We are searching for a Senior Developer with quite a long while of experience in Python.

                                    We have a current (work-in-progress) content to advance area information with address, site, telephone. We might want to improve it as depicted underneath.

                                    The content as of now does the accompanying:

                                    They may have various sorts dependent on the shop characteristic

                                    Check if an area is feeling the loss of a location, site, or telephone number

                                    On the off chance, site, or telephone number is feeling the loss of, the content calls the Google Maps Places API

                                    The content at that point calls the API to direct a Google Search and recover all outcomes for that search.

                                    We will give the current content to qualified specialists.
                                </p>
                            </div>
                            <div className="btn_foot_sec d-block"><br />
                                <div className="bl_head"><h3>Skills Required</h3></div><br />
                                <div className='dlex_sk_block m-0 pd_n_bss flex-wrap'>
                                    <div className="b_skil">Backend Developer</div>
                                    <div className="b_skil">Designer</div>
                                    <div className="b_skil">Support Agent</div>
                                    <div className="b_skil">IOS Developer</div>
                                </div>
                            </div>
                        </div>

                        <div className='proj_proposal_box'>
                            <div className='phead_h3'><h3>Project Proposals (3)</h3></div>
                            <div className='proposal_boxes'>
                                {ListProposals()}
                            </div>
                            <div className='phead_h3'><h3>Send Your Proposal</h3></div>
                            <div className="flex_inp_b flex-wrap">
                                <div className="inp_box">
                                    <div className='inp_label'>your hourly price</div>
                                    <div className='d-flex'>
                                        <div className='inp_input'><input type="text" /></div>
                                        <div className='p_inp_icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-collection" viewBox="0 0 16 16">
                                                <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="inp_box">
                                    <div className='inp_label'>Estimated Hours</div>
                                    <div className='d-flex'>
                                        <div className='inp_input'><input type="text" /></div>
                                        <div className='p_inp_icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex_inp_b inp_w_100">
                                <div className="inp_box">
                                    <div className='inp_label'>Cover Letter</div>
                                    <div className='inp_input'><textarea></textarea></div>
                                </div>
                            </div>
                            <div className='f_agre_fot mt-2 flex-wrap'>
                                <div className='agree_term_b align-items-center'>
                                    <input type="checkbox" /><label>I agree to the Terms And Conditions</label>
                                </div>
                                <div>
                                    <div className="fb_btns_s_pro">
                                    <Link to="/freelancer/send-proposal"><button className="pd_n_sendp pad_n_pdd">Send Proposal</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={12}>

                        <div className="border_bx_sec no_pad mb-5">

                            <div className='heat_lef'>
                                <img src={star} alt="" />
                            </div>
                            <div className='hourly_amout_node asxee_pad justify-content-between flex-wrap'>
                                <div className='hourly_am'>
                                    <div className="hm_bud">Budget</div>
                                    <h1>$140.00</h1>
                                    <span>(Hourly)</span>
                                </div>
                                <div className="wallet_icon pd_n_wii">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wallet2" viewBox="0 0 16 16">
                                        <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                                    </svg>
                                    <div className="d_left">871 Days left</div>
                                </div>
                            </div>
                            <div className="coevr_photo_no"><img src="/assets/uk-renewable-power.jpg" alt="" /></div>
                            <div className='fle_xent_p'><div className="mak_prof_img"><img src="/assets/crampfix-e.jpg" alt="" /></div></div>
                            <div className="comp_name_h"><h3>HRM Recruitment Center</h3></div>
                            <div className="comp_name_p"><p>We are a computerized wellbeing startup with a spry and high-speed climate. We are searching for a Senior, RELIABLE portable application…</p></div>
                            <div className="view-p_btn pd_n_vbbtn">
                                <button>View profile</button>
                            </div>
                            <div className="comp_name_p"><p>We are a computerized wellbeing startup with a spry and high-speed climate. We are searching for a Senior, RELIABLE portable application…</p></div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br />
        </>
    )
}
export default projectdetail
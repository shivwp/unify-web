import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import React from 'react';
import $ from 'jquery';
import Title from '../../../../components/title';
import Form from "react-bootstrap/Form";


function ListCard() {
    const card = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {card.map((person, index) => (
                <div className='freelancer_box_in b-gr bg-transparent' key={index}>
                    <Row>
                        <Col lg={12}>
                            <div className="freelancer_box_area_in">
                                <div className='d-flex justify-content-between flex-wrap'>
                                    <div className='d-flex flex-wrap'>
                                        <div className='freelancer_img_in_r'>
                                            <img src="/assets/PRO-2.png" alt='' />
                                        </div>
                                        <div className='freel_det_bin'>
                                            <div className='freelancer_ame_in'>Mario Speedwagon</div>
                                            <div className='freelancer_exp_in'>Expert in Mobile and Web Development.</div>
                                            <div className='freelancer_exp_in freelancer_loc_in'>Kharkov, Ukraine</div>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <div>
                                        <button className="transp_fil_btn heart_roun_btn btn-hf m-0 round_b_btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                            </svg>
                                        </button>
                                        </div>
                                        <div className='ts_btn attach_f_btn wid_30_in'>
                                        <button className="transp_fil_btn blue_btn_smm fw-500">Invite To Job</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='freelancer_timin d-flex'>
                                    <div className='amount_hir_in p-0 m-0'><b>$15.00</b> /hr</div>
                                    <div className='amount_hir_in p-0'><b>$25k+</b> earned</div>
                                </div>
                                <div className="cover_letter_in">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                                </div>
                                <div className="r_scroll_w_10">
                                    <div className='slide_btnss freelancer_skill_sc flex_over_scrll'>
                                        <button>Mobile App Design</button>
                                        <button>User Experience Design</button>
                                        <button>User Interface Design</button>
                                        <button>Graphic Design</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            ))}
        </>
    );
}

const Project_Search = () => {
    Title(" | Search");
    const hanDleSlide = (e) => {
        $(e.target.nextSibling).slideToggle();
    }
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className="filter_area">
                            <div className="sef_box">
                                <div className="sef_na_ea"><h3>Search Filters</h3></div>
                                <div className="sef_p_c"><p>Clear all</p></div>
                            </div>
                            <div className='s_slides'>
                                <div className="flex_slide_ta toggle_shutter p-left-none p-right-none" onClick={(e) => hanDleSlide(e)}>
                                    <div className='sli_ta_name search_tab_sm_a'>Talent Services</div>
                                    <div className='d-flex align-items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='slide_btnss slider_shutter'>
                                    <div className='s_na_box s_cat_bo p-0 no-border'>
                                        <div className="s_na_categ"><Form.Check type="checkbox" /><label>Website Development (10)</label></div>
                                        <div className="s_na_categ"><Form.Check type="checkbox" /><label>writing & Translation (10)</label></div>
                                    </div>
                                </div>
                            </div>
                            <div className='s_slides'>
                                <div className="flex_slide_ta toggle_shutter p-left-none p-right-none" onClick={(e) => hanDleSlide(e)}>
                                    <div className='sli_ta_name search_tab_sm_a'>Talent Quality</div>
                                    <div className='d-flex align-items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='slide_btnss slider_shutter'>
                                    <div className='s_na_box s_cat_bo p-0 no-border'>
                                        <div className="s_na_categ"><Form.Check type="checkbox" /><label>Website Development (10)</label></div>
                                        <div className="s_na_categ"><Form.Check type="checkbox" /><label>writing & Translation (10)</label></div>
                                    </div>
                                </div>
                            </div>
                            <div className='s_slides'>
                                <div className="flex_slide_ta toggle_shutter p-left-none p-right-none" onClick={(e) => hanDleSlide(e)}>
                                    <div className='sli_ta_name search_tab_sm_a'>Category</div>
                                    <div className='d-flex align-items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='slide_btnss slider_shutter'>
                                    <div className='s_na_box s_cat_bo p-0 no-border'>
                                        <div className="s_na_categ"><Form.Check type="checkbox" /><label>Website Development (10)</label></div>
                                        <div className="s_na_categ"><Form.Check type="checkbox" /><label>writing & Translation (10)</label></div>
                                    </div>
                                </div>
                            </div>
                            <div className='s_slides'>
                                <div className="flex_slide_ta toggle_shutter p-left-none p-right-none" onClick={(e) => hanDleSlide(e)}>
                                    <div className='sli_ta_name search_tab_sm_a'>Location</div>
                                    <div className='d-flex align-items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='slide_btnss slider_shutter'>
                                    <div className='s_na_box s_cat_bo p-0 no-border'>
                                        <div className="s_na_categ"><Form.Check type="checkbox" /><label>Website Development (10)</label></div>
                                        <div className="s_na_categ"><Form.Check type="checkbox" /><label>writing & Translation (10)</label></div>
                                    </div>
                                </div>
                            </div>
                            <div className='s_slides'>
                                <div className="flex_slide_ta toggle_shutter p-left-none p-right-none" onClick={(e) => hanDleSlide(e)}>
                                    <div className='sli_ta_name search_tab_sm_a'>Talent Type</div>
                                    <div className='d-flex align-items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='slide_btnss slider_shutter'>
                                    <div className='s_na_box s_cat_bo p-0 no-border'>
                                        <div className="s_na_categ"><Form.Check type="checkbox" /><label>Website Development (10)</label></div>
                                        <div className="s_na_categ"><Form.Check type="checkbox" /><label>writing & Translation (10)</label></div>
                                    </div>
                                </div>
                            </div>
                            <div className='s_slides'>
                                <div className="flex_slide_ta toggle_shutter p-left-none p-right-none" onClick={(e) => hanDleSlide(e)}>
                                    <div className='sli_ta_name search_tab_sm_a'>Hourly Rate</div>
                                    <div className='d-flex align-items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='slide_btnss slider_shutter'>
                                    <div className='s_na_box s_cat_bo p-0 no-border'>
                                        <div className="s_na_categ"><Form.Check type="checkbox" /><label>Website Development (10)</label></div>
                                        <div className="s_na_categ"><Form.Check type="checkbox" /><label>writing & Translation (10)</label></div>
                                    </div>
                                </div>
                            </div>
                            <div className='s_slides'>
                                <div className="flex_slide_ta toggle_shutter p-left-none p-right-none" onClick={(e) => hanDleSlide(e)}>
                                    <div className='sli_ta_name search_tab_sm_a'>Job Success</div>
                                    <div className='d-flex align-items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='slide_btnss slider_shutter'>
                                    <div className='s_na_box s_cat_bo p-0 no-border'>
                                        <div className="s_na_categ"><Form.Check type="checkbox" /><label>Website Development (10)</label></div>
                                        <div className="s_na_categ"><Form.Check type="checkbox" /><label>writing & Translation (10)</label></div>
                                    </div>
                                </div>
                            </div>
                            <div className='s_slides'>
                                <div className="flex_slide_ta toggle_shutter p-left-none p-right-none" onClick={(e) => hanDleSlide(e)}>
                                    <div className='sli_ta_name search_tab_sm_a'>Earned Amount</div>
                                    <div className='d-flex align-items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='slide_btnss slider_shutter'>
                                    <div className='s_na_box s_cat_bo p-0 no-border'>
                                        <div className="s_na_categ"><Form.Check type="checkbox" /><label>Website Development (10)</label></div>
                                        <div className="s_na_categ"><Form.Check type="checkbox" /><label>writing & Translation (10)</label></div>
                                    </div>
                                </div>
                            </div>
                            <div className='s_slides'>
                                <div className="flex_slide_ta toggle_shutter p-left-none p-right-none" onClick={(e) => hanDleSlide(e)}>
                                    <div className='sli_ta_name search_tab_sm_a'>Hours Billed</div>
                                    <div className='d-flex align-items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='slide_btnss slider_shutter'>
                                    <div className='s_na_box s_cat_bo p-0 no-border'>
                                        <div className="s_na_categ"><Form.Check type="checkbox" /><label>Website Development (10)</label></div>
                                        <div className="s_na_categ"><Form.Check type="checkbox" /><label>writing & Translation (10)</label></div>
                                    </div>
                                </div>
                            </div>
                            <div className='s_slides'>
                                <div className="flex_slide_ta toggle_shutter p-left-none p-right-none" onClick={(e) => hanDleSlide(e)}>
                                    <div className='sli_ta_name search_tab_sm_a'>English Level</div>
                                    <div className='d-flex align-items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='slide_btnss slider_shutter'>
                                    <div className='s_na_box s_cat_bo p-0 no-border'>
                                        <div className="s_na_categ"><Form.Check type="checkbox" /><label>Website Development (10)</label></div>
                                        <div className="s_na_categ"><Form.Check type="checkbox" /><label>writing & Translation (10)</label></div>
                                    </div>
                                </div>
                            </div>
                            <div className='s_slides'>
                                <div className="flex_slide_ta toggle_shutter p-left-none p-right-none" onClick={(e) => hanDleSlide(e)}>
                                    <div className='sli_ta_name search_tab_sm_a'>Other Languages</div>
                                    <div className='d-flex align-items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='slide_btnss slider_shutter'>
                                    <div className='s_na_box s_cat_bo p-0 no-border'>
                                        <div className="s_na_categ"><Form.Check type="checkbox" /><label>Website Development (10)</label></div>
                                        <div className="s_na_categ"><Form.Check type="checkbox" /><label>writing & Translation (10)</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={9} className="top_main_c_job">
                        <div className='d-flex align-items-center flex-wrap'>
                            <div className='search_input_in selec_inp_ful_w'>
                                <div className='search_icon_in'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </div>
                                <Form.Control type={`text`} placeholder={`Search`} />
                            </div>
                            <div className='post_job_btn_m in_btn_p_sm'><button className="fw-500">Advanced Search</button></div>
                        </div>
                        {ListCard()}
                    </Col>
                    <Col lg={12}>
                        <div className='pagiantion_node'>
                            <button className='pagi_butt'>1</button>
                            <button className='pagi_butt'>2</button>
                            <button className='pagi_butt'>3</button>
                            <button className='pagi_butt'>4</button>
                            <button className='pagi_butt'>5</button>
                            <div className='pagination_dots'>...</div>
                            <button className='pagi_butt'>10</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
export default Project_Search
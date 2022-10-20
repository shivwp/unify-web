import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Title from '../../../../components/title';
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";

const Screen = () => {
    Title(" | Talent Saved");
    return (
        <>
            <Container>
                <div className='flex_m_j_t b-bottom-gr mt-3 pb-1 flex-wrap'>
                    <div className='disc_head_h1'>
                        <h1>Talent Saved</h1>
                        <p className='dis_t_pra_s'>Look up people you've saved</p>
                    </div>
                    <div className='post_job_btn_m'><button className='plr-35px'>Message All</button></div>
                </div>
                <div className="box_vs_m">
                    <div className='search_area_in mob_ele_wfull'>
                        <div className='select_inp_in prof_saved_chck_s'>
                            <Checkbox
                                icon={<Icon.FiCheck color="#D8D7D7" size={14} />}
                                name="my-input"
                                borderRadius={0}
                                borderWidth={1}
                                borderColor="#D8D7D7"
                                style={{ cursor: "pointer" }}
                            />
                            2 profiles saved
                        </div>
                        <div className='search_input_in selec_inp_ful_w'>
                            <div className='search_icon_in'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </div>
                            <input type={`text`} placeholder={`Search talent names in this list`} />
                        </div>
                    </div>
                    <div className='freelancer_box_in mt-0 pt-4 pb-5'>
                        <Row>
                            <Col lg={1} sm={1}>
                                <div className='profile_sel_ceck_alne'>
                                    <Checkbox
                                        icon={<Icon.FiCheck color="#D8D7D7" size={17} />}
                                        name="my-input"
                                        borderRadius={0}
                                        borderWidth={1}
                                        borderColor="#D8D7D7"
                                        style={{ cursor: "pointer" , height: "24px" , width: "24px" }}
                                    />
                                </div>
                            </Col>
                            <Col lg={11} sm={11}>
                                <div className="freelancer_box_area_in">
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <div className='d-flex flex-wrap'>
                                            <div className='freelancer_img_in_r online_profile'>
                                                <img src="/assets/PRO-2.png" alt='' />
                                            </div>
                                            <div className='freel_det_bin'>
                                                <div className='freelancer_ame_in'>Mario Speedwagon</div>
                                                <div className='freelancer_exp_in'>Expert in Mobile and Web Development.</div>
                                                <div className='freelancer_timin d-flex'>
                                                    <div className='amount_hir_in p-0 ml-0'><b>$15.00</b> /hr</div>
                                                    <div className='line_hr_a'>|</div>
                                                    <div className='amount_hir_in p-0'><b>100%</b> Job Success</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=' attach_f_btn wid_30_in d-flex'>
                                            <button className="transp_fil_btn heart_roun_btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                </svg>
                                            </button>
                                            <button className="transp_fil_btn heart_roun_btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='freelancer_compl_in'>
                                        Hello! I am a professional UI/UX Designer. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour... <a href='#0' className='text-decoration-none'>View more</a></div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Screen
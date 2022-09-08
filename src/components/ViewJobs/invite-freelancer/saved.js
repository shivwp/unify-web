import { Col, Row } from 'react-bootstrap';

const Screen = () => {
    return (
        <>
            <div className='search_area_in'>
                <div className='select_inp_in'>
                    <select>
                        <option>All Saved</option>
                    </select>
                </div>
                <div className='search_input_in selec_inp_ful_w'>
                    <div className='search_icon_in'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                    <input type={`text`} placeholder={`search...`} />
                </div>
            </div>
            <div className='freelancer_box_in'>
                <Row>
                    <Col lg={12}>
                        <div className="freelancer_box_area_in">
                            <div className='d-flex justify-content-between flex-wrap'>
                                <div className='d-flex'>
                                    <div className='freelancer_img_in_r online_profile'>
                                        <img src="/assets/PRO-2.png" alt='' />
                                    </div>
                                    <div className='freel_det_bin'>
                                        <div className='freelancer_ame_in'>Mario Speedwagon</div>
                                        <div className='freelancer_exp_in'>Expert in Mobile and Web Development.</div>
                                        <div className='freelancer_exp_in freelancer_loc_in'>Kharkov, Ukraine</div>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <button className="transp_fil_btn heart_roun_btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                        </svg>
                                    </button>
                                    <div className='ts_btn attach_f_btn wid_30_in d-flex'>
                                    <button className="transp_fil_btn font-weight-500">Hire</button>
                                    </div>
                                </div>
                            </div>
                            <div className='freelancer_timin d-flex'>
                                <div className='amount_hir_in p-0 m-0'><b>$15.00</b> /hr</div>
                                <div className='amount_hir_in p-0'><b>$25k+</b> earned</div>
                                <div className='amount_hir_in p-0'><b>100%</b> Job Success</div>
                                <div className='amount_hir_in p-0'>Top Rated Plus</div>
                            </div>
                            <div className="cover_letter_in">
                                <b>What I Do </b> - Hello! I am a professional UI/UX Designer. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                            </div>
                            <div className='overflow-scroll'>
                                <div className='slide_btnss freelancer_skill_sc'>
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
        </>
    )
}
export default Screen
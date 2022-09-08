import { Col, Row } from 'react-bootstrap';

const Screen = () => {
    return (
        <>
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
                                <div className='ts_btn attach_f_btn wid_30_in d-flex hir_no_in'>
                                    <div className='amount_hir_in'><b>$15.00 </b>/hr</div>
                                    <span>|</span>
                                    <div className='amount_hir_in'><b>$25k+</b> earned</div>
                                </div>
                            </div>
                            <div className='freelancer_compl_in'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journal-text" viewBox="0 0 16 16">
                                    <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                                </svg>
                                Received 2 months ago</div>
                            <div className="cover_letter_in">
                                <b>Cover letter </b> - Hello! I am a professional UI/UX Designer. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default Screen
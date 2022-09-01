import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Title from './title';

const Screen = () => {
    Title(" | Talent Recently Viewed");
    return (
        <>
            <Container>
                <div className="d-flex justify-content-between flex-wrap align-items-center disc_top_s_ar">
                    <div>
                        <div className='disc_head_h1'><h1>Recently Viewed</h1></div>
                    </div>
                </div>
                <div className="box_vs_m">
                    <div className='freelancer_box_in mt-0'>
                        <Row>
                            <Col lg={3}>
                                <div className='freel_box_in_img'><img src="/assets/mistakes.png" alt="" /></div>
                                <div className="img_pag_tex">1 of 11</div>
                            </Col>
                            <Col lg={9}>
                                <div className="freelancer_box_area_in">
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex'>
                                            <div className='freelancer_img_in_r'>
                                                <img src="/assets/PRO-2.png" alt='' />
                                            </div>
                                            <div className='freel_det_bin'>
                                                <div className='freelancer_ame_in'>Mario Speedwagon</div>
                                                <div className='freelancer_exp_in'>Expert in Mobile and Web Development.</div>
                                                <div className='freelancer_timin d-flex'>
                                                    <div className='amount_hir_in p-0 m-0'><b>$15.00</b> /hr</div>
                                                    <div className='amount_hir_in p-0'><b>100%</b> Job Success</div>
                                                    <div className='amount_hir_in p-0'>Top Rated Plus</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='ts_btn attach_f_btn wid_30_in d-flex'>
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
                                        Hello! I am a professional UI/UX Designer. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour...View more</div>
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
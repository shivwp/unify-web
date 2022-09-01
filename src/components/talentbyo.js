import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Title from './title';

const Screen = () => {
    Title(" | Talent Your Hires");
    return (
        <>
            <Container>
                <div className="d-flex justify-content-between flex-wrap align-items-center disc_top_s_ar">
                    <div>
                        <div className='disc_head_h1'><h1>Your Hires</h1></div>
                        <div className='disc_para_h'>Look up people you've worked with</div>
                    </div>
                </div>
                <Row>
                    <Col lg={4}>
                        <div className="hire_box_yh">
                            <div>
                                <div className="hire_b_im">
                                    <img src="/assets/Handshake.png" alt="" />
                                </div>
                                <div className="hi_bx_head2">Your Favourite Collaborator</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="hire_box_yh">
                            <div>
                                <div className="hire_b_im">
                                    <img src="/assets/Path 4665.png" alt="" />
                                </div>
                                <div className="hi_bx_head2">A Great Communicator</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="hire_box_yh">
                            <div>
                                <div className="hire_b_im">
                                    <img src="/assets/trust.png" alt="" />
                                </div>
                                <div className="hi_bx_head2">Someone You Can Count On</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="d_pbtn_as">
                    <div className='disc_para_h'>Already working with freelancers outside of Unify? Simplify things by inviting them to join and use Unify collaboration, time tracking, and payment tools. <a href="#0">See how it works</a></div>
                    <button className="find_tal_btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                        Invite Talent</button>
                </div>
            </Container>
        </>
    )
}
export default Screen
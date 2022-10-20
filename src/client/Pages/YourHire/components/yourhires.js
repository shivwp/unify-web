import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Title from '../../../../components/title';
import { Link } from 'react-router-dom';

const Screen = () => {
    Title(" | Talent Your Hires");
    return (
        <>
            <Container>
                <div className="d-flex justify-content-between flex-wrap align-items-center disc_top_s_ar mt-4 mb-4 pt-2">
                    <div>
                        <div className='disc_head_h1'><h1>Your Hires</h1></div>
                        <div className='disc_para_h'>Look up people you've worked with</div>
                    </div>
                </div>
                <Row>
                    <Col lg={4} sm={10} className="mb-3">
                        <div className="hire_box_yh">
                            <div>
                                <div className="hire_b_im">
                                    <img src="/assets/Layer 36.png" alt="" />
                                </div>
                                <div className="hi_bx_head2">An Absolute Lifesaver</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={10} className="mb-3">
                        <div className="hire_box_yh">
                            <div>
                                <div className="hire_b_im">
                                    <img src="/assets/time (2).png" alt="" />
                                </div>
                                <div className="hi_bx_head2">A Long-Term Collaborator</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={10} className="mb-3">
                        <div className="hire_box_yh">
                            <div>
                                <div className="hire_b_im">
                                    <img src="/assets/idea (2).png" alt="" />
                                </div>
                                <div className="hi_bx_head2">Your Go-To Problem Solver</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="d_pbtn_as">
                    <div className='disc_para_h'>You haven’t hired anyone yet. Start searching for the right fit for your next project.</div>
                    <Link to="/search"><button className="find_tal_btn pt-3 pb-3 font-weight-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path stroke="#fff" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                        Find Talent
                    </button>
                    </Link>
                </div>
            </Container>
        </>
    )
}
export default Screen
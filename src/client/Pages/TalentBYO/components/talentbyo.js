import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Title from '../../../../components/title';
import { Link } from 'react-router-dom';
const Screen = () => {
    Title(" | Talent BYO");
    return (
        <>
            <Container>
                <div className="d-flex justify-content-between flex-wrap align-items-center disc_top_s_ar">
                    <div>
                        <div className='disc_head_h1'><h1>BYO Talent</h1></div>
                        <div className='disc_para_h'>Find talent your company has brought to Unify</div>
                    </div>
                </div>
                <Row>
                    <Col lg={4} sm={10} className="mb-3">
                        <div className="hire_box_yh">
                            <div>
                                <div className="hire_b_im">
                                    <img src="/assets/Handshake.png" alt="" />
                                </div>
                                <div className="hi_bx_head2">Your Favourite Collaborator</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={10} className="mb-3">
                        <div className="hire_box_yh">
                            <div>
                                <div className="hire_b_im">
                                    <img src="/assets/Path 4665.png" alt="" />
                                </div>
                                <div className="hi_bx_head2">A Great Communicator</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={10} className="mb-3">
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
                    <div className='disc_para_h'>Already working with freelancers outside of Unify? Simplify things by inviting them to join and use Unify collaboration, time tracking, and payment tools. <Link to="#0">See how it works</Link></div>
                    <button className="find_tal_btn font-weight-500">
                    <svg fill="#fff" height={20} width={20} className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  css-w2bhrx" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AddIcon" aria-label="fontSize medium"><path 
    stroke={`#fff`} d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                        Invite Talent</button>
                </div>
            </Container>
        </>
    )
}
export default Screen
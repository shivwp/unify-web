import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Title from '../../../../components/title';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const Screen = () => {
    Title(" | Question 1");
    return (
        <>
            <Container>
                <div className="mt-5">
                <div className="questopn_h1"><h1>A few quick questions: First, have <br/> you freelanced before?</h1></div>
                <div className="question_p"><p>This lets us know how much help to give you along the way. <br />( We won't share you answer with anyone else, including potestial clients.)</p></div>
                </div>
                <Row className="justify-content-center row_quexenwt">
                    
                    <Col lg={3} md={6} sm={10} className="mb-3">
                    <Link to="/freelancer/question2">
                        <div className="hire_box_yh new_hbyh">
                        <div className="sub_radio"><Form.Check type="radio" name="s" /></div>
                            <div>
                                <div className="hire_b_im">
                                    <img src="/assets/sprout.svg" alt="" />
                                </div>
                                <div className="hi_bx_head2">Nope: it's new to me</div>
                            </div>
                        </div>
                        </Link>
                    </Col>
                    
                    <Col lg={3} md={6}  sm={10} className="mb-3">
                        <div className="hire_box_yh new_hbyh">
                        <div className="sub_radio"><Form.Check type="radio" name="s" /></div>
                            <div>
                                <div className="hire_b_im">
                                    <img src="/assets/help-file.svg" alt="" />
                                </div>
                                <div className="hi_bx_head2">I've tried it but still<br /> might need tips</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6}  sm={10} className="mb-3">
                        <div className="hire_box_yh new_hbyh">
                        <div className="sub_radio"><Form.Check type="radio" name="s" /></div>
                            <div>
                                <div className="hire_b_im">
                                    <img src="/assets/star.svg" alt="" />
                                </div>
                                <div className="hi_bx_head2">Yep. I've freelanced for <br /> years</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Screen
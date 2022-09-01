import NavbarHeader from "./navbar";
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Footer from './footer';
import Title from './title';


const bsize = () => {
    Title(" | Expand Team");
    return (
        <>
            <NavbarHeader />
            <Container>
                <div className="question_box tb_p_none">
                    <div className="questio_heading no-border"><h1 className="text-left">Expand your Unify team</h1></div>
                    <Row>
                        <Col lg={8}>
                            <div className="form_box_bor">
                                <div className="input_bg_labe">Email Addresses</div>
                                <div className="input_bg_i"><input type="text" placeholder="Enter your email" /></div>
                                <div className="inport_lin">+ Import contacts</div>
                                <div className="input_bg_labe">Add a personal message (optional)</div>
                                <div className="input_bg_i"><textarea placeholder="Enter your email"></textarea></div>
                                <div className="inp_agree_che"><label><input type="checkbox" /><p>Also allow these coworkers to hire and pay with this account.</p></label></div>
                                <div className="btn_foot_sec flex-wrap d-flex no-border">
                                    <div className='fo_btn_c next_b_btn_c'><button>Cancel</button></div>
                                    <div className='fo_btn_c next_b_btn_c'><button className="active_btn_blue">Invite</button></div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="form_box_bor hei_100">
                                <div className="fbr_h1"><h1>How does this work?</h1></div>
                                <div className="br_para">
                                Your coworkers will receive an invitation to join your Unify team. Once they accept, they'll be able to invite freelancers to your job posts, review proposals, and communicate with freelancers you interview or hire.
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Footer />
        </>
    )
}
export default bsize
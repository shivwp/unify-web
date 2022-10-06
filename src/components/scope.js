import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import SideNav from './site_nav';
import Title from './title';
import { Link } from 'react-router-dom';

const Skill = () => {
    Title(' | Scope')
    return (
        <div className='bg-f2f8ff min_pad_m'>
            <Container>
                <Row>
                    <SideNav />
                    <Col lg={9}>
                        <div className="s_nav_body">
                            <div className="s_b_head"><h2>Scop</h2><div className="s_on">Step 4 of 5</div></div>
                            <br />
                            <div className="on_time_h3 d-block no-border pt-0 pb-0">
                                <div className="">
                                    <div className="s_b_r mrr_riii d-block mt-0">
                                        <div className="flex_aling">
                                            <input type="radio" id="r_2" name="g" />
                                            <label htmlFor="r_2"> <p className='font-20'><b className="text-black">Large</b></p></label>
                                        </div>
                                        <div className="label_apra">
                                            <p className="litt_sm_para f-16">Longer term or complex initiatives (ex. design and build a full website)</p>
                                        </div>
                                    </div>
                                    <div className="s_b_r mrr_riii d-block">
                                        <div className="flex_aling">
                                            <input type="radio" id="r_1" name="g" />
                                            <label htmlFor="r_1"> <p className='font-20'><b className="text-black">Medium</b></p></label>
                                        </div>
                                        <div className="label_apra">
                                            <p className="litt_sm_para f-16">Well-defined projects (ex. a landing page)</p>
                                        </div>
                                    </div>
                                    <div className="s_b_r mrr_riii d-block">
                                        <div className="flex_aling">
                                            <input type="radio" id="r_4" name="g" />
                                            <label htmlFor="r_4"> <p className='font-20'><b className="text-black">Small</b></p></label>
                                        </div>
                                        <div className="label_apra">
                                            <p className="litt_sm_para f-16">Quick and straightforward tasks (ex. update text and images on a webpage)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className='scop_head mb-2'><h3>How long will your work take?</h3></div>
                                    <div className="s_b_r mrr_riii d-block">
                                        <div className="flex_aling">
                                            <input type="radio" id="r_2h" name="a" />
                                            <label htmlFor="r_2h"> <p className="litt_sm_para">More than 6 months</p></label>
                                        </div>
                                    </div>
                                    <div className="s_b_r mrr_riii d-block">
                                        <div className="flex_aling">
                                            <input type="radio" id="r_1h" name="a" />
                                            <label htmlFor="r_1h">  <p className="litt_sm_para">3 to 6 months</p></label>
                                        </div>
                                    </div>
                                    <div className="s_b_r mrr_riii d-block">
                                        <div className="flex_aling">
                                            <input type="radio" id="r_4h" name="a" />
                                            <label htmlFor="r_4h"><p className="litt_sm_para">1 to 3 months</p></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className='scop_head'><h3>What level of experience will it need?</h3></div>
                                    <p className="litt_sm_para">This won't restrict any proposals, but helps match expertise to your budget.</p>
                                    <div className="s_b_r mrr_riii d-block">
                                        <div className="flex_aling">
                                            <input type="radio" id="r_2" name="l" />
                                            <label htmlFor="r_2"> <p><b className="text-black">Entry</b></p></label>
                                        </div>
                                        <div className="label_apra">
                                            <p className="litt_sm_para">Looking for someone relatively new to this field</p>
                                        </div>
                                    </div>
                                    <div className="s_b_r mrr_riii d-block">
                                        <div className="flex_aling">
                                            <input type="radio" id="r_1" name="l" />
                                            <label htmlFor="r_1"> <p><b className="text-black">Intermediate</b></p></label>
                                        </div>
                                        <div className="label_apra">
                                            <p className="litt_sm_para">Looking for someone relatively new to this field</p>
                                        </div>
                                    </div>
                                    <div className="s_b_r mrr_riii d-block">
                                        <div className="flex_aling">
                                            <input type="radio" id="r_4" name="l" />
                                            <label htmlFor="r_4"> <p><b className="text-black">Expert</b></p></label>
                                        </div>
                                        <div className="label_apra">
                                            <p className="litt_sm_para">Looking for someone relatively new to this field</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn_foot_sec no-border mt-0 flex-wrap d-flex">
                                <div className='fo_btn_c next_b_btn_c'><Link to="/skills"><button className='mrright-gppnew'>Back</button></Link></div>
                                <div className='fo_btn_c next_b_btn_c'><Link to="/budget"><button className="active_btn_blue">Next</button></Link></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Skill
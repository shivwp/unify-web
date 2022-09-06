import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import SideNav from './site_nav';
import Title from './title'

const Budget = () => {
    Title(' | Budget')
    return (
        <div className='bg-f2f8ff min_pad_m'>
            <Container>
                <Row>
                    <SideNav />
                    <Col lg={9}>
                        <div className="s_nav_body">
                            <div className="s_b_head"><h2>Budget</h2><div className="s_on">Step 5 of 5</div></div>
                            <Row className="mt-3">
                                <Col md={5} sm={6}>
                                    <label className='form_card_label'>
                                        <div className="select_card subscription_box_r pnew_bud">
                                            <div className="sub_radio"><input type="radio" name="s" /></div>
                                            <div className="sel_icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                                </svg>
                                            </div>
                                            <div className="sho_tit">Hourly Rate</div>
                                        </div>
                                    </label>
                                </Col>
                                <Col md={5} sm={6}>
                                    <label className='form_card_label'>
                                        <div className="select_card subscription_box_r pnew_bud">
                                            <div className="sub_radio"><input type="radio" name="s" /></div>
                                            <div className="sel_icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-ui-checks" viewBox="0 0 16 16">
                                                    <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708l-2 2zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708l-2 2zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                                </svg>
                                            </div>
                                            <div className="sho_tit">Project budget</div>
                                        </div>
                                    </label>
                                </Col>
                            </Row>
                            <div className="d-flex">
                                <div className='input_ft'>
                                    <div className="input_t_lab bud_new_l_tex">From</div>
                                    <div className="d-flex">
                                        <div className='input_from_tlab lign_tex'>
                                            <div className="d-flex align-items-center">$</div>
                                            <input type="text" value="15" />
                                        </div>
                                        <div className="input_t_lab input_hour lign_tex pl-2">/hour</div>
                                    </div>
                                </div>
                                <div className='input_ft'>
                                    <div className="input_t_lab bud_new_l_tex">To</div>
                                    <div className="d-flex">
                                        <div className='input_from_tlab lign_tex'>
                                            <div className="d-flex align-items-center">$</div>
                                            <input type="text" value="30" />
                                        </div>
                                        <div className="input_t_lab input_hour lign_tex pl-2">/hour</div>
                                    </div>
                                </div>
                            </div>
                            <div className="ft_par">This is the average rate for similar projects.</div>
                            <div className="mt-4 bud_news_para">Professionals tend to charge <span>$15 - $35/hour (USD)</span> for UI/UX design projects like yours. Experts may charge higher rates.</div>
                            <div className="ft_form_linki">Not ready to set an hourly rate?</div>
                            <div className="btn_foot_sec flex-wrap no-border mt-2">
                                <div className='fo_btn_c next_b_btn_c'><button>Back</button></div>
                                <div className='fo_btn_c next_b_btn_c'><button className="active_btn_blue">Review Job Post</button></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Budget
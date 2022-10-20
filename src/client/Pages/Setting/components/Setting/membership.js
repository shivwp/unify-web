import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import SideNav from './site_nav';
import Title from '../../../../../components/title'

const Screen = () => {
    Title(' | Setting - Membership')
    return (
        <div className='bg-f2f8ff min_pad_m'>
            <Container>
                <Row>
                    <SideNav />
                    <Col lg={9}>
                        <div className="s_nav_body">
                            <div className="s_b_head no-border"><h2>Membership</h2></div>
                            <div className="r-box_setting">
                                <div className="d-flex justify-content-between b-bottom-gr align-items-center pt-1 pb-3">
                                    <div>
                                        <div className='setting_b_head_s'>Company Plan</div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between b-bottom-gr align-items-center flex-wrap pt-2 pb-3">
                                    <div>
                                        <div className='setting_b_head_s'>Plan</div>
                                        <div className='sett_y_b'>Unify Basic (Free)</div>
                                    </div>
                                    <div className="btn_foot_sec no-border mt-0 mb-0 p-0 fo_btn_c next_b_btn_c">
                                        <button className="bg-transparent h-color-b">Change Plan</button>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center pt-2 pb-3">
                                    <div>
                                        <div className='setting_b_head_s'>Billing Method</div>
                                        <div className='sett_y_b'>Not applicable</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Screen
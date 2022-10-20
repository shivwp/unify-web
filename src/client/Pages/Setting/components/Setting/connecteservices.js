import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import SideNav from './site_nav';
import Title from '../../../../../components/title'

const Screen = () => {
    Title(' | Setting - Connected Services')
    return (
        <div className='bg-f2f8ff min_pad_m'>
            <Container>
                <Row>
                    <SideNav />
                    <Col lg={9}>
                        <div className="s_nav_body">
                            <div className="s_b_head no-border"><h2>Connected Services</h2></div>

                            <div className="r-box_setting mb-0">
                                <div className="d-flex justify-content-between align-items-center pt-1 pb-2">
                                    <div>
                                        <div className='setting_b_head_s'>Sign in with Google</div>
                                    </div>
                                    <div className='social_icon_ss'>
                                        <img src="/assets/google (1).png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='alert_txt_con_serv'>You must set up your security question before you can continue.</div>
                            <div className="r-box_setting mb-0 mt-4">
                                <div className="d-flex justify-content-between align-items-center pt-1 pb-2">
                                    <div>
                                        <div className='setting_b_head_s'>Sign in with Apple</div>
                                    </div>
                                    <div className='social_icon_ss'>
                                        <img src="/assets/apple.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='alert_txt_con_serv'>You must set up your security question before you can continue.</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Screen
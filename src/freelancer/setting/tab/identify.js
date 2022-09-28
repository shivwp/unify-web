import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import SideNav from './site_nav';
import Title from '../../../components/title'

const Screen = () => {
    Title(' | Identify Verification')
    return (
        <div className='bg-f2f8ff min_pad_m'>
            <Container>
                <Row>
                    <SideNav />
                    <Col lg={9}>
                        <div className="s_nav_body">
                            <div className="s_b_head no-border"><h2 className='f-size-35'>Identify Verification</h2></div>
                            <div className="r-box_setting">
                                <Row>
                                    <Col lg={12} className="d-flex justify-content-between flex-wrap">
                                        <div className='d-flex mb-3 mt-1 justify-content-between w-100'>
                                            <div className="w-55">
                                                <div className='c_name_s_v ccewotcy'>1. document verification</div>
                                                <div className="c_name_sett pt-0  me_hed_verif_stus font-weight-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                    </svg>
                                                    Successfully verified on 2019-07-01</div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='r-box_setting'>
                                <Row>
                                    <Col lg={12} className="d-flex justify-content-between flex-wrap mt-2">
                                        <div className='d-flex mb-3 mt-1 justify-content-between w-100'>
                                            <div className="w-55">
                                                <div className='c_name_s_v ccewotcy'>2. Visual verification</div>
                                                <div className="c_name_sett pt-0  me_hed_verif_stus font-weight-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                    </svg>
                                                    Successfully verified on 2019-07-01</div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Screen
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import SideNav from './site_nav';
import Title from '../../../components/title'

const Screen = () => {
    Title(' | My Team')
    return (
        <div className='bg-f2f8ff min_pad_m'>
            <Container>
                <Row>
                    <SideNav />
                    <Col lg={9}>
                        <div className="s_nav_body">
                            <div className="d-flex justify-content-between">
                                <div className="s_b_head no-border"><h2>My Teams</h2></div>
                                <div>
                                    <button className="round_b_btn blue_trans_btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="r-box_setting overflow-scroll">
                                <div className='s_tble_s width-max-content-s'>
                                    <div className='s_th_s w-20'>Team Name</div>
                                    <div className='s_th_s w-20'>Financial Account</div>
                                    <div className='s_th_s w-15'></div>
                                </div>
                                <div className='s_tble_s width-max-content-s'>
                                    <div className='s_th_s s_td_s w-20'>John Doe</div>
                                    <div className='s_th_s s_td_s w-20'>John Doe (123456)</div>
                                    <div className='w-15 mob_60_rr'>
                                        <button className="round_b_btn bg-transparent">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className='s_tble_s width-max-content-s'>
                                    <div className='s_th_s s_td_s w-20'>John Doe</div>
                                    <div className='s_th_s s_td_s w-20'>John Doe (123456)</div>
                                    <div className='w-15 mob_60_rr'>
                                        <button className="round_b_btn bg-transparent">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className='s_tble_s width-max-content-s'>
                                    <div className='s_th_s s_td_s w-20'>John Doe</div>
                                    <div className='s_th_s s_td_s w-20'>John Doe (123456)</div>
                                    <div className='w-15 mob_60_rr'>
                                        <button className="round_b_btn bg-transparent">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className='s_tble_s width-max-content-s'>
                                    <div className='s_th_s s_td_s w-20'>John Doe</div>
                                    <div className='s_th_s s_td_s w-20'>John Doe (123456)</div>
                                    <div className='w-15 mob_60_rr'>
                                        <button className="round_b_btn bg-transparent">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                            </svg>
                                        </button>
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
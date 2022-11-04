import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import SideNav from './site_nav';
import Title from '../../../../components/title'

const Screen = () => {
    Title(' | My Stats')
    return (
        <div className='bg-f2f8ff min_pad_m'>
            <Container>
                <Row>
                    <SideNav />
                    <Col lg={9}>
                        <div className="s_nav_body">
                            <div className="s_b_head no-border"><h2 className='f-size-35'>My Stats</h2></div>
                            <div className="r-box_setting">
                                <div className='head_mystat_h2'><h2>Client satisfaction</h2></div>
                                <Row>
                                    <Col lg={4}>
                                        <div className='head_mystat_js'>Job Success score</div>
                                        <div className='mystst_sm_ceq'>94% Job Success</div>
                                        <div className='success_progrss_msts'></div>
                                        <div className='head_mystat_js mt-4'>My Badges</div>
                                        <div className='h_tr_pls_ncew'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                                <g id="Group_2409" data-name="Group 2409" transform="translate(-261 -549)">
                                                    <circle id="Ellipse_582" data-name="Ellipse 582" cx="11.5" cy="11.5" r="11.5" transform="translate(262 550)" fill="#fff" />
                                                    <g id="crown" transform="translate(261 549)">
                                                        <path id="Path_4471" data-name="Path 4471" d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.514,12.514,0,0,0,12.5,0Zm7.28,10.463-1.132,6.6a.781.781,0,0,1-.77.649H7.122a.781.781,0,0,1-.77-.649l-1.132-6.6a.781.781,0,0,1,1.112-.834L9.347,11.1l2.471-4.445a.812.812,0,0,1,1.366,0L15.654,11.1l3.015-1.468a.78.78,0,0,1,1.111.834Z" fill="#0edf3f" />
                                                    </g>
                                                </g>
                                            </svg>
                                            Top Rated</div>
                                        <div className='mystst_sm_ceq mt-2'>Last updated Aug 10</div>
                                    </Col>
                                    <Col lg={8}>
                                        <div>
                                            <div className="mys_stst_flex">
                                                <div className='mstat_lbel'>12-month earnings</div>
                                                <div className='mstat_bxsal'>$1000.00</div>
                                            </div>
                                            <div className="mys_stst_flex">
                                                <div className='mstat_lbel'>Clients who would recommend you</div>
                                                <div className='mstat_bxsal'>79%</div>
                                            </div>
                                            <div className="mys_stst_flex">
                                                <div className='mstat_lbel'>Long-term clients</div>
                                                <div className='mstat_bxsal'>50%</div>
                                            </div>
                                            <div className="mys_stst_flex">
                                                <div className='mstat_lbel'>Recent account holds</div>
                                                <div className='mstat_bxsal'>0</div>
                                            </div>
                                            <div className="mys_stst_flex">
                                                <div className='mstat_lbel'>Top Rated eligible weeks</div>
                                                <div className='mstat_bxsal'>16 of 16</div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="r-box_setting pb-4">
                                <div className='head_mystat_h2 mb-0'><h2 className='mb-0'>Do you qualify for Top Rated Plus?</h2></div>
                                <div className='mystst_sm_ceq mb-0'>Top Rated Plus requirements:</div>
                                <div className='mystst_sm_ceq mt-2 lne_height_stst_nrm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="14.897" viewBox="0 0 24 17.897">
                                        <path id="Icon_awesome-check" data-name="Icon awesome-check" d="M8.151,22.123l-7.8-7.8a1.2,1.2,0,0,1,0-1.7l1.7-1.7a1.2,1.2,0,0,1,1.7,0L9,16.183,20.254,4.929a1.2,1.2,0,0,1,1.7,0l1.7,1.7a1.2,1.2,0,0,1,0,1.7l-13.8,13.8A1.2,1.2,0,0,1,8.151,22.123Z" transform="translate(0 -4.577)" fill="#6d2ef1" />
                                    </svg>
                                    Top Rated</div>
                                <div className='mystst_sm_ceq lne_height_stst_nrm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="14.897" viewBox="0 0 24 17.897">
                                        <path id="Icon_awesome-check" data-name="Icon awesome-check" d="M8.151,22.123l-7.8-7.8a1.2,1.2,0,0,1,0-1.7l1.7-1.7a1.2,1.2,0,0,1,1.7,0L9,16.183,20.254,4.929a1.2,1.2,0,0,1,1.7,0l1.7,1.7a1.2,1.2,0,0,1,0,1.7l-13.8,13.8A1.2,1.2,0,0,1,8.151,22.123Z" transform="translate(0 -4.577)" fill="#6d2ef1" />
                                    </svg>
                                    Earned over $800.00 in the past 12 month</div>
                                <div className='mystst_sm_ceq lne_height_stst_nrm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="30" viewBox="0 0 13 33">
                                        <text id="_" data-name="?" transform="translate(0 25)" fill="#1f1f1f" font-size="24" font-family="Poppins-Regular, Poppins"><tspan x="0" y="0">?</tspan></text>
                                    </svg>
                                    worked on a large contract in past 12 month</div>
                            </div>
                            <div className="r-box_setting pb-4">
                                <div className='head_mystat_h2 mb-0'><h2 className='mb-0'>Communication</h2></div>
                                <div className='mystst_sm_ceq mb-0 mt-2'>You <b>replied to 223 fo 234 invitations to apply</b> in the past 90 days</div>
                                <div>
                                    <div className="mys_stst_flex mt-2 mb-3 flex-wrap">
                                        <div className='mstat_lbel'>Responsiveness</div>
                                        <div className='mstat_bxsal'>&lt; 24 hour response time</div>
                                    </div>
                                    <div className="mys_stst_flex mt-2 mb-3 flex-wrap">
                                        <div className='mstat_lbel'>you reply within a day</div>
                                        <div className='mstat_bxsal w-100'>
                                            <div className='d-flex justify-content-between w-100'><div>Never</div><div>Always</div></div>
                                            <div className='success_progrss_msts'></div>
                                        </div>
                                    </div>
                                    <div className="mys_stst_flex mt-2 mb-3 flex-wrap">
                                        <div className='mstat_lbel'>you reply every time</div>
                                        <div className='mstat_bxsal w-100'>
                                            <div className='d-flex justify-content-between w-100'><div>Never</div><div>Always</div></div>
                                            <div className='success_progrss_msts'></div>
                                        </div>
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
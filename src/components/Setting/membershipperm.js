import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import SideNav from './site_nav';
import Title from '../title'
import { useState } from 'react';
import Active from './active'
import '../job.css'

const Screen = () => {
    const Filter = () => {
        return (
            <div>
                <Row>
                    <Col lg={12}>
                        <Row>
                            <Col lg={4}>
                                <div>
                                    <div className='tm_s_s_name'>Team</div>
                                    <div className="inpu_date m-0 inp_selec_s">
                                        <select>
                                            <option>All Teams</option>
                                        </select>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div>
                                    <div className='tm_s_s_name'>Sort By</div>
                                    <div className="inpu_date m-0 inp_selec_s">
                                    <select>
                                            <option>Sort By</option>
                                        </select>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div>
                                    <div className='tm_s_s_name'>Contact Person</div>
                                    <div className="inpu_date m-0 inp_selec_s">
                                    <select>
                                            <option>Contact Person</option>
                                        </select>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={3}>
                                <div className='mt-4'>
                                    <div className="filter_headin_m">Admin</div>
                                    <ul className="filter_ul_m">
                                        <li><input type="checkbox" /> All</li>
                                        <li><input type="checkbox" /> Finance Only</li>
                                        <li><input type="checkbox" /> Full</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className='mt-4'>
                                    <div className="filter_headin_m">Hiring</div>
                                    <ul className="filter_ul_m">
                                        <li><input type="checkbox" /> None</li>
                                        <li><input type="checkbox" /> Source Talent Only</li>
                                        <li><input type="checkbox" /> Manager</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className='mt-4'>
                                    <div className="filter_headin_m">Work Diaries</div>
                                    <ul className="filter_ul_m">
                                        <li><input type="checkbox" /> Individual</li>
                                        <li><input type="checkbox" /> Team</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className='mt-4'>
                                    <div className="filter_headin_m">Chat</div>
                                    <ul className="filter_ul_m">
                                        <li><input type="checkbox" /> No One</li>
                                        <li><input type="checkbox" /> Team</li>
                                        <li><input type="checkbox" /> Company</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className='d-flex justify-content-between flex-wrap'>
                <div className='d-flex'>
                <div className='fo_btn_c next_b_btn_c'><button className="blue_btn_smm ml-0">Apply Filters</button></div>
                    <div className='fo_btn_c next_b_btn_c'><button >Clear</button></div>
                </div>
                <div className='fo_btn_c next_b_btn_c'>
                <button>Close</button>
                </div>
                </div>
            </div>
        )
    };
    const [Tab, SetTab] = useState(<Active />)
    const [TabActive, SetTabActive] = useState("offers")
    const [open, Setopen] = useState(<Active />);
    const [active, SetActive] = useState(0);
    function changeTab(componentName) {
        if (componentName === "offers") {
            SetTab("")
            SetTabActive("offers")
        } else if (componentName === "hired") {
            SetTab("")
            SetTabActive("hired")
        }
    }
    function ToggleFilter() {
        if (active === 0) {
            Setopen(<Filter />)
            SetActive(1)
        } else {
            Setopen(<Active />)
            SetActive(0)
        }
    }

    Title(' | Setting - Membership & Permission')
    return (
        <div className='bg-f2f8ff min_pad_m'>
            <Container>
                <Row>
                    <SideNav />
                    <Col lg={9}> 
                        <div className="s_nav_body">
                            <div className="s_b_head no-border"><h2>Members & Permission</h2></div>
                            <div className="r-box_setting">
                                <div className="d-flex justify-content-between align-items-center flex-wrap pt-2 pb-2">
                                    <div>
                                        <div className='setting_b_head_s'>Owner</div>
                                        <div className='sett_y_b'>John Doe (Me)</div>
                                    </div>
                                    <div className="btn_foot_sec no-border mt-0 mb-0 p-0 fo_btn_c next_b_btn_c">
                                        <button className="bg-transparent h-color-b">Invite New User</button>
                                    </div>
                                </div>
                            </div>
                            <div className="r-box_setting">
                                <div className="d-flex flex-wrap tab_m_nodea">
                                    <button className={`tab_btn_vs bg-transparent s_btn_ns w-auto ${TabActive === 'offers' ? 'active_bvs active_bvss' : ''}`} onClick={() => { changeTab("offers") }}>Active Members</button>
                                    <button className={`tab_btn_vs bg-transparent s_btn_ns w-auto ${TabActive === 'hired' ? 'active_bvs active_bvss' : ''}`} onClick={() => { changeTab("hired") }}>Invitations</button>
                                </div>
                                <div className="main_hirefreelancer_bx main_box_descr no-border mt-0 pl-0 pr-0">
                                    <div className='search_area_in'>
                                        <Row className='w-100'>
                                            <Col sm={12} md={8}>
                                        <div className='search_input_in search_reel_9_wi bg-transparent w-100 min-width-100'>
                                            <div className='search_icon_in'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                </svg>
                                            </div>
                                            <input type={`text`} placeholder={`Search ...`} className="bg-transparent" />
                                        </div>
                                            </Col>
                                            <Col sm={12} md={4}>
                                        <div className='ts_btn attach_f_btn wid_30_in d-flex justify-content-right w-20'>
                                            <button className="transp_fil_btn" onClick={() => { ToggleFilter() }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-funnel-fill" viewBox="0 0 16 16">
                                                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
                                                </svg>
                                                Filters
                                            </button>
                                        </div>
                                        </Col>
                                        </Row>
                                    </div>
                                    {open}
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
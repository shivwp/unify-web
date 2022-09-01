import { Col, Row } from 'react-bootstrap';
import Search from './invite-freelancer/search';
import Invite from './invite-freelancer/invite';
import Hires from './invite-freelancer/hires';
import Saved from './invite-freelancer/saved';

import { useState } from 'react';

const JonComponent = () => {
    const [Tab, SetTab] = useState(<Search />)
    const [TabActive, SetTabActive] = useState("search")
    function changeTab(componentName) {
        if (componentName === "search") {
            SetTab(<Search />)
            SetTabActive("search")
        } else if (componentName === "invite") {
            SetTab(<Invite />)
            SetTabActive("invite")
        } else if (componentName === "hires") {
            SetTab(<Hires />)
            SetTabActive("hires")
        } else if (componentName === "saved") {
            SetTab(<Saved />)
            SetTabActive("saved")
        }
    }
    return (
        <Row>
            <Col lg={12}>
                <div className="box_vs_m">
                    <div className="d-flex flex-wrap tab_m_nodea">
                        <button className={`tab_btn_vs w-auto ${TabActive === 'search' ? 'active_bvs' : ''}`} onClick={() => { changeTab("search") }}>Search</button>
                        <button className={`tab_btn_vs w-auto ${TabActive === 'invite' ? 'active_bvs' : ''}`} onClick={() => { changeTab("invite") }}>Invite freelancers</button>
                        <button className={`tab_btn_vs w-auto ${TabActive === 'hires' ? 'active_bvs' : ''}`} onClick={() => { changeTab("hires") }}>My Hires</button>
                        <button className={`tab_btn_vs w-auto ${TabActive === 'saved' ? 'active_bvs' : ''}`} onClick={() => { changeTab("saved") }}>Saved Talent</button>
                    </div>
                    {Tab}
                </div>
            </Col>
        </Row>
    )
}
export default JonComponent
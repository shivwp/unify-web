import { Col, Row } from 'react-bootstrap';
import Search from './invite-freelancer/search';
import Invite from './invite-freelancer/invite';
import Hires from './invite-freelancer/hires';
import Saved from './invite-freelancer/saved';
import Button from 'react-bootstrap/Button'
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
                    <div className='overflow-scroll'>
                    <div className="d-flex flex-wrap tab_m_nodea tab_scroll_cont">
                        <Button className={`tab_btn_vs text-transform-cap w-auto ${TabActive === 'search' ? 'active_bvs' : ''}`} onClick={() => { changeTab("search") }}>Search</Button>
                        <Button className={`tab_btn_vs text-transform-cap w-auto ${TabActive === 'invite' ? 'active_bvs' : ''}`} onClick={() => { changeTab("invite") }}>Invited freelancers</Button>
                        <Button className={`tab_btn_vs text-transform-cap w-auto ${TabActive === 'hires' ? 'active_bvs' : ''}`} onClick={() => { changeTab("hires") }}>My Hires</Button>
                        <Button className={`tab_btn_vs text-transform-cap w-auto ${TabActive === 'saved' ? 'active_bvs' : ''}`} onClick={() => { changeTab("saved") }}>Saved Talent</Button>
                    </div>
                    </div>
                    {Tab}
                </div>
            </Col>
        </Row>
    )
}
export default JonComponent
import { Col, Row } from 'react-bootstrap';
import AllProposals from './allproposals';
import Satisfied from './satisfied';
import Messaged from './messaged';
import Archived from './archive';

import { useState } from 'react';

const JonComponent = () => {
    const [Tab, SetTab] = useState(<AllProposals />)
    const [TabActive, SetTabActive] = useState("all")
    function changeTab(componentName) {
        if (componentName === "all") {
            SetTab(<AllProposals />)
            SetTabActive("all")
        } else if (componentName === "satisfied") {
            SetTab(<Satisfied />)
            SetTabActive("satisfied")
        } else if (componentName === "message") {
            SetTab(<Messaged />)
            SetTabActive("message")
        } else if (componentName === "archive") {
            SetTab(<Archived />)
            SetTabActive("archive")
        }
    }
    return (
        <Row>
            <Col lg={12}>
                <div className="box_vs_m">
                    <div className="d-flex flex-wrap tab_m_nodea">
                        <button className={`tab_btn_vs w-auto ${TabActive === 'all' ? 'active_bvs' : ''}`} onClick={() => { changeTab("all") }}>All Proposals</button>
                        <button className={`tab_btn_vs w-auto ${TabActive === 'satisfied' ? 'active_bvs' : ''}`} onClick={() => { changeTab("satisfied") }}>Satisfied</button>
                        <button className={`tab_btn_vs w-auto ${TabActive === 'message' ? 'active_bvs' : ''}`} onClick={() => { changeTab("message") }}>Messaged</button>
                        <button className={`tab_btn_vs w-auto ${TabActive === 'archive' ? 'active_bvs' : ''}`} onClick={() => { changeTab("archive") }}>Archived</button>
                    </div>
                    {Tab}
                </div>
            </Col>
        </Row>
    )
}
export default JonComponent
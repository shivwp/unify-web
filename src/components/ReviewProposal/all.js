import { Col, Row } from 'react-bootstrap';
import AllProposals from './allproposals';
import Satisfied from './satisfied';
import Messaged from './messaged';
import Archived from './archive';
import Button from 'react-bootstrap/Button'

import { useState } from 'react';

const JonComponent = () => {
    const [Tab, SetTab] = useState(<AllProposals changetab={changeTab}/>)
    const [TabActive, SetTabActive] = useState("all")

    function changeTab(componentName) {
        if (componentName === "all") {
            SetTab(<AllProposals changetab={changeTab}/>)
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
                    <div className='overflow-scroll'>
                    <div className="d-flex tab_m_nodea tab_scroll_cont">
                        <Button variant="" className={`text-capitalize tab_btn_vs w-auto ${TabActive === 'all' ? 'active_bvs' : ''}`} onClick={() => { changeTab("all") }}>All Proposals</Button>
                        <Button variant="" className={`text-capitalize tab_btn_vs w-auto ${TabActive === 'satisfied' ? 'active_bvs' : ''}`} onClick={() => { changeTab("satisfied") }}>Shortlisted</Button>
                        <Button variant="" className={`text-capitalize tab_btn_vs w-auto ${TabActive === 'message' ? 'active_bvs' : ''}`} onClick={() => { changeTab("message") }}>Messaged</Button>
                        <Button variant="" className={`text-capitalize tab_btn_vs w-auto ${TabActive === 'archive' ? 'active_bvs' : ''}`} onClick={() => { changeTab("archive") }}>Archived</Button>
                    </div>
                    </div>
                    {Tab}
                </div>
            </Col>
        </Row>
    )
}
export default JonComponent
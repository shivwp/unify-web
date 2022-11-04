import { Col, Row } from 'react-bootstrap';
import Offers from './offers';
import Hired from './hired';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';

const JonComponent = () => {
    const [Tab, SetTab] = useState(<Offers />)
    const [TabActive, SetTabActive] = useState("offers")
    function changeTab(componentName) {
        if (componentName === "offers") {
            SetTab(<Offers />)
            SetTabActive("offers")
        } else if (componentName === "hired") {
            SetTab(<Hired />)
            SetTabActive("hired")
        } 
    }
    return (
        <Row>
            <Col lg={12}>
                <div className="box_vs_m">
                    <div className="d-flex flex-wrap tab_m_nodea">
                        <Button className={`tab_btn_vs w-auto ${TabActive === 'offers' ? 'active_bvs' : ''}`} onClick={() => { changeTab("offers") }}>Offers</Button>
                        <Button className={`tab_btn_vs w-auto ${TabActive === 'hired' ? 'active_bvs' : ''}`} onClick={() => { changeTab("hired") }}>Hired</Button>
                    </div>
                    {Tab}
                </div>
            </Col>
        </Row>
    )
}
export default JonComponent
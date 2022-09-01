import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import SideNav from './site_nav';

const titleDescription = () => {
    return (
        <div>
            <Container>
                <Row>
                    <SideNav />
                    <Col lg={9}>
                        <div className="s_nav_body">
                            <div className="s_b_head"><h2>Description</h2><div className="s_on">Step 2 of 7</div></div>
                            <br />
                            <div className="bl_head"><h3>Here are some good example:</h3></div>
                            <ul className="poi_box">
                                <li className="point_li">Developer needed  for crating a responsive web site</li>
                                <li className="point_li">Developer needed  for crating a responsive web site</li>
                                <li className="point_li">Developer needed  for crating a responsive web site</li>
                            </ul>
                            <div className="t_area_ob"><textarea></textarea></div>
                            <br />
                            <div className="bl_head"><h3>Additional project files (optional)</h3></div>
                            <div>
                                <div className="project_f_inpu_box">
                                    <input type="file" />
                                    <label>drag or <span>upload</span> project images here</label>
                                </div>
                            </div>
                            <div className="bl_apra"><p>You may attach to 5 files under 100 mb each.</p></div>
                            <div className="btn_foot_sec">
                                <div className='fo_btn_c'><button>Cancel</button></div>
                                <div className='fo_btn_c'><button>Next</button></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default titleDescription
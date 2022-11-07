import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import SideNav from "../../../../components/site_nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const titleDescription = () => {
  return (
    <div>
      <Container>
        <Row>
          <SideNav />
          <Col lg={9}>
            <div className="s_nav_body">
              <div className="s_b_head">
                <h2>Description</h2>
                <div className="s_on">Step 2 of 7</div>
              </div>
              <br />
              <div className="bl_head">
                <h3>Here are some good example:</h3>
              </div>
              <ul className="poi_box">
                <li className="point_li">
                  Developer needed for crating a responsive web site
                </li>
                <li className="point_li">
                  Developer needed for crating a responsive web site
                </li>
                <li className="point_li">
                  Developer needed for crating a responsive web site
                </li>
              </ul>
              <div className="t_area_ob">
                <Form.Control as="textarea"></Form.Control>
              </div>
              <br />
              <div className="bl_head">
                <h3>Additional project files (optional)</h3>
              </div>
              <div>
                <div className="project_f_inpu_box">
                  <Form.Control type="file" />
                  <Form.Label>
                    drag or <span>upload</span> project images here
                  </Form.Label>
                </div>
              </div>
              <div className="bl_apra">
                <p>You may attach to 5 files under 100 mb each.</p>
              </div>
              <div className="btn_foot_sec flex-wrap no-border mt-2">
                <div className="fo_btn_c next_b_btn_c">
                  <Button variant="">Cancel</Button>
                </div>
                <div className="fo_btn_c next_b_btn_c">
                  <Button variant="" className="active_btn_blue">Next</Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default titleDescription;

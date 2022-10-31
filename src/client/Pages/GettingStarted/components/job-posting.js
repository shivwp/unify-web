import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import SideNav from "../../../../components/site_nav";
import Title from "../../../../components/title";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const JobPosting = () => {
  Title(" | Getting Started");
  return (
    <div className="bg-f2f8ff min_pad_m">
      <Container>
        <Row>
          <SideNav />
          <Col lg={9}>
            <div className="s_nav_body">
              <div className="s_b_head">
                <h2>Getting Started</h2>
                <div className="s_on">Step 1 of 5</div>
              </div>
              <div className="my_skil_head mr_2_sm">
                <h3>What would you like to do?</h3>
              </div>
              <div className="s_b_r">
                <Form.Check type="radio" id="r_1" name="g" />
                <Form.Label htmlFor="r_1">
                  {" "}
                  <p>Create a new job post.</p>
                </Form.Label>
              </div>
              <Row>
                <Col md={5} sm={6}>
                  <div className="select_card">
                    <div className="sel_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-tools"
                        viewBox="0 0 16 16"
                      >
                        <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
                      </svg>
                    </div>
                    <div className="sho_tit">
                      Short -term or
                      <br /> part-time work
                    </div>
                    <div className="sm_seds">Less than 30 hrs/week</div>
                    <div className="sm_seds">Less than 3 months</div>
                  </div>
                </Col>
                <Col md={5} sm={6}>
                  <div className="select_card">
                    <div className="sel_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-calendar-event"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                      </svg>
                    </div>
                    <div className="sho_tit">
                      Short -term or
                      <br /> part-time work
                    </div>
                    <div className="sm_seds">Less than 30 hrs/week</div>
                    <div className="sm_seds">Less than 3 months</div>
                  </div>
                </Col>
              </Row>
              <div className="s_b_r">
                <Form.Check type="radio" id="r_2" name="g" />
                <Form.Label htmlFor="r_2">
                  {" "}
                  <p>Edit an existing draft </p>
                </Form.Label>
              </div>
              <div className="s_b_r">
                <Form.Check type="radio" id="r_3" name="g" />
                <Form.Label htmlFor="r_3">
                  {" "}
                  <p>Reuse a previous job pst</p>
                </Form.Label>
              </div>
              <div className="s_select">
                <Form.Select className="carrt_css_select">
                  <option>HubSpot Automations - Work flow</option>
                </Form.Select>
              </div>
              <div className="btn_foot_sec flex-wrap d-flex">
                <div className="fo_btn_c next_b_btn_c">
                  <Link to="/dashboard">
                    <Button className="mrright-gppnew">Cancel</Button>
                  </Link>
                </div>
                <div className="fo_btn_c next_b_btn_c">
                  <Link to="/title">
                    <Button className="active_btn_blue">Continue</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default JobPosting;

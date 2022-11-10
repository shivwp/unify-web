import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Message = () => {
  return (
    <Container>
      <div className="job_haed_m">Job Details</div>
      <Row>
        <Col lg={8}>
          <div className="box_vs_m mt-0">
            <div className="svs_b_bot">
              <div className="d-flex justify-content-between">
                <div className="bvs_main_head">UI/UX Design</div>
                <div className="bvs_m_post_time">Posted 29 minutes ago</div>
              </div>
              <div className="world_wide_t">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pin-map"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                    />
                  </svg>
                </span>
                Worldwide
              </div>
            </div>
            <div className="svs_b_bot">
              <div className="svs_para">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters.
              </div>
            </div>
            <div className="svs_b_bot">
              <div className="input_t_lab p-0">Project Type</div>
              <div className="svs_para">Ongoing project</div>
            </div>

            <div className="b_bot_inp pt-0">
              <div className="input_t_lab">Skills</div>
              <div className="slide_btnss">
                <Button variant="">Mobile App Design</Button>
                <Button variant="">User Experience Design</Button>
                <Button variant="">User Interface Design</Button>
                <Button variant="">Graphic Design</Button>
              </div>
            </div>
            <div className="b_bot_inp pt-0">
              <div className="input_t_lab">Activity on this job</div>
              <ul className="activite_ul">
                <li>
                  <div className="au_name">Proposals</div> :{" "}
                  <span>Less than 5</span>
                </li>
                <li>
                  <div className="au_name">interviewing</div> : <span>0</span>
                </li>
              </ul>
            </div>
            <div className="b_bot_inp pt-0">
              <div className="input_t_lab">Original Message From Client</div>
              <div className="new_para_m">
                Hello, i' like to invite you to take a look at the job I've
                posted. It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters. John D.
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className="box_vs_m mt-0">
            <div className="csai_t text-center">
              Interested in discussing this job?
            </div>
            <div className="btn_foot_sec justify-content-center flex-wrap no-border mt-0 mb-2 p-0">
              <div className="fo_btn_c next_b_btn_c">
                <Button
                  variant=""
                  className="active_btn_blue hov_ttransp mt-0 min-w-2hpx"
                >
                  Accept Interview
                </Button>
              </div>
            </div>
            <div className="btn_foot_sec justify-content-center flex-wrap no-border mt-0 mb-2 p-0">
              <div className="fo_btn_c next_b_btn_c p-0">
                <Button variant="" className="min-w-2hpx">
                  Decline Interview
                </Button>
              </div>
            </div>
            <div className="btn_foot_sec justify-content-center flex-wrap no-border mt-0 mb-2 p-0">
              <div className="fo_btn_c next_b_btn_c">
                <Button variant="" className="min-w-2hpx">
                  Refer a Freelancer
                </Button>
              </div>
            </div>
            <div className="about_client_no mb-2">
              <div className="d-flex justify-content-between">
                <div>
                  <div className="ab_t_c_h1">
                    <h1>About the client</h1>
                  </div>
                  <div className="p_not_verif">
                    payment method not varified
                    <span className="no_verify_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-question-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div>
                  <Button variant="" className="round_b_btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#D4D4D5"
                      className="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fillRule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="cline_sm_area_i">
                <div className="csai_name f_l_b">Location</div>
                <div className="csai_name">Czech Republic</div>
                <div className="csai_t">10:30 am</div>
              </div>
              <div className="cline_sm_area_i">
                <div className="csai_name f_l_b">History</div>
                <div className="csai_t pt-2">
                  20 to 50 proposals
                  <span className="no_verify_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-question-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                    </svg>
                  </span>
                </div>
                <div className="csai_t">6 interviews</div>
                <div className="csai_t">4 job posted</div>
                <div className="csai_t">4 open jobs</div>
              </div>
            </div>
            <div className="csai_t">Member since: Nov 22, 2021</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Message;

import { useState } from "react";
import { Col, Row } from "react-bootstrap";

const JonComponent = () => {
  const [privateAcc, setPrivateAcc] = useState(false);

  return (
    <Row>
      <Col lg={8}>
        <div className="box_vs_m">
          <div className="svs_b_bot">
            <div className="d-flex justify-content-between flex-wrap">
              <div className="bvs_main_head">
                UI/UX Design{" "}
                {privateAcc && (
                  <span
                    style={{
                      color: "#535353",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    Invite Only
                  </span>
                )}
              </div>
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
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </div>
          </div>
          <div className="svs_b_bot">
            <Row>
              <Col md={6} sm={12}>
                <div className="d-flex">
                  <div className="a25_px_oxpm">
                    <img src="/assets/time (1).svg" alt="" />
                  </div>
                  <div>
                    <div className="input_t_lab p-0">Less than 30 hrs/week</div>
                    <div className="svs_para mt-0 pt-0">Hourly</div>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="d-flex">
                  <div className="a25_px_oxpm">
                    <img src="/assets/calendar1.svg" alt="" />
                  </div>
                  <div>
                    <div className="input_t_lab p-0">3 to 6 months</div>
                    <div className="svs_para mt-0 pt-0">Project Length</div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={12}>
                <div className="d-flex">
                  <div className="a25_px_oxpm">
                    <img src="/assets/idea (1).svg" alt="" />
                  </div>
                  <div>
                    <div className="input_t_lab p-0">Entry level</div>
                    <div className="svs_para mt-0 pt-0">
                      I am looking for freelancers with the lowest rates
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="d-flex">
                  <div className="a25_px_oxpm">
                    <img src="/assets/timer.svg" alt="" />
                  </div>
                  <div>
                    <div className="input_t_lab p-0">$15.00-$33.00</div>
                    <div className="svs_para mt-0 pt-0">Hourly</div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="svs_b_bot">
            <div className="input_t_lab p-0">Project Type</div>
            <div className="svs_para">Ongoing project</div>
          </div>

          <div className="b_bot_inp pt-0">
            <div className="input_t_lab">Skills</div>
            <div className="slide_btnss">
              <button>Mobile App Design</button>
              <button>User Experience Design</button>
              <button>User Interface Design</button>
              <button>Graphic Design</button>
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
              <li>
                <div className="au_name">invites sents</div> : <span>0</span>
              </li>
              <li>
                <div className="au_name">unanswered invites</div> :{" "}
                <span>0</span>
              </li>
            </ul>
          </div>
        </div>
      </Col>
      <Col lg={4}>
        <div className="box_vs_m">
          <div className="r_in_tab_h">
            <button className="round_b_btn">
              <svg
                width="16"
                height="16"
                fill="#D4D4D5"
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-i2yjvo"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="CreateIcon"
              >
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
              </svg>
            </button>
            <h1>Edit Posting</h1>
          </div>
          <div className="r_in_tab_h">
            <button className="round_b_btn">
              <svg
                width="16"
                height="16"
                fill="#D4D4D5"
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-lf3s84"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="VisibilityIcon"
              >
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
              </svg>
            </button>
            <h1>View Posting</h1>
          </div>
          <div className="r_in_tab_h">
            <button className="round_b_btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#D4D4D5"
                className="bi bi-pin-angle"
                viewBox="0 0 16 16"
              >
                <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146zm.122 2.112v-.002.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a4.507 4.507 0 0 0-.288-.076 4.922 4.922 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a4.924 4.924 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034.114 0 .23-.011.343-.04L9.927 2.028c-.029.113-.04.23-.04.343a1.779 1.779 0 0 0 .062.46z" />
              </svg>
            </button>
            <h1>Reuse Posting</h1>
          </div>
          <div className="r_in_tab_h">
            <button className="round_b_btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#D4D4D5"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
            <h1>Remove Posting</h1>
          </div>
          <div className="r_in_tab_h">
            <button className="round_b_btn" onClick={() => setPrivateAcc(!privateAcc)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#D4D4D5"
                className="bi bi-shield-lock"
                viewBox="0 0 16 16"
              >
                <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z" />
              </svg>
            </button>
            {privateAcc ? <h1>Make Public</h1>:<h1>Make Private</h1>}
          </div>
          <div className="about_client_no">
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
                <button className="round_b_btn">
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
                </button>
              </div>
            </div>
            <div className="cline_sm_area_i">
              <div className="csai_name">India</div>
              <div className="csai_t">10:30 am</div>
            </div>
            <div className="cline_sm_area_i">
              <div className="csai_name">2 Jobs Posted</div>
              <div className="csai_t">0% hire rate, 1 open job</div>
              <div className="csai_t">Mid-sized company (10-99 people)</div>
              <div className="csai_t">Member since 22 Nov 2019</div>
            </div>
          </div>
          <div className="ab_t_c_h1">
            <h1>Job Link</h1>
          </div>
          <div className="ab_inpu_cop">
            <input type="text" />
          </div>
          <div className="cp_link">
            <a href="#0;">copy link</a>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default JonComponent;

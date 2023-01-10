import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import RemovePostingPopup from "../../popups/RemovePostingPopup";
import LoadingSpinner from "../../components/LoadingSpinner";

const JonComponent = ({ singleJobDetails, jobId, handleMakePublicPrivate }) => {
  const navigate = useNavigate();
  const [removePosting, setRemovePosting] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Row>
        <Col lg={8}>
          <div className="box_vs_m">
            <div className="svs_b_bot">
              <div className="d-flex justify-content-between flex-wrap">
                <div className="bvs_main_head">
                  {singleJobDetails?.name}{" "}
                  {singleJobDetails?.is_private === true && (
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
                <div className="bvs_m_post_time">
                  Posted {singleJobDetails?.created_at}
                </div>
              </div>
              <div className="world_wide_t">
                <i className="bi bi-pin-map"></i> Worldwide
              </div>
            </div>
            <div className="svs_b_bot">
              <div className="svs_para">{singleJobDetails?.description}</div>
            </div>
            {singleJobDetails?.budget_type === "fixed" ? (
              <div className="svs_b_bot">
                <Row>
                  <Col md={6} sm={12}>
                    <div className="d-flex">
                      <div className="a25_px_oxpm">
                        <img src="/assets/timer.svg" alt="" />
                      </div>
                      <div>
                        <div className="input_t_lab p-0">
                          ${parseInt(singleJobDetails?.price).toFixed(2)}
                        </div>
                        <div className="svs_para mt-0 pt-0">
                          {singleJobDetails?.budget_type}
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} sm={12}>
                    <div className="d-flex">
                      <div className="a25_px_oxpm">
                        <img src="/assets/idea (1).svg" alt="" />
                      </div>
                      <div>
                        <div
                          className="input_t_lab p-0"
                          style={{ textTransform: "capitalize" }}
                        >
                          {singleJobDetails?.experience_level}
                        </div>
                        <div className="svs_para mt-0 pt-0">
                          I am looking for freelancers with the lowest rates
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            ) : singleJobDetails?.budget_type === "hourly" ? (
              <div className="svs_b_bot">
                <Row>
                  <Col md={6} sm={12}>
                    <div className="d-flex">
                      <div className="a25_px_oxpm">
                        <img src="/assets/time (1).svg" alt="" />
                      </div>
                      <div>
                        <div className="input_t_lab p-0">
                          Less than 30 hrs/week
                        </div>
                        <div className="svs_para mt-0 pt-0">
                          {singleJobDetails?.budget_type}
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} sm={12}>
                    <div className="d-flex">
                      <div className="a25_px_oxpm">
                        <img src="/assets/calendar1.svg" alt="" />
                      </div>
                      <div>
                        <div
                          className="input_t_lab p-0"
                          style={{ textTransform: "capitalize" }}
                        >
                          {singleJobDetails?.project_duration}
                        </div>
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
                        <div
                          className="input_t_lab p-0"
                          style={{ textTransform: "capitalize" }}
                        >
                          {singleJobDetails?.experience_level}
                        </div>
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
                        <div className="input_t_lab p-0">
                          ${singleJobDetails?.min_price.toFixed(2)}-$
                          {singleJobDetails?.price.toFixed(2)}
                        </div>
                        <div className="svs_para mt-0 pt-0">
                          {singleJobDetails?.budget_type}
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            ) : null}

            <div className="svs_b_bot">
              <div className="input_t_lab p-0">Project Type</div>
              {singleJobDetails?.type === "short_term" ? (
                <div className="svs_para">one-time project</div>
              ) : singleJobDetails?.type === "long_term" ? (
                <div className="svs_para">Ongoing project</div>
              ) : null}
            </div>

            <div className="b_bot_inp pt-0">
              <div className="input_t_lab">Skills</div>
              <div className="slide_btnss">
                {singleJobDetails?.job_skills?.map((item, key) => (
                  <button key={key}>{item.name}</button>
                ))}
              </div>
            </div>
            <div className="b_bot_inp pt-0">
              <div className="input_t_lab">Activity on this job</div>
              <ul className="activite_ul">
                <li>
                  <div className="au_name">Proposals</div> :{" "}
                  <span>Less than {singleJobDetails?.proposal_count}</span>
                </li>
                <li>
                  <div className="au_name">interviewing</div> :{" "}
                  <span>{singleJobDetails?.interview}</span>
                </li>
                <li>
                  <div className="au_name">invites sents</div> :{" "}
                  <span>{singleJobDetails?.invite_sent}</span>
                </li>
                <li>
                  <div className="au_name">unanswered invites</div> :{" "}
                  <span>{singleJobDetails?.unanswered_invite}</span>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className="box_vs_m">
            <Link to={`/edit-posting/${jobId}`}>
              <div className="r_in_tab_h">
                <button className="round_b_btn">
                  <i className="bi bi-pencil text-secondary"></i>
                </button>
                <h1>Edit Posting</h1>
              </div>
            </Link>
            <Link to={`/reuse-posting/${jobId}`}>
              <div className="r_in_tab_h">
                <button className="round_b_btn">
                  <i className="bi bi-pin-angle text-secondary"></i>
                </button>
                <h1>Reuse Posting</h1>
              </div>
            </Link>
            <div className="r_in_tab_h" onClick={() => setRemovePosting(true)}>
              <button className="round_b_btn">
                <i className="bi bi-x text-secondary"></i>
              </button>
              <h1>Remove Posting</h1>
            </div>

            {singleJobDetails?.is_private === false ? (
              <div
                className="r_in_tab_h"
                onClick={() => handleMakePublicPrivate("private")}
              >
                <button className="round_b_btn">
                  <i className="bi bi-shield-lock text-secondary"></i>
                </button>
                <h1>Make Private</h1>
              </div>
            ) : (
              <div
                className="r_in_tab_h"
                onClick={() => handleMakePublicPrivate("public")}
              >
                <button className="round_b_btn">
                  <i className="bi bi-globe text-secondary"></i>
                </button>
                <h1>Make Public</h1>
              </div>
            )}

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
                  <Link to={`/businesssize/${jobId}`}>
                    <button className="round_b_btn">
                      <i className="bi bi-pencil-square"></i>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="cline_sm_area_i">
                <div className="csai_name">
                  {singleJobDetails?.client_data?.country}
                </div>
                <div className="csai_t">
                  {singleJobDetails?.client_data?.local_time}
                </div>
              </div>
              <div className="cline_sm_area_i">
                <div className="csai_name">
                  {singleJobDetails?.client_data?.job_posted} Jobs Posted
                </div>
                <div className="csai_t">
                  {singleJobDetails?.hire_rate}% hire rate,{" "}
                  {singleJobDetails?.open_jobs} open job
                </div>

                <div className="csai_t">
                  {singleJobDetails?.client_data?.employee_no <= 1
                    ? "Company size  (It Just me)"
                    : singleJobDetails?.client_data?.employee_no <= 2
                    ? "Company size  (1-10 people)"
                    : singleJobDetails?.client_data?.employee_no <= 10
                    ? "Company size  (10-100 people)"
                    : singleJobDetails?.client_data?.employee_no <= 100
                    ? "Company size  100+ people" || "..."
                    : null}
                </div>
                <div className="csai_t">
                  Member since {singleJobDetails?.client_data?.member_since}
                </div>
              </div>
            </div>
            <div className="ab_t_c_h1">
              <h1>Job Link</h1>
            </div>
            <div className="ab_inpu_cop">
              <Form.Control type="text" />
            </div>
            <div className="cp_link">
              <Link to="#0;">copy link</Link>
            </div>
          </div>
        </Col>
      </Row>
      {removePosting && (
        <RemovePostingPopup
          open={removePosting}
          onCloseModal={(e) => setRemovePosting(false)}
          menuBarPosting={jobId}
          setLoading={setLoading}
        />
      )}
      {loading ? <LoadingSpinner /> : null}
    </>
  );
};
export default JonComponent;

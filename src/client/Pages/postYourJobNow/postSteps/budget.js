import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Budget = ({ setCurrentTab, onInputChange, values, reviewJobPost }) => {
  return (
    <Col lg={9}>
      <div className="s_nav_body">
        <div className="s_b_head">
          <h2>Budget</h2>
          <div className="s_on">Step 5 of 5</div>
        </div>
        <Row className="mt-3" style={{ display: "flex", gap: "30px" }}>
          <Col md={5} sm={6}>
            <Form.Label className="form_card_label">
              <div className="select_card subscription_box_r pnew_bud">
                <div className="sub_radio">
                  <Form.Check
                    type="radio"
                    name="budget_type"
                    value="hourly"
                    checked={values?.budget_type === "hourly" ? true : false}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="sel_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                </div>
                <div className="sho_tit">Hourly Rate</div>
              </div>
            </Form.Label>
          </Col>
          <Col md={5} sm={6}>
            <Form.Label className="form_card_label">
              <div className="select_card subscription_box_r pnew_bud">
                <div className="sub_radio">
                  <Form.Check
                    type="radio"
                    name="budget_type"
                    value="fixed"
                    checked={values?.budget_type === "fixed" ? true : false}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="sel_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-ui-checks"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708l-2 2zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708l-2 2zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                  </svg>
                </div>
                <div className="sho_tit">Project budget</div>
              </div>
            </Form.Label>
          </Col>
        </Row>

        {values?.budget_type === "hourly" ? (
          <div className="d-flex">
            <div className="input_ft">
              <div className="input_t_lab bud_new_l_tex">From</div>
              <div className="d-flex">
                <div className="input_from_tlab lign_tex">
                  <div className="d-flex align-items-center">$</div>
                  <Form.Control
                    type="number"
                    name="price"
                    value={values?.price}
                    onChange={(e) => onInputChange(e)}
                    onWheel={(e) => e.target.blur()}
                  />
                </div>
                <div className="input_t_lab input_hour lign_tex pl-2">
                  /hour
                </div>
              </div>
            </div>
            <div className="input_ft">
              <div className="input_t_lab bud_new_l_tex">To</div>
              <div className="d-flex">
                <div className="input_from_tlab lign_tex">
                  <div className="d-flex align-items-center">$</div>
                  <Form.Control
                    type="number"
                    name="min_price"
                    value={values?.min_price}
                    onChange={(e) => onInputChange(e)}
                    onWheel={(e) => e.target.blur()}
                  />
                </div>
                <div className="input_t_lab input_hour lign_tex pl-2">
                  /hour
                </div>
              </div>
            </div>
          </div>
        ) : values?.budget_type === "fixed" ? (
          <div className="d-flex">
            <div className="input_ft">
              <div className="input_t_lab bud_new_l_tex">To</div>
              <div className="d-flex">
                <div className="input_from_tlab lign_tex">
                  <div className="d-flex align-items-center">$</div>
                  <Form.Control
                    type="number"
                    name="price"
                    value={values?.price}
                    onChange={(e) => onInputChange(e)}
                    onWheel={(e) => e.target.blur()}
                  />
                </div>
                <div className="input_t_lab input_hour lign_tex pl-2">
                  Max budget
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className="ft_par">
          This is the average rate for similar projects.
        </div>
        <div className="mt-4 bud_news_para">
          Professionals tend to charge <span>$15 - $35/hour (USD)</span> for
          UI/UX design projects like yours. Experts may charge higher rates.
        </div>
        <div className="ft_form_linki">Not ready to set an hourly rate?</div>
        <div className="btn_foot_sec flex-wrap no-border mt-2">
          <div className="fo_btn_c next_b_btn_c">
            <button
              onClick={() => setCurrentTab("scope")}
              className="mrright-gppnew"
            >
              Back
            </button>
          </div>

          {values?.budget_type === "fixed" ? (
            <>
              {!values?.price ? (
                <div className="fo_btn_c next_b_btn_c">
                  <button disabled className="active_btn_blueDiabled">
                    Review Job Post
                  </button>
                </div>
              ) : (
                <>
                  {!values?.job_type ? (
                    <div className="fo_btn_c next_b_btn_c">
                      <button
                        className="active_btn_blue"
                        onClick={() => setCurrentTab("getting-started")}
                      >
                        Review Job Post
                      </button>
                    </div>
                  ) : !values?.job_title ? (
                    <div className="fo_btn_c next_b_btn_c">
                      <button
                        className="active_btn_blue"
                        onClick={() => setCurrentTab("title")}
                      >
                        Review Job Post
                      </button>
                    </div>
                  ) : !values?.category_id ? (
                    <div className="fo_btn_c next_b_btn_c">
                      <button
                        className="active_btn_blue"
                        onClick={() => setCurrentTab("job-category")}
                      >
                        Review Job Post
                      </button>
                    </div>
                  ) : values?.job_skills?.length === 0 ||
                    values?.english_level === "" ||
                    values?.job_skills?.length === 0 ||
                    values?.english_level === undefined ||
                    values?.job_skills?.length === 0 ||
                    values?.english_level === null ? (
                    <div className="fo_btn_c next_b_btn_c">
                      <button
                        className="active_btn_blue"
                        onClick={() => setCurrentTab("skills")}
                      >
                        Review Job Post
                      </button>
                    </div>
                  ) : !values?.scop ||
                    !values?.project_duration ||
                    !values?.experience_level ? (
                    <div className="fo_btn_c next_b_btn_c">
                      <button
                        className="active_btn_blue"
                        onClick={() => setCurrentTab("scope")}
                      >
                        Review Job Post
                      </button>
                    </div>
                  ) : (
                    <div className="fo_btn_c next_b_btn_c">
                      <button
                        className="active_btn_blue"
                        onClick={reviewJobPost}
                      >
                        Review Job Post
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          ) : values?.budget_type === "hourly" ? (
            <>
              {!values?.price || !values?.min_price ? (
                <div className="fo_btn_c next_b_btn_c">
                  <button disabled className="active_btn_blueDiabled">
                    Review Job Post
                  </button>
                </div>
              ) : (
                <>
                  {!values?.job_type ? (
                    <div className="fo_btn_c next_b_btn_c">
                      <button
                        className="active_btn_blue"
                        onClick={() => setCurrentTab("getting-started")}
                      >
                        Review Job Post
                      </button>
                    </div>
                  ) : !values?.job_title ? (
                    <div className="fo_btn_c next_b_btn_c">
                      <button
                        className="active_btn_blue"
                        onClick={() => setCurrentTab("title")}
                      >
                        Review Job Post
                      </button>
                    </div>
                  ) : !values?.category_id ? (
                    <div className="fo_btn_c next_b_btn_c">
                      <button
                        className="active_btn_blue"
                        onClick={() => setCurrentTab("job-category")}
                      >
                        Review Job Post
                      </button>
                    </div>
                  ) : values?.job_skills?.length === 0 ||
                    values?.english_level === "" ||
                    values?.job_skills?.length === 0 ||
                    values?.english_level === undefined ||
                    values?.job_skills?.length === 0 ||
                    values?.english_level === null ? (
                    <div className="fo_btn_c next_b_btn_c">
                      <button
                        className="active_btn_blue"
                        onClick={() => setCurrentTab("skills")}
                      >
                        Review Job Post
                      </button>
                    </div>
                  ) : !values?.scop ||
                    !values?.project_duration ||
                    !values?.experience_level ? (
                    <div className="fo_btn_c next_b_btn_c">
                      <button
                        className="active_btn_blue"
                        onClick={() => setCurrentTab("scope")}
                      >
                        Review Job Post
                      </button>
                    </div>
                  ) : (
                    <div className="fo_btn_c next_b_btn_c">
                      <button
                        className="active_btn_blue"
                        onClick={reviewJobPost}
                      >
                        Review Job Post
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          ) : null}
        </div>
      </div>
    </Col>
  );
};
export default Budget;

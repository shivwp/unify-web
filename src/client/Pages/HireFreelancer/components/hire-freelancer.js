import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "../../../../styles/job.css";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { getSingleFreelancer } from "../../../../redux/actions/freelancerAction";
import { singleJobPostDetails } from "../../../../redux/actions/jobActions";

const Screen = () => {
  const dispatch = useDispatch();
  const { project_id, freelancer_id } = useParams();
  const [startDate, setStartDate] = useState();
  const [values, setValues] = useState({});
  const [openPrice, setOpenPrice] = useState(false);
  const [weeklyLimit, setWeeklyLimit] = useState(false);
  const singleFreelancer = useSelector(
    (state) => state.freelancer.singleFreelancer
  );
  const singleJobDetails = useSelector((state) => state.job.singleJobDetails);

  useEffect(() => {
    if (singleJobDetails) {
      setValues(singleJobDetails);
    }
  }, [singleJobDetails]);

  useEffect(() => {
    dispatch(getSingleFreelancer(freelancer_id));
  }, []);

  useEffect(() => {
    const data = {
      job_id: project_id,
    };
    dispatch(singleJobPostDetails(data));
  }, []);

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <div className="fire_headin">Hire</div>
      <div className="main_box_descr main_hirefreelancer_bx">
        <div className="d-flex flex-wrap b-bottom-gr pb-3">
          <div className="freelancer_img_in_r online_profile">
            <img src={singleFreelancer?.basic_info?.profile_image} alt="" />
          </div>
          <div className="freel_det_bin">
            <div className="freelancer_ame_in">
              {singleFreelancer?.basic_info?.first_name}{" "}
              {singleFreelancer?.basic_info?.last_name}
            </div>
            <div className="freelancer_exp_in">
              {singleFreelancer?.basic_info?.occuption}
            </div>
            <div className="freelancer_exp_in freelancer_loc_in d-flex flex-wrap sm_amhir_no_mar">
              <div>
                {singleFreelancer?.basic_info?.city},{" "}
                {singleFreelancer?.basic_info?.country}
              </div>
              <div className="amount_hir_in p-0">
                <b>{singleFreelancer?.basic_info?.success_rate}</b> Job Success
              </div>
              {/* <div className="amount_hir_in p-0">Top Rated Plus</div> */}
            </div>
          </div>
        </div>
        <div className="b-bottom-gr">
          <div className="contrc_ter_head">Contract Terms</div>
          <div className="pay_pro_par">
            You’re protected by <Link to="#0">Unify Payment Protection.</Link>{" "}
            Only pay for the work you authorize.
          </div>
          <div className="pt-4 pb-3">
            <div>
              <div className="pay_op_heading">
                Payment Option
                <span className="no_verify_icon">
                  <i className="bi bi-question-circle-fill text-secondary"></i>
                </span>
              </div>

              <div className="hourly_headin d-flex align-items-center">
                {/* {values?.budget_type} */}
                <Row className="mt-3">
                  <Col md={6} sm={6}>
                    <Form.Label className="form_card_label">
                      <div className="select_card subscription_box_popup pnew_bud">
                        <div className="sub_radio">
                          <Form.Check
                            type="radio"
                            name="budget_type"
                            value="hourly"
                            checked={
                              values?.budget_type === "hourly" ? true : false
                            }
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
                  <Col md={6} sm={6}>
                    <Form.Label className="form_card_label">
                      <div className="select_card subscription_box_popup pnew_bud">
                        <div className="sub_radio">
                          <Form.Check
                            type="radio"
                            name="budget_type"
                            value="fixed"
                            checked={
                              values?.budget_type === "fixed" ? true : false
                            }
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
              </div>
            </div>

            {values?.budget_type === "hourly" ? (
              <>
                <div>
                  <div className="pay_op_heading">
                    Pay by the hour
                    <span className="no_verify_icon">
                      <i className="bi bi-question-circle-fill text-secondary"></i>
                    </span>
                  </div>
                  <div className="hourly_headin d-flex align-items-center">
                    {!openPrice ? (
                      "$30.00"
                    ) : (
                      <Col md={3}>
                        <Form.Control type="number"></Form.Control>
                      </Col>
                    )}
                    /hr
                    {!openPrice ? (
                      <button
                        className="round_b_btn"
                        onClick={() => setOpenPrice(!openPrice)}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                    ) : (
                      <button
                        className="round_b_btn"
                        onClick={() => setOpenPrice(!openPrice)}
                      >
                        <i
                          className="bi bi-check"
                          style={{ fontSize: "26px" }}
                        ></i>
                      </button>
                    )}
                  </div>
                  <div className="max_prof_rt">
                    Max Mario's profile rate is $30.00 /hr
                  </div>
                </div>
                <div>
                  <div className="pay_op_heading">
                    Weekly Limit
                    <span className="no_verify_icon">
                      <i className="bi bi-question-circle-fill text-secondary"></i>
                    </span>
                  </div>
                  <div className="max_prof_rt">
                    Setting a weekly limit is a great way to help ensure you
                    stay on budget.
                  </div>
                  <div className="hourly_headin d-flex align-items-center">
                    {!weeklyLimit ? (
                      "40"
                    ) : (
                      <Col md={3}>
                        <Form.Select value="">
                          <option value="">No limit</option>
                          <option value="">5 hrs/week</option>
                          <option value="">10 hrs/week</option>
                          <option value="">15 hrs/week</option>
                          <option value="">20 hrs/week</option>
                          <option value="">25 hrs/week</option>
                          <option value="">30 hrs/week</option>
                          <option value="">35 hrs/week</option>
                          <option value="">40 hrs/week</option>
                        </Form.Select>
                      </Col>
                    )}
                    hrs/week
                    {!weeklyLimit ? (
                      <button
                        className="round_b_btn"
                        onClick={() => setWeeklyLimit(!weeklyLimit)}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                    ) : (
                      <button
                        className="round_b_btn"
                        onClick={() => setWeeklyLimit(!weeklyLimit)}
                      >
                        <i
                          className="bi bi-check"
                          style={{ fontSize: "26px" }}
                        ></i>
                      </button>
                    )}
                  </div>
                  <div className="max_prof_rt">$1,200.00 max/week</div>
                </div>
              </>
            ) : values?.budget_type === "fixed" ? (
              <>
                <div>
                  <div className="pay_op_heading">
                    Pay by the hour
                    <span className="no_verify_icon">
                      <i className="bi bi-question-circle-fill text-secondary"></i>
                    </span>
                  </div>
                  <div className="hourly_headin d-flex align-items-center">
                    {!openPrice ? (
                      "$30.00"
                    ) : (
                      <Col md={3}>
                        <Form.Control type="number"></Form.Control>
                      </Col>
                    )}
                    /hr
                    {!openPrice ? (
                      <button
                        className="round_b_btn"
                        onClick={() => setOpenPrice(!openPrice)}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                    ) : (
                      <button
                        className="round_b_btn"
                        onClick={() => setOpenPrice(!openPrice)}
                      >
                        <i
                          className="bi bi-check"
                          style={{ fontSize: "26px" }}
                        ></i>
                      </button>
                    )}
                  </div>
                  <div className="max_prof_rt">
                    Max Mario's profile rate is $30.00 /hr
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
        <div className="d-flex allow_freel_che flex-wrap">
          <Form.Label className="d-flex">
            <Form.Check type="checkbox"></Form.Check>
            Allow freelancer to log time manually if needed.
          </Form.Label>
          <Link to="#0">Learn more</Link>
        </div>
        <div className="d-flex align-items-center flex-wrap pt-3 pb-4 b-bottom-gr">
          <div className="start_d_headin">
            Start Date <span>(Optional)</span>
            <span className="no_verify_icon">
              <i className="bi bi-question-circle-fill"></i>
            </span>
          </div>
          <div className="inpu_date d-flex psr-relative">
            <input type="date" className="custom_date_picker" />
            {/* <div className="psr_abs_c_icon">
              <i class="bi bi-calendar-date"></i>
            </div> */}
          </div>
        </div>
        <div className="b_bot_inp d-flex justify-content-between align-items-center">
          <div className="sm_label_inp slide_n_tex">
            Add automatic weekly payments for the freelancer (Optional)
          </div>
          <div className="pr-10">
            <i class="bi bi-chevron-down"></i>
          </div>
        </div>
        <div className="b_bot_inp d-flex justify-content-between align-items-center">
          <div className="sm_label_inp slide_n_tex">
            How do hourly contracts work?
          </div>
          <div className="pr-10">
            <i class="bi bi-chevron-down"></i>
          </div>
        </div>
      </div>
      <div className="main_box_descr main_hirefreelancer_bx">
        <div className="contrc_ter_head mb-2">Work Description</div>
        <div className="pay_pro_par p-0 m-0">Add a description of the work</div>
        <Form.Group className="description_text_h">
          <Form.Control as="textarea" rows={3}></Form.Control>
        </Form.Group>
        <div className="ts_btn attach_f_btn mt-0">
          <Form.Control type="file" />
          <button>
            <i class="bi bi-paperclip"></i>
            Attach File
          </button>
          <div className="sm_label_inp">Max file size: 100 MB</div>
        </div>
      </div>
      <div className="allow_freel_che flex-wrap black_a_inp">
        <Form.Check type="checkbox" />
        Yes, I understand and agree to the{" "}
        <Link to="#0"> Unify Terms of Service </Link>, including the User{" "}
        <Link to="#0"> Agreement </Link> and{" "}
        <Link to="#0"> Privacy Policy </Link>.
      </div>
      <div className="d-flex justify-content-between mt-4 mb-5">
        <div className="btn_job_back">
          <Link to="/view-job">
            <button className="fo_btn_c next_b_btn_c mb-2">Cancel</button>
          </Link>
          <Link to="/hire-freelancer/addAddress">
            <button className="fo_btn_c next_b_btn_c mb-2 post_job_btn blue_ac_btn">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};
export default Screen;

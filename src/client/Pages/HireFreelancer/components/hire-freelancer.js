import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../../../styles/job.css";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  singleJobPostDetails,
  singleProposalDetails,
} from "../../../../redux/actions/jobActions";
import {
  getSingleFreelancer,
  hireFreelancer,
} from "../../../../redux/actions/freelancerAction";

const Screen = () => {
  const navigate = useNavigate();
  const { project_id, proposal_id, freelancer_id } = useParams();
  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [imageFile, setImageFile] = useState();
  const [objectUrl, setObjectUrl] = useState();
  const proposalData = useSelector(
    (state) => state?.job?.singleProposalDetails?.proposal_data
  );
  const milestoneData = useSelector(
    (state) => state?.job?.singleProposalDetails?.milestonedata
  );
  const singleFreelancer = useSelector(
    (state) => state.freelancer.singleFreelancer
  );
  const singleJobDetails = useSelector((state) => state.job.singleJobDetails);

  useEffect(() => {
    if (proposalData) {
      setValues({ ...proposalData, agree_terms: 0 });
    } else if (singleJobDetails) {
      setValues({ ...singleJobDetails, agree_terms: 0 });
    }
  }, [proposalData, singleJobDetails]);

  useEffect(() => {
    const data = {
      job_id: project_id,
    };
    dispatch(getSingleFreelancer(freelancer_id));
    dispatch(singleJobPostDetails(data));
  }, []);

  useEffect(() => {
    if (proposal_id) {
      dispatch(singleProposalDetails(proposal_id, "submit"));
    }
  }, []);

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const onProfileChange = (e) => {
    setImageFile(e.target.files[0]);
    setObjectUrl(e.target.files[0].name);
  };

  const handleHireFreelancer = () => {
    let errorExist = false;
    let errorsObject = {};

    if (
      values?.title === "" ||
      values?.title === null ||
      values?.title === undefined
    ) {
      errorsObject.title = "Please add a contract title.";
      errorExist = true;
    }

    if (values?.budget_type === "hourly") {
      if (
        values?.bid_amount === "" ||
        values?.bid_amount === null ||
        values?.bid_amount === undefined
      ) {
        errorsObject.bid_amount = "Please enter an amount";
        errorExist = true;
      } else if (values?.bid_amount < 3 || values?.bid_amount > 1000) {
        errorsObject.bid_amount =
          "Please enter an amount between $3.00 and $999.00";
        errorExist = true;
      }
    }

    if (values?.budget_type === "hourly") {
      if (
        values?.weekly_limit === "" ||
        values?.weekly_limit === null ||
        values?.weekly_limit === undefined
      ) {
        errorsObject.weekly_limit = "Please select weekly limit";
        errorExist = true;
      }
    }

    if (
      values?.cover_letter === "" ||
      values?.cover_letter === null ||
      values?.cover_letter === undefined
    ) {
      errorsObject.cover_letter = "Please enter your description";
      errorExist = true;
    }

    if (values?.agree_terms == 0) {
      errorsObject.agree_terms = true;
      errorExist = true;
    }

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }

    const formData = new FormData();

    formData.append("freelancer_id", freelancer_id);
    formData.append("project_id", project_id);
    formData.append("title", values?.title);
    formData.append("budget_type", values?.budget_type);

    if (values?.budget_type === "hourly") {
      formData.append("weekly_limit", values?.weekly_limit);
      formData.append("amount", values?.bid_amount);
      formData.append("date", values?.date);
    }

    if (values?.milestone_type === "single") {
      formData.append("amount", values?.bid_amount);
      formData.append("date", values?.date);
    }

    if (values?.budget_type === "fixed") {
      formData.append("milestone_type", values?.milestone_type);

      if (values?.milestone_type === "multiple") {
        formData.append("milestone_data", "");
        formData.append("project_duration", values?.project_duration);
      }
    }

    formData.append("cover_letter", values?.cover_letter);
    formData.append("image", imageFile);

    dispatch(hireFreelancer(formData, navigate));
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
            </div>
          </div>
        </div>

        <div className="b-bottom-gr pb-4">
          <div className="contrc_ter_head">Job Details</div>
          <div>
            <label>Contract Title</label>
            <Col md={6}>
              <Form.Control
                type="text"
                name="title"
                value={values?.title}
                className="w-100 mt-2 py-2"
                style={{ fontSize: "14px" }}
                placeholder="Enter the contact title"
                onChange={(e) => onInputChange(e)}
              />
              <span className="signup-error">
                {errors.title && errors.title}
              </span>
            </Col>
          </div>
        </div>

        <div className="b-bottom-gr pb-4">
          <div className="contrc_ter_head">Contract Terms</div>
          <div className="pay_pro_par">
            You’re protected by <Link to="#0">Unify Payment Protection.</Link>{" "}
            Only pay for the work you authorize.
          </div>
          <Row className="py-3">
            {values?.budget_type === "hourly" ? (
              <>
                <Col md={3}>
                  <div className="pay_op_heading">
                    Payment Option
                    <span className="no_verify_icon">
                      <i className="bi bi-question-circle-fill"></i>
                    </span>
                  </div>
                  <div className="hourly_headin d-flex align-items-center">
                    <Form.Select
                      name="budget_type"
                      value={values?.budget_type}
                      onChange={(e) => onInputChange(e)}
                    >
                      <option value="hourly">Hourly</option>
                      <option value="fixed">Fixed</option>
                    </Form.Select>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="pay_op_heading">
                    Pay by the hour
                    <span className="no_verify_icon">
                      <i className="bi bi-question-circle-fill"></i>
                    </span>
                  </div>
                  <div className="hourly_headin d-flex align-items-center">
                    <Form.Control
                      type="number"
                      name="bid_amount"
                      className="text-right"
                      value={values?.bid_amount}
                      onWheel={(e) => e.target.blur()}
                      onChange={(e) => onInputChange(e)}
                    />
                    &nbsp;
                    <span>/hr</span>
                  </div>
                  <span className="signup-error">
                    {errors.bid_amount && errors.bid_amount}
                  </span>
                  <div className="max_prof_rt">
                    Max Mario's profile rate is $30.00 /hr
                  </div>
                </Col>
                <Col md={5}>
                  <div className="pay_op_heading">
                    Weekly Limit
                    <span className="no_verify_icon">
                      <i className="bi bi-question-circle-fill"></i>
                    </span>
                  </div>
                  <div className="max_prof_rt">
                    Setting a weekly limit is a great way to help ensure you
                    stay on budget.
                  </div>
                  <div className="hourly_headin d-flex align-items-center">
                    <Form.Select
                      name="weekly_limit"
                      value={values?.weekly_limit}
                      onChange={(e) => onInputChange(e)}
                    >
                      <option value="No limit">No limit</option>
                      <option value="5 k">5 hrs/week</option>
                      <option value="10">10 hrs/week</option>
                      <option value="15">15 hrs/week</option>
                      <option value="20">20 hrs/week</option>
                      <option value="25">25 hrs/week</option>
                      <option value="30">30 hrs/week</option>
                      <option value="35">35 hrs/week</option>
                      <option value="40">40 hrs/week</option>
                    </Form.Select>
                    &nbsp;
                    <span>hrs/week</span>
                  </div>
                  <span className="signup-error">
                    {errors.weekly_limit && errors.weekly_limit}
                  </span>
                  <div className="max_prof_rt">$1,200.00 max/week</div>
                </Col>

                <div className="d-flex align-items-center flex-wrap pt-3 pb-4 b-bottom-gr">
                  <div className="start_d_headin">
                    Start Date <span>(Optional)</span>
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
                  <div className="inpu_date d-flex psr-relative">
                    <input
                      type="date"
                      className="custom_date_picker"
                      name="date"
                      value={values?.date}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                <div className="b_bot_inp d-flex justify-content-between align-items-center">
                  <div className="sm_label_inp slide_n_tex">
                    Add automatic weekly payments for the freelancer (Optional)
                  </div>
                  <div className="pr-10">
                    <i className="bi bi-chevron-down"></i>
                  </div>
                </div>
                <div className="b_bot_inp d-flex justify-content-between align-items-center">
                  <div className="sm_label_inp slide_n_tex">
                    How do hourly contracts work?
                  </div>
                  <div className="pr-10">
                    <i className="bi bi-chevron-down"></i>
                  </div>
                </div>
              </>
            ) : values?.budget_type === "fixed" ? (
              <>
                <Col md={5}>
                  <div className="pay_op_heading">
                    Payment Option
                    <span className="no_verify_icon">
                      <i className="bi bi-question-circle-fill"></i>
                    </span>
                  </div>
                  <div className="hourly_headin d-flex align-items-center">
                    <Form.Select
                      name="budget_type"
                      value={values?.budget_type}
                      onChange={(e) => onInputChange(e)}
                    >
                      <option value="hourly">Hourly</option>
                      <option value="fixed">Fixed</option>
                    </Form.Select>
                  </div>
                </Col>
                <Col md={5}>
                  <div className="pay_op_heading">
                    Pay a fixed price for your project
                    <span className="no_verify_icon">
                      <i className="bi bi-question-circle-fill"></i>
                    </span>
                  </div>
                  <div
                    className="hourly_headin d-flex align-items-center"
                    style={{ position: "relative" }}
                  >
                    <Form.Control
                      type="number"
                      name="bid_amount"
                      className="text-right"
                      value={values?.bid_amount}
                      onChange={(e) => onInputChange(e)}
                    />
                    <div className="doller-icon">$</div>
                    &nbsp;
                    <span className="signup-error">
                      {errors.bid_amount && errors.bid_amount}
                    </span>
                  </div>
                </Col>
              </>
            ) : null}
          </Row>

          {values?.budget_type === "fixed" && (
            <div className="fixed_bid">
              <Row>
                <Col lg={12}>
                  <div className="how_to_be_paid">
                    <div className="heading">Deposit funds into Escrow</div>
                    <p style={{ fontSize: "14px" }}>
                      Escrow is a neutral holding place that protects your
                      deposit until work is approved.
                    </p>
                    <div className="methods">
                      <div className="method">
                        <div>
                          <input
                            type="radio"
                            id="single"
                            name="milestone_type"
                            value="single"
                            checked={
                              values?.milestone_type === "single" ? true : false
                            }
                            onChange={(e) => onInputChange(e)}
                          />
                        </div>
                        <div>
                          <label htmlFor="single" className="heading">
                            Deposit ${values?.bid_amount || "0.00"} for the
                            whole project
                          </label>
                        </div>
                      </div>
                      <div className="method">
                        <div>
                          <input
                            type="radio"
                            id="multiple"
                            name="milestone_type"
                            value="multiple"
                            checked={
                              values?.milestone_type === "multiple"
                                ? true
                                : false
                            }
                            onChange={(e) => onInputChange(e)}
                          />
                        </div>
                        <div>
                          <label htmlFor="multiple" className="heading">
                            Deposit a lesser amount to cover the first milestone
                          </label>
                        </div>
                      </div>
                    </div>

                    {values?.milestone_type === "single" ? (
                      <div className="py-3">
                        <div className="start_d_headin">
                          Due Date <span>(Optional)</span>
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
                        <div className="inpu_date d-flex psr-relative">
                          <input
                            type="date"
                            name="date"
                            className="custom_date_picker"
                            value={values?.date}
                            onChange={(e) => onInputChange(e)}
                          />
                        </div>
                      </div>
                    ) : values?.milestone_type === "multiple" ? (
                      <>
                        <div className="project_duration">
                          <label htmlFor="project_duration">
                            How long will this project take? (optional)
                          </label>
                          <Row>
                            <Col md={4}>
                              <select
                                name="project_duration"
                                id="project_duration"
                                value={values?.project_duration}
                                onChange={(e) => onInputChange(e)}
                              >
                                <option disabled selected hidden value={null}>
                                  Select a duration
                                </option>
                                <option value="More then 6 months">
                                  More then 6 months
                                </option>
                                <option value="3 to 6 months">
                                  3 to 6 months
                                </option>
                                <option value="1 to 3 months">
                                  1 to 3 months
                                </option>
                                <option value="Less then 1 months">
                                  Less then 1 months
                                </option>
                              </select>
                            </Col>
                          </Row>
                        </div>
                        <Col lg={12}>
                          <div className="milsetone">
                            <div className="heading">Project Milestones</div>
                            <p style={{ fontSize: "14px" }}>
                              Add project milestones and pay in installments as
                              each milestone is completed to your satisfaction.
                              Due dates will be set in Coordinated Universal
                              Time (UTC).
                            </p>
                            {milestoneData?.map((data, key) => (
                              <div className="milestone_count" key={key}>
                                <div className="headings">
                                  <div className="srno"></div>
                                  <div className="desc">Description </div>
                                  <div className="date">Due date</div>
                                  <div className="amount">Amount</div>
                                  <div className="remove"></div>
                                </div>
                                <div className="input_list">
                                  <div className="srno">{key + 1}</div>
                                  <div className="desc">
                                    <input
                                      type="text"
                                      name="description"
                                      placeholder="Description"
                                      value={data.description}
                                    />
                                  </div>
                                  <div className="date">
                                    <input
                                      type="date"
                                      name="due_date"
                                      placeholder="Date"
                                      value={data.due_date}
                                    />
                                  </div>
                                  <div className="amount">
                                    <input
                                      type="number"
                                      name="amount"
                                      min="1"
                                      placeholder="0.00"
                                      value={data.amount}
                                    />
                                    <span className="dollar_icon">$</span>
                                  </div>
                                  <i className="fa fa-remove"></i>
                                </div>
                              </div>
                            ))}
                            <div className="add_milestone">
                              <span>+ Add milestone</span>
                            </div>
                          </div>
                        </Col>
                      </>
                    ) : null}
                  </div>
                </Col>
              </Row>
            </div>
          )}
        </div>
      </div>
      <div className="main_box_descr main_hirefreelancer_bx">
        <div className="contrc_ter_head mb-2">Work Description</div>
        <div className="pay_pro_par p-0 m-0">Add a description of the work</div>
        <Form.Group className="description_text_h">
          <Form.Control
            as="textarea"
            rows={3}
            name="cover_letter"
            value={values?.cover_letter}
            onChange={(e) => onInputChange(e)}
          ></Form.Control>

          <span className="signup-error">
            {errors.cover_letter && errors.cover_letter}
          </span>
        </Form.Group>
        <div className="ts_btn attach_f_btn mt-0">
          <Form.Control type="file" onChange={(e) => onProfileChange(e)} />
          <button>
            <i className="bi bi-paperclip"></i>
            Attach File
          </button>
          <div className="sm_label_inp">Max file size: 100 MB</div>
        </div>

        {objectUrl ? (
          <div className="document_card">
            <i class="bi bi-file-earmark-text font-size-20px"></i>&nbsp;
            <span className="heading">File Name : </span>
            <span className="name">{objectUrl}</span>
            <span
              onClick={() => {
                setObjectUrl();
                setImageFile();
              }}
              className="close_icon"
            >
              X
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="allow_freel_che flex-wrap black_a_inp">
        <Form.Check
          type="checkbox"
          id="SecondCheckOnSignUP"
          name="agree_terms"
          onChange={(e) => onInputChange(e)}
        />
        <Form.Label htmlFor="SecondCheckOnSignUP">
          Yes, I understand and agree to the{" "}
          <Link to="#0"> Unify Terms of Service </Link>, including the User{" "}
          <Link to="#0"> Agreement </Link> and{" "}
          <Link to="#0"> Privacy Policy </Link>.
        </Form.Label>
      </div>
      <span className="signup-error">
        {errors.agree_terms && <>Please Agree Terms and Conditions</>}
      </span>
      <div className="d-flex justify-content-between mt-4 mb-5">
        <div className="btn_job_back">
          <Link to="/view-job">
            <button className="fo_btn_c next_b_btn_c mb-2">Cancel</button>
          </Link>
          <button
            onClick={handleHireFreelancer}
            className="fo_btn_c next_b_btn_c mb-2 post_job_btn blue_ac_btn"
          >
            Continue
          </button>
        </div>
      </div>
    </Container>
  );
};
export default Screen;

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { googleSignInInitiate } from "../../../redux/actions/authActions";
import { singleJobPostDetails } from "../../../redux/actions/jobActions";
import { INSTANT_LOGIN_EMAIL, POST_JOB_LIKE_THIS } from "../../../redux/types";
import FreeProfile from "../../Popup/FreeProfile";
import LoadingSpinner from "../../../components/LoadingSpinner";

const JobDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleJobDetails = useSelector((state) => state?.job?.singleJobDetails);
  const navigate = useNavigate();
  const [email, setEmail] = useState({});
  const [values, setValues] = useState("");
  const [errors, setErrors] = useState({});
  const [popup, setPopup] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    dispatch(singleJobPostDetails({ job_id: id }, setLoading));
  }, []);

  const onHandleChange = (e) => {
    setEmail({ [e.target.name]: e.target.value });
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleGoogleSignIn = () => {
    dispatch(googleSignInInitiate("freelancer", navigate));
  };

  const InstentLogin = () => {
    let errorExist = false;
    let errorsObject = {};
    if (
      values?.email === "" ||
      values?.email === null ||
      values?.email === undefined
    ) {
      errorsObject.email = "Please enter email ";
      errorExist = true;
    } else if (!values?.email.trim()) {
      errorsObject.email = "Email is required";
      errorExist = true;
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values?.email)
    ) {
      errorsObject.email = "Please type a valid email address";
      errorExist = true;
    }
    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }
    dispatch({ type: INSTANT_LOGIN_EMAIL, payload: email });
    navigate("/signup");
  };

  setTimeout(() => {
    setPopup(<FreeProfile />);
  }, 30000);

  return (
    <>
      <Container className="mt-5">
        <Row className="flex_reverse_768">
          <Col lg={8} md={12}>
            <div className="s_trans_bos s_nav_body box_web_req">
              <div className="fl_end_b abso_cen"></div>
              <div className="pd_head_on pd_head_h1">
                <h1>{singleJobDetails?.name}</h1>
              </div>
              <div className="over_s_wor_area flex-wrap">
                <div className="fle_wor_box">
                  <div className="wor_svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 33.496 30.429"
                    >
                      <g id="script" transform="translate(0 -21.547)">
                        <g
                          id="Group_2383"
                          data-name="Group 2383"
                          transform="translate(0 21.547)"
                        >
                          <g
                            id="Group_2382"
                            data-name="Group 2382"
                            transform="translate(0 0)"
                          >
                            <path
                              id="Path_4463"
                              data-name="Path 4463"
                              d="M30.365,39.779V26.1a4.553,4.553,0,0,0-4.554-4.554H4.553A4.555,4.555,0,0,0,0,26.1v7.6H3.036V26.1a1.536,1.536,0,0,1,1.589-1.515A1.52,1.52,0,0,1,6.142,26.1V45.853H30.365V42.815H27.329v0H12.145v3.034H9.109V42.815h.07V26.1a4.542,4.542,0,0,0-.26-1.518H25.811A1.516,1.516,0,0,1,27.329,26.1V39.779Z"
                              transform="translate(0 -21.547)"
                              fill="#ff88fe"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_2385"
                          data-name="Group 2385"
                          transform="translate(12.145 27.634)"
                        >
                          <g
                            id="Group_2384"
                            data-name="Group 2384"
                            transform="translate(0 0)"
                          >
                            <rect
                              id="Rectangle_601"
                              data-name="Rectangle 601"
                              width="12.145"
                              height="3.036"
                              fill="#ff88fe"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_2387"
                          data-name="Group 2387"
                          transform="translate(12.145 33.706)"
                        >
                          <g id="Group_2386" data-name="Group 2386">
                            <rect
                              id="Rectangle_602"
                              data-name="Rectangle 602"
                              width="6.072"
                              height="3.036"
                              fill="#ff88fe"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_2389"
                          data-name="Group 2389"
                          transform="translate(21.253 33.706)"
                        >
                          <g id="Group_2388" data-name="Group 2388">
                            <rect
                              id="Rectangle_603"
                              data-name="Rectangle 603"
                              width="3.036"
                              height="3.036"
                              fill="#ff88fe"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_2391"
                          data-name="Group 2391"
                          transform="translate(6.101 42.799)"
                        >
                          <g id="Group_2390" data-name="Group 2390">
                            <path
                              id="Path_4464"
                              data-name="Path 4464"
                              d="M91.781,320.242v4.581a1.489,1.489,0,0,1-1.492,1.491,1.542,1.542,0,0,1-1.513-1.54V320.21H85.74v4.565a4.579,4.579,0,0,0,4.013,4.542v.055h18.824a4.554,4.554,0,0,0,4.558-4.551v-4.626ZM110.1,324.82a1.517,1.517,0,0,1-1.522,1.515H94.56a4.53,4.53,0,0,0,.258-1.512v-1.551l15.281-.035v1.583Z"
                              transform="translate(-85.74 -320.194)"
                              fill="#ff88fe"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="wor_name wn_freelancer">
                    {singleJobDetails?.categories}
                  </div>
                </div>
                <div className="fle_wor_box">
                  <div className="wor_svg">
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
                  <div className="wor_name wn_freelancer">
                    {singleJobDetails?.created_at}
                  </div>
                </div>
              </div>
              <div className="proj_det_li">
                <div className="flex_itm flex-wrap">
                  {/* <div className="f_b_obx">
                    <div className="ex_name_fb">Freelancer Type</div>
                    <div className="ex_val_f pd_evf_n">Individual</div>
                  </div> */}
                  <div className="f_b_obx">
                    <div className="ex_name_fb">Project Duration</div>
                    <div className="ex_val_f pd_evf_n">
                      {singleJobDetails?.project_duration}
                    </div>
                  </div>
                  <div className="f_b_obx">
                    <div className="ex_name_fb">Exprience Level</div>
                    <div className="ex_val_f pd_evf_n">
                      {singleJobDetails?.experience_level}{" "}
                    </div>
                  </div>
                  <div className="f_b_obx">
                    <div className="ex_name_fb">English Level</div>
                    <div className="ex_val_f pd_evf_n">
                      {singleJobDetails?.english_level}
                    </div>
                  </div>
                  {/* <div className="f_b_obx">
                    <div className="ex_name_fb">Languages</div>
                    <div className="ex_val_f pd_evf_n">Arabic English </div>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="s_nav_body mt-4 s_trans_bos mb-4">
              <div className="bl_head pd_n_bh">
                <h3>Description</h3>
              </div>
              <div className="bl_apra pd_n_blpara">
                <p>{singleJobDetails?.description}</p>
              </div>
              <div className="btn_foot_sec d-block">
                <br />
                <div className="bl_head">
                  <h3>Skills Required</h3>
                </div>
                <br />
                <div className="dlex_sk_block m-0 pd_n_bss flex-wrap">
                  {singleJobDetails?.job_skills?.map((skill, index) => (
                    <div key={index} className="b_skil">
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={12}>
            <div className="border_bx_sec no_pad right_job_detail_home">
              <div className="heading">
                <h2>Create a free profile to find work like this</h2>
              </div>
              <div className="sign_form_btn_subm sign_in_social_btn mr_sign_in_n">
                <Button
                  variant=""
                  className="google_btn"
                  onClick={handleGoogleSignIn}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-google"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                  </svg>
                  Continue with Google
                </Button>
              </div>
              <div className="job_details_or">or</div>
              <div className="with_email">
                <div className="email_inp">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#808080"
                    className="forgot_pass_email_icon"
                    viewBox="0 0 16 16"
                    style={{ top: 15 }}
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={values?.email}
                    required
                    onChange={(e) => onHandleChange(e)}
                  />
                  <span className="jobSignInError">
                    {errors.email && errors.email}
                  </span>
                </div>
              </div>
              <div className="sign_up_btn">
                <button onClick={InstentLogin}>Sign Up </button>
              </div>
              <hr />

              <div className="job_post_heading">Hiring for similar work?</div>
              <div className="post_job_btn_home">
                <div
                  onClick={() => {
                    dispatch({ type: POST_JOB_LIKE_THIS, payload: "client" });
                    navigate("/signup");
                  }}
                >
                  <button>Post a Job Like This</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {loading ? <LoadingSpinner /> : null}
      {popup}
    </>
  );
};

export default JobDetails;

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { googleSignInInitiate } from "../../../redux/actions/authActions";
import { singleJobPostDetails } from "../../../redux/actions/jobActions";
import { INSTANT_LOGIN_EMAIL } from "../../../redux/types";

const JobDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleJobDetails = useSelector((state) => state?.job?.singleJobDetails);
  const navigate = useNavigate();
  const [email, setEmail] = useState({});

  useEffect(() => {
    dispatch(singleJobPostDetails({ job_id: id }));
  }, []);

  const handleGoogleSignIn = () => {
    dispatch(googleSignInInitiate("freelancer", navigate));
  };

  return (
    <>
      {" "}
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
                      fill="currentColor"
                      className="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </div>
                  <div className="wor_name wn_freelancer">
                    Digital Marketing
                  </div>
                </div>
                <div className="fle_wor_box">
                  <div className="wor_svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </div>
                  <div className="wor_name wn_freelancer">Remote</div>
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
                  <div className="wor_name wn_freelancer">January 15, 2021</div>
                </div>
              </div>
              <div className="proj_det_li">
                <div className="flex_itm flex-wrap">
                  <div className="f_b_obx">
                    <div className="ex_name_fb">Freelancer Type</div>
                    <div className="ex_val_f pd_evf_n">Individual</div>
                  </div>
                  <div className="f_b_obx">
                    <div className="ex_name_fb">Project Duration</div>
                    <div className="ex_val_f pd_evf_n">
                      {singleJobDetails?.project_duration}
                    </div>
                  </div>
                  <div className="f_b_obx">
                    <div className="ex_name_fb">Level</div>
                    <div className="ex_val_f pd_evf_n">
                      {singleJobDetails?.experience_level}{" "}
                    </div>
                  </div>
                  <div className="f_b_obx">
                    <div className="ex_name_fb">English Level</div>
                    <div className="ex_val_f pd_evf_n">Native</div>
                  </div>
                  <div className="f_b_obx">
                    <div className="ex_name_fb">Languages</div>
                    <div className="ex_val_f pd_evf_n">Arabic English </div>
                  </div>
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
                  {singleJobDetails?.skills?.map((skill, index) => (
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
                    required
                    onChange={(e) =>
                      setEmail({ [e.target.name]: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="sign_up_btn">
                <Button
                  disabled={!email?.email}
                  onClick={() => {
                    dispatch({ type: INSTANT_LOGIN_EMAIL, payload: email });
                    navigate("/signup");
                  }}
                >
                  Sign Up
                </Button>
              </div>
              <hr />

              <div className="job_post_heading">Hiring for similar work?</div>
              <div className="post_job_btn_home">
                <Button>Post a Job Like This</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobDetails;

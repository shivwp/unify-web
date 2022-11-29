import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import star from "../../../../icons/star.svg";
import "../../../../styles/freelancer.css";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { singleJobPostDetails } from "../../../../redux/actions/jobActions";
import { SEND_PROPOSAL_DATA } from "../../../../redux/types";

function ListProposals({ project_type, data }) {
  return (
    <>
      {data?.map((item, index) => (
        <div className="propo_box" key={index}>
          <Row className="bo_bot_pad">
            <Col lg={9}>
              <div>
                <div className="flex_pro_bo">
                  <div className="projec_cli_prof">
                    <img src={item.profile_image} alt="" />
                  </div>
                  <div className="pro_cli_det">
                    <div>
                      <h3>{item.freelancer_name}</h3>
                      <div className="pro_cli_sm_te flex-wrap">
                        <span className="space_wa">
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
                        </span>
                        {item.time}
                        {/* <div className="rev_aox">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                          </span>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                          </span>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill fill-none"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                          </span>
                          <p>Reviews</p>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="price_ar_jjob pt-0">
                <h1>${item.bid_amount}</h1>
                <p>({project_type})</p>
              </div>
            </Col>
          </Row>
          <div className="pd_par_for">
            <p>{item.proposal_description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

const Projectdetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState();
  const [disableSubmitBtn, setDisableSubmitBtn] = useState(false);
  const singleJobDetails = useSelector((state) => state?.job?.singleJobDetails);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(singleJobPostDetails({ job_id: id }));
  }, []);

  const handleOnChange = (e) => {
    let errorsObject = {};
    if (e.target.name == "bid_amount") {
      if (Number(e.target.value) > singleJobDetails?.price) {
        errorsObject.bid_amount = `Cannot be more than $${singleJobDetails?.price}`;
      } else {
        errorsObject.bid_amount = false;
      }
      setErrors(errorsObject);
      setValues({ ...values, [e.target.name]: Number(e.target.value) });
    } else if (e.target.name == "agree_terms") {
      setValues({ ...values, [e.target.name]: e.target.checked });
      setDisableSubmitBtn(e.target.checked);
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  const sendProposal = () => {
    dispatch({ type: SEND_PROPOSAL_DATA, payload: values });
    navigate(`/freelancer/send-proposal/${id}`);
  };

  return (
    <>
      <Container className="mt-5">
        <Row className="flex_reverse_768">
          <Col lg={9} md={12}>
            <div className="s_trans_bos s_nav_body box_web_req">
              <div className="fl_end_b abso_cen">
                <div className="fb_btns_s_pro pd_n_fbspro">
                  <Button
                    variant=""
                    className="bg-trans_s_pro bg_li_grey"
                    style={{ margin: "0 3px", padding: "12px 20px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-heart-fill heart_btn"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
                  </Button>

                  <Button
                    variant=""
                    className="pd_n_sendp"
                    onClick={() => {
                      document
                        .getElementById("send_proposal_form")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Send Proposal
                  </Button>
                </div>
              </div>
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

            <div className="s_nav_body mt-4 s_trans_bos">
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
                  {singleJobDetails?.skills?.map((skill) => (
                    <div className="b_skil">{skill.name}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="proj_proposal_box">
              <div className="phead_h3">
                <h3>
                  Project Proposals ({singleJobDetails?.proposal_list?.length})
                </h3>
              </div>
              <div className="proposal_boxes">
                {
                  <ListProposals
                    project_type={singleJobDetails?.budget_type}
                    data={singleJobDetails?.proposal_list}
                  />
                }
              </div>
              <div className="phead_h3" id="send_proposal_form">
                <h3>Send Your Proposal</h3>
              </div>
              <div className="flex_inp_b flex-wrap">
                <div className="inp_box">
                  <div className="inp_label">Your hourly price</div>
                  <div className="d-flex">
                    <div className="inp_input">
                      <Form.Control
                        name="bid_amount"
                        className="project_details_Num_inp"
                        type="number"
                        isInvalid={errors?.bid_amount}
                        feedback={errors?.bid_amount}
                        onChange={(e) => handleOnChange(e)}
                        onWheel={(e) => e.target.blur()}
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        style={{ position: "absolute" }}
                      >
                        {errors?.bid_amount}
                      </Form.Control.Feedback>
                    </div>
                    <div className="p_inp_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-collection"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="inp_box">
                  <div className="inp_label">Estimated Hours</div>
                  <div className="d-flex">
                    <div className="inp_input">
                      <Form.Control
                        type="text"
                        name="project_duration"
                        onChange={(e) => handleOnChange(e)}
                      />
                    </div>
                    <div className="p_inp_icon">
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
                  </div>
                </div>
              </div>
              <div className="flex_inp_b inp_w_100">
                <div className="inp_box">
                  <div className="inp_label">Cover Letter</div>
                  <div className="inp_input">
                    <Form.Control
                      as="textarea"
                      name="cover_letter"
                      onChange={(e) => handleOnChange(e)}
                    ></Form.Control>
                  </div>
                </div>
              </div>
              <div className="f_agre_fot mt-2 flex-wrap">
                <div className="agree_term_b align-items-center">
                  <Form.Check
                    type="checkbox"
                    name="agree_terms"
                    feedback="You must agree before submitting."
                    required
                    onChange={(e) => handleOnChange(e)}
                  />
                  <Form.Label>I agree to the Terms And Conditions</Form.Label>
                </div>
                <div>
                  <div className="fb_btns_s_pro">
                    {/* <Link
                      to="/freelancer/send-proposal"
                      style={disableSubmitBtn ? { pointerEvents: "none" } : {}}
                    > */}
                    <Button
                      type="submit"
                      variant=""
                      className="pd_n_sendp pad_n_pdd"
                      disabled={
                        !(
                          disableSubmitBtn &&
                          (errors?.bid_amount ? false : true)
                        )
                      }
                      onClick={() => sendProposal()}
                    >
                      Send Proposal
                    </Button>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={12}>
            <div className="border_bx_sec no_pad mb-5">
              <div className="heat_lef">
                <img src={star} alt="" />
              </div>
              <div className="hourly_amout_node asxee_pad justify-content-between flex-wrap">
                <div className="hourly_am">
                  <div className="hm_bud">Budget</div>
                  <h1>
                    {singleJobDetails?.budget_type === "fixed"
                      ? `$${singleJobDetails?.price}`
                      : singleJobDetails?.budget_type === "hourly"
                      ? `$${singleJobDetails?.min_price} - $${singleJobDetails?.price} /hr`
                      : null}
                  </h1>
                  <span>({singleJobDetails?.budget_type})</span>
                </div>
                <div className="wallet_icon pd_n_wii">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-wallet2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                  </svg>
                  <div className="d_left">871 Days left</div>
                </div>
              </div>
              <div className="coevr_photo_no">
                <img src="/assets/uk-renewable-power.jpg" alt="" />
              </div>
              <div className="fle_xent_p">
                <div className="mak_prof_img">
                  <img
                    src={singleJobDetails?.client_data?.profile_image}
                    alt=""
                  />
                </div>
              </div>
              <div className="comp_name_h">
                <h3>{`${singleJobDetails?.client_data?.first_name || ""} ${
                  singleJobDetails?.client_data?.last_name || ""
                }`}</h3>
              </div>
              <div className="comp_name_p">
                <p>{singleJobDetails?.client_data?.description}</p>
              </div>
              <div
                className="view-p_btn pd_n_vbbtn"
                style={{ marginBottom: 30 }}
              >
                <Button variant="">View profile</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
    </>
  );
};
export default Projectdetail;

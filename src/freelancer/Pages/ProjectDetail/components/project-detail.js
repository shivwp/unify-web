import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import star from "../../../../icons/star.svg";
import "../../../../styles/freelancer.css";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSaveJob,
  saveJobs,
  singleJobPostDetails,
} from "../../../../redux/actions/jobActions";
import { SEND_PROPOSAL_DATA } from "../../../../redux/types";
import moment from "moment";
import Alert from "react-bootstrap/Alert";

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

const ClientRating = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <>
          {" "}
          <span className="client_review">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.378"
              height="23.437"
              viewBox="0 0 24.378 23.437"
            >
              <path
                id="star"
                d="M22.275,8.583a1.185,1.185,0,0,0-1.021-.815l-6.447-.585L12.259,1.217a1.187,1.187,0,0,0-2.184,0L7.527,7.182l-6.448.585A1.188,1.188,0,0,0,.4,9.845l4.873,4.273L3.841,20.447A1.187,1.187,0,0,0,5.607,21.73l5.559-3.324,5.558,3.324a1.188,1.188,0,0,0,1.767-1.283l-1.437-6.329,4.873-4.273a1.188,1.188,0,0,0,.346-1.262Zm-11,9.759"
                transform="translate(1.023 0.504)"
                fill="#ff88fe"
                stroke="#ff88fe"
                strokeWidth="2"
              />
            </svg>
          </span>
        </>
      );
    } else {
      stars.push(
        <>
          <span className="client_review">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.378"
              height="24.378"
              viewBox="0 0 24.378 23.437"
            >
              <path
                id="star"
                d="M22.275,8.583a1.185,1.185,0,0,0-1.021-.815l-6.447-.585L12.259,1.217a1.187,1.187,0,0,0-2.184,0L7.527,7.182l-6.448.585A1.188,1.188,0,0,0,.4,9.845l4.873,4.273L3.841,20.447A1.187,1.187,0,0,0,5.607,21.73l5.559-3.324,5.558,3.324a1.188,1.188,0,0,0,1.767-1.283l-1.437-6.329,4.873-4.273a1.188,1.188,0,0,0,.346-1.262Zm-11,9.759"
                transform="translate(1.023 0.504)"
                fill="none"
                stroke="#ff88fe"
                strokeWidth="2"
              />
            </svg>
          </span>
        </>
      );
    }
  }
  return stars;
};

const Projectdetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const singleJobDetails = useSelector((state) => state?.job?.singleJobDetails);
  const unSaveJobsPost = useSelector((state) => state?.job?.unSaveJobsPost);
  const saveJobsPost = useSelector((state) => state?.job?.saveJobsPost);

  useEffect(() => {
    dispatch(singleJobPostDetails({ job_id: id }));
  }, [unSaveJobsPost, saveJobsPost]);
  const SaveJob = (id) => {
    dispatch(saveJobs({ job_id: id }));
  };
  const UnSaveJob = (id) => {
    dispatch(removeSaveJob({ job_id: id }));
  };

  console.log(singleJobDetails);

  return (
    <>
      <Container className="mt-5 mb-5">
        {singleJobDetails?.is_proposal_send ? (
          <Alert variant="success" className="mt-4">
            <Alert.Heading>
              Your propsal is already sent. Please wait for client's response
            </Alert.Heading>
            <p>Thank you for your time</p>
          </Alert>
        ) : (
          ""
        )}
        {singleJobDetails?.is_invited && !singleJobDetails?.is_proposal_send ? (
          <Alert variant="success" className="mt-4">
            <Alert.Heading>
              You have been invited for this job. Please check your invitations
            </Alert.Heading>
            <p>Thank you for your time</p>
          </Alert>
        ) : (
          ""
        )}
        <Row className="flex_reverse_768 mt-5">
          <Col lg={8} md={12}>
            <div className="s_trans_bos s_nav_body box_web_req">
              <div className="fl_end_b abso_cen">
                <div className="fb_btns_s_pro pd_n_fbspro">
                  <Button
                    variant=""
                    className="bg-trans_s_pro bg_li_grey"
                    style={{ margin: "0 3px", padding: "8px 15px" }}
                    onClick={
                      singleJobDetails?.is_saved
                        ? () => UnSaveJob(singleJobDetails?.id)
                        : () => SaveJob(singleJobDetails?.id)
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className={`bi bi-heart-fill heart_btn ${
                        singleJobDetails?.is_saved ? "proposal_saved" : ""
                      }`}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
                  </Button>

                  {singleJobDetails?.is_invited &&
                  !singleJobDetails?.is_proposal_send ? (
                    <Button
                      variant=""
                      className="pd_n_sendp send_proposal_btn_job_detail"
                      onClick={() => {
                        navigate(
                          `/freelancer/single-invitation/${singleJobDetails?.invite_id}`
                        );
                      }}
                    >
                      See Invitation
                    </Button>
                  ) : (
                    <Button
                      variant=""
                      className="pd_n_sendp send_proposal_btn_job_detail"
                      disabled={
                        singleJobDetails
                          ? singleJobDetails?.is_proposal_send
                          : true
                      }
                      onClick={() => {
                        navigate(`/freelancer/send-proposal/${id}`);
                      }}
                    >
                      Send Proposal
                    </Button>
                  )}
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
                {/* <div className="fle_wor_box">
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
                </div> */}
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

            <div className="s_nav_body mt-4 s_trans_bos">
              <div className="bl_head pd_n_bh">
                <h3>Description</h3>
              </div>
              <div className="bl_apra pd_n_blpara">
                <p style={{ wordBreak: "break-word" }}>
                  {singleJobDetails?.description}
                </p>
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

            <div className="proj_proposal_box">
              <div className="phead_h3">
                <h3>
                  Project Proposals ({singleJobDetails?.proposal_list?.length})
                </h3>
              </div>
              <div>
                {
                  <ListProposals
                    project_type={singleJobDetails?.budget_type}
                    data={singleJobDetails?.proposal_list}
                  />
                }
              </div>
            </div>
          </Col>
          <Col lg={4} md={12}>
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
                    width="114.91"
                    height="115"
                    viewBox="0 0 114.91 115"
                  >
                    <g id="wallet" transform="translate(-0.152)">
                      <g
                        id="Group_2397"
                        data-name="Group 2397"
                        transform="translate(0.152)"
                      >
                        <g id="Group_2396" data-name="Group 2396">
                          <path
                            id="Path_4467"
                            data-name="Path 4467"
                            d="M19.319,25.561a6.393,6.393,0,1,1,.019-12.787h82.844V0H19.339A19.155,19.155,0,0,0,.152,19.167c0,.305.007.609,0,.91V95.64A19.182,19.182,0,0,0,19.3,114.806L95.878,115a19.109,19.109,0,0,0,19.184-19.106V25.561Zm82.968,70.333a6.336,6.336,0,0,1-6.378,6.332l-76.575-.194a6.408,6.408,0,0,1-6.41-6.392v-58.4a19.114,19.114,0,0,0,6.394,1.094h82.968Z"
                            transform="translate(-0.152)"
                            fill="#eee"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_2399"
                        data-name="Group 2399"
                        transform="translate(70.249 51.269)"
                      >
                        <g id="Group_2398" data-name="Group 2398">
                          <path
                            id="Path_4468"
                            data-name="Path 4468"
                            d="M253.466,184.021h19.815V171.247H253.466a19.176,19.176,0,1,0,0,38.353h19.815V196.826H253.466a6.4,6.4,0,1,1,0-12.8Z"
                            transform="translate(-234.285 -171.247)"
                            fill="#eee"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>

                  {/* <div className="d_left">871 Days left</div> */}
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
              <div className="about_the_client job_details_client">
                <div className="heading">About the client</div>
                <div className="is_varified">
                  {singleJobDetails?.client_data?.payment_verified ? (
                    <>
                      {" "}
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17.079"
                          height="17.869"
                          viewBox="0 0 17.079 17.869"
                        >
                          <g
                            id="_21._Verified"
                            data-name="21. Verified"
                            transform="translate(-0.54 -0.02)"
                          >
                            <path
                              id="Path_4727"
                              data-name="Path 4727"
                              d="M16.911,10.258a2.235,2.235,0,0,1,0-2.623l.566-.782a.745.745,0,0,0,.1-.671.759.759,0,0,0-.477-.477l-.917-.3a2.226,2.226,0,0,1-1.542-2.124V2.315a.745.745,0,0,0-.976-.708l-.924.3a2.235,2.235,0,0,1-2.5-.812L9.683.311a.772.772,0,0,0-1.207,0l-.566.782a2.235,2.235,0,0,1-2.5.812l-.924-.3a.745.745,0,0,0-.976.708v.969A2.226,2.226,0,0,1,1.971,5.407l-.917.3a.759.759,0,0,0-.477.477.745.745,0,0,0,.1.671l.566.782a2.235,2.235,0,0,1,0,2.623l-.566.782a.745.745,0,0,0-.1.671.759.759,0,0,0,.477.477l.917.3A2.226,2.226,0,0,1,3.513,14.61v.969a.745.745,0,0,0,.976.708l.917-.3a2.231,2.231,0,0,1,2.5.812l.566.782a.749.749,0,0,0,1.207,0l.566-.782a2.235,2.235,0,0,1,2.5-.812l.917.3a.745.745,0,0,0,.976-.708V14.61a2.226,2.226,0,0,1,1.542-2.124l.917-.3a.759.759,0,0,0,.477-.477.745.745,0,0,0-.1-.671ZM12.589,7.983,8.863,11.709a.745.745,0,0,1-1.054,0L5.574,9.474A.745.745,0,1,1,6.628,8.42l1.706,1.709,3.2-3.2a.745.745,0,1,1,1.054,1.054Z"
                              fill="#6d2ef1"
                            />
                          </g>
                        </svg>
                      </span>
                      <span className="msg">Payment method verified</span>
                    </>
                  ) : (
                    <>
                      {" "}
                      <span style={{ opacity: 0.3 }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17.079"
                          height="17.869"
                          viewBox="0 0 17.079 17.869"
                        >
                          <g
                            id="_21._Verified"
                            data-name="21. Verified"
                            transform="translate(-0.54 -0.02)"
                          >
                            <path
                              id="Path_4727"
                              data-name="Path 4727"
                              d="M16.911,10.258a2.235,2.235,0,0,1,0-2.623l.566-.782a.745.745,0,0,0,.1-.671.759.759,0,0,0-.477-.477l-.917-.3a2.226,2.226,0,0,1-1.542-2.124V2.315a.745.745,0,0,0-.976-.708l-.924.3a2.235,2.235,0,0,1-2.5-.812L9.683.311a.772.772,0,0,0-1.207,0l-.566.782a2.235,2.235,0,0,1-2.5.812l-.924-.3a.745.745,0,0,0-.976.708v.969A2.226,2.226,0,0,1,1.971,5.407l-.917.3a.759.759,0,0,0-.477.477.745.745,0,0,0,.1.671l.566.782a2.235,2.235,0,0,1,0,2.623l-.566.782a.745.745,0,0,0-.1.671.759.759,0,0,0,.477.477l.917.3A2.226,2.226,0,0,1,3.513,14.61v.969a.745.745,0,0,0,.976.708l.917-.3a2.231,2.231,0,0,1,2.5.812l.566.782a.749.749,0,0,0,1.207,0l.566-.782a2.235,2.235,0,0,1,2.5-.812l.917.3a.745.745,0,0,0,.976-.708V14.61a2.226,2.226,0,0,1,1.542-2.124l.917-.3a.759.759,0,0,0,.477-.477.745.745,0,0,0-.1-.671ZM12.589,7.983,8.863,11.709a.745.745,0,0,1-1.054,0L5.574,9.474A.745.745,0,1,1,6.628,8.42l1.706,1.709,3.2-3.2a.745.745,0,1,1,1.054,1.054Z"
                              fill="#6d2ef1"
                            />
                          </g>
                        </svg>
                      </span>
                      <span className="msg">Payment unverified </span>
                    </>
                  )}
                </div>
                <div className="reviews">
                  {ClientRating(singleJobDetails?.client_data?.rating).map(
                    (item, index) => (
                      <span key={index}>{item}</span>
                    )
                  )}
                </div>
                <div className="about">
                  <div className="about_heading">
                    {singleJobDetails?.client_data?.country}
                  </div>
                  <div className="about_desc">
                    {singleJobDetails?.client_data?.city}{" "}
                    {singleJobDetails?.client_data?.local_time}
                  </div>
                </div>
                <div className="about">
                  <div className="about_heading">
                    {singleJobDetails?.client_data?.job_posted} jobs posted
                  </div>
                  <div className="about_desc">
                    {singleJobDetails?.hire_rate}% hire rate,&nbsp;
                    {singleJobDetails?.open_jobs} open job
                  </div>
                </div>
                <div className="about">
                  <div className="about_heading">
                    ${singleJobDetails?.client_data?.money_spent}+ total spent
                  </div>
                  <div className="about_desc">
                    {singleJobDetails?.total_hire} hires,
                    {singleJobDetails?.total_Active} active
                  </div>
                </div>
                <div className="about">
                  <div className="about_heading">
                    {singleJobDetails?.project_duration}
                  </div>
                  <div className="about_desc">Project Length</div>
                </div>
                <div className="about2">
                  {singleJobDetails?.client_data?.employee_no <= 10
                    ? " Company size - 1-10 people"
                    : singleJobDetails?.client_data?.employee_no <= 100
                    ? "Company size - 10-100 people"
                    : singleJobDetails?.client_data?.employee_no <= 1000
                    ? " Company size - 100-1000 people"
                    : " Company size - 1000+ people"}
                </div>
                <div className="about2">
                  Member since {singleJobDetails?.client_data?.member_since}
                </div>
              </div>
            </div>
            <div className="border_bx_sec no_pad mb-5">
              <div className="client_recent_history">
                <div className="heading">
                  Client's recent history (
                  {singleJobDetails?.client_recent_history?.length || 0})
                </div>
                {singleJobDetails?.client_recent_history?.map((item, index) => (
                  <div className="project" key={index}>
                    <div className="name">{item.name}</div>
                    <div className="rating">
                      <div className="stars">
                        <svg
                          id="Single_star"
                          data-name="Single star"
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.754"
                          height="12.165"
                          viewBox="0 0 12.754 12.165"
                        >
                          <g
                            id="Group_3150"
                            data-name="Group 3150"
                            transform="translate(0 0)"
                          >
                            <path
                              id="Path_4730"
                              data-name="Path 4730"
                              d="M8.011,7.947l-4.023.446a.384.384,0,0,0-.321.262.378.378,0,0,0,.107.4c1.2,1.091,2.993,2.725,2.993,2.725s-.493,2.377-.82,3.963a.385.385,0,0,0,.15.386.379.379,0,0,0,.411.021c1.408-.8,3.517-2,3.517-2l3.516,2a.381.381,0,0,0,.562-.408c-.327-1.587-.818-3.964-.818-3.964l2.993-2.723a.385.385,0,0,0,.107-.4.381.381,0,0,0-.321-.26c-1.61-.18-4.024-.447-4.024-.447L10.373,4.259a.386.386,0,0,0-.348-.225.381.381,0,0,0-.346.225C9.011,5.734,8.011,7.947,8.011,7.947Z"
                              transform="translate(-3.649 -4.034)"
                              fill="#6d2ef1"
                            />
                          </g>
                        </svg>
                        <svg
                          id="Single_star"
                          data-name="Single star"
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.754"
                          height="12.165"
                          viewBox="0 0 12.754 12.165"
                        >
                          <g
                            id="Group_3150"
                            data-name="Group 3150"
                            transform="translate(0 0)"
                          >
                            <path
                              id="Path_4730"
                              data-name="Path 4730"
                              d="M8.011,7.947l-4.023.446a.384.384,0,0,0-.321.262.378.378,0,0,0,.107.4c1.2,1.091,2.993,2.725,2.993,2.725s-.493,2.377-.82,3.963a.385.385,0,0,0,.15.386.379.379,0,0,0,.411.021c1.408-.8,3.517-2,3.517-2l3.516,2a.381.381,0,0,0,.562-.408c-.327-1.587-.818-3.964-.818-3.964l2.993-2.723a.385.385,0,0,0,.107-.4.381.381,0,0,0-.321-.26c-1.61-.18-4.024-.447-4.024-.447L10.373,4.259a.386.386,0,0,0-.348-.225.381.381,0,0,0-.346.225C9.011,5.734,8.011,7.947,8.011,7.947Z"
                              transform="translate(-3.649 -4.034)"
                              fill="#6d2ef1"
                            />
                          </g>
                        </svg>
                        <svg
                          id="Single_star"
                          data-name="Single star"
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.754"
                          height="12.165"
                          viewBox="0 0 12.754 12.165"
                        >
                          <g
                            id="Group_3150"
                            data-name="Group 3150"
                            transform="translate(0 0)"
                          >
                            <path
                              id="Path_4730"
                              data-name="Path 4730"
                              d="M8.011,7.947l-4.023.446a.384.384,0,0,0-.321.262.378.378,0,0,0,.107.4c1.2,1.091,2.993,2.725,2.993,2.725s-.493,2.377-.82,3.963a.385.385,0,0,0,.15.386.379.379,0,0,0,.411.021c1.408-.8,3.517-2,3.517-2l3.516,2a.381.381,0,0,0,.562-.408c-.327-1.587-.818-3.964-.818-3.964l2.993-2.723a.385.385,0,0,0,.107-.4.381.381,0,0,0-.321-.26c-1.61-.18-4.024-.447-4.024-.447L10.373,4.259a.386.386,0,0,0-.348-.225.381.381,0,0,0-.346.225C9.011,5.734,8.011,7.947,8.011,7.947Z"
                              transform="translate(-3.649 -4.034)"
                              fill="#6d2ef1"
                            />
                          </g>
                        </svg>
                        <svg
                          id="Single_star"
                          data-name="Single star"
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.754"
                          height="12.165"
                          viewBox="0 0 12.754 12.165"
                        >
                          <g
                            id="Group_3150"
                            data-name="Group 3150"
                            transform="translate(0 0)"
                          >
                            <path
                              id="Path_4730"
                              data-name="Path 4730"
                              d="M8.011,7.947l-4.023.446a.384.384,0,0,0-.321.262.378.378,0,0,0,.107.4c1.2,1.091,2.993,2.725,2.993,2.725s-.493,2.377-.82,3.963a.385.385,0,0,0,.15.386.379.379,0,0,0,.411.021c1.408-.8,3.517-2,3.517-2l3.516,2a.381.381,0,0,0,.562-.408c-.327-1.587-.818-3.964-.818-3.964l2.993-2.723a.385.385,0,0,0,.107-.4.381.381,0,0,0-.321-.26c-1.61-.18-4.024-.447-4.024-.447L10.373,4.259a.386.386,0,0,0-.348-.225.381.381,0,0,0-.346.225C9.011,5.734,8.011,7.947,8.011,7.947Z"
                              transform="translate(-3.649 -4.034)"
                              fill="#6d2ef1"
                            />
                          </g>
                        </svg>
                        <svg
                          id="Single_star"
                          data-name="Single star"
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.754"
                          height="12.165"
                          viewBox="0 0 12.754 12.165"
                        >
                          <g
                            id="Group_3150"
                            data-name="Group 3150"
                            transform="translate(0 0)"
                          >
                            <path
                              id="Path_4730"
                              data-name="Path 4730"
                              d="M8.011,7.947l-4.023.446a.384.384,0,0,0-.321.262.378.378,0,0,0,.107.4c1.2,1.091,2.993,2.725,2.993,2.725s-.493,2.377-.82,3.963a.385.385,0,0,0,.15.386.379.379,0,0,0,.411.021c1.408-.8,3.517-2,3.517-2l3.516,2a.381.381,0,0,0,.562-.408c-.327-1.587-.818-3.964-.818-3.964l2.993-2.723a.385.385,0,0,0,.107-.4.381.381,0,0,0-.321-.26c-1.61-.18-4.024-.447-4.024-.447L10.373,4.259a.386.386,0,0,0-.348-.225.381.381,0,0,0-.346.225C9.011,5.734,8.011,7.947,8.011,7.947Z"
                              transform="translate(-3.649 -4.034)"
                              fill="#6d2ef1"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="date">
                        {moment(item.created_at).format("DD-MMM-YYYY")}
                      </div>
                    </div>
                    <div className="desc">{item.description}</div>
                    <div className="rate_date">
                      <span>
                        {item.budget_type == "fixed"
                          ? `$${item.price}`
                          : item.budget_type == "hourly"
                          ? ` $${item.price} -  $${item.min_price}`
                          : null}
                      </span>
                      <span>{item.budget_type}</span>
                    </div>
                  </div>
                ))}
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

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleProposalDetails } from "../../../../redux/actions/jobActions";
import ChangeTermPopup from "./ChangeTermPopup";
import WithdrawProposal from "./WithdrawSubmitProposal";

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

const SingleSubmitedProposal = () => {
  const dispatch = useDispatch();
  const [milestonesTotal, setMilestonesTotal] = useState(0);
  const [successPopup, setSuccessPopup] = useState(false);
  const [popup, setPopup] = useState(false);

  const project_data = useSelector(
    (state) => state?.job?.singleProposalDetails?.project_data
  );
  const milestonedata = useSelector(
    (state) => state?.job?.singleProposalDetails?.milestonedata
  );
  const client_data = useSelector(
    (state) => state?.job?.singleProposalDetails?.client_data
  );
  const proposal_data = useSelector(
    (state) => state?.job?.singleProposalDetails?.proposal_data
  );
  const changeTerms = useSelector((state) => state?.job?.changeTerms);
  const { id } = useParams();

  useEffect(() => {
    dispatch(singleProposalDetails(id, "submit"));
  }, [id, changeTerms]);

  useEffect(() => {
    let add = 0;
    for (let i = 0; i < milestonedata?.length; i++) {
      add = add + milestonedata[i].amount;
    }
    setMilestonesTotal(add);
  }, [milestonedata]);

  return (
    <>
      {" "}
      <div className="single_submited_proposal container">
        <div className="heading">Proposal Details</div>
        <Row>
          <Col lg={9}>
            <div className="sep_bdr">
              <div className="job_details">
                <Row>
                  <Col lg={8} md={8}>
                    <div className="left">
                      <div className="left_heading">Job Details</div>
                      <div className="left_title">{project_data?.name}</div>
                      <div className="categories">
                        <span>{project_data?.categories}</span>
                        <div className="date">{project_data?.posted_date}</div>
                      </div>
                      <div className="description">
                        {project_data?.description}
                      </div>
                      {/* <div className="view_more_posting">View job posting</div> */}
                    </div>
                  </Col>
                  <Col lg={4} md={4}>
                    <div className="right">
                      <div className="right_item">
                        <div className="head">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 28 28"
                            >
                              <g
                                id="Group_3311"
                                data-name="Group 3311"
                                transform="translate(-1432 -789)"
                              >
                                <circle
                                  id="Ellipse_622"
                                  data-name="Ellipse 622"
                                  cx="14"
                                  cy="14"
                                  r="14"
                                  transform="translate(1432 789)"
                                  fill="#6d2ef1"
                                />
                                <g
                                  id="_3790073_book_expert_guru_pundit_sage_icon"
                                  data-name="3790073_book_expert_guru_pundit_sage_icon"
                                  transform="translate(1436 794)"
                                >
                                  <path
                                    id="Path_4553"
                                    data-name="Path 4553"
                                    d="M17,2.242l-.078-.012a13.791,13.791,0,0,0-6.263.523L10,2.966l-.659-.295a13.791,13.791,0,0,0-6.263-.523L3,2.16v8.448l1.538-.367A6.37,6.37,0,0,1,7.2,10.177a3.594,3.594,0,0,1,.635.191L10,11.293l2.184-.851a3.415,3.415,0,0,1,.592-.179,6.37,6.37,0,0,1,2.686.059L17,10.69ZM9.179,9.07a2.558,2.558,0,0,0-.5-.164,12.789,12.789,0,0,0-4.907-.06L3.681,8.37a13.264,13.264,0,0,1,5.092.063,3.043,3.043,0,0,1,.6.2Zm0-1.448a2.558,2.558,0,0,0-.5-.164A12.789,12.789,0,0,0,3.767,7.4l-.086-.475a13.261,13.261,0,0,1,5.092.063,3.043,3.043,0,0,1,.6.2Zm0-1.448a2.558,2.558,0,0,0-.5-.164,12.789,12.789,0,0,0-4.907-.06l-.086-.475a13.262,13.262,0,0,1,5.092.063,3.043,3.043,0,0,1,.6.2Zm0-1.448a2.558,2.558,0,0,0-.5-.164A12.789,12.789,0,0,0,3.767,4.5l-.086-.475a13.261,13.261,0,0,1,5.092.063,3.043,3.043,0,0,1,.6.2Zm1.063,5.844H9.759V3.328h.483Zm5.991-1.724a12.788,12.788,0,0,0-4.908.06,2.561,2.561,0,0,0-.5.164l-.194-.442a3.046,3.046,0,0,1,.6-.2,13.27,13.27,0,0,1,5.092-.063Zm0-1.448a12.79,12.79,0,0,0-4.908.06,2.561,2.561,0,0,0-.5.164l-.194-.442a3.046,3.046,0,0,1,.6-.2,13.27,13.27,0,0,1,5.092-.063Zm0-1.448a12.788,12.788,0,0,0-4.908.06,2.561,2.561,0,0,0-.5.164l-.194-.442a3.046,3.046,0,0,1,.6-.2,13.263,13.263,0,0,1,5.092-.063Zm0-1.448a12.79,12.79,0,0,0-4.908.06,2.561,2.561,0,0,0-.5.164l-.194-.442a3.046,3.046,0,0,1,.6-.2,13.267,13.267,0,0,1,5.092-.063Z"
                                    fill="#fff"
                                  />
                                  <path
                                    id="Path_4554"
                                    data-name="Path 4554"
                                    d="M9.259,38.054c-.055-.022-.1-.036-.156-.054v1.24H7.369A2.369,2.369,0,0,0,5,41.609v2.217H18.034V41.609a2.369,2.369,0,0,0-2.369-2.369H13.931V38.081c-.047.017-.091.03-.142.05l-.341.133v.976a1.948,1.948,0,0,1-3.862,0V38.194Z"
                                    transform="translate(-1.517 -27.31)"
                                    fill="#fff"
                                  />
                                </g>
                              </g>
                            </svg>
                          </span>
                          <span>{project_data?.experience_level}</span>
                        </div>
                        <div className="desc">Exprience Level</div>
                      </div>
                      <div className="right_item">
                        <div className="head">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 28 28"
                            >
                              <g
                                id="Group_3310"
                                data-name="Group 3310"
                                transform="translate(-1432 -881)"
                              >
                                <circle
                                  id="Ellipse_623"
                                  data-name="Ellipse 623"
                                  cx="14"
                                  cy="14"
                                  r="14"
                                  transform="translate(1432 881)"
                                  fill="#6d2ef1"
                                />
                                <path
                                  id="_171279_alarm_clock_bell_time_icon"
                                  data-name="171279_alarm_clock_bell_time_icon"
                                  d="M7.438,4.648a.93.93,0,0,0-.93.93V8l-.655.654a.85.85,0,0,0-.275.648.93.93,0,0,0,.93.93.9.9,0,0,0,.647-.275l.963-.962a.875.875,0,0,0,.25-.622V5.578A.93.93,0,0,0,7.438,4.648Zm0-2.789a6.5,6.5,0,0,0-5.2,10.408L1.2,13.3a.875.875,0,0,0-.27.641.94.94,0,0,0,.93.93.881.881,0,0,0,.641-.27l1.037-1.037a6.474,6.474,0,0,0,7.8,0L12.374,14.6a.88.88,0,0,0,.641.27.94.94,0,0,0,.93-.93.877.877,0,0,0-.27-.641l-1.037-1.037a6.5,6.5,0,0,0-5.2-10.408Zm0,11.156a4.648,4.648,0,1,1,4.648-4.648A4.649,4.649,0,0,1,7.438,13.016ZM12.086,0A2.785,2.785,0,0,0,9.733,1.3a7.454,7.454,0,0,1,4.248,3.536A2.786,2.786,0,0,0,12.086,0ZM5.142,1.3A2.787,2.787,0,1,0,.893,4.831,7.455,7.455,0,0,1,5.142,1.3Z"
                                  transform="translate(1438.563 887.563)"
                                  fill="#fff"
                                />
                              </g>
                            </svg>
                          </span>
                          <span>{project_data?.budget_type}</span>
                        </div>
                        <div className="desc">Propose your terms</div>
                      </div>
                      <div className="right_item">
                        <div className="head">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 28 28"
                            >
                              <g
                                id="Group_3308"
                                data-name="Group 3308"
                                transform="translate(-1432 -1056)"
                              >
                                <circle
                                  id="Ellipse_625"
                                  data-name="Ellipse 625"
                                  cx="14"
                                  cy="14"
                                  r="14"
                                  transform="translate(1432 1056)"
                                  fill="#6d2ef1"
                                />
                                <g
                                  id="icons"
                                  transform="translate(1436.625 1059.625)"
                                >
                                  <g id="calendar" transform="translate(2 2)">
                                    <path
                                      id="Path_4555"
                                      data-name="Path 4555"
                                      d="M13.8,3.475a1.475,1.475,0,0,0-2.95,0H7.9a1.475,1.475,0,0,0-2.95,0A2.959,2.959,0,0,0,2,6.425V13.8a2.959,2.959,0,0,0,2.95,2.95H13.8a2.959,2.959,0,0,0,2.95-2.95V6.425A2.959,2.959,0,0,0,13.8,3.475Zm1.475,11.062a.7.7,0,0,1-.738.738H4.213a.7.7,0,0,1-.738-.738v-5.9A.7.7,0,0,1,4.213,7.9H14.537a.7.7,0,0,1,.738.737Z"
                                      transform="translate(-2 -2)"
                                      fill="#fff"
                                    />
                                    <path
                                      id="Path_4556"
                                      data-name="Path 4556"
                                      d="M11.95,12H10.475A1.479,1.479,0,0,0,9,13.475V14.95a1.479,1.479,0,0,0,1.475,1.475H11.95a1.479,1.479,0,0,0,1.475-1.475V13.475A1.479,1.479,0,0,0,11.95,12Z"
                                      transform="translate(-3.838 -4.625)"
                                      fill="#fff"
                                    />
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </span>
                          <span>{project_data?.project_duration}</span>
                        </div>
                        <div className="desc">Project Duration </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="skills">
                <div className="head">Skills and expertise</div>
                <div className="skill_list">
                  {project_data?.job_skills?.map((item) => (
                    <span>{item.name}</span>
                  ))}
                </div>
              </div>
              <div className="terms">
                <div className="head">
                  <div className="headi">Your proposed terms</div>
                  <div className="budget">
                    Client's budget:{" "}
                    {project_data?.budget_type == "fixed"
                      ? `$${project_data?.price}`
                      : project_data?.budget_type == "hourly"
                      ? ` $${project_data?.price} -  $${project_data?.min_price}`
                      : null}
                  </div>
                </div>
                <div className="how_be_paid">
                  <div className="head">How do you want to be paid?</div>
                  <div className="desc">
                    {project_data?.budget_type == "fixed" &&
                    milestonedata?.length == 0
                      ? "By Project"
                      : project_data?.budget_type == "fixed" &&
                        milestonedata?.length != 0
                      ? "By milestone"
                      : "Hourly"}
                  </div>
                </div>
                {project_data?.budget_type == "fixed" &&
                milestonedata?.length == 0 ? (
                  <>
                    <div className="price_project">
                      <div className="head">Total price of project</div>
                      {/* <div className="desc">
                        This includes all milsetones, and is the amount your
                        client will see.
                      </div> */}
                      <div className="amt">${proposal_data?.bid_amount}</div>
                    </div>
                    <div className="you_recive">
                      <div className="head">You'll Receive</div>
                      <div className="desc">
                        Your estimated payment, after service fees.
                      </div>
                      <div className="amt">
                        $
                        {proposal_data?.bid_amount -
                          (proposal_data?.bid_amount / 100) *
                            project_data?.service_fee}
                      </div>
                    </div>
                  </>
                ) : project_data?.budget_type == "fixed" &&
                  milestonedata?.length != 0 ? (
                  <>
                    <div className="price_project">
                      <div className="head">Total price of project</div>
                      <div className="desc">
                        This includes all milsetones, and is the amount your
                        client will see.
                      </div>
                      <div className="amt">${milestonesTotal}</div>
                    </div>
                    <div className="you_recive">
                      <div className="head">You'll Receive</div>
                      <div className="desc">
                        Your estimated payment, after service fees.
                      </div>
                      <div className="amt">
                        $
                        {milestonesTotal -
                          (milestonesTotal / 100) * project_data?.service_fee}
                      </div>
                    </div>
                  </>
                ) : project_data?.budget_type == "hourly" ? (
                  <>
                    <div className="price_project">
                      <div className="head">Hourly Rate</div>
                      <div className="desc">
                        Total amount the client will see on your proposal
                      </div>
                      <div className="amt">${proposal_data?.bid_amount}/hr</div>
                    </div>
                    <div className="you_recive">
                      <div className="head">You'll Receive</div>
                      <div className="desc">
                        Your estimated payment, after service fees.
                      </div>
                      <div className="amt">
                        ${" "}
                        {proposal_data?.bid_amount -
                          (proposal_data?.bid_amount / 100) *
                            project_data?.service_fee}
                        /hr
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}

                <div className="buttons">
                  <div className="theme_btns">
                    <button
                      className="first_button"
                      onClick={() =>
                        setPopup(
                          <ChangeTermPopup
                            proposal_id={id}
                            project_data={project_data}
                            proposal_data={proposal_data}
                            milestonedata={milestonedata}
                            popup={setPopup}
                            successPopup={successPopup}
                            setSuccessPopup={setSuccessPopup}
                          />
                        )
                      }
                    >
                      CHANGE TERMS
                    </button>
                    <button
                      className="second_button"
                      onClick={() =>
                        setPopup(
                          <WithdrawProposal
                            id={id}
                            popup={setPopup}
                            successPopup={successPopup}
                            setSuccessPopup={setSuccessPopup}
                            type={"withdraw"}
                          />
                        )
                      }
                    >
                      WITHDRAW PROPOSAL
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="sep_bdr cover_letter">
              <div className="heading">Cover Letter</div>
              <div className="desc">{proposal_data?.cover_letter}</div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="sep_bdr" style={{ borderRadius: 10 }}>
              <div className="about_client">
                <div className="heading">About the client</div>
                <div className="isvarified">
                  <span>
                    {" "}
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
                  <span>Payment method verified</span>
                </div>
                <div className="reviews">
                  <div className="stars">
                    {ClientRating(client_data?.rating).map((item, index) => (
                      <span key={index}>{item}</span>
                    ))}
                  </div>
                  <div className="desc">
                    {client_data?.rating} of {client_data?.number_of_review}{" "}
                    reviews
                  </div>
                </div>
                <div className="location">
                  <div className="headingl">Location</div>
                  <div className="country">{client_data?.country}</div>
                  <div className="timezone">{client_data?.local_time}</div>
                </div>
                <div className="history">
                  <div className="headingh">History</div>
                  <div className="desc">
                    {" "}
                    {project_data?.interview} proposals
                  </div>
                  <div className="desc">
                    {client_data?.job_posted} interviews
                  </div>
                  <div className="desc"> {project_data?.open_jobs} Hired</div>
                  {/* <div className="desc">$1096 total spent</div> */}
                  <div className="desc">{project_data?.open_jobs} jobs</div>
                  <div className="desc">{project_data?.total_hire} hires</div>
                </div>
                <div className="member_since">
                  Member since {client_data?.member_since}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      {popup}
      {successPopup}
    </>
  );
};

export default SingleSubmitedProposal;

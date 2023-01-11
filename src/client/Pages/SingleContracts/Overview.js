import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { keyframes } from "styled-components";
import AddMilestone from "./popup/AddMilestone";
import FundMilestone from "./popup/FundMilestone";
import RequestMilestone from "./popup/RequestMilestone";
import ReviewRequestWork from "./popup/ReviewRequestWork";

const Overview = ({
  setPopup,
  milestoneData,
  setLoading,
  singleContractData,
  deleteMilestone,
}) => {
  const navigate = useNavigate();

  const TimelineProgress = (height) => keyframes`
  0% {
    height: calc(1% - 3px);
  }

  100% {
    height: calc(${height} - 3px);
  }
`;

  const ConnectingLine = styled.div`
    position: absolute;
    width: 1px;
    height: calc(${(props) => props?.height} - 3px);
    border: 1px solid #d4d4d5;
    top: 34px;
    left: 11px;
    z-index: -1;
  `;
  const Progress = styled.div`
    position: absolute;
    width: 1px;
    height: calc(${(props) => props?.height} - 3px);
    border: 1px solid #6d2ef1 !important;
    top: 34px;
    left: 11px;
    z-index: 0;
    animation-name: ${(props) => TimelineProgress(props.height)};
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
    animation-delay: ${(props) => props?.delay}s;
    animation-fill-mode: both;
  `;

  const calculatedAmount = () => {
    let total = 0;

    milestoneData?.forEach((e) => {
      total = total + e.amount;
    });

    return total;
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-8 col-md-7">
          <div className="milestone_timeline">
            <div className="heading">Milestone Timeline</div>
            <div className="timeline">
              <ConnectingLine height={"100%"}></ConnectingLine>

              {milestoneData?.map((item, index) => (
                <>
                  <div
                    className="progress_steps"
                    id="progress_step2"
                    key={index}
                  >
                    {index !== milestoneData?.length - 1 ? (
                      <>
                        <ConnectingLine height={"100%"}></ConnectingLine>
                        {item.status == "active" || item.status === "paid" ? (
                          <Progress
                            height={item.status === "paid" ? "100%" : "0%"}
                            delay={index}
                          ></Progress>
                        ) : null}
                      </>
                    ) : null}
                    {item.status == "active" ||
                    item.status === "paid" ||
                    item.status == "submit-work" ? (
                      <div className="fill_ filled_background fa-checkBackground">
                        <i className="fa fa-check text-white"></i>
                      </div>
                    ) : (
                      <div className="fill_ filled_background">{index + 1}</div>
                    )}

                    <div className="about_step">
                      <div className="p_heading">{item.description}</div>
                      <div className="paid_btn">
                        <span
                          style={{
                            fontSize: "16px",
                            fontWeight: "600",
                            color: "rgb(0, 0, 0)",
                            marginRight: "10px",
                          }}
                        >
                          ${item.amount.toFixed(2)}
                        </span>
                        {item.status === "active" ? (
                          <button>Paid</button>
                        ) : item.status === "submit-work" ? (
                          <button>Paid</button>
                        ) : item.status === "changed" ? (
                          <button>In Review</button>
                        ) : item.status === "created" ? (
                          <button>Pending</button>
                        ) : item.status === "paid" ? (
                          <button>Completed</button>
                        ) : item.status === "draft" ? (
                          <button>In Review</button>
                        ) : item.status === "refund-requested" ? (
                          <button>Refund Requested</button>
                        ) : null}
                      </div>

                      {item.status === "created" ? (
                        <>
                          {milestoneData?.filter(
                            (ele) => ele.status == "created"
                          )[0].id == item.id ? (
                            <div
                              className="submit_work_btn"
                              onClick={() =>
                                setPopup(<FundMilestone popup={setPopup} />)
                              }
                            >
                              <button>Fund Milestone</button>
                            </div>
                          ) : (
                            <div className="submit_work_btn">
                              <button>
                                Message{" "}
                                {singleContractData?.freelancer?.first_name}
                              </button>
                            </div>
                          )}
                        </>
                      ) : item.status === "submit-work" ? (
                        <div className="submit_work_btn">
                          <button
                            onClick={() =>
                              setPopup(
                                <ReviewRequestWork
                                  milestone_id={item.id}
                                  popup={setPopup}
                                  setLoading={setLoading}
                                />
                              )
                            }
                          >
                            Review & Request for change
                          </button>
                        </div>
                      ) : item.status === "draft" ? (
                        <div className="submit_work_btn">
                          <button
                            onClick={() =>
                              setPopup(
                                <AddMilestone
                                  popup={setPopup}
                                  milestoneDetails={item}
                                  setLoading={setLoading}
                                  singleContractData={singleContractData}
                                />
                              )
                            }
                          >
                            Review and Approve
                          </button>
                          <button onClick={() => deleteMilestone(item.id)}>
                            Decline
                          </button>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="progress_steps" id="progress_step1">
              <div className="fill_ filled_background">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                >
                  <g
                    id="Group_3808"
                    data-name="Group 3808"
                    transform="translate(-282 -1147)"
                  >
                    <circle
                      id="Ellipse_772"
                      data-name="Ellipse 772"
                      cx="25"
                      cy="25"
                      r="25"
                      transform="translate(282 1147)"
                      fill="#6d2ef1"
                    />
                    <path
                      id="Path_4798"
                      data-name="Path 4798"
                      d="M23.608,16.451H16.451v7.157a1.431,1.431,0,1,1-2.863,0V16.451H6.431a1.431,1.431,0,1,1,0-2.863h7.157V6.431a1.431,1.431,0,0,1,2.863,0v7.157h7.157a1.431,1.431,0,1,1,0,2.863Z"
                      transform="translate(292 1157)"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </div>
              <div className="ConnectingLine"></div>
              <div className="about_step">
                <div
                  className="timeline_link"
                  onClick={() =>
                    setPopup(
                      <AddMilestone
                        popup={setPopup}
                        setLoading={setLoading}
                        singleContractData={singleContractData}
                      />
                    )
                  }
                >
                  Propose New Milestone
                </div>
              </div>
            </div>
            <button
              className="endContracts-button"
              onClick={() => setPopup(<RequestMilestone popup={setPopup} />)}
            >
              Manage Milestone
            </button>
          </div>
        </div>
        <div className="col-lg-4 col-md-5">
          <div className="milestone_overview_right">
            <div className="top_heading">Earnings</div>
            <div className="timesheet_time">
              <div className="timesheet_progress">
                <div className="progress">
                  <div
                    role="progressbar"
                    className="progress-bar bg-success progress-bar-striped"
                    aria-valuenow="35"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "35%" }}
                  ></div>
                  <div
                    role="progressbar"
                    className="progress-bar bg-warning"
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "20%" }}
                  ></div>
                  <div
                    role="progressbar"
                    className="progress-bar bg-danger progress-bar-striped"
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "10%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="earnings_progress">
              <div>
                <span>Paid</span>
                <span>$ 100</span>
              </div>
              <div>
                <span>Funded (Escrow Protection) </span>
                <span>$ 200</span>
              </div>
              <div>
                <span>Project Price </span>
                <span>${calculatedAmount()}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-7" style={{ padding: "0px" }}>
          <div className="col-lg-12">
            <div className="milestone_overview_left">
              <div className="top_btns">
                <div>Recent Files</div>
                <div className="new_overview_btn">
                  <button style={{ minWidth: "40px", margin: "0px 15px" }}>
                    <i className="fa fa-history" aria-hidden="true"></i>
                  </button>
                  <label for="milestone_recent_file_inp">
                    <button style={{ minWidth: "120px" }}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-upload"
                          viewBox="0 0 16 16"
                        >
                          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
                          <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"></path>
                        </svg>
                      </span>
                      <span>Upload</span>
                    </button>
                    <input
                      type="file"
                      id="milestone_recent_file_inp"
                      style={{
                        width: "0px",
                        height: "0px",
                        display: "none",
                        position: "absolute",
                      }}
                    />
                  </label>
                </div>
              </div>
              <div className="file_show">
                <div className="file_type_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 64 64"
                    width="40"
                    height="40"
                  >
                    <path
                      fill="#edeeef"
                      d="M53.42,10.15v43.7a2,2,0,0,1-2,2H20.14a2,2,0,0,1-2-2V23.09l11-14.94H51.42A2,2,0,0,1,53.42,10.15Z"
                    ></path>
                    <path
                      fill="#cfd0d1"
                      d="M29.14,8.17V21a2,2,0,0,1-2,2H18.19Z"
                    ></path>
                    <rect
                      width="31.32"
                      height="14.04"
                      x="10.58"
                      y="35.47"
                      fill="#ff3717"
                      rx="2"
                    ></rect>
                    <path
                      fill="#edeeef"
                      d="M20.74 43.3v2.16H19V39.53H21.4a3.28 3.28 0 0 1 1.37.22 1.71 1.71 0 0 1 .75.66 1.9 1.9 0 0 1 .27 1 1.76 1.76 0 0 1-.56 1.37 2.13 2.13 0 0 1-1.51.52zm0-1.27h.58c.51 0 .76-.2.76-.59s-.23-.56-.7-.56h-.64zM24.44 45.46V39.53h2.19a2.56 2.56 0 0 1 2.13.88 3.16 3.16 0 0 1 .71 2.05 3 3 0 0 1-.76 2.16 2.55 2.55 0 0 1-2 .84zm1.74-1.37h.45a.85.85 0 0 0 .73-.44 2.16 2.16 0 0 0 .29-1.19 2.34 2.34 0 0 0-.26-1.12.83.83 0 0 0-.76-.46h-.45zM33.74 43.24H31.9v2.22H30.21V39.53H34.3v1.41H31.9v1h1.84z"
                    ></path>
                  </svg>
                </div>
                <div className="about_file">
                  <div className="file_name">Ajay Kumar File</div>
                  <div className="file_info">
                    <div className="file_size">26 MB </div>
                    <div className="file_time"> 1 Month ago</div>
                  </div>
                </div>
                <div className="menu_dot">
                  <span>...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;

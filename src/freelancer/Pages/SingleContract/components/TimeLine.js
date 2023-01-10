import React from "react";
import { Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { keyframes } from "styled-components";
import AddMilestonePopup from "../popups/AddMilestonePopup";
import RequestMilestoneChanges from "../popups/RequestMilestoneChanges";
import ResubmitRevision from "../popups/ResubmitRevision";
import SubmitWorkForPaymentPopup from "../popups/SubmitWorkForPaymentPopup";

const TimeLine = ({ setPopup, singleContractData, setLoading }) => {
  const { buttonStatus } = useParams();

  const afterSuccess = () => {
    setPopup(
      <AddMilestonePopup
        popup={setPopup}
        setLoading={setLoading}
        afterSuccess={afterSuccess}
        milestones={singleContractData?.milestone}
        contract_id={singleContractData?.id}
        freelancer={singleContractData?.freelancer}
      />
    );
  };
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

  return (
    <>
      <Col md={7} lg={8}>
        <div className="milestone_timeline">
          <div className="heading">Milestone Timeline</div>
          <div className="timeline">
            {singleContractData?.milestone?.map((item, index) => (
              <>
                <div className="progress_steps" id="progress_step1">
                  {index !== singleContractData?.milestone?.length - 1 ? (
                    <>
                      <ConnectingLine height={"100%"}></ConnectingLine>
                      {item.status == "active" || item.status == "paid" ? (
                        <Progress
                          height={item.status == "paid" ? "100%" : "0%"}
                          delay={index}
                        ></Progress>
                      ) : null}
                    </>
                  ) : null}
                  <div className="fill_ filled_background">
                    {item.status == "active" ||
                    item.status == "paid" ||
                    item.status == "submit-work" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                      >
                        <g
                          id="Group_3799"
                          data-name="Group 3799"
                          transform="translate(-282 -675)"
                        >
                          <circle
                            id="Ellipse_770"
                            data-name="Ellipse 770"
                            cx="25"
                            cy="25"
                            r="25"
                            transform="translate(282 675)"
                            fill="#6d2ef1"
                          />
                          <g id="check" transform="translate(291.5 684.5)">
                            <rect
                              id="Rectangle_1291"
                              data-name="Rectangle 1291"
                              width="31"
                              height="31"
                              transform="translate(0.5 0.5)"
                              fill="none"
                            />
                            <path
                              id="Path_4797"
                              data-name="Path 4797"
                              d="M44.234,76.473a1.449,1.449,0,0,1-1.027-.426l-6.781-6.781a1.453,1.453,0,0,1,2.055-2.055l5.754,5.753L56.769,60.431a1.453,1.453,0,1,1,2.055,2.055L45.262,76.048A1.449,1.449,0,0,1,44.234,76.473Z"
                              transform="translate(-31.538 -52.636)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>
                  <div className="connecting_line"></div>
                  <div className="about_step">
                    {item?.description}
                    <div className="paid_btn">
                      <span
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          color: "#000",
                          marginRight: 10,
                        }}
                      >
                        ${item.amount.toFixed(2)}
                      </span>
                      {item.status == "active" ? (
                        <>
                          <button className="me-2 mb-2">
                            Active and Funded
                          </button>
                          <div className="submit_work_btn">
                            <button
                              onClick={() =>
                                setPopup(
                                  <SubmitWorkForPaymentPopup
                                    popup={setPopup}
                                    setLoading={setLoading}
                                    milestone_id={item.id}
                                    freelancer={singleContractData?.freelancer}
                                  />
                                )
                              }
                            >
                              Submit Work
                            </button>
                          </div>
                        </>
                      ) : item.status == "created" ? (
                        <>
                          <div>
                            {singleContractData?.client?.first_name} hasn't paid
                            for this milestone yet. Make sure the milestone is
                            funded before starting the work.
                          </div>
                          <button className="me-2 mb-2">Pending</button>
                        </>
                      ) : item.status == "changed" ? (
                        <>
                          <button className="me-2 mb-2">
                            Requested for change
                          </button>
                          <div className="submit_work_btn">
                            <button
                              onClick={() =>
                                setPopup(
                                  <ResubmitRevision
                                    popup={setPopup}
                                    work_id={item.work_id}
                                    setLoading={setLoading}
                                    milestone_id={item.id}
                                    freelancer={singleContractData?.freelancer}
                                  />
                                )
                              }
                            >
                              Resubmit Revision
                            </button>
                          </div>
                        </>
                      ) : item.status == "submit-work" ? (
                        <button className="me-2 mb-2">In Review</button>
                      ) : item.status == "paid" ? (
                        <button className="me-2 mb-2">Paid</button>
                      ) : item.status == "draft" ? (
                        <button className="me-2 mb-2">Pending</button>
                      ) : null}
                    </div>
                  </div>
                </div>
              </>
            ))}
            {singleContractData?.milestone[
              singleContractData?.milestone.length - 1
            ].status == "paid" ||
            singleContractData?.milestone[
              singleContractData?.milestone.length - 1
            ].status == "draft" ? (
              <div className="submit_work_btn">
                <button
                  onClick={() =>
                    setPopup(
                      <AddMilestonePopup
                        popup={setPopup}
                        afterSuccess={afterSuccess}
                        setLoading={setLoading}
                        milestones={singleContractData?.milestone}
                        contract_id={singleContractData?.id}
                        freelancer={singleContractData?.freelancer}
                      />
                    )
                  }
                >
                  Add New Milestone
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </Col>
    </>
  );
};

export default TimeLine;

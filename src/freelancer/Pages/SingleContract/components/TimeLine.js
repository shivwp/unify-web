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
                      {item.status == "active" ? (
                        <Progress height={"100%"} delay={index}></Progress>
                      ) : null}
                    </>
                  ) : null}
                  <div className="fill_ filled_background">
                    {item.status == "active" ? (
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
                                  />
                                )
                              }
                            >
                              Submit Work
                            </button>
                          </div>
                        </>
                      ) : item.status == "created" ? (
                        <button className="me-2 mb-2">In Review</button>
                      ) : item.status == "submit-work" ? (
                        <button className="me-2 mb-2">Pending</button>
                      ) : (
                        <button className="me-2 mb-2">Paid</button>
                      )}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          {/* <>
            <div className="timeline">
              <ConnectingLine height={"100%"}></ConnectingLine>
              <Progress height={"20%"}></Progress>

              <div className="progress_steps" id="progress_step1">
                <div className="fill_ filled_background">
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
                </div>
                <div className="connecting_line"></div>
                <div className="about_step">
                  <div
                    className="timeline_link"
                    onClick={() =>
                      setPopup(<AddMilestonePopup popup={setPopup} />)
                    }
                  >
                    Show all Completed
                  </div>
                </div>
              </div>
              <div className="progress_steps" id="progress_step2">
                <div className="fill_ filled_background">2</div>
                <div className="about_step">
                  <div className="p_heading">Milestone 6</div>
                  Once the website is live done and the code submit to the
                  client
                  <div className="paid_btn">
                    <span
                      style={{
                        fontSize: 16,
                        fontWeight: 600,
                        color: "#000",
                        marginRight: 10,
                      }}
                    >
                      $1200.00
                    </span>
                    <button>Pending</button>
                  </div>
                  Chris hasn't paid for this milestone yet. Make sure the
                  milestone is funded before starting the work.
                  <div className="submit_work_btn">
                    <button>Message Ankit</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="progress_steps" id="progress_step2">
              <div className="fill_ filled_background">3</div>
              <div className="about_step">
                <div className="p_heading">Small problem + Bugs fixed</div>
                Due Dec 25
              </div>
            </div>
          </>
          <>
            <div className="timeline">
              <ConnectingLine height={"100%"}></ConnectingLine>
              <Progress height={"20%"}></Progress>

              <div className="progress_steps" id="progress_step1">
                <div className="fill_ filled_background">
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
                </div>
                <div className="connecting_line"></div>
                <div className="about_step">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable.
                  <div className="paid_btn">
                    <button>Paid</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="progress_steps" id="progress_step2">
              <div className="fill_ filled_background">2</div>
              <div className="about_step">
                <div className="p_heading">
                  Simple Smart "Add to queue", Synched currently playing
                </div>
                Once the website is live done and the code submit to the client
                <div className="paid_btn">
                  <button>Active & Funded</button>
                </div>
                <div className="submit_work_btn">
                  <button
                    onClick={() =>
                      setPopup(
                        <SubmitWorkForPaymentPopup
                          popup={setPopup}
                          setLoading={setLoading}
                        />
                      )
                    }
                  >
                    Submit Work
                  </button>
                  <button
                    onClick={() =>
                      setPopup(
                        <ResubmitRevision
                          popup={setPopup}
                          setLoading={setLoading}
                        />
                      )
                    }
                  >
                    Resubmit Revision
                  </button>
                  <button
                    onClick={() =>
                      setPopup(
                        <AddMilestonePopup
                          popup={setPopup}
                          setLoading={setLoading}
                          afterSuccess={afterSuccess}
                        />
                      )
                    }
                  >
                    Add Milestone
                  </button>
                </div>
              </div>
            </div>
          </> */}
        </div>
      </Col>
    </>
  );
};

export default TimeLine;

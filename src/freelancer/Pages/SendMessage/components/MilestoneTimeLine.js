import React from "react";
import { Col, Row } from "react-bootstrap";

const MilestoneTimeLine = () => {
  return (
    <>
      <Col md={7} lg={8}>
        <div className="milestone_timeline">
          <div className="heading">Milestone Timeline</div>
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
            <div className="connecting_line filled_border"></div>
            <div className="about_step">
              <p className="mileTimeSubHead">Show all completed</p>
            </div>
          </div>
          <div className="progress_steps" id="progress_step2">
            <div className="fill_ filled_background">2</div>
            <div className="connecting_line filled_border"></div>
            <div className="about_step">
              <div className="milestoneStep2">
                <div className="mileSubHead">Milestone 6</div>
                <div>
                  Once the website is live done and the code submit to the
                  client
                </div>
              </div>
              <div className="pending_btn">
                <span className="pendingBalance"> $1200.00 </span>
                <button>Pending</button>
              </div>
              Chris hasn't paid for this milestone yet. Make sure the milestone
              is funded before starting the work.
              <div className="submit_work_btn">
                <button>Submit Work</button>
              </div>
            </div>
          </div>
          <div className="progress_steps" id="progress_step3">
            <div className="fill_">3</div>
            <div className="about_step">
              <p className="bugsProcess">Small problem + Bugs fixed</p>
              Due Dec 25
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default MilestoneTimeLine;

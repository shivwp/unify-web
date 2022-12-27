import React from "react";
import { Col, Form } from "react-bootstrap";

const ProjectTimeLine = () => {
  return (
    <>
      <Col md={7} lg={8}>
        <div className="milestone_timeline">
          <div className="heading">Project Timeline</div>
          <div className="progress_steps" id="progress_step1">
            <div className="fill_ filled_background">
              {" "}
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
              <p>Order Placed</p>1 min Ago
              <div className="paid_btn">
                <button>Paid</button>
              </div>
            </div>
          </div>
          <div className="progress_steps" id="progress_step2">
            <div className="fill_ filled_background">2</div>
            <div className="connecting_line "></div>
            <div className="about_step">
              <p>Wendy Submits the requirements</p>
              <p className="project_cancle_error">
                Not Submitted within 48 hours. order cancelled.
              </p>
            </div>
          </div>
          <div className="progress_steps" id="progress_step3">
            <div className="fill_">3</div>
            <div className="connecting_line "></div>
            <div className="about_step">
              <p>Shiv Kumar Complete the work </p>
              <div className="is_completed_steps">
                <div>
                  <Form.Check aria-label="option 1" />
                  Requirement Gathering
                </div>
                <div>
                  <Form.Check aria-label="option 2" />
                  Designing
                </div>
                <div>
                  <Form.Check aria-label="option 2" />
                  Development
                </div>
                <div>
                  <Form.Check aria-label="option 2" />
                  Optimization and secure
                </div>
                <div>
                  <Form.Check aria-label="option 2" />
                  Review and bug fixing
                </div>
                <div>
                  <Form.Check aria-label="option 2" />
                  Deployment and delivery
                </div>
              </div>

              {/* <div className="active_and_paid_btn">
                <button>Active & Paid</button>
              </div>
              <div className="submit_work_btn">
                <button>Submit Work</button>
              </div> */}
            </div>
          </div>
          <div className="progress_steps" id="progress_step4">
            <div className="connecting_line "></div>
            <div className="fill_">4</div>
            <div className="about_step">
              <p>Wandy reviews and approves the work </p>
            </div>
          </div>
          <div className="progress_steps" id="progress_step5">
            <div className="fill_">5</div>
            <div className="about_step">
              <p>Project Completed </p>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ProjectTimeLine;

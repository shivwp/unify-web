import React from "react";
import { Col, Form } from "react-bootstrap";

const ProjectTimeLine = () => {
  return (
    <>
      <Col md={7} lg={8}>
        <div className="milestone_timeline">
          <div className="heading">Project Timeline</div>
          <div className="progress_steps" id="progress_step1">
            <div className="fill_ filled_background">1</div>
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

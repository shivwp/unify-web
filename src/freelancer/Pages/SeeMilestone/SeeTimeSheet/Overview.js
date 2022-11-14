import React from "react";
import { Col, ProgressBar, Row } from "react-bootstrap";

const Overview = () => {
  return (
    <>
      <Row>
        <Col md={7} lg={8}>
          <Col lg={12}>
            <div className="milestone_overview_left">
              <div className="top_btns">
                <div>
                  To-dos <input type="checkbox" />
                </div>
                <div className="new_overview_btn">
                  <button>
                    <span>+</span>
                    <span>New</span>
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={12}>
            <div className="milestone_overview_left">
              <div className="top_btns">
                <div>Recent Files</div>
                <div className="new_overview_btn">
                  <button style={{ minWidth: 40, margin: "0 15px" }}>
                    <i class="fa fa-history" aria-hidden="true"></i>
                  </button>
                  <label htmlFor="milestone_recent_file_inp">
                    <button style={{ minWidth: 120 }}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-upload"
                          viewBox="0 0 16 16"
                        >
                          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                          <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                        </svg>
                      </span>
                      <span>Upload</span>
                    </button>
                    <input
                      type="file"
                      id="milestone_recent_file_inp"
                      style={{
                        width: 0,
                        height: 0,
                        display: "none",
                        position: "absolute",
                      }}
                    />
                  </label>
                </div>
              </div>
              <div className="file_mngr_icon">
                
              </div>
            </div>
          </Col>
        </Col>
        <Col md={5} lg={4}>
          <div className="milestone_overview_right">
            <div className="top_heading">Hours This Week</div>
            <div className="timesheet_time">
              <span style={{ fontSize: 20 }}>6.00 hrs</span>
              <div className="timesheet_progress">
                <ProgressBar variant="success" now={20} />
              </div>
              <span style={{ fontSize: 14, color: "#979797" }}>
                40 hrs limit
              </span>
            </div>
            <div className="timesheet_msg">
              You will get paid for these hours on Monday (Upwork's billing
              timezone) <span>Learn More</span>
            </div>
            <div className="timesheet_btns">
              <button className="timesheet_btn1">Open Time Tracker</button>
              <button className="timesheet_btn2">Add Time Manually</button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "20px 0",
                cursor: "pointer",
              }}
            >
              View Timesheet
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Overview;

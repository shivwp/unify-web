import React from "react";
import { Col, ProgressBar } from "react-bootstrap";

const HoursThisWeek = () => {
  return (
    <>
      <Col md={5} lg={4}>
        <div className="milestone_overview_right">
          <div className="top_heading">Hours This Week</div>
          <div className="timesheet_time">
            <span style={{ fontSize: 20 }}>6.00 hrs</span>
            <div className="timesheet_progress">
              <ProgressBar>
                <ProgressBar striped variant="success" now={35} key={1} />
                <ProgressBar variant="warning" now={20} key={2} />
                <ProgressBar striped variant="danger" now={10} key={3} />
              </ProgressBar>
            </div>
            <span style={{ fontSize: 14, color: "#979797" }}>40 hrs limit</span>
          </div>
          <div className="timesheet_msg">
            You will get paid for these hours on Monday (Unify's billing
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
    </>
  );
};

export default HoursThisWeek;

import React from "react";
import { Col, ProgressBar } from "react-bootstrap";

const HoursThisWeek = ({ setPopup, setCurrentTab, singleContractData }) => {
  function totalSeconds(time) {
    var parts = time?.split(":");
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }

  return (
    <>
      <Col md={12} lg={12}>
        <div className="milestone_overview_right">
          <div className="top_heading">Hours This Week</div>
          <div className="timesheet_time">
            <span style={{ fontSize: 20 }}>
              {singleContractData?.hours_this_week} hrs
            </span>
            <div className="timesheet_progress">
              <ProgressBar
                striped
                variant="success"
                now={(
                  (totalSeconds(singleContractData?.hours_this_week) /
                    totalSeconds(singleContractData?.weekly_limit)) *
                  100
                )?.toFixed(2)}
                key={1}
              />
            </div>
            <span style={{ fontSize: 14, color: "#979797" }}>40 hrs limit</span>
          </div>
          <div className="timesheet_msg">
            You will get paid for these hours on Monday (Unify's billing
            timezone) <span>Learn More</span>
          </div>

          <div
            className="see_timeshee_botton"
            onClick={() => setCurrentTab("TIMESHEET")}
          >
            View Timesheet
          </div>
        </div>
      </Col>
    </>
  );
};

export default HoursThisWeek;

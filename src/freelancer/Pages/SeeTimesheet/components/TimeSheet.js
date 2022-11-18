import React from "react";
import { Col, Row, ProgressBar } from "react-bootstrap";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";

const TimeSheet = () => {
  return (
    <>
      <Row>
        <Col md={9}>
          <div className="timesheet">
            <div className="timesheet_times">
              <div className="timesheet_time">
                <span className="headings">Last 24 hours</span>
                <span>0.00 hrs</span>
              </div>
              <div className="timesheet_time">
                <span className="headings">This Week</span>
                <span>0.00 hrs</span>
                <span className="time_limit">Of 40 hrs limit</span>
              </div>
              <div className="timesheet_time">
                <span className="headings">Last Week </span>
                <span>0.00 hrs</span>
              </div>
              <div className="timesheet_time">
                <span className="headings">Since start </span>
                <span>0.00 hrs</span>
              </div>
            </div>
          </div>
        </Col>
        <Col md={9}>
          <div className="timesheet">
            <div className="work_diary">
              <div className="heading_and_btn">
                <span>Work Diary</span>
                <button>Add Time</button>
              </div>
              <Row>
                <Col lg={4}>
                  <div className="get_date_range">
                    <DateRangePicker
                      initialSettings={{
                        startDate: new Date(),
                        endDate: new Date(),
                      }}
                    >
                      <input type="text" className="form-control col-4" />
                    </DateRangePicker>
                  </div>
                </Col>
                <Col lg={8}>
                  <div
                    className="get_datesheet_time"
                    style={{
                      borderLeft: "1px solid rgb(187, 186, 186)",
                      paddingLeft: 20,
                    }}
                  >
                    <div className="heading">Nov 14 -Nov 20</div>
                    <div className="day_timesheet">
                      <span>Mon 11/14</span>
                      <div className="progress_timesheet">
                        <ProgressBar
                          striped
                          variant="success"
                          now={35}
                          key={1}
                        />
                      </div>
                      <span>0.00 hrs</span>
                      <span> &#62;</span>
                    </div>
                    <div className="day_timesheet">
                      <span>Mon 11/15</span>
                      <div className="progress_timesheet">
                        <ProgressBar
                          striped
                          variant="success"
                          now={0}
                          key={1}
                        />
                      </div>
                      <span>0.00 hrs</span>
                      <span> &#62;</span>
                    </div>
                    <div className="day_timesheet">
                      <span>Mon 11/16</span>
                      <div className="progress_timesheet">
                        <ProgressBar
                          striped
                          variant="success"
                          now={0}
                          key={1}
                        />
                      </div>
                      <span>0.00 hrs</span>
                      <span> &#62;</span>
                    </div>
                    <div className="day_timesheet">
                      <span>Mon 11/17</span>
                      <div className="progress_timesheet">
                        <ProgressBar
                          striped
                          variant="success"
                          now={0}
                          key={1}
                        />
                      </div>
                      <span>0.00 hrs</span>
                      <span> &#62;</span>
                    </div>
                    <div className="day_timesheet">
                      <span>Mon 11/18</span>
                      <div className="progress_timesheet">
                        <ProgressBar
                          striped
                          variant="success"
                          now={0}
                          key={1}
                        />
                      </div>
                      <span>0.00 hrs</span>
                      <span> &#62;</span>
                    </div>
                  </div>
                  <div className="timesheet_tracked">
                    <div className="tracked">
                      <span className="heading">Tracked</span>
                      <span>0.00 hrs</span>
                    </div>
                    <div className="tracked">
                      <span className="heading">Manual</span>
                      <span>0.00 hrs</span>
                    </div>
                    <div className="tracked">
                      <span className="heading">Over limit</span>
                      <span>0.00 hrs</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default TimeSheet;

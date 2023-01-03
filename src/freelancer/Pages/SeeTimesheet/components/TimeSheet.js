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
              </div>
              <Row>
                <Col lg={12}>
                  <div className="get_datesheet_time">
                    <div className="heading">Nov 14 -Nov 20</div>
                    <div className="day_timesheet">
                      <span>Mon 14/11</span>
                      {/* <span>0.00 hrs</span> */}
                      <input
                        type="number"
                        className="timesheet_time_input"
                        placeholder="00.00"
                      />
                      <button className="time_sheet_time_btn">Save</button>
                    </div>
                    <div className="day_timesheet">
                      <span>Mon 15/11</span>

                      <span>0.00 hrs</span>
                      <button className="time_sheet_time_btn">Add Time</button>
                    </div>
                    <div className="day_timesheet">
                      <span>Mon 16/11</span>

                      <span>0.00 hrs</span>
                      <button className="time_sheet_time_btn">Edit Time</button>
                    </div>
                    <div className="day_timesheet">
                      <span>Mon 17/11</span>

                      <span>0.00 hrs</span>
                      <button className="time_sheet_time_btn">Edit Time</button>
                    </div>
                    <div className="day_timesheet">
                      <span>Mon 18/11</span>

                      <span>0.00 hrs</span>
                      <button className="time_sheet_time_btn">Edit Time</button>
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

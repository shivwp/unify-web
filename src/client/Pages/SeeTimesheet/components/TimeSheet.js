import React, { useEffect, useState } from "react";
import { Col, Row, ProgressBar } from "react-bootstrap";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import CustomeDateRangePicker from "../../../../components/CustomeDateRangePicker/CustomeDateRangePicker";
import { useDispatch, useSelector } from "react-redux";
import {
  AddTimeSheetTime,
  getContractTimesheet,
} from "../../../../redux/actions/jobActions";
import { useParams } from "react-router-dom";

const TimeSheet = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [timeInput, setTimeInput] = useState(false);
  const addTimesheetTime = useSelector((state) => state?.job?.addTimesheetTime);
  const getTimeSheet = useSelector((state) => state?.job?.getTimeSheet);

  useEffect(() => {
    dispatch(
      getContractTimesheet({
        id,
        start_date: "2023-01-03",
        end_date: "2023-01-04",
      })
    );
  }, [addTimesheetTime]);

  let data = [
    { id: 1, date: "12-02-2023", hours: "00" },
    { id: 2, date: "13-02-2023", hours: "00" },
    { id: 3, date: "14-02-2023", hours: "00" },
    { id: 4, date: "15-02-2023", hours: "00" },
    { id: 5, date: "16-02-2023", hours: "00" },
    { id: 6, date: "17-02-2023", hours: "00" },
    { id: 7, date: "18-02-2023", hours: "00" },
  ];

  const SelectedDates = (e, picker) => {
    console.log(e);
    console.log(picker);
  };

  const onAddTimeInTimesheet = () => {
    setTimeInput(false);
    console.log("object");
    // const data = {
    //   contract_id,
    //   date,
    //   hours,
    // };
    // dispatch(AddTimeSheetTime(data));
  };

  return (
    <>
      <Row>
        <Col lg={9}>
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
        <Col lg={9}>
          <div className="timesheet">
            <div className="work_diary">
              <div className="heading_and_btn">
                <span>Work Diary</span>
                <div className="get_date_range">
                  <DateRangePicker
                    onApply={SelectedDates}
                    initialSettings={{
                      startDate: new Date(),
                      endDate: new Date(),
                    }}
                  >
                    <input type="text" className="form-control col-4" />
                  </DateRangePicker>
                  {/* <CustomeDateRangePicker /> */}
                </div>
              </div>
              <Row>
                <Col lg={12}>
                  <div className="get_datesheet_time">
                    <div className="heading">Nov 14 -Nov 20</div>
                    {getTimeSheet?.map((item, index) => (
                      <div className="day_timesheet" key={index}>
                        <span>{item?.date}</span>
                        {/* <span>0.00 hrs</span> */}
                        {timeInput == item.id ? (
                          <input
                            type="number"
                            className="timesheet_time_input"
                            placeholder="00.00"
                          />
                        ) : (
                          <span>{item.hours}</span>
                        )}
                        {timeInput == item.id ? (
                          <button
                            className="time_sheet_time_btn"
                            onClick={onAddTimeInTimesheet}
                          >
                            Save
                          </button>
                        ) : (
                          <button
                            className="time_sheet_time_btn"
                            onClick={() => setTimeInput(item.id)}
                          >
                            Add Time
                          </button>
                        )}
                      </div>
                    ))}
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

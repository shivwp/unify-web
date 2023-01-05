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
import moment from "moment";

const TimeSheet = ({ setLoading, setPopup }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [selectedWeek, setSelectedWeek] = useState(false);
  const [timeInput, setTimeInput] = useState(false);
  const addTimesheetTime = useSelector((state) => state?.job?.addTimesheetTime);
  const getTimeSheet = useSelector((state) => state?.job?.getTimeSheet);
  const [errors, setErrors] = useState(false);
  const [values, setValues] = useState({});

  useEffect(() => {
    setLoading(true);
    const data = {
      contract_id: id,
      start_date: moment(selectedWeek?.first_date).format("YYYY-MM-DD"),
      end_date: moment(selectedWeek?.last_date).format("YYYY-MM-DD"),
    };
    dispatch(getContractTimesheet(data, setLoading));
  }, [addTimesheetTime, selectedWeek]);

  useEffect(() => {
    setValues(
      getTimeSheet?.map((item) => {
        return {
          hours: item.hours.split(":")[0],
          minuts: item.hours.split(":")[1],
        };
      })
    );
  }, [getTimeSheet]);

  console.log(addTimesheetTime);
  const onAddTimeInTimesheet = (date) => {
    let errorExist = false;
    let errorsObject = {};

    if (!values?.hours || values.hours == "" || values.hours == undefined) {
      errorExist = true;
      errorsObject.hours = "Hours field is required";
    } else if (values?.hours > 24) {
      errorExist = true;
      errorsObject.hours = "Hours can't be more then 24 hours in one day";
    } else if (values.hours < 0) {
      errorExist = true;
      errorsObject.hours = "Hours can't be less then 0";
    } else if (
      !values?.minuts ||
      values.minuts == "" ||
      values.minuts == undefined
    ) {
      errorExist = true;
      errorsObject.hours = "Minuts field is required";
    } else if (values?.minuts > 60) {
      errorExist = true;
      errorsObject.hours = "Minuts can't be more then 60 minuts in one day";
    } else if (values.minuts < 0) {
      errorExist = true;
      errorsObject.hours = "Minuts can't be less then 0";
    }

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }
    setLoading(true);
    setLoading(true);
    const data = {
      contract_id: id,
      date,
      hours: `${values?.hours}:${values.minuts}`,
    };
    dispatch(AddTimeSheetTime(data, setLoading, setPopup));
  };

  const getFullWeek = (dates) => {
    console.log(dates);
    // setSelectedWeek(dates);
  };

  const handleOnChange = (e, i) => {
    setValues((values[i][e.target.name] = e.target.value));
    setErrors({ hours: false });
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
                  <CustomeDateRangePicker weeksAllDays={getFullWeek} />
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
                        {timeInput === item.date ? (
                          <div>
                            <div>
                              <input
                                type="number"
                                name="hours"
                                className="timesheet_time_input"
                                placeholder="Hours"
                                value={values[index].hours}
                                onChange={(e) => handleOnChange(e, index)}
                              />
                              <input
                                type="number"
                                name="minuts"
                                className="timesheet_time_input"
                                placeholder="Minute"
                                value={values[index].minuts}
                                onChange={(e) => handleOnChange(e, index)}
                              />
                            </div>
                            <div>
                              <span
                                className="signup-error"
                                style={{ fontSize: "16px !important" }}
                              >
                                {errors.hours && errors.hours}
                              </span>
                            </div>
                          </div>
                        ) : (
                          <span>{item.hours}</span>
                        )}
                        {item.date > moment(new Date()).format("YYYY-MM-DD") ? (
                          <button className="time_sheet_time_btn" disabled>
                            Add Time
                          </button>
                        ) : timeInput === item.date ? (
                          <button
                            className="time_sheet_time_btn"
                            onClick={() => onAddTimeInTimesheet(item.date)}
                          >
                            Save
                          </button>
                        ) : (
                          <button
                            className="time_sheet_time_btn"
                            onClick={() => setTimeInput(item.date)}
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

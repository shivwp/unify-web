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

  const [currentWeekStartDate, setCurrentWeekStartDate] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState(false);
  const [timeInput, setTimeInput] = useState(false);
  const addTimesheetTime = useSelector((state) => state?.job?.addTimesheetTime);
  const getTimeSheet = useSelector((state) => state?.job?.getTimeSheet);
  const [errors, setErrors] = useState(false);
  const [values, setValues] = useState({});

  useEffect(() => {
    setLoading(true);
    let data = selectedWeek
      ? {
          contract_id: id,
          start_date: moment(selectedWeek?.start_date).format("YYYY-MM-DD"),
          end_date: moment(selectedWeek?.end_date).format("YYYY-MM-DD"),
        }
      : {
          contract_id: id,
        };
    dispatch(getContractTimesheet(data, setLoading, setPopup));
  }, [addTimesheetTime, selectedWeek]);

  useEffect(() => {
    setValues(
      getTimeSheet?.all?.map((item) => {
        return {
          hours: item.hours.split(":")[0],
          minuts: item.hours.split(":")[1],
          date: item.date,
        };
      })
    );
  }, [getTimeSheet]);

  const onAddTimeInTimesheet = (date) => {
    let errorExist = false;
    let errorsObject = {};
    const index = values.findIndex((ele) => ele.date == timeInput);

    if (
      !values[index]?.hours ||
      values[index].hours == "" ||
      values[index].hours == undefined
    ) {
      errorExist = true;
      errorsObject.hours = "Hours field is required";
    } else if (values[index]?.hours > 24) {
      errorExist = true;
      errorsObject.hours = "Hours can't be more then 24 hours in one day";
    } else if (values[index].hours < 0) {
      errorExist = true;
      errorsObject.hours = "Hours can't be less then 0";
    } else if (
      !values[index]?.minuts ||
      values[index].minuts == "" ||
      values[index].minuts == undefined
    ) {
      errorExist = true;
      errorsObject.hours = "Minuts field is required";
    } else if (values[index]?.minuts > 60) {
      errorExist = true;
      errorsObject.hours = "Minuts can't be more then 60 minuts in one day";
    } else if (values[index].minuts < 0) {
      errorExist = true;
      errorsObject.hours = "Minuts can't be less then 0";
    }

    console.log(`${values[index]?.hours}:${values[index].minuts}`);

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }
    setLoading(true);
    setLoading(true);
    const data = {
      contract_id: id,
      date,
      hours: `${
        values[index]?.hours?.length < 2
          ? `0${values[index].hours}`
          : values[index]?.hours
      }:${
        values[index]?.minuts?.length < 2
          ? `0${values[index].minuts}`
          : values[index]?.minuts
      }`,
    };
    dispatch(AddTimeSheetTime(data, setTimeInput, setLoading, setPopup));
  };

  const weekSelect = (dates) => {
    console.log(dates);
    setSelectedWeek(dates);
  };

  const handleOnChange = (e, i) => {
    const list = [...values];
    const next = e.target.tabIndex - 2;
    if (e.target.value.length < 3) {
      list[i][e.target.name] = e.target.value;
      setValues(list);
      setErrors({ hours: false });
    }
    if (e.target.name == "hours") {
      if (e.target.value.length > 1) {
        document.getElementById("minuts").focus();
        list[i][e.target.name] = e.target.value;
        setValues(list);
        setErrors({ hours: false });
      }
    }
  };

  const currentWeekStart = (date) => {
    console.log(date);
    setCurrentWeekStartDate(date.first_date);
  };

  return (
    <>
      <Row>
        <Col lg={9}>
          <div className="timesheet">
            <div className="timesheet_times">
              <div className="timesheet_time">
                <span className="headings">Yesterday</span>
                <span>{getTimeSheet?.yesterday} hrs</span>
              </div>
              <div className="timesheet_time">
                <span className="headings">This Week</span>
                <span>{getTimeSheet?.this_week} hrs</span>
                <span className="time_limit">
                  Of {getTimeSheet?.weekelyLimit} hrs limit
                </span>
              </div>
              <div className="timesheet_time">
                <span className="headings">Last Week </span>
                <span>{getTimeSheet?.last_week} hrs</span>
              </div>
              <div className="timesheet_time">
                <span className="headings">Since start </span>
                <span>{getTimeSheet?.since_start} hrs</span>
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
                  <CustomeDateRangePicker
                    // dateSelect={dateSelect}
                    // dateRangeSelect={dateRangeSelect}
                    weekSelect={weekSelect}
                    // fullWeekSelect={fullWeekSelect}
                    currentWeekSelect={currentWeekStart}
                  />
                </div>
              </div>
              <Row>
                <Col lg={12}>
                  <div className="get_datesheet_time">
                    <div className="heading">Nov 14 -Nov 20</div>
                    {getTimeSheet?.all?.map((item, index) => (
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
                                id="hours"
                                tabIndex={1}
                                placeholder="Hours"
                                value={values[index].hours}
                                onChange={(e) => handleOnChange(e, index)}
                              />
                              <input
                                type="number"
                                name="minuts"
                                id="minuts"
                                tabIndex={2}
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
                        ) : moment(currentWeekStartDate).format("YYYY-MM-DD") >
                          item.date ? (
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

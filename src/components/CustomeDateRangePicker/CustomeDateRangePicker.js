import React from "react";
import { useState } from "react";
import "./CustomeDateRangePicker.css";

const CustomeDateRangePicker = () => {
  const [showCal, setShowCal] = useState(false);
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDate = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const currentFullDate = `${
    currentDate < 10 ? `0${currentDate}` : currentDate
  }-${
    currentMonth < 10 ? `0${currentMonth + 1}` : currentMonth + 1
  }-${currentYear}`;

  const getAllDaysInMonth = (month, year) => {
    const dayInMonth = {
      January: 31,
      February: 28,
      March: 31,
      April: 30,
      May: 31,
      June: 30,
      July: 31,
      August: 31,
      September: 30,
      October: 31,
      November: 30,
      December: 31,
    };

    const AllDays = [];
    for (let i = 1; i <= dayInMonth[month]; i++) {
      AllDays.push(i);
    }
    return AllDays;
  };

  console.log(getAllDaysInMonth("January"));
  return (
    <>
      <div className="date_inp">
        <input
          type="text"
          onFocus={() => setShowCal(true)}
          onBlur={() => setShowCal(false)}
        />
        <div className={`calender ${!showCal ? "hide_calender" : ""}`}>
          <div className="selected_months">
            <span>&lt;</span>
            <span>July 2022</span>
            <span>&gt;</span>
          </div>
          <div className="days">
            {getAllDaysInMonth("January")?.map((item) => (
              <div className="day">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomeDateRangePicker;

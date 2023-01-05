import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./CustomeDateRangePicker.css";
import $ from "jquery";

const CustomeDateRangePicker = ({ getFullWeek, dateRange }) => {
  const [showCal, setShowCal] = useState(false);
  const [changeOnlyYear, setChangeOnlyYear] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());
  const [activeDates, setActiveDates] = useState([]);

  // months name
  const months = [
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

  // days in months
  const dayInMonth = {
    January: 31,
    February: selectedYear % 4 ? 28 : 29,
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

  // weeks name
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useMemo(() => {
    if (getFullWeek) {
      const activeD = [];

      // get previous month
      const prevMonth = () => {
        let prev;
        if (selectedMonth < 1) {
          prev = 11;
        } else {
          prev = selectedMonth - 1;
        }
        return prev;
      };

      // day in next month
      const nextMonth = () => {
        let next;
        if (selectedMonth < 11) {
          next = selectedMonth + 1;
        } else {
          next = 0;
        }
        return next;
      };

      // week's first and last day start
      var firstOfWeek =
        new Date(
          `${selectedDate} ${months[selectedMonth]}, ${selectedYear}`
        ).getDate() -
        new Date(
          `${selectedDate} ${months[selectedMonth]}, ${selectedYear}`
        ).getDay();
      var lastofWeek = firstOfWeek + 6;
      // week's first and last day end

      // checking if first date is not in negative
      if (lastofWeek < 7) {
        console.log("object1");
        for (
          let j =
            dayInMonth[months[prevMonth()]] -
            new Date(
              `${1} ${months[selectedMonth]}, ${selectedYear}`
            ).getDay() +
            1;
          j <= dayInMonth[months[prevMonth()]];
          j++
        ) {
          const previousMonth = months[prevMonth()];
          activeD.push({ day: j, month: previousMonth });
        }
        for (let i = firstOfWeek; i <= lastofWeek; i++) {
          console.log("object2");
          activeD.push({ day: i, month: months[selectedMonth] });
        }
      } else {
        if (lastofWeek > dayInMonth[months[selectedMonth]]) {
          console.log("object3");
          let last = lastofWeek - dayInMonth[months[selectedMonth]];

          for (
            let i = firstOfWeek;
            i <= dayInMonth[months[selectedMonth]];
            i++
          ) {
            activeD.push({ day: i, month: months[selectedMonth] });
          }
          for (let i = 1; i <= last; i++) {
            activeD.push({ day: i, month: months[nextMonth()] });
          }
        } else {
          for (let i = firstOfWeek; i <= lastofWeek; i++) {
            activeD.push({ day: i, month: months[selectedMonth] });
          }
        }
      }
      setActiveDates(activeD);
      getFullWeek({
        first_date: `${activeD[0].day} ${activeD[0].month} ${selectedYear}`,
        last_date: `${activeD[activeD.length - 1].day} ${
          activeD[activeD.length - 1].month
        } ${selectedYear}`,
      });
    }
  }, [selectedDate, selectedMonth, selectedYear]);

  // get selected full date
  useEffect(() => {
    setSelectedDay(
      new Date(
        `${selectedDate} ${months[selectedMonth]}, ${selectedYear}`
      ).getDay()
    );
  }, [selectedDate, selectedMonth, selectedYear]);

  const selectedFullDate = `${selectedDate} ${months[selectedMonth]}, ${selectedYear}`;

  // get All days in month
  const getAllDaysInMonth = (selectedM, year) => {
    const AllDays = [];

    if (dayInMonth[months[selectedMonth]] < selectedDate) {
      setSelectedDate(dayInMonth[months[selectedMonth]]);
    }

    // day in prev month
    const prevMonth = () => {
      let prev;
      if (selectedMonth < 1) {
        prev = 11;
      } else {
        prev = selectedMonth - 1;
      }
      return prev;
    };
    // day in next month
    const nextMonth = () => {
      let next;
      if (selectedMonth < 11) {
        next = selectedMonth + 1;
      } else {
        next = 0;
      }
      return next;
    };

    // prev month days
    for (
      let j =
        dayInMonth[months[prevMonth()]] -
        new Date(`${1} ${months[selectedMonth]}, ${selectedYear}`).getDay() +
        1;
      j <= dayInMonth[months[prevMonth()]];
      j++
    ) {
      AllDays.push({ cls: "prev", day: j, m: months[prevMonth()] });
    }

    // current month days
    for (let i = 1; i <= dayInMonth[months[selectedMonth]]; i++) {
      AllDays.push({ cls: "current", day: i, m: months[selectedMonth] });
    }

    if (AllDays.length > 35) {
      var nextM = 42 - AllDays.length;
    } else {
      var nextM = 35 - AllDays.length;
    }

    // next month days
    for (let k = 1; k <= nextM; k++) {
      AllDays.push({ cls: "next", day: k, m: months[nextMonth()] });
    }
    return AllDays;
  };

  // get next month
  const getNextMonth = (selected) => {
    if (selected < 11) {
      setSelectedMonth(selected + 1);
    } else {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    }
  };

  // get prev month
  const getPrevMonth = (selected) => {
    if (selected > 0) {
      setSelectedMonth(selected - 1);
    } else {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    }
  };

  // select date
  const DateSelect = (day, month) => {
    setSelectedDate(day);

    if (month == "prev") {
      if (selectedMonth < 1) {
        setSelectedMonth(11);
        setSelectedYear(selectedYear - 1);
      } else {
        setSelectedMonth(selectedMonth - 1);
      }
    }
    if (month == "next") {
      if (selectedMonth < 11) {
        setSelectedMonth(selectedMonth + 1);
      } else {
        setSelectedMonth(0);
        setSelectedYear(selectedYear + 1);
      }
    }
  };
  // get next year
  const getNextYear = (year) => {
    setSelectedYear(selectedYear + 1);
  };

  // get prev year
  const getPrevYear = (year) => {
    setSelectedYear(selectedYear - 1);
  };

  $(document).mouseup(function (e) {
    if ($(e.target).closest("#calender_input, #calender").length === 0) {
      setShowCal(false);
    }
  });

  return (
    <>
      <div className="date_inp">
        <input
          type="text"
          id="calender_input"
          value={selectedFullDate}
          onFocus={() => setShowCal(true)}
        />
        <div
          id="calender"
          className={`calender ${!showCal ? "hide_calender" : ""}`}
        >
          {changeOnlyYear ? (
            <div className="selected_months">
              <span className="prevBtn" onClick={() => getPrevYear()}>
                &lt;
              </span>
              <span
                onClick={() => {
                  setChangeOnlyYear(false);
                }}
              >
                {selectedYear}
              </span>
              <span
                className="nextBtn"
                onClick={() => getNextYear(selectedMonth)}
              >
                &gt;
              </span>
            </div>
          ) : (
            <div className="selected_months">
              <span
                className="prevBtn"
                onClick={() => getPrevMonth(selectedMonth)}
              >
                &lt;
              </span>
              <span>
                {months[selectedMonth]}{" "}
                <span
                  onClick={() => {
                    setChangeOnlyYear(true);
                  }}
                >
                  {selectedYear}
                </span>
              </span>
              <span
                className="nextBtn"
                onClick={() => getNextMonth(selectedMonth)}
              >
                &gt;
              </span>
            </div>
          )}
          <div className="week_days">
            {weekDays?.map((item, index) => (
              <div
                className={`week_day ${
                  index == selectedDay ? "dayActive" : ""
                } `}
              >
                {item.charAt(0)}
              </div>
            ))}
          </div>
          <div className="days">
            {getAllDaysInMonth()?.map((item) => (
              <div
                onClick={() => {
                  item.cls == "prev"
                    ? DateSelect(item.day, "prev")
                    : item.cls == "next"
                    ? DateSelect(item.day, "next")
                    : DateSelect(item.day, "current");
                }}
                className={`day ${item.cls} ${
                  activeDates?.find(
                    (ele) => ele.day == item.day && ele.month == item.m
                  )
                    ? "WeekActive"
                    : item.day == selectedDate
                    ? "dateActive"
                    : ""
                } `}
              >
                {item.day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomeDateRangePicker;

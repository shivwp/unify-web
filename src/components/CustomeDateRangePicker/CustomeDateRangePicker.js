import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import "./CustomeDateRangePicker.css";
import $ from "jquery";
import { useEffect } from "react";

// Functions that needs to pass in props
// 1. getDate, if need only selected date
// 2. getFullWeek, if need only start date and end date
// 3. weeksAllDays, if need all dates of week
// 4. dateRange, if need start_date and end date of selected date range - pending
// 5. currentWeekStart, if need start date of current week

const CustomeDateRangePicker = ({
  getFullWeek,
  getDate,
  weeksAllDays,
  currentWeekStart,
}) => {
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

  const currentDate = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const [showCal, setShowCal] = useState(false);
  const [changeOnlyYear, setChangeOnlyYear] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());
  const [activeDates, setActiveDates] = useState([]);

  // return selected date and get week name  from date
  const selectedFullDate = useMemo(() => {
    // set week name in state
    setSelectedDay(
      new Date(
        `${selectedDate} ${months[selectedMonth]}, ${selectedYear}`
      ).getDay()
    );
    // returning selected date
    return `${selectedDate} ${months[selectedMonth]}, ${selectedYear}`;
  }, [selectedDate, selectedMonth, selectedYear]);

  // sending selected date
  if (getDate) {
    getDate(selectedFullDate);
  }

  // number of days in months
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

  // get previous month of selected month
  const prevMonth = (month) => {
    if (month < 1) {
      return 11;
    } else {
      return month - 1;
    }
  };

  // day in next month of selected month
  const nextMonth = (month) => {
    if (month < 11) {
      return month + 1;
    } else {
      return 0;
    }
  };

  // get Full Week,
  useEffect(() => {
    if (getFullWeek || weeksAllDays) {
      const activeD = [];

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
        for (
          let j =
            dayInMonth[months[prevMonth(selectedMonth)]] -
            new Date(
              `${1} ${months[selectedMonth]}, ${selectedYear}`
            ).getDay() +
            1;
          j <= dayInMonth[months[prevMonth(selectedMonth)]];
          j++
        ) {
          const previousMonth = months[prevMonth(selectedMonth)];
          activeD.push({ day: j, month: previousMonth });
        }
        for (let i = firstOfWeek; i <= lastofWeek; i++) {
          activeD.push({ day: i, month: months[selectedMonth] });
        }
      } else {
        if (lastofWeek > dayInMonth[months[selectedMonth]]) {
          let last = lastofWeek - dayInMonth[months[selectedMonth]];

          for (
            let i = firstOfWeek;
            i <= dayInMonth[months[selectedMonth]];
            i++
          ) {
            activeD.push({ day: i, month: months[selectedMonth] });
          }
          for (let i = 1; i <= last; i++) {
            activeD.push({ day: i, month: months[nextMonth(selectedMonth)] });
          }
        } else {
          for (let i = firstOfWeek; i <= lastofWeek; i++) {
            activeD.push({ day: i, month: months[selectedMonth] });
          }
        }
      }

      // active date to show in calender
      setActiveDates(activeD);

      // sending only start date and end date
      if (getFullWeek) {
        getFullWeek({
          first_date: `${activeD[0].day} ${activeD[0].month} ${selectedYear}`,
          last_date: `${activeD[activeD.length - 1].day} ${
            activeD[activeD.length - 1].month
          } ${selectedYear}`,
        });
      }
      // sending all days from start date to end date
      else if (weeksAllDays) {
        weeksAllDays(
          activeD.map(
            (item, index) =>
              `${activeD[index].day} ${activeD[index].month} ${selectedYear}`
          )
        );
      }
    }
  }, [selectedDate, selectedMonth, selectedYear]);

  // get All days in month
  const getAllDaysInMonth = () => {
    const AllDays = [];

    if (dayInMonth[months[selectedMonth]] < selectedDate) {
      setSelectedDate(dayInMonth[months[selectedMonth]]);
    }

    // prev month's days to show in current month
    for (
      let j =
        dayInMonth[months[prevMonth(selectedMonth)]] -
        new Date(`${1} ${months[selectedMonth]}, ${selectedYear}`).getDay() +
        1;
      j <= dayInMonth[months[prevMonth(selectedMonth)]];
      j++
    ) {
      AllDays.push({
        cls: "prev",
        day: j,
        m: months[prevMonth(selectedMonth)],
      });
    }

    // current month days
    for (let i = 1; i <= dayInMonth[months[selectedMonth]]; i++) {
      AllDays.push({ cls: "current", day: i, m: months[selectedMonth] });
    }

    // get next month's day to show in current month
    if (AllDays.length > 35) {
      var nextM = 42 - AllDays.length;
    } else {
      var nextM = 35 - AllDays.length;
    }

    // next month days
    for (let k = 1; k <= nextM; k++) {
      AllDays.push({
        cls: "next",
        day: k,
        m: months[nextMonth(selectedMonth)],
      });
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
  const DateSelect = (date, month) => {
    setSelectedDate(date);

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

  // hide calender when click outside of calender
  $(document).mouseup(function (e) {
    if ($(e.target).closest("#Acalender_input, #Acalender").length === 0) {
      setShowCal(false);
    }
  });

  useMemo(() => {
    if (currentWeekStart) {
      // week's first and last day start
      var first_date_of_week = new Date().getDate() - new Date().getDay();
      var last_date_of_week = first_date_of_week + 6;
      // week's first and last day end

      // checking if first date is not in negative
      if (last_date_of_week < 7) {
        first_date_of_week =
          dayInMonth[months[prevMonth(currentMonth)]] -
          new Date(`${1} ${months[currentDate]}, ${currentYear}`).getDay() +
          1;
      } else if (last_date_of_week > dayInMonth[months[currentMonth]]) {
        console.log("object");
        last_date_of_week =
          last_date_of_week - dayInMonth[months[currentMonth]];
      }

      first_date_of_week = `${first_date_of_week} ${months[currentMonth]}, ${currentYear}`;
      last_date_of_week = `${last_date_of_week} ${months[currentMonth]}, ${currentYear}`;

      currentWeekStart({
        first_date: first_date_of_week,
        last_date: last_date_of_week,
      });
    }
  }, [currentDate, currentMonth, currentYear]);

  return (
    <>
      <div className="date_inp">
        <input
          type="text"
          id="Acalender_input"
          value={selectedFullDate}
          onFocus={() => setShowCal(true)}
        />
        <div
          id="Acalender"
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
                key={index}
                className={`week_day ${
                  index == selectedDay ? "dayActive" : ""
                } `}
              >
                {item.charAt(0)}
              </div>
            ))}
          </div>
          <div className="days">
            {getAllDaysInMonth()?.map((item, index) => (
              <div
                key={index}
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

import React, { Component } from "react";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";
import classNames from "classnames";

class WeekPicker extends Component {
  constructor(props) {
    super(props);
    const currentMoment = moment();
    this.state = {
      focused: false,
      selectedWorkWeek: currentMoment.isoWeek(),
      selectedYear: currentMoment.year(),
      hoveredDays: this.calculateActiveWeek(currentMoment),
      workWeekMarginLeft: 0
    };
  }

  openPicker = () => {
    if (!this.state.focused) {
      this.setState({
        focused: true
      });
    }
  };

  isDayHighlighted = date => {
    const { hoveredDays } = this.state;
    let isHighlighted = false;
    hoveredDays.forEach(hoveredDay => {
      const isDayOfMonthMatch = hoveredDay.date() === date.date();
      const isMonthMatch = hoveredDay.month() === date.month();
      const isYearMatch = hoveredDay.year() === date.year();
      if (isDayOfMonthMatch && isMonthMatch && isYearMatch) {
        isHighlighted = true;
      }
    });
    return isHighlighted;
  };

  calculateActiveWeek = date => {
    const mon = date.clone().startOf("isoweek");
    const tue = mon.clone().add(1, "d");
    const wed = mon.clone().add(2, "d");
    const thu = mon.clone().add(3, "d");
    const fri = mon.clone().add(4, "d");
    const sat = mon.clone().add(5, "d");
    const sun = mon.clone().add(6, "d");
    return [sun, mon, tue, wed, thu, fri, sat];
  };

  onDateHovered = date => {
    this.setState({
      hoveredDays: this.calculateActiveWeek(date)
    });
  };

  onDateChange = date => {
    const selectedYear = date.year();
    const selectedWorkWeek = date.isoWeek();
    this.setState({
      selectedYear,
      selectedWorkWeek,
      focused: false
    });
  };

  renderCalendarDay = date => {
    const dayClasses = classNames(
      "CalendarDay",
      "CalendarDay__default",
      "CalendarDay_1",
      "CalendarDay__default_2"
    );
    let style = {
      width: "39px",
      height: "38px"
    };
    if (date.day) {
      const dayOfMonth = date.day.date();
      const isHighlighted = this.isDayHighlighted(date.day);
      let style = {
        width: "39px",
        height: "38px",
        backgroundColor: isHighlighted ? "#42a5f5" : "white",
        color: isHighlighted ? "white" : "black"
      };
      return (
        <td
          style={style}
          className={dayClasses}
          onClick={() => this.onDateChange(date.day)}
          onMouseEnter={() => this.onDateHovered(date.day)}
        >
          {dayOfMonth}
        </td>
      );
    } else {
      return <td style={style} className={dayClasses} />;
    }
  };

  previousWeek = () => {
    const { selectedWorkWeek, selectedYear } = this.state;
    let newSelectedWorkWeek = selectedWorkWeek - 1;
    let newSelectedYear = selectedYear;
    if (newSelectedWorkWeek === 0) {
      newSelectedWorkWeek = 52;
      newSelectedYear = selectedYear - 1;
    }
    const date = moment()
      .year(newSelectedYear)
      .isoWeek(newSelectedWorkWeek);
    this.setState({
      selectedYear: newSelectedYear,
      selectedWorkWeek: newSelectedWorkWeek,
      hoveredDays: this.calculateActiveWeek(date)
    });
  };

  nextWeek = () => {
    const { selectedWorkWeek, selectedYear } = this.state;
    let newSelectedWorkWeek = selectedWorkWeek + 1;
    let newSelectedYear = selectedYear;
    if (newSelectedWorkWeek === 53) {
      newSelectedWorkWeek = 1;
      newSelectedYear = selectedYear + 1;
    }
    const date = moment()
      .year(newSelectedYear)
      .isoWeek(newSelectedWorkWeek);
    this.setState({
      selectedYear: newSelectedYear,
      selectedWorkWeek: newSelectedWorkWeek,
      hoveredDays: this.calculateActiveWeek(date)
    });
  };

  render() {
    const { focused, selectedWorkWeek, selectedYear } = this.state;
    const { openPicker, renderCalendarDay } = this;
    const date = moment()
      .year(selectedYear)
      .isoWeek(selectedWorkWeek);
    return (
      <SingleDatePicker
        focused={focused} // PropTypes.bool
        date={date}
        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
        id="single_date_picker" // PropTypes.string.isRequired,
        numberOfMonths={1}
        hideKeyboardShortcutsPanel={true}
        isDayBlocked={() => false}
        isOutsideRange={() => false}
        renderCalendarDay={renderCalendarDay}
      />
    );
  }
}

export default WeekPicker;

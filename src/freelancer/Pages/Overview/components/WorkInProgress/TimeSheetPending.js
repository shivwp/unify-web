import React from "react";

const TimeSheetPending = () => {
  return (
    <>
      <div className="top">
        <div className="heading">
          Timesheet for Dec 12 - 18 (this week ) in progress
        </div>
        <div className="link">When will I get paid ?</div>
      </div>
      <div className="data_container timesheet_pending">
        <div className="headings">
          <div className="heading job_heading">Job</div>
          <div className="heading days_headings">
            <div className="days">
              <span className="day">Mon</span>
              <span className="date">12/12</span>
            </div>
            <div className="days">
              <span className="day">Tue</span>
              <span className="date">12/13</span>
            </div>
            <div className="days">
              <span className="day">Wed</span>
              <span className="date">12/14</span>
            </div>
            <div className="days">
              <span className="day">thu</span>
              <span className="date">12/15</span>
            </div>
            <div className="days">
              <span className="day">Fri</span>
              <span className="date">12/16</span>
            </div>
            <div className="days disabled">
              <span className="day">Sat</span>
              <span className="date">12/17</span>
            </div>
            <div className="days disabled">
              <span className="day">Sun</span>
              <span className="date">12/18</span>
            </div>
          </div>
          <div className="heading">Hours</div>
          <div className="heading">Rate</div>
          <div className="heading">Amount</div>
        </div>
        {/* data rows start */}
        {/* data rows end */}
        <div className="data_rows">
          <div className="data_row name_row">
            <div className="image">AK</div>
            <div className="desc">
              <div className="name">Ajay Kumar</div>
              <div className="about">React Js Website</div>
            </div>
          </div>
          <div className="data_row days_row">
            <div className="days">-</div>
            <div className="days">-</div>
            <div className="days">-</div>
            <div className="days">-</div>
            <div className="days">-</div>
            <div className="days"></div>
            <div className="days"></div>
          </div>
          <div className="data_row">0.00</div>
          <div className="data_row">$18.00/hr</div>
          <div className="data_row">$0.00/hr</div>
        </div>
        <div className="data_rows">
          <div className="data_row name_row">
            <div className="image">AK</div>
            <div className="desc">
              <div className="name">Ajay Kumar</div>
              <div className="about">React Js Website</div>
            </div>
          </div>
          <div className="data_row days_row">
            <div className="days">-</div>
            <div className="days">-</div>
            <div className="days">-</div>
            <div className="days">-</div>
            <div className="days">-</div>
            <div className="days"></div>
            <div className="days"></div>
          </div>
          <div className="data_row">0.00</div>
          <div className="data_row">$18.00/hr</div>
          <div className="data_row">$0.00/hr</div>
        </div>
        <div className="data_rows">
          <div className="data_row name_row">
            <div className="image">AK</div>
            <div className="desc">
              <div className="name">Ajay Kumar</div>
              <div className="about">React Js Website</div>
            </div>
          </div>
          <div className="data_row days_row">
            <div className="days">1.20</div>
            <div className="days">2.00</div>
            <div className="days">2.33</div>
            <div className="days">4.20</div>
            <div className="days">1.00</div>
            <div className="days"></div>
            <div className="days"></div>
          </div>
          <div className="data_row">10.40</div>
          <div className="data_row">$18.00/hr</div>
          <div className="data_row">$0.00/hr</div>
        </div>
        <div className="total_row">
          <div className="empt_job"></div>
          <div className="empt_days"></div>
          <div className="hrs">10.40</div>
          <div className="rate">$0.00/hr</div>
          <div className="amt">$0.00/hr</div>
        </div>
        {/* data rows end */}
      </div>
    </>
  );
};

export default TimeSheetPending;

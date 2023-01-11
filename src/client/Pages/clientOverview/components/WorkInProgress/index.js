import React from "react";
import FixedPricePending from "./FixedPricePending";
import TimeSheetPending from "./TimeSheetPending";

const index = ({ overviewHistory }) => {
  return (
    <>
      <TimeSheetPending overviewHourly={overviewHistory?.hourly} />
      <FixedPricePending overviewFixed={overviewHistory?.fixed} />
      <div className="contract_ov_report_note">
        Note : This report is updated every hours.
      </div>
    </>
  );
};

export default index;

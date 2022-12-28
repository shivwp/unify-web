import React from "react";
import FixedPricePending from "./FixedPricePending";
import TimeSheetPending from "./TimeSheetPending";

const index = () => {
  const data = [{}];
  return (
    <>
      {!data || !data?.length ? (
        <div>
          <div className="no_found_img_cen">
            <img src="/assets/briefcase.svg" alt="" />
          </div>
          <div className="no_foun_head_ce">
            <h1>You have no work in progress</h1>
          </div>
        </div>
      ) : (
        <>
          <TimeSheetPending />
          <FixedPricePending />
          <div className="contract_ov_report_note">Note : This report is updated every hours.</div>
        </>
      )}
    </>
  );
};

export default index;

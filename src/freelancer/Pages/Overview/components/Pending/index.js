import React from "react";
import FixedApproved from "./FixedApproved";
import OtherPaymentAndAdjustment from "./OtherPaymentAndAdjustment";

const Index = () => {
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
          <FixedApproved />
          <OtherPaymentAndAdjustment />
          <div className="contract_ov_report_note">
            Note : This report is updated every hours.
          </div>
        </>
      )}
    </>
  );
};

export default Index;

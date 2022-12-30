import React from "react";
import { Link } from "react-router-dom";
import RecentTransections from "./RecentTransections";

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
          <div className="recent_transection_btn">
            <div className="payment_schedule">Set Up Payment Schedule</div>
            <div className="get_paid_now">
              <Link to="/freelancer/get-paid-now"> Get Paid Now</Link>
            </div>
          </div>
          <RecentTransections />
          <div className="contract_ov_report_note">
            Note : This report is updated every hours.
          </div>
        </>
      )}
    </>
  );
};

export default Index;

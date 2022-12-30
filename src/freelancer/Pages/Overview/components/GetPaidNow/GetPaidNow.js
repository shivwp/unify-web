import React from "react";
import Layout from "../../../../Layout/Layout";
import LoadingSpinner from "../../../../../components/LoadingSpinner";
const GetPaidNow = () => {
  return (
    <Layout>
      <div className="container">
        <div className="get_paid_now col-lg-7">
          <div className="page_heading">Get Paid Now</div>
          <div className="avail_bal">Available Balance</div>
          <div className="amt">$400.00</div>
          <div className="payment_method">
            <label htmlFor="payment_method">Payment Method</label>
            <select id="payment_method" defaultValue="default">
              <option value="default" hidden>
                Please select...
              </option>
            </select>
          </div>
          <div className="theme_btns_big">
            <button className="first_button">Cancel</button>
            <button className="second_button">Get Paid Now</button>
          </div>
        </div>
      </div>
      {/* <LoadingSpinner /> */}
    </Layout>
  );
};

export default GetPaidNow;

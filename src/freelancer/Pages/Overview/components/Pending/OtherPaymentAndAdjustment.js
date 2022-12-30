import React from "react";

const OtherPaymentAndAdjustment = () => {
  return (
    <>
      {" "}
      <div className="fixed_pending">
        <div className="top">
          <div className="heading">Other payments and adjustmentss</div>
          <div className="link">When will I get paid ?</div>
        </div>
      </div>
      <div className="data_container fixed_pendin">
        <div className="headings">
          <div className="heading">Assigned</div>
          <div className="heading job">Description</div>
          <div className="heading">Amount</div>
        </div>
        {/* data row start  */}
        <div className="data_rows">
          <div className="data_row">12/12/2022</div>
          <div className="data_row name_row">
            <div className="image">AK</div>
            <div className="desc">
              <div className="name">Ajay Kumar</div>
              <div className="about">React Js Website</div>
            </div>
          </div>
          <div className="data_row amt">$200.00</div>
        </div>
        <div className="data_rows">
          <div className="data_row">12/12/2022</div>
          <div className="data_row name_row">
            <div className="image">AK</div>
            <div className="desc">
              <div className="name">Ajay Kumar</div>
              <div className="about">React Js Website</div>
            </div>
          </div>
          <div className="data_row amt">$200.00</div>
        </div>

        {/* data row end */}
        <div className="total_row">
          <div className="total">$600.00</div>
        </div>
      </div>
    </>
  );
};

export default OtherPaymentAndAdjustment;

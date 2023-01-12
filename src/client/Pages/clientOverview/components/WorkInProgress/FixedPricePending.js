import React from "react";

const FixedPricePending = ({ overviewFixed }) => {
  const calculatedAmount = () => {
    let total = 0;

    overviewFixed?.forEach((e) => {
      total = total + e.amount;
    });

    return total;
  };

  return (
    <>
      <div className="fixed_pending">
        <div className="top">
          <div className="heading">Fixed price milestones in progress</div>
          <div className="link">When will I get paid ?</div>
        </div>
      </div>
      <div className="data_container fixed_pendin">
        <div className="headings">
          <div className="heading">Assigned</div>
          <div className="heading job">Job/Milestone</div>
          <div className="heading">Amount</div>
        </div>
        {/* data row start  */}
        {overviewFixed?.map((item, key) => (
          <div className="data_rows" key={key}>
            <div className="data_row">{item.due_date}</div>
            <div className="data_row name_row">
              <div className="image">
                <img src={item.profile_image} alt="" />
              </div>
              <div className="desc">
                <div className="name">{item.client_name}</div>
                <div className="about">{item.project_name}</div>
              </div>
            </div>
            <div className="data_row amt">${item.amount.toFixed(2)}</div>
          </div>
        ))}
        {/* data row end */}
        <div className="total_row">
          <div className="total">${calculatedAmount().toFixed(2)}</div>
        </div>
      </div>
    </>
  );
};

export default FixedPricePending;

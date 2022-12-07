import moment from "moment";
import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

const ByMilesstone = ({
  inputList,
  setInputList,
  singleJobDetails,
  errors,
  setErrors,
}) => {
  const [totalPrice, setTotalPrice] = useState(0.0);

  useEffect(() => {
    let add = 0;
    for (let i = 0; i < inputList?.length; i++) {
      add += Number(inputList[i]?.amount);
      setTotalPrice(add);
    }
  }, [inputList]);

  const handleAddClick = () => {
    setInputList([...inputList, { description: "", due_date: "", amount: 0 }]);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    if (name == "amount") {
      list[index][name] = Number(value);
    } else {
      list[index][name] = value;
    }
    setInputList(list);
    if (index == inputList.length - 1) {
      setErrors({
        ...errors,
        [e.target.name]: false,
      });
    }
  };

  const removeInputFields = (index) => {
    const rows = [...inputList];
    rows.splice(index, 1);
    setInputList(rows);
    if (index == inputList.length - 1) {
      setErrors({
        ...errors,
        description: false,
        amount: false,
        due_date: false,
      });
    }
  };
  return (
    <>
      <Col lg={12}>
        <div className="milsetone">
          <div className="heading">
            How many milestone do you want to include ?
          </div>
          <div className="milestone_count">
            <div className="headings">
              <div className="srno"></div>
              <div className="desc">Description </div>
              <div className="date">Due date</div>
              <div className="amount">Amount</div>
              <div className="remove"></div>
            </div>
            {inputList?.map((data, i) => (
              <div className="input_list">
                <div className="srno">{i + 1}</div>
                <div className="desc">
                  <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    onChange={(e) => handleInputChange(e, i)}
                  />
                  {i == inputList.length - 1 ? (
                    <span className="signup-error">
                      {errors?.description && errors?.description}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="date">
                  <input
                    type="date"
                    name="due_date"
                    placeholder="Date"
                    min={moment(new Date()).format("YYYY-MM-DD")}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                  {i == inputList.length - 1 ? (
                    <span className="signup-error">
                      {errors?.due_date && errors?.due_date}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="amount">
                  <input
                    type="number"
                    name="amount"
                    min="1"
                    placeholder="0.00"
                    onChange={(e) => handleInputChange(e, i)}
                  />
                  {i == inputList.length - 1 ? (
                    <span className="signup-error">
                      {errors?.amount && errors?.amount}
                    </span>
                  ) : (
                    ""
                  )}

                  <span className="dollar_icon">$</span>
                </div>
                {i != 0 ? (
                  <div className="remove" onClick={() => removeInputFields(i)}>
                    X
                  </div>
                ) : (
                  <div className="remove"></div>
                )}
              </div>
            ))}
          </div>
          {inputList?.slice(-1)[0]?.description &&
          inputList?.slice(-1)[0]?.due_date &&
          inputList?.slice(-1)[0]?.amount ? (
            <div className="add_milestone">
              <span onClick={handleAddClick}>+ Add milestone</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </Col>
      <Row>
        <Col lg={4}>
          <div className="bc_vrwprotection">
            <div className="img_bx_protection" style={{ height: 150 }}>
              <img src="/assets/protection.png" alt="" />
            </div>
            <div className="css-name-proetction mt-3">
              Includes Upwork Unify Protection.
            </div>
            <div className="css-rve-prt pt-1">Learn More</div>
          </div>
        </Col>
        <Col lg={8}>
          <div className="total_project_price">
            <div className="heading">
              <span className="head">Total price of project</span>
              <span className="amt">${totalPrice.toFixed(2)}</span>
            </div>

            <div className="desc">
              This includes all milestone and is the amount your client will
              see.
            </div>
          </div>
          <div className="unify_service_fee">
            <div className="heading">
              <span className="head">Unify Service Fee</span>
              <span className="amt">
                $
                {((totalPrice / 100) * singleJobDetails?.service_fee)?.toFixed(
                  2
                )}
              </span>
            </div>
            <div className="desc">
              The unify Service fee is 20% when you begin a contract with a new
              client.
            </div>
          </div>

          <div className="you_will_recive">
            <div className="heading">
              <span className="head">You Will Receive</span>
              <span className="amt">
                $
                {(
                  totalPrice -
                  (totalPrice / 100) * singleJobDetails?.service_fee
                )?.toFixed(2)}
              </span>
            </div>
            <div className="desc">
              Your estimated payment, after service fees
            </div>
          </div>
        </Col>{" "}
      </Row>
    </>
  );
};

const ByProject = ({
  values,
  setValues,
  singleJobDetails,
  errors,
  setErrors,
}) => {
  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  console.log(values.bid_amount);

  return (
    <>
      <div className="full_project_bid">
        <div className="heading">
          What is the full amount you'd like to bid for this job ?
        </div>
        <Row>
          <Col lg={8}>
            <Row
              style={{
                alignItems: "center",
                borderBottom: "1px solid #cfcfcf",
                minHeight: 100,
              }}
            >
              <Col lg={7}>
                <div className="head">Bid</div>
                <div className="desc">
                  Total amount the client will see on your proposal
                </div>
              </Col>
              <Col lg={5}>
                <div style={{ position: "relative" }}>
                  <input
                    type="number"
                    name="bid_amount"
                    min="1"
                    onChange={(e) => handleOnChange(e)}
                    placeholder="0.00"
                  />
                  <span className="dollar_icon">$</span>
                </div>
                <span className="signup-error">
                  {errors?.bid_amount && errors?.bid_amount}
                </span>
              </Col>
            </Row>
            <Row
              style={{
                alignItems: "center",
                borderBottom: "1px solid #cfcfcf",
                minHeight: 100,
              }}
            >
              <Col lg={7}>
                <div className="head">Upwork Service Fee </div>
              </Col>
              <Col lg={5}>
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    disabled
                    placeholder="0.00"
                    value={
                      (values?.bid_amount / 100) * singleJobDetails?.service_fee
                    }
                  />
                  <span className="dollar_icon">$</span>
                </div>
              </Col>
            </Row>
            <Row
              style={{
                alignItems: "center",
                borderBottom: "1px solid #cfcfcf",
                minHeight: 100,
              }}
            >
              <Col lg={7}>
                <div className="head">You'll Receive </div>
                <div className="desc">
                  The estimated amount you'll receive after service fees
                </div>
              </Col>
              <Col lg={5}>
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    disabled
                    placeholder="0.00"
                    value={
                      values?.bid_amount -
                      (values?.bid_amount / 100) * singleJobDetails?.service_fee
                    }
                  />
                  <span className="dollar_icon">$</span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={4}>
            {" "}
            <div className="bc_vrwprotection">
              <div className="img_bx_protection" style={{ height: 150 }}>
                <img src="/assets/protection.png" alt="" />
              </div>
              <div className="css-name-proetction mt-3">
                Includes Upwork Unify Protection.
              </div>
              <div className="css-rve-prt pt-1">Learn More</div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

const FixedBid = ({
  singleJobDetails,
  handleOnChange,
  values,
  setValues,
  errors,
  inputList,
  setInputList,
  handleRadioChange,
  isByMilestone,
  setErrors,
}) => {
  return (
    <>
      <div className="fixed_bid">
        <div className="heading">
          <span className="head">Terms</span>
          <span className="budget">Client’s budget: $25.00 - $45.00/hr</span>
        </div>
        <Row className="mt-3">
          <Col lg={12}>
            <div className="how_to_be_paid">
              <div className="heading">How do you want to be paid?</div>
              <div className="methods">
                <div className="method">
                  <div>
                    <input
                      type="radio"
                      id="by_milestone"
                      name="paid_method"
                      value="by_milestone"
                      defaultChecked={isByMilestone == "by_milestone"}
                      onChange={(e) => handleRadioChange(e)}
                    />
                  </div>
                  <div>
                    <label htmlFor="by_milestone" className="heading">
                      By Milestone
                    </label>
                    <div className="desc">
                      Divide the project into smaller segments, called
                      milestones. You'll be paid for milestones as they are
                      completed and approved.
                    </div>
                  </div>
                </div>
                <div className="method">
                  <div>
                    <input
                      type="radio"
                      id="by_project"
                      name="paid_method"
                      value="by_project"
                      onChange={(e) => handleRadioChange(e)}
                    />
                  </div>
                  <div>
                    <label htmlFor="by_project" className="heading">
                      By project
                    </label>
                    <div className="desc">
                      Get your entire payment at the end, when all work has been
                      delivered.
                    </div>
                  </div>
                </div>
              </div>
              <div className="project_duration">
                <label htmlFor="project_duration">
                  How long will this project take?
                </label>
                <Row>
                  <Col md={4}>
                    <select
                      name="project_duration"
                      id="project_duration"
                      onChange={(e) => {
                        setValues({
                          ...values,
                          [e.target.name]: e.target.value,
                        });
                        setErrors({ ...errors, project_duration: false });
                      }}
                    >
                      <option disabled selected hidden value={null}>
                        Select a duration
                      </option>
                      <option value="More then 6 months">
                        More then 6 months
                      </option>
                      <option value="3 to 6 months">3 to 6 months</option>
                      <option value="1 to 3 months">1 to 3 months</option>
                      <option value="Less then 1 months">
                        Less then 1 months
                      </option>
                    </select>
                    <span className="signup-error">
                      {errors?.project_duration && errors?.project_duration}
                    </span>
                  </Col>
                </Row>
              </div>
              {isByMilestone == "by_milestone" ? (
                <ByMilesstone
                  handleOnChange={handleOnChange}
                  singleJobDetails={singleJobDetails}
                  values={values}
                  inputList={inputList}
                  setInputList={setInputList}
                  setErrors={setErrors}
                  errors={errors}
                />
              ) : isByMilestone == "by_project" ? (
                <ByProject
                  setValues={setValues}
                  errors={errors}
                  values={values}
                  singleJobDetails={singleJobDetails}
                  setErrors={setErrors}
                />
              ) : (
                ""
              )}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FixedBid;

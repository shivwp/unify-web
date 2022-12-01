import React from "react";
import { Col, Row } from "react-bootstrap";

const ByMilesstone = () => {
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
            </div>
            <div className="input_list">
              <div className="srno">1</div>
              <div className="desc">
                <input type="text" />
              </div>
              <div className="date">
                <input type="date" />
              </div>
              <div className="amount">
                <input type="number" />
              </div>
            </div>
          </div>
          <div className="add_milestone">
            <span>+ Add milestone</span>
          </div>
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
              <span className="amt">$0.00</span>
            </div>
            <div className="desc">
              This includes all milestone and is the amount your client will
              see.
            </div>
          </div>
          <div className="unify_service_fee">
            <span className="head">Unify Service Fee</span>
            <span className="amt">$0.00</span>
          </div>
          <div className="you_will_recive">
            <div className="heading">
              <span className="head">You Will Receive</span>
              <span className="amt">$0.00</span>
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

const ByProject = () => {
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
                <div>
                  <input type="number" />
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
                <div className="head">Upwork Service Fee </div>
              </Col>
              <Col lg={5}>
                <div>
                  <input type="number" />
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
                <div>
                  <input type="number" />
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
const FixedBid = () => {
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
                    <input type="radio" id="by_milestone" name="paid_method" />
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
                    <input type="radio" id="by_project" name="paid_method" />
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
              <ByProject />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FixedBid;

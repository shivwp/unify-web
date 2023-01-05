import React from "react";
import { Col, ProgressBar } from "react-bootstrap";

const Earning = ({ singleContractData }) => {
  return (
    <>
      <Col md={12} lg={12}>
        <div className="milestone_overview_right">
          <div className="top_heading">Earnings</div>
          <div className="timesheet_time">
            <div className="timesheet_progress">
              <ProgressBar>
                <ProgressBar striped variant="success" now={35} key={1} />
                <ProgressBar variant="warning" now={20} key={2} />
                <ProgressBar striped variant="danger" now={10} key={3} />
              </ProgressBar>
            </div>
          </div>
          <div className="earnings_progress">
            <div>
              <span>Received</span>
              <span>$ {singleContractData?.freelancer?.total_earning}</span>
            </div>
            <div>
              <span>Funded </span>
              <span>$ {singleContractData?.in_escrow}</span>
            </div>
            <div>
              <span>Project Price </span>
              <span>$ {singleContractData?.project?.price}</span>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default Earning;

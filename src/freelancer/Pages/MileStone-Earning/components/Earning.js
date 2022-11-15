import React from "react";
import { Col, ProgressBar } from "react-bootstrap";

const Earning = () => {
  return (
    <>
      <Col md={5} lg={4}>
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
              <span>$ 100</span>
            </div>
            <div>
              <span>Funded (Escrow Protection) </span>
              <span>$ 200</span>
            </div>
            <div>
              <span>Project Price </span>
              <span>$ 300</span>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default Earning;

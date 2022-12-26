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
                <ProgressBar striped variant="success" now={75} key={1} />
                {/* <ProgressBar variant="warning" now={20} key={2} />
                <ProgressBar striped variant="danger" now={10} key={3} /> */}
              </ProgressBar>
            </div>
          </div>
          <div className="earnings_progress">
            <div className="allContractsEarning">
              <div>
                <span className="blue"></span>
                <span>Received</span>
              </div>
              <span className="allContractsRuppe">$ 100</span>
            </div>
            <div className="allContractsEarning">
              <div>
                <span className="green"></span>
                <span>Funded (Escrow Protection) </span>
              </div>
              <span className="allContractsRuppe">$ 200</span>
            </div>
            <div className="allContractsEarning">
              <div>
                <span className="gray"></span>
                <span>Project Price </span>
              </div>
              <span className="allContractsRuppe">$ 300</span>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default Earning;

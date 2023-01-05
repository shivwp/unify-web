import React from "react";
import { Col, Row } from "react-bootstrap";
import Earning from "./Earning";
import RecentFiles from "./RecentFiles";
import HoursThisWeek from "../../SeeTimesheet/components/HoursThisWeek";
import ToDos from "./ToDos";

const OverViewHourly = ({ setPopup, singleContractData }) => {
  return (
    <>
      <Row>
        <ToDos />
        <Col md={5} lg={4}>
          <HoursThisWeek setPopup={setPopup} />
        </Col>
        {/* <RecentFiles /> */}
      </Row>
    </>
  );
};

export default OverViewHourly;

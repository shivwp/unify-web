import React from "react";
import { Col, Row } from "react-bootstrap";
import Earning from "./Earning";
import Milestone from "./Milestone";
import MilestoneTimeLine from "./MilestoneTimeLine";
import RecentFiles from "./RecentFiles";

const OverView = () => {
  return (
    <>
      {/* <Milestone /> */}
      <Row>
        <MilestoneTimeLine />
        <Earning />
        <RecentFiles />
      </Row>
    </>
  );
};

export default OverView;

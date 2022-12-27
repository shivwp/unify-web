import React from "react";
import { Col, Row } from "react-bootstrap";
import Earning from "./Earning";
import Milestone from "./Milestone";
import TimeLine from "./MilestoneTimeLine";
import ProjectTimeLine from "./ProjectTimeLine";
import RecentFiles from "./RecentFiles";

const OverView = ({ setPopup }) => {
  return (
    <>
      {/* <Milestone /> */}
      <Row>
        <TimeLine setPopup={setPopup} />
        <Earning />
        {/* <ProjectTimeLine /> */}
        <RecentFiles />
      </Row>
    </>
  );
};

export default OverView;

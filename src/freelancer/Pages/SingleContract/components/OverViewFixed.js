import React from "react";
import { Col, Row } from "react-bootstrap";
import Earning from "./Earning";
import Milestone from "../../MileStone-Earning/components/Milestone";
import TimeLine from "./TimeLine";
import ProjectTimeLine from "../../MileStone-Earning/components/ProjectTimeLine";
import RecentFiles from "./RecentFiles";

const OverViewFixed = ({ setPopup, singleContractData, setLoading }) => {

  return (
    <>
      {/* <Milestone /> */}
      <Row>
        <TimeLine setPopup={setPopup} singleContractData={singleContractData} setLoading={setLoading} />
        <Col md={5} lg={4}>
          <Earning singleContractData={singleContractData} />
        </Col>
        {/* <RecentFiles /> */}
      </Row>
    </>
  );
};

export default OverViewFixed;

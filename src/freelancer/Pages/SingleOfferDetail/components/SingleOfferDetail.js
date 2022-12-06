import React from "react";
import { Col, Row } from "react-bootstrap";

const SingleOfferDetail = () => {
  return (
    <>
      <div className="single_active_proposal container">
        <div className="heading">Proposal Details</div>
        <Row>
          <Col lg={9}>
            <div className="sep_bdr"> </div>
          </Col>
          <Col lg={3}></Col>
          <div className="sep_bdr"> </div>
        </Row>
      </div>
    </>
  );
};

export default SingleOfferDetail;

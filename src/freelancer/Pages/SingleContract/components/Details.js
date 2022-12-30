import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CompanyInformation from "../../SeeTimesheet/components/CompanyInformation";
import FeedBack from "../../SeeTimesheet/components/FeedBack";

const Details = () => {
  return (
    <>
      {/* <Row>
        <Col md={9}>Details</Col>
        <Col md={3}>Detail</Col>
      </Row> */}
      <Row>
        {/* <Col md={7} lg={8}>
          <Col lg={12}>
            <div className="milestone_overview_left">
              <div className="top_btns">
              </div>
              <div className="milestone_overview_left_icons">
                <div className="to_do_icon">
                </div>
              </div>
            </div>
          </Col>
        </Col> */}
        <Col md={12} lg={8}>
          <div className="timesheetDetails">
            <Row>
              <Col lg={12} className="timeSheetDetailsHead">
                Summary
              </Col>
              <Col lg={6} md={6}>
                {" "}
                Contract type{" "}
              </Col>
              <Col lg={6} md={6} className="timeDethourly">
                Hourly
              </Col>
              <Col lg={6} md={6}>
                {" "}
                Rate{" "}
              </Col>
              <Col lg={6} md={6} className="timeDethourly">
                $20.00/hr
              </Col>
              <Col lg={6} md={6}>
                {" "}
                Weekly limit{" "}
              </Col>
              <Col lg={6} md={6} className="timeDethourly">
                25 hr/week
              </Col>
              <Col lg={6} md={6}>
                Manual time
              </Col>
              <Col lg={6} md={6} className="timeDethourly">
                Manaul time allowed
              </Col>
              <Col lg={6} md={6}>
                Start date
              </Col>
              <Col lg={6} md={6} className="timeDethourly">
                Nov 22, 2022
              </Col>
              <Col lg={12}>
                <button className="detailsBtn">Show More</button>
              </Col>
              <Col>
                <hr />
              </Col>
            </Row>
            <div lg={12} className="timeSheetDetailsHead">
              Description
            </div>
            <div lg={12}>
              <p className="detailsPTag">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type.
              </p>
            </div>
            <div className="detailsLinkOff">
              <Link to="/freelancer/view-original-offer">
                View original offer
              </Link>{" "}
            </div>
            <div className="detailsLinkOff">
              <Link to="/freelancer/view-original-proposal">
                {" "}
                View original proposal
              </Link>{" "}
            </div>
            <Col>
              <hr />
            </Col>
            <div lg={12} className="timeSheetDetailsHead">
              Recent Activity
            </div>
            <Row>
              <Col lg={6}> Date </Col>
              <Col lg={6} className="timeDethourly">
                Description
              </Col>
              <Col lg={6}> Nov 22 </Col>
              <Col lg={6} className="timeDethourly">
                You accepted Sara Watson's offer at $20.00/hr
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={12} lg={4}>
          <Row>
            <CompanyInformation />
            <FeedBack />
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Details;

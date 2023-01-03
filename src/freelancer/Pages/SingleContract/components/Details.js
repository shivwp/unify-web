import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CompanyInformation from "../../SeeTimesheet/components/CompanyInformation";
import FeedBack from "../../SeeTimesheet/components/FeedBack";
import moment from "moment";

const Details = ({ singleContractData }) => {
  console.log(singleContractData);
  return (
    <>
      <Row>
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
                {singleContractData?.type}
              </Col>
              {singleContractData?.type == "hourly" ? (
                <>
                  <Col lg={6} md={6}>
                    {" "}
                    Rate{" "}
                  </Col>
                  <Col lg={6} md={6} className="timeDethourly">
                    {`${singleContractData?.amount}/hr`}
                  </Col>
                  <Col lg={6} md={6}>
                    {" "}
                    Weekly limit{" "}
                  </Col>
                  <Col lg={6} md={6} className="timeDethourly">
                    {singleContractData?.weekly_limit} hr/week
                  </Col>
                </>
              ) : (
                ""
              )}

              <Col lg={6} md={6}>
                Start date
              </Col>
              <Col lg={6} md={6} className="timeDethourly">
                {moment(singleContractData?.start_time).format("DD-MMM-YYYY")}
              </Col>

              <Col lg={6} md={6}>
                Varified Name
              </Col>
              <Col lg={6} md={6} className="timeDethourly">
                {`${singleContractData?.client?.first_name} ${singleContractData?.client?.last_name}`}
              </Col>
              <Col lg={6} md={6}>
                Contract ID
              </Col>
              <Col lg={6} md={6} className="timeDethourly">
                {singleContractData?.id}
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
                {singleContractData?.project?.description}
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
          </div>
        </Col>
        <Col md={12} lg={4}>
          <Row>
            <CompanyInformation singleContractData={singleContractData} />
            <FeedBack />
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Details;

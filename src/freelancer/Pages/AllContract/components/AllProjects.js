import moment from "moment";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllProjects = ({ getAllContracts }) => {
  return (
    <>
      {getAllContracts?.length === 0 ? (
        <div className="no_contract_data">No Data Found</div>
      ) : (
        <>
          {getAllContracts?.map((item) => (
            <>
              {/* see contract start */}
              <div className="job_box_card contract1">
                <Row style={{ marginTop: 10 }}>
                  <Col lg={9} md={7}>
                    <div className="job_head_s">
                      <h2>{item?.project?.name || ""}</h2>
                    </div>
                    <div className="job_d_par">
                      <p>
                        {`${item.freelancer?.first_name || ""} ${
                          item.freelancer?.last_name || ""
                        }`}
                      </p>
                    </div>
                  </Col>
                  <Col
                    lg={3}
                    md={5}
                    className="p-0"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <div className="milestone_btn_s">
                      <Link
                        to={
                          item.button_status == "submit work for payment"
                            ? "/freelancer/submit-work-for-payment"
                            : item.button_status == " propose new contract"
                            ? "/freelancer/propose-new-contract"
                            : item.button_status == "see timesheet"
                            ? "/freelancer/see-timesheet"
                            : item.button_status == "send message"
                            ? "/freelancer/send-message"
                            : item.button_status == "review and resubmit work"
                            ? "/freelancer/review-and-resubmit-work"
                            : item.button_status == "see dispute"
                            ? "/freelancer/see-dispute"
                            : ""
                        }
                      >
                        <button>{item.button_status}</button>
                      </Link>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={4} md={5}>
                    <div className="job_head_s">
                      <h3>
                        Hired By:
                        {`${item.client?.first_name || ""}
                            ${item.client?.last_name || ""}`}
                      </h3>
                    </div>
                    <div className="job_d_par">
                      <p style={{ marginBottom: 0 }}> {item.client?.country}</p>
                    </div>
                  </Col>
                  <Col lg={6} md={5}>
                    <div className="job_head_s">
                      <h3>
                        Last Activity: <span>{item.client?.last_activity}</span>
                      </h3>
                    </div>
                    {/* <div className="job_d_par">
                      <p style={{ marginBottom: 0 }}>Weekly Limit</p>
                    </div> */}
                  </Col>
                  <Col
                    lg={2}
                    md={2}
                    style={{
                      fontSize: 14,
                      color: "#6b6b6b",
                      textAlign: "right",
                    }}
                  >
                    {moment(new Date()).format("MMM YY")} -{" "}
                    {new Date()
                      ? moment(new Date()).format("MMM YY")
                      : "Present"}
                  </Col>
                </Row>
              </div>

              {/* Send a Message end */}
            </>
          ))}
        </>
      )}
    </>
  );
};

export default AllProjects;

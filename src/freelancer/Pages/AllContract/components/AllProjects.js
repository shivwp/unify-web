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
              {item?.type == "hourly" ? (
                <div>
                  <div
                    className="job_box_card"
                    style={{ border: "none", backgroundColor: "#f5f5f5" }}
                  >
                    <Row style={{ marginTop: 10 }}>
                      <Col lg={9} md={7}>
                        <div className="job_head_s">
                          <h2>{item?.project?.name || "Unnamed"}</h2>
                        </div>
                        <div className="job_d_par">
                          <p>
                            {item.freelancer?.first_name || ""}{" "}
                            {item.freelancer?.last_name || ""}
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
                          <Link to="/freelancer/see-timesheet">
                            <button>See Timesheet</button>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={4} md={5}>
                        <div className="job_head_s">
                          <h3>
                            Hired By:{item.client?.first_name || ""}{" "}
                            {item.client?.last_name || ""}
                          </h3>
                        </div>
                        <div className="job_d_par">
                          <p style={{ marginBottom: 0 }}>
                            {item.client?.country}
                          </p>
                        </div>
                      </Col>
                      <Col lg={6} md={5}>
                        <div className="job_head_s">
                          <h3>
                            Last Activity:{" "}
                            <span>{item.client?.last_activity}</span>
                          </h3>
                        </div>
                        <div className="job_d_par">
                          <p style={{ marginBottom: 0 }}>
                            Weekly Limit: {item.weekly_limit} hr/week
                          </p>
                        </div>
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
                        {moment(item?.start_times).format("MMM YY")} -{" "}
                        {item?.end_time
                          ? moment(item?.end_time).format("MMM YY")
                          : "Present"}
                      </Col>
                    </Row>
                  </div>
                </div>
              ) : item?.type == "fixed" ? (
                <div>
                  <div
                    className="job_box_card"
                    style={{ border: "none", backgroundColor: "#f5f5f5" }}
                  >
                    <Row style={{ marginTop: 10 }}>
                      <Col lg={9} md={7}>
                        <div className="job_head_s">
                          <h2>{item?.project?.name || "Unnamed"}</h2>
                        </div>
                        <div className="job_d_par">
                          <p>
                            {item.freelancer?.first_name || ""}{" "}
                            {item.freelancer?.last_name || ""}
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
                          <Link to="/freelancer/milestone-earning">
                            <button>See Contract</button>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={4} md={5}>
                        <div className="job_head_s">
                          <h3>
                            Hired By:{item.client?.first_name || ""}{" "}
                            {item.client?.last_name || ""}
                          </h3>
                        </div>
                        <div className="job_d_par">
                          <p style={{ marginBottom: 0 }}>
                            {item.client?.country}
                          </p>
                        </div>
                      </Col>
                      <Col lg={6} md={5}>
                        <div className="job_head_s">
                          <h3>
                            Last Activity:{" "}
                            <span>{item.client?.last_activity}</span>
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
                        {moment(item?.start_times).format("MMM YY")} -{" "}
                        {item?.end_time
                          ? moment(item?.end_time).format("MMM YY")
                          : "Present"}
                      </Col>
                    </Row>
                  </div>
                </div>
              ) : (
                ""
              )}
            </>
          ))}
        </>
      )}
    </>
  );
};

export default AllProjects;

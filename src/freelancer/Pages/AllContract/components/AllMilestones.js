import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllMilestones = ({ getAllContracts }) => {
  return (
    <>
      {getAllContracts?.length === 0 ? (
        <div className="no_contract_data">No Data Found</div>
      ) : (
        <>
          {getAllContracts?.map((item) => (
            <div>
              <div
                className="job_box_card"
                style={{ border: "none", backgroundColor: "#f5f5f5" }}
              >
                <Row style={{ marginTop: 10 }}>
                  <Col lg={9} md={7}>
                    <div className="job_head_s">
                      <h2>{item.project?.name || "Unnamed"}</h2>
                    </div>
                    <div className="job_d_par">
                      <p>
                        Staffed by: {item.freelancer.first_name || ""}{" "}
                        {item.freelancer.last_name || ""}
                      </p>
                    </div>
                  </Col>
                  <Col
                    lg={3}
                    md={5}
                    className="p-0"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div className="milestone_btn_s">
                      {item.type == "hourly" ? (
                        <Link to="/freelancer/milestone-earning">
                          <button>See Timesheet</button>
                        </Link>
                      ) : (
                        <Link to="/freelancer/milestone-earning">
                          <button>Submit Work for Payment</button>
                        </Link>
                      )}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={4} md={5}>
                    <div className="job_head_s">
                      <h3>
                        Hired By:{item.client.first_name || ""}{" "}
                        {item.client.last_name || ""}
                      </h3>
                    </div>
                    <div className="job_d_par">
                      <p style={{ marginBottom: 0 }}>Ali Elabhm</p>
                    </div>
                  </Col>
                  <Col lg={6} md={5}>
                    <div className="job_head_s">
                      <h3>Active: Milestone 1</h3>
                    </div>
                    <div className="job_d_par">
                      <p style={{ marginBottom: 0 }}>Edit Woocommerce plugin</p>
                    </div>
                  </Col>
                  <Col lg={2} md={2} style={{ fontSize: 14, color: "#6b6b6b" }}>
                    Oct 10 - Present
                  </Col>
                </Row>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default AllMilestones;

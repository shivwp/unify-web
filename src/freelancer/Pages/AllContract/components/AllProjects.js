import moment from "moment";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllProjects = ({ getAllContracts }) => {
  console.log(getAllContracts);
  return (
    <>
      {getAllContracts?.length === 0 ? (
        <div className="no_contract_data">No Data Found</div>
      ) : (
        <>
          {/* {getAllContracts?.map((item) => (
            <>
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
                            ? `/freelancer/single-contract/submit-work-for-payment/${item.id}`
                            : item.button_status == " propose new contract"
                            ? `/freelancer/single-contract/propose-new-contract/${item.id}`
                            : item.button_status == "see timesheet"
                            ? `/freelancer/single-contract/see-timesheet/${item.id}`
                            : item.button_status == "send message"
                            ? `/freelancer/single-contract/send-message/${item.id}`
                            : item.button_status == "review and resubmit work"
                            ? `/freelancer/single-contract/review-and-resubmit-work/${item.id}`
                            : item.button_status == "see dispute"
                            ? `/freelancer/single-contract/see-dispute/${item.id}`
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
                    //<div className="job_d_par">
                    //  <p style={{ marginBottom: 0 }}>Weekly Limit</p>
                    //</div>
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
            </>
          ))} */}

          <div className="job_box_card contract1">
            <Row style={{ marginTop: 10 }}>
              <Col lg={9} md={7}>
                <div className="job_head_s">
                  <h2>React Js Project</h2>
                </div>
                <div className="job_d_par">
                  <p>Ajay Kumar</p>
                </div>
              </Col>
              <Col
                lg={3}
                md={5}
                className="p-0"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <div className="milestone_btn_s">
                  <Link to="/freelancer/single-contract/see-contract/8">
                    <button>See contract</button>
                  </Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={4} md={5}>
                <div className="job_head_s">
                  <h3>Hired By: Aquib Faiz</h3>
                </div>
                <div className="job_d_par">
                  <p style={{ marginBottom: 0 }}> India</p>
                </div>
              </Col>
              <Col lg={6} md={5}>
                <div className="job_head_s">
                  <h3>
                    Last Activity: <span>12 hours ago</span>
                  </h3>
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
                {moment(new Date()).format("MMM YY")} -{" "}
                {new Date() ? moment(new Date()).format("MMM YY") : "Present"}
              </Col>
            </Row>
          </div>

          <div className="job_box_card contract1">
            <Row style={{ marginTop: 10 }}>
              <Col lg={9} md={7}>
                <div className="job_head_s">
                  <h2>React Js Project</h2>
                </div>
                <div className="job_d_par">
                  <p>Ajay Kumar</p>
                </div>
              </Col>
              <Col
                lg={3}
                md={5}
                className="p-0"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <div className="milestone_btn_s">
                  <Link to="/freelancer/single-contract/see-timesheet/4">
                    <button>See timesheet</button>
                  </Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={4} md={5}>
                <div className="job_head_s">
                  <h3>Hired By: Aquib Faiz</h3>
                </div>
                <div className="job_d_par">
                  <p style={{ marginBottom: 0 }}> India</p>
                </div>
              </Col>
              <Col lg={6} md={5}>
                <div className="job_head_s">
                  <h3>
                    Last Activity: <span>12 hours ago</span>
                  </h3>
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
                {moment(new Date()).format("MMM YY")} -{" "}
                {new Date() ? moment(new Date()).format("MMM YY") : "Present"}
              </Col>
            </Row>
          </div>
          <div className="job_box_card contract1">
            <Row style={{ marginTop: 10 }}>
              <Col lg={9} md={7}>
                <div className="job_head_s">
                  <h2>React Js Project</h2>
                </div>
                <div className="job_d_par">
                  <p>Ajay Kumar</p>
                </div>
              </Col>
              <Col
                lg={3}
                md={5}
                className="p-0"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <div className="milestone_btn_s">
                  <Link to="/freelancer/single-contract/review-or-resubmit-work/3">
                    <button>Review and resubmit work</button>
                  </Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={4} md={5}>
                <div className="job_head_s">
                  <h3>Hired By: Aquib Faiz</h3>
                </div>
                <div className="job_d_par">
                  <p style={{ marginBottom: 0 }}> India</p>
                </div>
              </Col>
              <Col lg={6} md={5}>
                <div className="job_head_s">
                  <h3>
                    Last Activity: <span>12 hours ago</span>
                  </h3>
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
                {moment(new Date()).format("MMM YY")} -{" "}
                {new Date() ? moment(new Date()).format("MMM YY") : "Present"}
              </Col>
            </Row>
          </div>
          <div className="job_box_card contract1">
            <Row style={{ marginTop: 10 }}>
              <Col lg={9} md={7}>
                <div className="job_head_s">
                  <h2>React Js Project</h2>
                </div>
                <div className="job_d_par">
                  <p>Ajay Kumar</p>
                </div>
              </Col>
              <Col
                lg={3}
                md={5}
                className="p-0"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <div className="milestone_btn_s">
                  <Link to="/freelancer/single-contract/send-message/6">
                    <button>Send Message</button>
                  </Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={4} md={5}>
                <div className="job_head_s">
                  <h3>Hired By: Aquib Faiz</h3>
                </div>
                <div className="job_d_par">
                  <p style={{ marginBottom: 0 }}> India</p>
                </div>
              </Col>
              <Col lg={6} md={5}>
                <div className="job_head_s">
                  <h3>
                    Last Activity: <span>12 hours ago</span>
                  </h3>
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
                {moment(new Date()).format("MMM YY")} -{" "}
                {new Date() ? moment(new Date()).format("MMM YY") : "Present"}
              </Col>
            </Row>
          </div>
          <div className="job_box_card contract1">
            <Row style={{ marginTop: 10 }}>
              <Col lg={9} md={7}>
                <div className="job_head_s">
                  <h2>React Js Project</h2>
                </div>
                <div className="job_d_par">
                  <p>Ajay Kumar</p>
                </div>
              </Col>
              <Col
                lg={3}
                md={5}
                className="p-0"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <div className="milestone_btn_s">
                  <Link to="/freelancer/single-contract/submit-work-for-payment">
                    <button>Submit work for payment</button>
                  </Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={4} md={5}>
                <div className="job_head_s">
                  <h3>Hired By: Aquib Faiz</h3>
                </div>
                <div className="job_d_par">
                  <p style={{ marginBottom: 0 }}> India</p>
                </div>
              </Col>
              <Col lg={6} md={5}>
                <div className="job_head_s">
                  <h3>
                    Last Activity: <span>12 hours ago</span>
                  </h3>
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
                {moment(new Date()).format("MMM YY")} -{" "}
                {new Date() ? moment(new Date()).format("MMM YY") : "Present"}
              </Col>
            </Row>
          </div>
        </>
      )}
    </>
  );
};

export default AllProjects;

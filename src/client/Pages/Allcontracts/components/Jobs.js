import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import moment from "moment";

const Jobs = ({ clientContractList }) => {
  return (
    <>
      <div className="mt-3">
        <div className="sort_by_pa">Sort By</div>
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <div className="d-flex flex-wrap justify-content-between align-items-center contract_sel">
            <Row>
              <Col>
                <div className="select_inp_in filter_select_m">
                  <select className="custom_css_select">
                    <option value="Start date">Start date</option>
                    <option value="End date">End date</option>
                    <option value="Client name">Client name</option>
                    <option value="Contract name">Contract name</option>
                  </select>
                </div>
              </Col>
              <Col>
                <div className="select_inp_in filter_select_m">
                  <select className="custom_css_select">
                    <option value="Descending">Descending</option>
                    <option value="Aescending">Aescending</option>
                  </select>
                </div>
              </Col>
            </Row>
            <div className="sort_by_pa">0 total</div>
          </div>
          <div className="download_lnk_csx">
            <i className="bi bi-download font-size-20px"></i>{" "}
            <span>Download CSV</span>
          </div>
        </div>
      </div>

      {clientContractList?.length === 0 ? (
        <div className="no_found_cen">
          <div>
            <div className="no_found_img_cen">
              <img src="/assets/Group 3148.png" alt="" />
            </div>
            <div className="no_foun_head_ce">
              <h1>You don't have any contracts yet</h1>
            </div>
            <div className="no_foun_para_ce">
              Your pending and active contracts will be available here when you
              start hiring talent.
            </div>
            <div className="no_foun_para_ce">
              <Link to="/post-your-job">Post a job</Link> or{" "}
              <Link to="#0">check out who's applied</Link> to your existing job
              posts.
            </div>
          </div>
        </div>
      ) : (
        <>
          {clientContractList?.map((data, key) => (
            <div className="contract-list-wrapper" key={key}>
              <div className="contract-listHeader">
                <div className="contract-listInfo">
                  <h6>{data.project.name}</h6>
                  <span>{data.client.company_name}</span>
                </div>
                {data?.button_status === "release milestone" ? (
                  <Link to={`/single-contracts/overview/${data.id}`}>
                    <div className="contract-listButton">
                      <button className="RehireButton">
                        Release Milestone
                      </button>
                    </div>
                  </Link>
                ) : data?.button_status === "see message" ? (
                  <Link to={`/single-contracts/overview/${data.id}`}>
                    <div className="contract-listButton">
                      <button className="RehireButton">See Message</button>
                    </div>
                  </Link>
                ) : data?.button_status === "rehire" ? (
                  <Link to={`/single-contracts/overview/${data.id}`}>
                    <div className="contract-listButton">
                      <button className="RehireButton">Rehire</button>
                    </div>
                  </Link>
                ) : null}
              </div>
              <div className="contract-listDetails">
                <div className="contract-listFirst">
                  <div className="contract-listImage">
                    <img src={data?.freelancer?.profile_image} alt="" />
                  </div>
                  <div className="contract-info">
                    <h6>
                      {data?.freelancer?.first_name}{" "}
                      {data?.freelancer?.last_name}
                    </h6>
                    <span>{data?.freelancer?.local_time} local time</span>
                  </div>
                </div>
                <div className="contract-listMiddle">
                  <h6>Completed: No Feedback given</h6>
                  <span>${parseInt(data.project.price).toFixed(2)} Budget</span>
                </div>
                <div className="contract-listLast">
                  <span>
                    {moment(data.created_at).format("MMM DD, YYYY")} -{" "}
                    {data.end_time === "" ? "Present" : data.end_time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};
export default Jobs;

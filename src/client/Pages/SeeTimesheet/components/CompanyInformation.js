import React from "react";
import { Col } from "react-bootstrap";
import StarRating from "../../../../freelancer/components/rating/Rating";
// import StarRating from "../../../components/rating/Rating";

const CompanyInformation = ({ singleContractData }) => {
  return (
    <>
      <Col lg={12} md={6}>
        <div className="timesheetDetails">
          <div className="comapanyHead"> Company Information </div>
          <div className="verifiedLogoDiv">
            <div className="compnyVerifiedMethod">
              {singleContractData?.client?.payment_verified ? (
                <>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14.079"
                      height="14.869"
                      viewBox="0 0 17.079 17.869"
                    >
                      <g
                        id="_21._Verified"
                        data-name="21. Verified"
                        transform="translate(-0.54 -0.02)"
                      >
                        <path
                          id="Path_4727"
                          data-name="Path 4727"
                          d="M16.911,10.258a2.235,2.235,0,0,1,0-2.623l.566-.782a.745.745,0,0,0,.1-.671.759.759,0,0,0-.477-.477l-.917-.3a2.226,2.226,0,0,1-1.542-2.124V2.315a.745.745,0,0,0-.976-.708l-.924.3a2.235,2.235,0,0,1-2.5-.812L9.683.311a.772.772,0,0,0-1.207,0l-.566.782a2.235,2.235,0,0,1-2.5.812l-.924-.3a.745.745,0,0,0-.976.708v.969A2.226,2.226,0,0,1,1.971,5.407l-.917.3a.759.759,0,0,0-.477.477.745.745,0,0,0,.1.671l.566.782a2.235,2.235,0,0,1,0,2.623l-.566.782a.745.745,0,0,0-.1.671.759.759,0,0,0,.477.477l.917.3A2.226,2.226,0,0,1,3.513,14.61v.969a.745.745,0,0,0,.976.708l.917-.3a2.231,2.231,0,0,1,2.5.812l.566.782a.749.749,0,0,0,1.207,0l.566-.782a2.235,2.235,0,0,1,2.5-.812l.917.3a.745.745,0,0,0,.976-.708V14.61a2.226,2.226,0,0,1,1.542-2.124l.917-.3a.759.759,0,0,0,.477-.477.745.745,0,0,0-.1-.671ZM12.589,7.983,8.863,11.709a.745.745,0,0,1-1.054,0L5.574,9.474A.745.745,0,1,1,6.628,8.42l1.706,1.709,3.2-3.2a.745.745,0,1,1,1.054,1.054Z"
                          fill="#6d2ef1"
                        />
                      </g>
                    </svg>
                  </span>
                  <span> Payment method verified</span>
                </>
              ) : (
                <>
                  <span style={{ opacity: 0.3 }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14.079"
                      height="14.869"
                      viewBox="0 0 17.079 17.869"
                    >
                      <g
                        id="_21._Verified"
                        data-name="21. Verified"
                        transform="translate(-0.54 -0.02)"
                      >
                        <path
                          id="Path_4727"
                          data-name="Path 4727"
                          d="M16.911,10.258a2.235,2.235,0,0,1,0-2.623l.566-.782a.745.745,0,0,0,.1-.671.759.759,0,0,0-.477-.477l-.917-.3a2.226,2.226,0,0,1-1.542-2.124V2.315a.745.745,0,0,0-.976-.708l-.924.3a2.235,2.235,0,0,1-2.5-.812L9.683.311a.772.772,0,0,0-1.207,0l-.566.782a2.235,2.235,0,0,1-2.5.812l-.924-.3a.745.745,0,0,0-.976.708v.969A2.226,2.226,0,0,1,1.971,5.407l-.917.3a.759.759,0,0,0-.477.477.745.745,0,0,0,.1.671l.566.782a2.235,2.235,0,0,1,0,2.623l-.566.782a.745.745,0,0,0-.1.671.759.759,0,0,0,.477.477l.917.3A2.226,2.226,0,0,1,3.513,14.61v.969a.745.745,0,0,0,.976.708l.917-.3a2.231,2.231,0,0,1,2.5.812l.566.782a.749.749,0,0,0,1.207,0l.566-.782a2.235,2.235,0,0,1,2.5-.812l.917.3a.745.745,0,0,0,.976-.708V14.61a2.226,2.226,0,0,1,1.542-2.124l.917-.3a.759.759,0,0,0,.477-.477.745.745,0,0,0-.1-.671ZM12.589,7.983,8.863,11.709a.745.745,0,0,1-1.054,0L5.574,9.474A.745.745,0,1,1,6.628,8.42l1.706,1.709,3.2-3.2a.745.745,0,1,1,1.054,1.054Z"
                          fill="#6d2ef1"
                        />
                      </g>
                    </svg>
                  </span>
                  <span> Payment method not verified</span>
                </>
              )}
            </div>
          </div>
          <div className="companyRating">
            <div className="comapnyRatingStar">
              <StarRating rating={singleContractData?.client?.rating} />
            </div>
            <div className="ratingReview">
              {singleContractData?.client?.rating} of{" "}
              {singleContractData?.client?.number_of_review} reviews
            </div>
          </div>
          <div className="compLoc">
            <div className="compDet">{singleContractData?.client?.country}</div>
            <div className="ratingReview">
              {" "}
              {singleContractData?.client?.timezone}{" "}
              {singleContractData?.client?.local_time}{" "}
            </div>
          </div>
          <div className="compDetList">
            <div className="compDet">
              {singleContractData?.client?.job_posted} jobs posted{" "}
            </div>
            <div className="ratingReview">
              {" "}
              {singleContractData?.project?.hire_rate}% hire rate,{" "}
              {singleContractData?.project?.open_jobs} open job{" "}
            </div>
          </div>
          <div className="compDetList">
            <div className="compDet">
              {" "}
              ${singleContractData?.client?.money_spent}+ total spent{" "}
            </div>
            <div className="ratingReview">
              {" "}
              {singleContractData?.project?.total_hire} hires,{" "}
              {singleContractData?.project?.total_Active} active{" "}
            </div>
          </div>
          <div className="compDetList">
            <div className="compDet">
              {" "}
              {singleContractData?.project?.project_duration}{" "}
            </div>
            <div className="ratingReview"> Project Length </div>
          </div>
          <div className="compSize">
            <div className="companyDetText">
              {singleContractData?.client?.employee_no <= 10
                ? " Company size - 1-10 people"
                : singleContractData?.client?.employee_no <= 100
                ? "Company size - 10-100 people"
                : singleContractData?.client?.employee_no <= 1000
                ? " Company size - 100-1000 people"
                : " Company size - 1000+ people"}
            </div>
            <div className="companyDetText">
              {" "}
              Member since {singleContractData?.client?.member_since}{" "}
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default CompanyInformation;

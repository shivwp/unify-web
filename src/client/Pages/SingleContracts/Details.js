import React from "react";

const Details = () => {
  return (
    <div className="row">
      <div className="col-lg-8 col-md-12">
        <div className="timesheetDetails">
          <div className="row">
            <div className="timeSheetDetailsHead col-lg-12">Summary</div>
            <div className="col-lg-6 col-md-6"> Contract type </div>
            <div className="timeDethourly col-lg-6 col-md-6">Hourly</div>
            <div className="col-lg-6 col-md-6"> Rate </div>
            <div className="timeDethourly col-lg-6 col-md-6">$20.00/hr</div>
            <div className="col-lg-6 col-md-6"> Weekly limit </div>
            <div className="timeDethourly col-lg-6 col-md-6">25 hr/week</div>
            <div className="col-lg-6 col-md-6">Manual time</div>
            <div className="timeDethourly col-lg-6 col-md-6">
              Manaul time allowed
            </div>
            <div className="col-lg-6 col-md-6">Start date</div>
            <div className="timeDethourly col-lg-6 col-md-6">Nov 22, 2022</div>
            <div className="col-lg-12">
              <button className="detailsBtn">Show More</button>
            </div>
            <div className="col">
              <hr />
            </div>
          </div>
          <div lg="12" className="timeSheetDetailsHead">
            Description
          </div>
          <div lg="12">
            <p className="detailsPTag">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type.
            </p>
          </div>
          <div className="detailsLinkOff"> View original offer </div>
          <div className="detailsLinkOff"> View original proposal </div>
          <div className="detailsLinkOff"> View original job posting </div>
          <div className="col">
            <hr />
          </div>
          <div lg="12" className="timeSheetDetailsHead">
            Recent Activity
          </div>
          <div className="row">
            <div className="col-lg-6"> Date </div>
            <div className="timeDethourly col-lg-6">Description</div>
            <div className="col-lg-6"> Nov 22 </div>
            <div className="timeDethourly col-lg-6">
              You accepted Sara Watson's offer at $20.00/hr
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12">
        <div className="row">
          <div className="col-lg-12 col-md-6">
            <div className="timesheetDetails">
              <div className="comapanyHead"> Company Information </div>
              <div className="verifiedLogoDiv">
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
                    ></path>
                  </g>
                </svg>
                <div className="compnyVerifiedMethod">
                  {" "}
                  Payment method verified{" "}
                </div>
              </div>
              <div className="companyRating">
                <div className="comapnyRatingStar">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18.378"
                      height="17.437"
                      viewBox="0 0 24.378 23.437"
                    >
                      <path
                        id="star"
                        d="M22.275,8.583a1.185,1.185,0,0,0-1.021-.815l-6.447-.585L12.259,1.217a1.187,1.187,0,0,0-2.184,0L7.527,7.182l-6.448.585A1.188,1.188,0,0,0,.4,9.845l4.873,4.273L3.841,20.447A1.187,1.187,0,0,0,5.607,21.73l5.559-3.324,5.558,3.324a1.188,1.188,0,0,0,1.767-1.283l-1.437-6.329,4.873-4.273a1.188,1.188,0,0,0,.346-1.262Zm-11,9.759"
                        transform="translate(1.023 0.504)"
                        fill="#ff88fe"
                        stroke="#ff88fe"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18.378"
                      height="17.437"
                      viewBox="0 0 24.378 23.437"
                    >
                      <path
                        id="star"
                        d="M22.275,8.583a1.185,1.185,0,0,0-1.021-.815l-6.447-.585L12.259,1.217a1.187,1.187,0,0,0-2.184,0L7.527,7.182l-6.448.585A1.188,1.188,0,0,0,.4,9.845l4.873,4.273L3.841,20.447A1.187,1.187,0,0,0,5.607,21.73l5.559-3.324,5.558,3.324a1.188,1.188,0,0,0,1.767-1.283l-1.437-6.329,4.873-4.273a1.188,1.188,0,0,0,.346-1.262Zm-11,9.759"
                        transform="translate(1.023 0.504)"
                        fill="#ff88fe"
                        stroke="#ff88fe"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18.378"
                      height="17.437"
                      viewBox="0 0 24.378 23.437"
                    >
                      <path
                        id="star"
                        d="M22.275,8.583a1.185,1.185,0,0,0-1.021-.815l-6.447-.585L12.259,1.217a1.187,1.187,0,0,0-2.184,0L7.527,7.182l-6.448.585A1.188,1.188,0,0,0,.4,9.845l4.873,4.273L3.841,20.447A1.187,1.187,0,0,0,5.607,21.73l5.559-3.324,5.558,3.324a1.188,1.188,0,0,0,1.767-1.283l-1.437-6.329,4.873-4.273a1.188,1.188,0,0,0,.346-1.262Zm-11,9.759"
                        transform="translate(1.023 0.504)"
                        fill="#ff88fe"
                        stroke="#ff88fe"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18.378"
                      height="17.437"
                      viewBox="0 0 24.378 23.437"
                    >
                      <path
                        id="star"
                        d="M22.275,8.583a1.185,1.185,0,0,0-1.021-.815l-6.447-.585L12.259,1.217a1.187,1.187,0,0,0-2.184,0L7.527,7.182l-6.448.585A1.188,1.188,0,0,0,.4,9.845l4.873,4.273L3.841,20.447A1.187,1.187,0,0,0,5.607,21.73l5.559-3.324,5.558,3.324a1.188,1.188,0,0,0,1.767-1.283l-1.437-6.329,4.873-4.273a1.188,1.188,0,0,0,.346-1.262Zm-11,9.759"
                        transform="translate(1.023 0.504)"
                        fill="#ff88fe"
                        stroke="#ff88fe"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18.378"
                      height="17.437"
                      viewBox="0 0 24.378 23.437"
                    >
                      <path
                        id="star"
                        d="M22.275,8.583a1.185,1.185,0,0,0-1.021-.815l-6.447-.585L12.259,1.217a1.187,1.187,0,0,0-2.184,0L7.527,7.182l-6.448.585A1.188,1.188,0,0,0,.4,9.845l4.873,4.273L3.841,20.447A1.187,1.187,0,0,0,5.607,21.73l5.559-3.324,5.558,3.324a1.188,1.188,0,0,0,1.767-1.283l-1.437-6.329,4.873-4.273a1.188,1.188,0,0,0,.346-1.262Zm-11,9.759"
                        transform="translate(1.023 0.504)"
                        fill="none"
                        stroke="#ff88fe"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ratingReview"> 4.2 of 22 reviews </div>
              </div>
              <div className="compLoc">
                <div className="compDet"> Netherland </div>
                <div className="ratingReview"> Zwijndrecht 12:20 pm </div>
              </div>
              <div className="compDetList">
                <div className="compDet">5 jobs posted </div>
                <div className="ratingReview"> 20% hire rate, 1 open job </div>
              </div>
              <div className="compDetList">
                <div className="compDet"> $300+ total spent </div>
                <div className="ratingReview"> 5 hires, 2 active </div>
              </div>
              <div className="compDetList">
                <div className="compDet"> 1 to 3 months </div>
                <div className="ratingReview"> Project Length </div>
              </div>
              <div className="compSize">
                <div className="companyDetText">
                  Mid size company (10-99 people)
                </div>
                <div className="companyDetText">
                  {" "}
                  Member since Sep 16, 2020{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-6">
            <div className="timesheetDetails">
              <div className="comapanyHead"> Feedback </div>
              <div className="feedbackLogo">
                <div className="feedBackLogoCenter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 129.192 96.808"
                  >
                    <path
                      id="folder"
                      d="M129.192,285.846a7.075,7.075,0,0,1-2.131,4.538l-23.1,27.227a23.314,23.314,0,0,1-8.285,5.947A23.868,23.868,0,0,1,85.808,326H11a9.326,9.326,0,0,1-4.16-.894,3.057,3.057,0,0,1-1.822-2.957,7.075,7.075,0,0,1,2.131-4.538l23.1-27.227a23.313,23.313,0,0,1,8.285-5.947A23.87,23.87,0,0,1,48.4,282H123.21a9.325,9.325,0,0,1,4.16.894A3.057,3.057,0,0,1,129.192,285.846Zm-23.583-23.652v11H48.4a32.34,32.34,0,0,0-13.545,3.266,32.1,32.1,0,0,0-11.276,8.216L.413,311.9l-.344.413q0-.275-.034-.859T0,310.6V244.592a14.822,14.822,0,0,1,4.538-10.863A14.822,14.822,0,0,1,15.4,229.191h22a14.822,14.822,0,0,1,10.863,4.538A14.822,14.822,0,0,1,52.8,244.592v2.2h37.4a15.494,15.494,0,0,1,15.4,15.4Z"
                      transform="translate(0 -229.191)"
                      fill="#6d2ef1"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="feedBackSubHead">
                This contract is not yet eligible for feedback
              </div>
              <div className="feedBackPara">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type.
              </div>
              <div className="feedbackBtnDiv">
                <button className="feedbackBtn">Request Feedback</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

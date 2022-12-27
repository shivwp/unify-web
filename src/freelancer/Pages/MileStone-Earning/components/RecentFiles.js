import React, { useState } from "react";
import { Col } from "react-bootstrap";

const RecentFiles = () => {
  const [data, setData] = useState(true);
  return (
    <>
      <Col md={7} lg={8} style={{ padding: 0 }}>
        <Col lg={12}>
          <div className="milestone_overview_left">
            <div className="top_btns">
              <div>Recent Files</div>
              <div className="new_overview_btn">  
                <button style={{ minWidth: 40, margin: "0 15px" }}>
                  <i className="fa fa-history" aria-hidden="true"></i>
                </button>
                <label htmlFor="milestone_recent_file_inp">
                  <button style={{ minWidth: 120 }}>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-upload"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                      </svg>
                    </span>
                    <span>Upload</span>
                  </button>
                  <input
                    type="file"
                    id="milestone_recent_file_inp"
                    style={{
                      width: 0,
                      height: 0,
                      display: "none",
                      position: "absolute",
                    }}
                  />
                </label>
              </div>
            </div>
            {data ? (
              <>
                <div className="file_show">
                  <div className="file_type_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 64 64"
                      width="40"
                      height="40"
                    >
                      <path
                        fill="#edeeef"
                        d="M53.42,10.15v43.7a2,2,0,0,1-2,2H20.14a2,2,0,0,1-2-2V23.09l11-14.94H51.42A2,2,0,0,1,53.42,10.15Z"
                      />
                      <path
                        fill="#cfd0d1"
                        d="M29.14,8.17V21a2,2,0,0,1-2,2H18.19Z"
                      />
                      <rect
                        width="31.32"
                        height="14.04"
                        x="10.58"
                        y="35.47"
                        fill="#ff3717"
                        rx="2"
                      />
                      <path
                        fill="#edeeef"
                        d="M20.74 43.3v2.16H19V39.53H21.4a3.28 3.28 0 0 1 1.37.22 1.71 1.71 0 0 1 .75.66 1.9 1.9 0 0 1 .27 1 1.76 1.76 0 0 1-.56 1.37 2.13 2.13 0 0 1-1.51.52zm0-1.27h.58c.51 0 .76-.2.76-.59s-.23-.56-.7-.56h-.64zM24.44 45.46V39.53h2.19a2.56 2.56 0 0 1 2.13.88 3.16 3.16 0 0 1 .71 2.05 3 3 0 0 1-.76 2.16 2.55 2.55 0 0 1-2 .84zm1.74-1.37h.45a.85.85 0 0 0 .73-.44 2.16 2.16 0 0 0 .29-1.19 2.34 2.34 0 0 0-.26-1.12.83.83 0 0 0-.76-.46h-.45zM33.74 43.24H31.9v2.22H30.21V39.53H34.3v1.41H31.9v1h1.84z"
                      />
                    </svg>
                  </div>
                  <div className="about_file">
                    <div className="file_name">Ajay Kumar File</div>
                    <div className="file_info">
                      <div className="file_size">26 MB </div>
                      <div className="file_time"> 1 Month ago</div>
                    </div>
                  </div>
                  <div className="menu_dot">
                    <span>...</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="milestone_overview_left_icons">
                <div className="foldar_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width="150"
                    height="150"
                  >
                    <defs>
                      <linearGradient
                        id="a"
                        x1=".988"
                        x2="26.265"
                        y1="11.626"
                        y2="14.052"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#cc2fa9" />
                        <stop offset="1" stop-color="#823cde" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#a)"
                      d="M21,5H10.618L9.447,2.658A2.983,2.983,0,0,0,6.764,1H3A3,3,0,0,0,0,4V20a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V8A3,3,0,0,0,21,5ZM3,5a2.966,2.966,0,0,0-1,.184V4A1,1,0,0,1,3,3H6.764a1,1,0,0,1,.894.553L8.382,5Z"
                    />
                  </svg>
                  <p>
                    Files shared in messages, work submissions, or as part of
                    the requirements, will be shown here.
                  </p>
                </div>
              </div>
            )}
          </div>
        </Col>
      </Col>
    </>
  );
};

export default RecentFiles;

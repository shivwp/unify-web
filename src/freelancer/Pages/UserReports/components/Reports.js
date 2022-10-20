import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Reports = () => {
  return (
    <>
      <Container className="mb-5 pb-3">
        <div className="flex_m_j_t pt-4 flex-wrap">
          <div className="my_jo_headin freelancer_all_contract text-transform-uppercase">
            MY Reports
          </div>
        </div>
        <div className="yourp_box pb-0 pt-0 border-r-7">
          <div className="my_reports_">
            <div className="report_name">
              <div className="report_heading">
                <Link to="/freelancer/weekly-report">Weekly Summary</Link>
              </div>
              <div className="report_time">Current Week</div>
            </div>
            <div className="copy_report">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 60 60"
              >
                <g
                  id="Group_3344"
                  data-name="Group 3344"
                  transform="translate(-1560 -287)"
                >
                  <g
                    id="Ellipse_668"
                    data-name="Ellipse 668"
                    transform="translate(1560 287)"
                    fill="#fff"
                    stroke="#707070"
                    stroke-width="1"
                    opacity="0.43"
                  >
                    <circle cx="30" cy="30" r="30" stroke="none" />
                    <circle cx="30" cy="30" r="29.5" fill="none" />
                  </g>
                  <path
                    id="Icon_awesome-file-alt"
                    data-name="Icon awesome-file-alt"
                    d="M9.917,6.021V0H1.063A1.06,1.06,0,0,0,0,1.063V21.6a1.06,1.06,0,0,0,1.063,1.063H15.938A1.06,1.06,0,0,0,17,21.6V7.083H10.979A1.066,1.066,0,0,1,9.917,6.021ZM12.75,16.469a.533.533,0,0,1-.531.531H4.781a.533.533,0,0,1-.531-.531v-.354a.533.533,0,0,1,.531-.531h7.438a.533.533,0,0,1,.531.531Zm0-2.833a.533.533,0,0,1-.531.531H4.781a.533.533,0,0,1-.531-.531v-.354a.533.533,0,0,1,.531-.531h7.438a.533.533,0,0,1,.531.531Zm0-3.187V10.8a.533.533,0,0,1-.531.531H4.781A.533.533,0,0,1,4.25,10.8v-.354a.533.533,0,0,1,.531-.531h7.438A.533.533,0,0,1,12.75,10.448ZM17,5.4v.27H11.333V0h.27a1.062,1.062,0,0,1,.753.31L16.69,4.648A1.059,1.059,0,0,1,17,5.4Z"
                    transform="translate(1583 305)"
                    fill="#7e6e9f"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="my_reports_">
            <div className="report_name">
              <div className="report_heading">
                <Link to="/freelancer/report-byclient">
                  {" "}
                  Weekly Summary By Client
                </Link>
              </div>
              <div className="report_time">Current Week</div>
            </div>
            <div className="copy_report">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 60 60"
              >
                <g
                  id="Group_3344"
                  data-name="Group 3344"
                  transform="translate(-1560 -287)"
                >
                  <g
                    id="Ellipse_668"
                    data-name="Ellipse 668"
                    transform="translate(1560 287)"
                    fill="#fff"
                    stroke="#707070"
                    stroke-width="1"
                    opacity="0.43"
                  >
                    <circle cx="30" cy="30" r="30" stroke="none" />
                    <circle cx="30" cy="30" r="29.5" fill="none" />
                  </g>
                  <path
                    id="Icon_awesome-file-alt"
                    data-name="Icon awesome-file-alt"
                    d="M9.917,6.021V0H1.063A1.06,1.06,0,0,0,0,1.063V21.6a1.06,1.06,0,0,0,1.063,1.063H15.938A1.06,1.06,0,0,0,17,21.6V7.083H10.979A1.066,1.066,0,0,1,9.917,6.021ZM12.75,16.469a.533.533,0,0,1-.531.531H4.781a.533.533,0,0,1-.531-.531v-.354a.533.533,0,0,1,.531-.531h7.438a.533.533,0,0,1,.531.531Zm0-2.833a.533.533,0,0,1-.531.531H4.781a.533.533,0,0,1-.531-.531v-.354a.533.533,0,0,1,.531-.531h7.438a.533.533,0,0,1,.531.531Zm0-3.187V10.8a.533.533,0,0,1-.531.531H4.781A.533.533,0,0,1,4.25,10.8v-.354a.533.533,0,0,1,.531-.531h7.438A.533.533,0,0,1,12.75,10.448ZM17,5.4v.27H11.333V0h.27a1.062,1.062,0,0,1,.753.31L16.69,4.648A1.059,1.059,0,0,1,17,5.4Z"
                    transform="translate(1583 305)"
                    fill="#7e6e9f"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Reports;

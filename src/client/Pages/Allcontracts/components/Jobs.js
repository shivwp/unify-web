import Select from "react-select";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import $ from "jquery";

const options = [
  { value: "Start date", label: "Start date" },
  { value: "End date", label: "End date" },
  { value: "Client name", label: "Client name" },
  { value: "Contract name", label: "Contract name" },
];
const optionsne = [{ value: "Descending", label: "Descending" }];

const Jobs = () => {
  const [dropdown, setDropdown] = useState(false);

  $(document).mouseup(function (e) {
    if ($(e.target).closest("#menu_barContract").length === 0) {
      setDropdown(false);
    }
  });

  return (
    <>
      <div className="mt-3">
        <div className="sort_by_pa">Sort By</div>
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <div className="d-flex flex-wrap justify-content-between align-items-center contract_sel">
            <Row>
              <Col>
                <div className="select_inp_in filter_select_m">
                  <Select className="custom_css_select" options={options} />
                </div>
              </Col>
              <Col>
                <div className="select_inp_in filter_select_m">
                  <Select className="custom_css_select" options={optionsne} />
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

      <div className="contract-list-wrapper">
        <div className="contract-listHeader">
          <div className="contract-listInfo">
            <h6>React Js Urgent Help</h6>
            <span>Expert web technologies</span>
          </div>
          <div className="contract-listButton">
            <button className="RehireButton">Rehire</button>
            <button
              className="toggle_btn_dot"
              onClick={() => setDropdown(!dropdown)}
            >
              <i className="bi bi-three-dots-vertical font-szie-20px"></i>
            </button>
            {dropdown && (
              <div className="menu_barContract" id="menu_barContract">
                <span>View Milestone & Payments</span>
                <span>Send A Message</span>
                <span>View Terms & Settings</span>
                <Link to={`/freelancer-details/525`}>
                  <span>View Profile</span>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="contract-listDetails">
          <div className="contract-listFirst">
            <div className="contract-listImage">
              <img src="/assets/prof.jfif" alt="" />
            </div>
            <div className="contract-info">
              <h6>Afreen Khan</h6>
              <span>6.05 PM local time</span>
            </div>
          </div>
          <div className="contract-listMiddle">
            <h6>Completed: No Feedback given</h6>
            <span>$120.00 Budget</span>
          </div>
          <div className="contract-listLast">
            <span>Nov 22, 2022 - Nov 22, 2022</span>
          </div>
        </div>
      </div>

      <div className="contract-list-wrapper">
        <div className="contract-listHeader">
          <div className="contract-listInfo">
            <h6>React Js Urgent Help</h6>
            <span>Expert web technologies</span>
          </div>
          <div className="contract-listButton">
            <button className="RehireButton">Rehire</button>
            <button
              className="toggle_btn_dot"
              onClick={() => setDropdown(!dropdown)}
            >
              <i className="bi bi-three-dots-vertical font-szie-20px"></i>
            </button>
            {dropdown && (
              <div className="menu_barContract" id="menu_barContract">
                <span>View Milestone & Payments</span>
                <span>Send A Message</span>
                <span>View Terms & Settings</span>
                <span>View Profile</span>
              </div>
            )}
          </div>
        </div>
        <div className="contract-listDetails">
          <div className="contract-listFirst">
            <div className="contract-listImage">
              <img src="/assets/prof.jfif" alt="" />
            </div>
            <div className="contract-info">
              <h6>Afreen Khan</h6>
              <span>6.05 PM local time</span>
            </div>
          </div>
          <div className="contract-listMiddle">
            <h6>
              Completed:{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10.333"
                height="10.402"
                viewBox="0 0 22.333 21.402"
              >
                <path
                  id="star"
                  d="M22.275,8.583a1.185,1.185,0,0,0-1.021-.815l-6.447-.585L12.259,1.217a1.187,1.187,0,0,0-2.184,0L7.527,7.182l-6.448.585A1.188,1.188,0,0,0,.4,9.845l4.873,4.273L3.841,20.447A1.187,1.187,0,0,0,5.607,21.73l5.559-3.324,5.558,3.324a1.188,1.188,0,0,0,1.767-1.283l-1.437-6.329,4.873-4.273a1.188,1.188,0,0,0,.346-1.262Zm-11,9.759"
                  transform="translate(0 -0.496)"
                  fill="#ff88fe"
                />
              </svg>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10.333"
                height="10.402"
                viewBox="0 0 22.333 21.402"
              >
                <path
                  id="star"
                  d="M22.275,8.583a1.185,1.185,0,0,0-1.021-.815l-6.447-.585L12.259,1.217a1.187,1.187,0,0,0-2.184,0L7.527,7.182l-6.448.585A1.188,1.188,0,0,0,.4,9.845l4.873,4.273L3.841,20.447A1.187,1.187,0,0,0,5.607,21.73l5.559-3.324,5.558,3.324a1.188,1.188,0,0,0,1.767-1.283l-1.437-6.329,4.873-4.273a1.188,1.188,0,0,0,.346-1.262Zm-11,9.759"
                  transform="translate(0 -0.496)"
                  fill="#ff88fe"
                />
              </svg>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10.333"
                height="10.402"
                viewBox="0 0 22.333 21.402"
              >
                <path
                  id="star"
                  d="M22.275,8.583a1.185,1.185,0,0,0-1.021-.815l-6.447-.585L12.259,1.217a1.187,1.187,0,0,0-2.184,0L7.527,7.182l-6.448.585A1.188,1.188,0,0,0,.4,9.845l4.873,4.273L3.841,20.447A1.187,1.187,0,0,0,5.607,21.73l5.559-3.324,5.558,3.324a1.188,1.188,0,0,0,1.767-1.283l-1.437-6.329,4.873-4.273a1.188,1.188,0,0,0,.346-1.262Zm-11,9.759"
                  transform="translate(0 -0.496)"
                  fill="#ff88fe"
                />
              </svg>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10.333"
                height="10.402"
                viewBox="0 0 22.333 21.402"
              >
                <path
                  id="star"
                  d="M22.275,8.583a1.185,1.185,0,0,0-1.021-.815l-6.447-.585L12.259,1.217a1.187,1.187,0,0,0-2.184,0L7.527,7.182l-6.448.585A1.188,1.188,0,0,0,.4,9.845l4.873,4.273L3.841,20.447A1.187,1.187,0,0,0,5.607,21.73l5.559-3.324,5.558,3.324a1.188,1.188,0,0,0,1.767-1.283l-1.437-6.329,4.873-4.273a1.188,1.188,0,0,0,.346-1.262Zm-11,9.759"
                  transform="translate(0 -0.496)"
                  fill="#ff88fe"
                />
              </svg>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10.333"
                height="10.402"
                viewBox="0 0 22.333 21.402"
              >
                <path
                  id="star"
                  d="M22.275,8.583a1.185,1.185,0,0,0-1.021-.815l-6.447-.585L12.259,1.217a1.187,1.187,0,0,0-2.184,0L7.527,7.182l-6.448.585A1.188,1.188,0,0,0,.4,9.845l4.873,4.273L3.841,20.447A1.187,1.187,0,0,0,5.607,21.73l5.559-3.324,5.558,3.324a1.188,1.188,0,0,0,1.767-1.283l-1.437-6.329,4.873-4.273a1.188,1.188,0,0,0,.346-1.262Zm-11,9.759"
                  transform="translate(0 -0.496)"
                  fill="#ff88fe"
                />
              </svg>
            </h6>
            <span>$120.00 Budget</span>
          </div>
          <div className="contract-listLast">
            <span>Nov 22, 2022 - Nov 22, 2022</span>
          </div>
        </div>
      </div>
      {/* <div className="no_found_cen">
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
            <Link to="#0">Post a job</Link> or{" "}
            <Link to="#0">check out who's applied</Link> to your existing job
            posts.
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Jobs;

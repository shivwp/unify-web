import Select from "react-select";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import $ from "jquery";
import moment from "moment";

const options = [
  { value: "Start date", label: "Start date" },
  { value: "End date", label: "End date" },
  { value: "Client name", label: "Client name" },
  { value: "Contract name", label: "Contract name" },
];
const optionsne = [{ value: "Descending", label: "Descending" }];

const Jobs = ({ clientContractList }) => {
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
                  <div className="contract-listButton">
                    <Link to="/single-contracts/overview">
                      <button className="RehireButton">
                        Release Milestone
                      </button>
                    </Link>
                  </div>
                ) : data?.button_status === "see message" ? (
                  <div className="contract-listButton">
                    <button className="RehireButton">Send a message</button>
                  </div>
                ) : data?.button_status === "rehire" ? (
                  <div className="contract-listButton">
                    <button className="RehireButton">Rehire</button>
                  </div>
                ) : data?.button_status === "see dispute" ? (
                  <div className="contract-listButton">
                    <button className="RehireButton">See Dispute</button>
                  </div>
                ) : data?.button_status === "fund milestone" ? (
                  <div className="contract-listButton">
                    <button className="RehireButton">Fund Milestone</button>
                  </div>
                ) : data?.button_status === "review work" ? (
                  <div className="contract-listButton">
                    <button className="RehireButton">Review Work</button>
                  </div>
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

{
  /* <button
                    className="toggle_btn_dot"
                    onClick={() => setDropdown(!dropdown)}
                  >
                    <i className="bi bi-three-dots-vertical font-szie-20px"></i>
                  </button>
                  {dropdown && (
                    <div className="menu_barContract" id="menu_barContract">
                      <span>
                        <Link to="/single-contracts/overview">
                          View Milestone & Payments
                        </Link>
                      </span>
                      <span>
                        <Link to="/single-contracts/messages">
                          Send A Message
                        </Link>
                      </span>
                      <span>
                        <Link to="/single-contracts/details">
                          View Terms & Settings
                        </Link>
                      </span>
                      <span>
                        <Link to={`/freelancer-details/525`}>View Profile</Link>
                      </span>

                      <span className="menu_btn_arrow" id="menu_btn_arrow1">
                        &#62;
                      </span>
                    </div>
                  )} */
}

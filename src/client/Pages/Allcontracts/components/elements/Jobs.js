import Select from "react-select";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const options = [
  { value: "Start date", label: "Start date" },
  { value: "End date", label: "End date" },
  { value: "Client name", label: "Client name" },
  { value: "Contract name", label: "Contract name" },
];
const optionsne = [{ value: "Descending", label: "Descending" }];
const Jobs = () => {
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
            <div className="sort_by_pa">0 toal</div>
          </div>
          <div className="download_lnk_csx">
            <Link to="#0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-download"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>
              Download CSV
            </Link>
          </div>
        </div>
      </div>
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
            <Link to="#0">Post a job</Link> or{" "}
            <Link to="#0">check out who's applied</Link> to your existing job
            posts.
          </div>
        </div>
      </div>
    </>
  );
};
export default Jobs;

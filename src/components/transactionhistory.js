import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Title from "./title";
import { useState } from "react";
import Select from "react-select";

const Screen = () => {
  Title(" | Transaction History");

  const Filter = () => {
    return (
      <div>
        <Row>
          <Col lg={6}>
            <div>
              <div className="filter_headin_m d-flex justify-content-between">
                <div>Contract Start Dates</div>
                <div className="reset_link_con">
                  <a href="#0">Reset</a>
                </div>
              </div>
              <div className="select_inp_in filter_select_m flex-wrap d-flex align-items-center w-100">
                <div className="inpu_date m-0">
                  <input type="date" />
                </div>
                <span className="to_date_con">to</span>
                <div className="inpu_date m-0">
                  <input type="date" />
                </div>
              </div>
            </div>
            <Row>
              <Col lg={6}>
                <div>
                  <div className="filter_headin_m">Contract Type</div>
                  <ul className="filter_ul_m">
                    <li>
                      <input type="radio" /> All
                    </li>
                    <li>
                      <input type="radio" /> Hourly
                    </li>
                    <li>
                      <input type="radio" /> Fixed-Price
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={6}>
                <div>
                  <div className="filter_headin_m">Contract Status</div>
                  <ul className="filter_ul_m">
                    <li>
                      <input type="checkbox" /> All
                    </li>
                    <li>
                      <input type="checkbox" /> Pending
                    </li>
                    <li>
                      <input type="checkbox" /> Active
                    </li>
                    <li>
                      <input type="checkbox" /> Ended
                    </li>
                    <li>
                      <input type="checkbox" /> Paused
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <div>
              <div className="filter_headin_m d-flex justify-content-between">
                <div>Contract End Dates</div>
                <div className="reset_link_con">
                  <a href="#0">Reset</a>
                </div>
              </div>
              <div className="select_inp_in filter_select_m flex-wrap d-flex align-items-center w-100">
                <div className="inpu_date m-0">
                  <input type="date" />
                </div>
                <span className="to_date_con">to</span>
                <div className="inpu_date m-0">
                  <input type="date" />
                </div>
              </div>
            </div>
            <Row>
              <Col lg={6}>
                <div>
                  <div className="filter_headin_m">Milestone Status</div>
                  <ul className="filter_ul_m">
                    <li>
                      <input type="radio" /> All
                    </li>
                    <li>
                      <input type="radio" /> Active
                    </li>
                    <li>
                      <input type="radio" /> Awaiting Funding
                    </li>
                    <li>
                      <input type="radio" /> Payment Requested
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={6}>
                <div>
                  <div className="filter_headin_m">Escrew Refund Status</div>
                  <ul className="filter_ul_m">
                    <li>
                      <input type="checkbox" /> Any
                    </li>
                    <li>
                      <input type="checkbox" /> Requested
                    </li>
                    <li>
                      <input type="checkbox" /> Approved
                    </li>
                    <li>
                      <input type="checkbox" /> Not Approved
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <div>
          <button className="blue_btn_smm">Apply Filters</button>
        </div>
      </div>
    );
  };
  const Jobs = () => {
    const options = [
      { value: "All Transactions", label: "All Transactions" },
      { value: "All Debits All Credits", label: "All Debits All Credits" },
      { value: "Hourly", label: "Hourly" },
      { value: "Fixed-Price", label: "Fixed-Price" },
      { value: "Bonus", label: "Bonus" },
      { value: "Adjustments", label: "Adjustments" },
      { value: "Withdrawals", label: "Withdrawals" },
      { value: "Expense", label: "Expense" },
    ];
    const options1 = [
        { value: "All Freelancers", label: "All Freelancers" }
      ];
    return (
      <>
        <div className="mt-2">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center contract_sel">
              <div className="select_inp_in filter_select_m">
                <Select className="custom_css_select" options={options} />
              </div>
              <div className="select_inp_in filter_select_m">
                <Select className="custom_css_select" options={options1} />
              </div>
              <div className="sort_by_pa"></div>
            </div>
            <div className="download_lnk_csx">
              <div className="btn_foot_sec justify-content-center flex-wrap no-border m-0 p-0">
                <div className="fo_btn_c next_b_btn_c">
                  <button className="active_btn_blue">Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="no_found_cen">
          <div>
            <div className="no_found_img_cen">
              <img src="/assets/investment.png" alt="" />
            </div>
            <div className="no_foun_head_ce">
              <h1>No transactions meet your selected criteria</h1>
            </div>
          </div>
        </div>
      </>
    );
  };
  const [open, Setopen] = useState(<Jobs />);
  const [active, SetActive] = useState(0);
  function ToggleFilter() {
    if (active === 0) {
      Setopen(<Filter />);
      SetActive(1);
    } else {
      Setopen(<Jobs />);
      SetActive(0);
    }
  }

  return (
    <>
      <Container>
        <div className="flex_m_j_t pb-0">
          <div className="my_jo_headin">Transaction History</div>
        </div>
        <div className="trans_h_b_n">
          Balance: <span>$0.00</span>
        </div>
        <div className="main_hirefreelancer_bx main_box_descr">
          <div className="d-flex justify-content-between align-items-center mb-0 mt-0 pb-0">
            <div className="d-flex justify-content-between align-items-center contract_sel mb-0 pb-0 ">
              <div className="select_inp_in filter_select_m mt-0 mb-0">
                <div className="select_inp_in filter_select_m flex-wrap d-flex align-items-center w-100 mt-0 mb-0">
                  <div className="inpu_date m-0">
                    <input type="date" />
                  </div>
                </div>
              </div>
              <div>
                <div className="ts_btn attach_f_btn wid_30_in mt-0 mb-0">
                  <button className="transp_fil_btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-funnel-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
                    </svg>
                    Filters
                  </button>
                </div>
              </div>
            </div>
            <div className="download_lnk_csx">
              <div className="btn_foot_sec p-0 justify-content-center flex-wrap no-border mt-2">
                <div className="fo_btn_c next_b_btn_c">
                  <button className="hideen_csv_do_btn">Download CSV</button>
                </div>
                <div className="fo_btn_c next_b_btn_c">
                  <button className="hideen_csv_do_btn">
                    Download Invoinces
                  </button>
                </div>
              </div>
            </div>
          </div>
          {open}
        </div>
      </Container>
    </>
  );
};
export default Screen;

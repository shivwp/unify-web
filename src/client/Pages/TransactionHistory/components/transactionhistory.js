import * as React from 'react'
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Title from "../../../../components/title";
import Select from "react-select";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import Button from 'react-bootstrap/Button'
  
const Screen = () => {
  Title(" | Transaction History");

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
      <Container>
        <div className="flex_m_j_t pb-0">
          <div className="my_jo_headin">Transaction History</div>
        </div>
        <div className="trans_h_b_n">
          Balance: <span>$0.00</span>
        </div>
        <div className="main_hirefreelancer_bx main_box_descr">
          <div className="d-flex justify-content-between align-items-center flex-wrap mb-0 mt-0 pb-0">
            <div className="d-flex justify-content-between align-items-center flex-wrap contract_sel mb-0 pb-0 ">
              <Row>
                <Col className="mt-2">
                  <div className="select_inp_in filter_select_m mt-0 mb-0">
                    <div className="select_inp_in filter_select_m flex-wrap d-flex align-items-center w-100 mt-0 mb-0">
                      <div className="min_width_inp_nie m-0 date_range_nod psr-relative">
                        <DateRangePicker
                          initialSettings={{ startDate: '11/12/2014', endDate: '3/1/2014', }}
                        >
                          <input />
                        </DateRangePicker>
                        <div className="cal_icon_psr_abs">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6D2EF1" className="bi bi-calendar-range" viewBox="0 0 16 16">
                            <path d="M9 7a1 1 0 0 1 1-1h5v2h-5a1 1 0 0 1-1-1zM1 9h4a1 1 0 0 1 0 2H1V9z" />
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mt-2">
                  <div>
                    <div className="ts_btn attach_f_btn wid_30_in mt-0 mb-0">
                      <Button variant="" className="transp_fil_btn">
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
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="download_lnk_csx">
              <div className="btn_foot_sec p-0 justify-content-center flex-wrap no-border mt-2">
                <div className="fo_btn_c next_b_btn_c">
                  <Button variant="" className="hideen_csv_do_btn mrright-gppnew">Download CSV</Button>
                </div>
                <div className="fo_btn_c next_b_btn_c">
                  <Button variant="" className="hideen_csv_do_btn">
                    Download Invoinces
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2">
            <div className="d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex justify-content-between align-items-center contract_sel flex-wrap">
                <Row>
                  <Col sm={12} lg={6}>
                    <div className="select_inp_in filter_select_m">
                      <Select className="custom_css_select" options={options} />
                    </div>
                  </Col>
                  <Col sm={12} lg={6}>
                    <div className="select_inp_in filter_select_m">
                      <Select className="custom_css_select" options={options1} />
                    </div>
                  </Col>
                </Row>
                {/* <div className="sort_by_pa"></div> */}
              </div>
              <div className="download_lnk_csx">
                <div className="btn_foot_sec justify-content-center flex-wrap no-border m-0 p-0">
                  <div className="fo_btn_c next_b_btn_c">
                    <Button variant="" className="active_btn_blue">Apply</Button>
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
        </div>
      </Container>
    </>
  );
};
export default Screen;

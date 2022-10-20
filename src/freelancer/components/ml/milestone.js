import DateRangePicker from "react-bootstrap-daterangepicker";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Screen = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap pb-5">
        <div className="box_gray_ml_ncw">
          <div className="name_bgmn">Budget</div>
          <div className="amount_bgmn">$10.000</div>
        </div>
        <div className="box_gray_ml_ncw">
          <div className="name_bgmn">In Escrow</div>
          <div className="amount_bgmn">$100</div>
        </div>
        <div className="box_gray_ml_ncw">
          <div className="name_bgmn">MIlestones Paid</div>
          <div className="amount_bgmn">$400</div>
        </div>
        <div className="box_gray_ml_ncw">
          <div className="name_bgmn">Remaining</div>
          <div className="amount_bgmn">$100</div>
        </div>
        <div className="box_gray_ml_ncw blue_bgmln">
          <div className="name_bgmn">Total Earnings</div>
          <div className="amount_bgmn">$600</div>
        </div>
      </div>
      <div className="tg_mile_ml_new">
      <div>
            <div
              className="job_box_card"
              style={{ border: "none", backgroundColor: "#f5f5f5" }}
            >
              <Row style={{ marginTop: 10 }}>
                <Col lg={10} md={7}>
                  <div className="job_head_s">
                    <h2>Edit Woocommerce plugin</h2>
                  </div>
                  <div className="job_d_par">
                    <p>Staffed by: Shiv Kumar at Eoxysis IT solution LLP</p>
                  </div>
                </Col>
                <Col lg={2} md={5} style={{display: 'flex', justifyContent:'center'}} className='p-0'>
                  <div className="milestone_btn_s">
                    <Link to="/freelancer/chat">
                      <button>Message</button>
                    </Link>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={5}>
                  <div className="job_head_s">
                    <h3>Hired By: Ali Almazam</h3>
                  </div>
                  <div className="job_d_par">
                    <p style={{ marginBottom: 0 }}>Ali Elabhm</p>
                  </div>
                </Col>
                <Col lg={6} md={5}>
                  <div className="job_head_s">
                    <h3>Active: Milestone 1</h3>
                  </div>
                  <div className="job_d_par">
                    <p style={{ marginBottom: 0 }}>Edit Woocommerce plugin</p>
                  </div>
                </Col>
                <Col lg={2} md={2} style={{ fontSize: 14, color: "#6b6b6b" }}>
                  Oct 10 - Present
                </Col>
              </Row>
            </div>
          </div>
      </div>
      <div className="pt-4 pb-2 d-flex justify-content-between align-items-center flex-wrap">
        <div className="ad_earning-node">
          Additional earnings and adjustments
        </div>
        <div className="d-flex justify-content-between align-items-center flex-wrap adtime_txtccwd">
          Last 30 days:$0.00
          <DateRangePicker
            initialSettings={{
              singleDatePicker: true,
            }}
          >
            <div className="toggle_btn_dot">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#2D2D2D"
                className="bi bi-calendar2-date"
                viewBox="0 0 16 16"
              >
                <path d="M6.445 12.688V7.354h-.633A12.6 12.6 0 0 0 4.5 8.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
              </svg>
            </div>
          </DateRangePicker>
        </div>
      </div>
      <table className="report_tbl_frl milestone_nbdr_tl">
        <thead>
          <tr>
            <th className="w-20">Date</th>
            <th className="w-20">Description</th>
            <th className="w-20">Amount</th>
            <th className="w-20">Invoice</th>
            <th className="w-20"></th>
          </tr>
        </thead>
      </table>
      <div className="no_txn_box_nwdi">
        No Transactions Meet your selected criteria
      </div>
    </>
  );
};
export default Screen;

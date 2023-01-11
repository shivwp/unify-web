import * as React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Title from "../../../../components/title";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFreelancerTransectionHistory } from "../../../../redux/actions/freelancerAction";
import { useEffect } from "react";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import CustomeDateRangePicker from "../../../../components/CustomeDateRangePicker/CustomeDateRangePicker";
import moment from "moment";

const Screen = () => {
  Title(" | Transaction History");
  const dispatch = useDispatch();
  const [openFilter, setOpenFilter] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selecteDates, setSelectDates] = useState({});
  const getTransectionHistory = useSelector(
    (state) => state?.freelancer?.getTransectionHistory
  );
  const options1 = [
    {
      name: "Fluent",
      label: "Fluent",
    },
  ];

  useEffect(() => {
    setLoading(true);
    dispatch(getFreelancerTransectionHistory(selecteDates, setLoading));
  }, [selecteDates]);

  const Transactions = ({ getTransectionHistory }) => {
    return (
      <>
        <Table className="trx_tbl_freelancer mt-3">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Description</th>
              <th>Client</th>
              <th>Amount</th>
              <th>Ref ID</th>
            </tr>
          </thead>
          <tbody>
            {getTransectionHistory?.map((item, index) => (
              <tr
                style={
                  index == getTransectionHistory?.length - 1
                    ? { border: "1px solid transparent" }
                    : {}
                }
              >
                <td>{item?.transaction_date}</td>
                <td>{item?.transaction_type}</td>
                <td>{item?.description}</td>
                <td>{item?.client_name}</td>
                <td>${item?.amount}</td>
                <td>
                  <span>258963025</span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  };

  const FilterScr = () => {
    return (
      <div className="filter_scr">
        <Row>
          <Col md={6} sm={12} className="my-2">
            {" "}
            <Select
              className="font-size-13px"
              placeholder="All Transections"
              options={options1}
            />
          </Col>
          <Col md={6} sm={12} className="my-2">
            <Select
              className="font-size-13px"
              placeholder="All Clients"
              options={options1}
            />
          </Col>
          <div className="_save_submit">
            <button>Apply</button>
          </div>
        </Row>
      </div>
    );
  };

  const dateRangeSelect = (dates) => {
    setSelectDates({
      start_date: moment(dates.start_date).format("YYYY-MM-DD"),
      end_date: moment(dates.end_date).format("YYYY-MM-DD"),
    });
  };

  return (
    <>
      <Container>
        <div
          className="main_hirefreelancer_bx main_box_descr mt-5"
          style={{ position: "relative" }}
        >
          <div className="transaction_head_n">
            <div className="flex_m_j_t pb-0 pt-0">
              <div className="my_jo_headin mjh_new_smtext">
                Transaction History
              </div>
            </div>
            <div className="trans_h_b_n">
              Balance: <span>$0.00</span>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center flex-wrap mb-0 mt-0 pb-0">
            <div className="d-flex justify-content-between align-items-center flex-wrap contract_sel mb-0 pb-0 ">
              <Row>
                <Col className="mt-2">
                  <div className="select_inp_in filter_select_m mt-0 mb-0">
                    <div className="select_inp_in filter_select_m flex-wrap d-flex align-items-center w-100 mt-0 mb-0">
                      <div className="min_width_inp_nie m-0 date_range_nod psr-relative">
                        <CustomeDateRangePicker
                          dateRangeSelect={dateRangeSelect}
                        />
                        {/* <div
                          className="cal_icon_psr_abs"
                          onClick={() => {
                            document.getElementById("datePickerInp").focus();
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#6D2EF1"
                            className="bi bi-calendar-range"
                            viewBox="0 0 16 16"
                          >
                            <path d="M9 7a1 1 0 0 1 1-1h5v2h-5a1 1 0 0 1-1-1zM1 9h4a1 1 0 0 1 0 2H1V9z" />
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                          </svg>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mt-2">
                  <div>
                    <div className="ts_btn attach_f_btn wid_30_in mt-0 mb-0">
                      <Button
                        variant=""
                        className="only_textstyle font-weight-600"
                        onClick={() => setOpenFilter(!openFilter)}
                      >
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
                  <Button variant="" className="mrright-gppnew">
                    Download CSV
                  </Button>
                </div>
                <div className="fo_btn_c next_b_btn_c">
                  <Button variant="" className="active_btn_blue">
                    Download Invoices
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="tbl_overflos_cewuw">
            {<Transactions getTransectionHistory={getTransectionHistory} />}
          </div>
          {openFilter && <FilterScr />}
        </div>
      </Container>
      {loading ? <LoadingSpinner /> : null}
    </>
  );
};
export default Screen;

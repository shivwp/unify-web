import * as React from 'react'
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Title from "../../../../components/title";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import Table from 'react-bootstrap/Table';

const Screen = () => {
    Title(" | Transaction History");

    const Transactions = () => {
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
                        <tr>
                            <td>Aug 8, 2022</td>
                            <td>Service Fee</td>
                            <td>Withholding tax (IN) Ref ID 2583214</td>
                            <td>Jolly Smith</td>
                            <td>$100.00</td>
                            <td><span>258963025</span></td>
                        </tr>
                        <tr>
                            <td>Aug 8, 2022</td>
                            <td>Service Fee</td>
                            <td>Withholding tax (IN) Ref ID 2583214</td>
                            <td>Jolly Smith</td>
                            <td>$100.00</td>
                            <td><span>258963025</span></td>
                        </tr>
                        <tr>
                            <td>Aug 8, 2022</td>
                            <td>Service Fee</td>
                            <td>Withholding tax (IN) Ref ID 2583214</td>
                            <td>Jolly Smith</td>
                            <td>$100.00</td>
                            <td><span>258963025</span></td>
                        </tr>
                    </tbody>
                </Table>
            </>
        );
    };


    return (
        <>
            <Container>
                <div className="main_hirefreelancer_bx main_box_descr mt-5">
                    <div className="transaction_head_n">
                        <div className="flex_m_j_t pb-0 pt-0">
                            <div className="my_jo_headin mjh_new_smtext">Transaction History</div>
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
                                            <button className="only_textstyle font-weight-600">
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
                                </Col>
                            </Row>
                        </div>
                        <div className="download_lnk_csx">
                            <div className="btn_foot_sec p-0 justify-content-center flex-wrap no-border mt-2">
                                <div className="fo_btn_c next_b_btn_c">
                                    <button className='mrright-gppnew'>Download CSV</button>
                                </div>
                                <div className="fo_btn_c next_b_btn_c">
                                    <button className='active_btn_blue'>
                                        Download Invoinces
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='tbl_overflos_cewuw'>
                    {Transactions()}
                    </div>
                </div>
            </Container>
        </>
    );
};
export default Screen;

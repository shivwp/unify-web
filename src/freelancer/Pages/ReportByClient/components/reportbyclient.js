import * as React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Title from "../../../../components/title";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Table } from "react-bootstrap";

const Screen = () => {
  Title(" | Report By Client");

  const Tbl = () => {
    const options1 = [
      {
        value: "Show Contract grouped by day ",
        label: "Show Contract grouped by day ",
      },
    ];
    return (
      <>
        <div className="mt-2 p_my_report32">
          <div className="d-flex justify-content-between flex-wrap align-items-center">
            <div className="w-100 d-flex justify-content-between align-items-center contract_sel flex-wrap">
              <Row className="w-100">
                <Col sm={12} lg={6} md={6}>
                  <div className="filter_select_m">
                    <div className="min_width_inp_nie m-0 date_range_nod psr-relative">
                      <Form.Control type="date" className="w-100" />
                    </div>
                  </div>
                </Col>
                <Col sm={12} lg={6} md={6}>
                  <div className="select_inp_in filter_select_m w-100">
                    <Select
                      className="custom_css_select w-100"
                      options={options1}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div>
          <Table className="report_tbl_frl">
            <thead>
              <tr>
                <th className="w-25">Client</th>
                <th className="w-30">Contract</th>
                <th className="w-15">Hours</th>
                <th className="w-15">Amount</th>
                <th className="w-25">Payment Type</th>
              </tr>
            </thead>
          </Table>
          <div className="table_label p_my_report32">Mon, Feb 1, 2021</div>
          <Table className="report_tbl_frl">
            <tbody>
              <tr>
                <td className="w-25">
                  <div className="d-flex align-items-center">
                    <div className="tbl_profile_frl">
                      <img src="/assets/PRO-2.png" alt="" />
                    </div>
                    <div>
                      <div className="tbl_pfrl_name">Jolly Smith</div>
                    </div>
                  </div>
                </td>
                <td className="w-30">
                  001-EdTech Coding web App for Teens in Gatsby Zenbit
                </td>
                <td className="w-15">8:00</td>
                <td className="w-15 amount_tr_frl">20.00</td>
                <td className="w-25">Fixed Price Payment</td>
              </tr>
              <tr>
                <td className="w-25">
                  <div className="d-flex align-items-center">
                    <div className="tbl_profile_frl">
                      <img src="/assets/PRO-2.png" alt="" />
                    </div>
                    <div>
                      <div className="tbl_pfrl_name">Jolly Smith</div>
                    </div>
                  </div>
                </td>
                <td className="w-30">
                  001-EdTech Coding web App for Teens in Gatsby Zenbit
                </td>
                <td className="w-15">8:00</td>
                <td className="w-15 amount_tr_frl">20.00</td>
                <td className="w-25">Fixed Price Payment</td>
              </tr>
              <tr>
                <td className="w-25">
                  <div className="d-flex align-items-center">
                    <div className="tbl_pfrl_name">
                      Total For Mon, Feb 1, 2021
                    </div>
                  </div>
                </td>
                <td className="w-30"></td>
                <td className="w-15">8:00</td>
                <td className="w-15 amount_tr_frl">20.00</td>
                <td className="w-25">Fixed Price Payment</td>
              </tr>
            </tbody>
          </Table>
          <div className="table_label p_my_report32">Mon, Feb 2, 2021</div>
          <Table className="report_tbl_frl">
            <tbody>
              <tr>
                <td className="w-25">
                  <div className="d-flex align-items-center">
                    <div className="tbl_profile_frl">
                      <img src="/assets/PRO-2.png" alt="" />
                    </div>
                    <div>
                      <div className="tbl_pfrl_name">Jolly Smith</div>
                    </div>
                  </div>
                </td>
                <td className="w-30">
                  001-EdTech Coding web App for Teens in Gatsby Zenbit
                </td>
                <td className="w-15">8:00</td>
                <td className="w-15 amount_tr_frl">20.00</td>
                <td className="w-25">Fixed Price Payment</td>
              </tr>
              <tr>
                <td className="w-25">
                  <div className="d-flex align-items-center">
                    <div className="tbl_profile_frl">
                      <img src="/assets/PRO-2.png" alt="" />
                    </div>
                    <div>
                      <div className="tbl_pfrl_name">Jolly Smith</div>
                    </div>
                  </div>
                </td>
                <td className="w-30">
                  001-EdTech Coding web App for Teens in Gatsby Zenbit
                </td>
                <td className="w-15">8:00</td>
                <td className="w-15 amount_tr_frl">20.00</td>
                <td className="w-25">Fixed Price Payment</td>
              </tr>
              <tr>
                <td className="w-25">
                  <div className="d-flex align-items-center">
                    <div className="tbl_pfrl_name">
                      Total For Mon, Feb 1, 2021
                    </div>
                  </div>
                </td>
                <td className="w-30"></td>
                <td className="w-15">8:00</td>
                <td className="w-15 amount_tr_frl">20.00</td>
                <td className="w-25">Fixed Price Payment</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </>
    );
  };

  return (
    <>
      <Container>
        <div className="main_hirefreelancer_bx main_box_descr pl-0 pr-0">
          <div className="d-flex justify-content-between flex-wrap mb-3 mt-3 p_my_report32">
            <div className="flex_m_j_t pb-0 pt-0 m-0">
              <div className="my_jo_headin mjh_new_smtext">
                Weekly summary by client{" "}
              </div>
            </div>
            <div className="d-flex flex-wrap align-items-center">
              <div className="fo_btn_c next_b_btn_c">
                <Button variant="" className="active_btn_blue filter_svg_btnwni">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-filter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                  </svg>
                  Filters
                </Button>
              </div>
              <div className="toggle_btn_dot">
                <Button variant="" className="toggle_btn_dot">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#7E6E9F"
                    className="bi bi-file-earmark-text-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          {Tbl()}
        </div>
      </Container>
    </>
  );
};
export default Screen;

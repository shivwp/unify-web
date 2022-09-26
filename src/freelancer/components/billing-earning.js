import * as React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Title from "../../components/title";
import { useState } from "react";

const TBLScreen = () => {
  return (
    <>
      <Col lg={9}>
        <table className="report_tbl_frl bill_earn_tbl">
          <thead>
            <tr>
              <th className="w-40">Job Name</th>
              <th className="w-40">Fees & taxes</th>
              <th className="w-20">Billed</th>
            </tr>
          </thead>
        </table>

        <table className="report_tbl_frl rtcmwou_be">
          <tbody>
            <tr>
              <td className="w-40">
                <div className="d-flex align-items-center">
                  <div>
                    <div className="tbl_pfrl_name">
                      Create Product UI/UX design{" "}
                    </div>
                  </div>
                </div>
              </td>
              <td className="w-40">
                <div>
                  <b>$20.00</b>
                </div>
                <div className="tb_prl_des_res">$16.00 Fees + $4.00 tax</div>
              </td>
              <td className="w-20">
                <b>$100.00</b>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="report_tbl_frl rtcmwou_be cemwouu_be">
          <tbody>
            <tr>
              <td className="w-80">
                <div className="d-flex align-items-center">
                  <div>
                    <div className="tbl_pfrl_name tbl_bgtxt_be">
                      Total billed
                    </div>
                    <div className="tb_prl_des_res mt-4">Fees & taxes</div>
                  </div>
                </div>
              </td>
              <td className="w-20">
                <div className="tbl_bgtxt_be">
                  <b>$100.00</b>
                </div>
                <div className="tb_prl_des_res mt-4">(20.00)</div>
              </td>
            </tr>
            <tr>
              <td className="w-80">
                <div className="d-flex align-items-center">
                  <div>
                    <div className="tbl_pfrl_name tbl_bgtxt_be">
                      Your earnings
                    </div>
                    <div className="tb_prl_des_res mt-1">
                      arter Unify feed and taxes
                    </div>
                  </div>
                </div>
              </td>
              <td className="w-20">
                <div className="tbl_bgtxt_be">
                  <b>$100.00</b>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Col>
    </>
  );
};
const LifeBilledScreen = () => {
  return (
    <>
      <Col lg={9}>
        <div className="no_found_cen">
          <div>
            <div className="no_found_img_cen">
              <img src="/assets/dollar.png" alt="" />
            </div>
            <div className="no_foun_head_ce">
              <h1>Your lifetime billed amount is $4320.00</h1>
            </div>
            <div className="no_foun_para_ce bee_lgtext">
              This is a total sum of invoices (paid or pending to be paid),
              excluding taxes and feed.
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

const Screen = () => {
  Title(" | Billings & Earnings");
  const [tab, SetTab] = useState(<TBLScreen />);
  const [tabActive, SetTabActive] = useState("tblscreen");

  return (
    <>
      <Container>
        <div className="main_hirefreelancer_bx main_box_descr pl-0 pr-0">
          <div className="d-flex justify-content-between flex-wrap mb-3 mt-3 p_my_report32">
            <div className=" pb-0 pt-0 m-0">
              <div className="my_jo_headin mjh_new_smtext">
                Billings & Earnings{" "}
              </div>
              <div className="be_hed_s_ew">
                View your earnings and any applicable fees or taxes by client
                for the past 3 years. for earnings past three years go to{" "}
                <a href="#0">transaction history</a>
              </div>
            </div>
            <div className="d-flex flex-wrap justify-content-between align-items-center w-100 mt-3 mb-3">
              <div className="min_width_inp_nie m-0 date_range_nod psr-relativ">
                <input type="date" />
              </div>
              <div className="btn_group_be mt-2">
                <button
                  className={`st_bgbe ${tabActive === "tblscreen" ? "active_btn_be" : ""}`}
                  onClick={() => {
                    SetTabActive("tblscreen")
                    SetTab(<TBLScreen />);
                  }}
                >
                  Billings & Earnings
                </button>
                <button
                  className={`sec_bgbe ${tabActive === "earning" ? "active_btn_be" : ""}`}
                  onClick={() => {
                    SetTabActive("earning")
                    SetTab(<LifeBilledScreen />);
                  }}
                >
                  Lifetime Billed
                </button>
              </div>
              <div className="fo_btn_c next_b_btn_c">
                <button className="active_btn_blue filter_svg_btnwni">
                  Download CSV
                </button>
              </div>
            </div>
            <Row className="w-100">
              <Col lg={3}>
                <div className="bxo_be_nac active_bxo_nxc">
                  <div className="bxo_be_nam">
                    UI / UX Bord Design And Wireframe
                  </div>
                  <div className="bxo_be_pri">$100.00</div>
                </div>
                <div className="bxo_be_nac">
                  <div className="bxo_be_nam">
                    UI / UX Bord Design And Wireframe
                  </div>
                  <div className="bxo_be_pri">$100.00</div>
                </div>
                <div className="bxo_be_nac">
                  <div className="bxo_be_nam">
                    UI / UX Bord Design And Wireframe
                  </div>
                  <div className="bxo_be_pri">$100.00</div>
                </div>
                <div className="bxo_be_nac">
                  <div className="bxo_be_nam">
                    UI / UX Bord Design And Wireframe
                  </div>
                  <div className="bxo_be_pri">$100.00</div>
                </div>
              </Col>
              {tab}
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Screen;

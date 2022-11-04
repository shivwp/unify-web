import * as React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Title from "../../../../components/title";
import Select from "react-select";
import { Link } from "react-router-dom";
import AddManualTimePopup from "../../../components/popups/AddManualTimePopup";
import { useState } from "react";
import Form from 'react-bootstrap/Form';

const Screen = () => {
  const [amtPopup, setAmtPopup] = useState(false);

  Title(" | Add Work Diary");

  const Jobs = () => {
    const options1 = [
      { value: "XYZ App Development", label: "XYZ App Development" },
    ];
    return (
      <>
        <div className="mt-2">
          <div className="d-flex justify-content-between flex-wrap align-items-center">
            <div className="w-100 d-flex justify-content-between align-items-center contract_sel flex-wrap">
              <Row className="w-100">
                <Col sm={12} lg={6} md={6}>
                  <Form.Label className="awd_label">Select Date</Form.Label>
                  <div className="filter_select_m">
                    <div className="min_width_inp_nie m-0 date_range_nod psr-relative">
                      <Form.Control type="date" className="w-100" />
                    </div>
                  </div>
                </Col>
                <Col sm={12} lg={6} md={6} className="">
                  <Form.Label className="awd_label">Project name</Form.Label>
                  <div className="d-flex align-items-center">
                    <div className="select_inp_in filter_select_m w-100">
                      <Select className=" w-100" options={options1} />
                    </div>
                    {/* <div className='awd_btnrnd'>
                                        <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23.296" height="23.296" viewBox="0 0 23.296 23.296">
  <path id="watch" d="M17.257,14.386l-2.444-1.411V7.824a1.165,1.165,0,1,0-2.33,0v5.824a1.165,1.165,0,0,0,.582,1.009L16.092,16.4a1.165,1.165,0,0,0,1.165-2.018ZM13.648,2A11.648,11.648,0,1,0,25.3,13.648,11.648,11.648,0,0,0,13.648,2Zm0,20.967a9.318,9.318,0,1,1,9.318-9.318A9.318,9.318,0,0,1,13.648,22.967Z" transform="translate(-2 -2)" fill="#828282"/>
</svg>
                                        </button>
                                    </div> */}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="no_found_cen">
          <div>
            <div className="no_found_img_cen">
              <img src="/assets/time-management.svg" alt="" />
            </div>
            <div className="no_foun_head_ce">
              <h1>No time logged this day</h1>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Container>
        <div className="d-flex justify-content-between flex-wrap mt-5">
          <div className="flex_m_j_t pb-0 pt-0 m-0">
            <div className="my_jo_headin mjh_new_smtext">WORK DIARY</div>
          </div>
          <div>
            <div className="fo_btn_c next_b_btn_c">
              <Link to="/freelancer/time-tracker">
                <button
                  style={{ border: "1px solid #6d2ef1" }}
                  className="f_sm_small_euvw "
                >
                  TIMESHEET
                </button>
              </Link>
              <button
                className="active_btn_blue f_sm_small_euvw "
                onClick={() => setAmtPopup(true)}
              >
                ADD MANUAL TIME
              </button>
            </div>
          </div>
        </div>
        <div className="main_hirefreelancer_bx main_box_descr">{Jobs()}</div>
      </Container>
      {amtPopup && (
        <AddManualTimePopup
          open={amtPopup}
          onCloseModal={() => setAmtPopup(false)}
        />
      )}
    </>
  );
};
export default Screen;

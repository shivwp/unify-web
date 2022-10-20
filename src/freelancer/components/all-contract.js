import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Title from "../../components/title";
import Select from "react-select";
import { Link } from "react-router-dom";
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";
import star from "../../icons/star.svg";

import { useState } from "react";

const Screen = () => {
  const [dDown, Setddown] = useState(false);

  Title(" | All Contracts");
  const options = [
    { value: "Start date", label: "Start date" },
    { value: "End date", label: "End date" },
    { value: "Client name", label: "Client name" },
    { value: "Contract name", label: "Contract name" },
  ];
  const optionsne = [{ value: "Descending", label: "Descending" }];

  return (
    <>
      <Container>
        <div className="flex_m_j_t mt-3 pb-0">
          <div className="my_jo_headin freelancer_all_contract text-transform-uppercase">
            All Contracts
          </div>
        </div>
        <div className="main_hirefreelancer_bx main_box_descr">
          <div className="search_area_in">
            <div className="search_input_in w-100">
              <div className="search_icon_in">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
              <input
                type={`text`}
                placeholder={`Search by contract, freelancer, or agency name`}
              />
            </div>
          </div>
          {/* Project start */}
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
                      <Select
                        className="custom_css_select"
                        options={optionsne}
                      />
                    </div>
                  </Col>
                </Row>
                <div className="sort_by_pa">0 toal</div>
                <div className="sort_by_pa iclosed_ctract d-flex align-items-center">
                  <Checkbox
                    icon={<Icon.FiCheck color="#fff" size={14} />}
                    name="my-input"
                    borderRadius={0}
                    checked={true}
                    borderWidth={1}
                    borderColor="#6D2EF1"
                    style={{ cursor: "pointer", backgroundColor: "#6D2EF1" }}
                  />
                  Include closed contracts
                </div>
              </div>
              <div className="download_lnk_csx">
                <a href="#0">
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
                </a>
              </div>
            </div>
          </div>
          {/* Project end */}
          <div className="no_found_cen justify-content-start">
            <div>
              <div className="no_foun_para_ce text-left">
                Contracts you're actively working on will appear here.{" "}
                <Link to="/freelancer/project-search">
                  Start searching for new projects now!
                </Link>
              </div>
            </div>
          </div>
          
          <div>
            <div
              className="job_box_card"
              style={{ border: "none", backgroundColor: "#f5f5f5" }}
            >
              <Row style={{ marginTop: 10 }}>
                <Col lg={9} md={7}>
                  <div className="job_head_s">
                    <h2>Edit Woocommerce plugin</h2>
                  </div>
                  <div className="job_d_par">
                    <p>Staffed by: Shiv Kumar at Eoxysis IT solution LLP</p>
                  </div>
                </Col>
                <Col lg={3} md={5} className='p-0' style={{display: 'flex', justifyContent:'center'}} >
                  <div className="milestone_btn_s">
                    <Link to="/freelancer/milestone-earning">
                      <button>Submit Work for Payment</button>
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
          <div>
            <div
              className="job_box_card"
              style={{ border: "none", backgroundColor: "#f5f5f5" }}
            >
              <Row style={{ marginTop: 10 }}>
                <Col lg={9} md={7}>
                  <div className="job_head_s">
                    <h2>Edit Woocommerce plugin</h2>
                  </div>
                  <div className="job_d_par">
                    <p>Staffed by: Shiv Kumar at Eoxysis IT solution LLP</p>
                  </div>
                </Col>
                <Col lg={3} md={5} className='p-0' style={{display: 'flex', justifyContent:'center'}} >
                  <div className="milestone_btn_s">
                    <Link to="/freelancer/milestone-earning">
                      <button>Submit Work for Payment</button>
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
      </Container>
    </>
  );
};
export default Screen;

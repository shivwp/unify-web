import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Filter = () => {
  return (
    <div className="Filter_Popup">
      <Row>
        <Col lg={12}>
          <Row className="mr-righht-10">
            <Col lg={4} md={6}>
              <div>
                <div className="tm_s_s_name">Team</div>
                <div className="inpu_date m-0 inp_selec_s">
                  <Form.Select>
                    <option>All Teams</option>
                  </Form.Select>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div>
                <div className="tm_s_s_name">Sort By</div>
                <div className="inpu_date m-0 inp_selec_s">
                  <Form.Select>
                    <option>Sort By</option>
                  </Form.Select>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div>
                <div className="tm_s_s_name">Contact Person</div>
                <div className="inpu_date m-0 inp_selec_s">
                  <Form.Select>
                    <option>Contact Person</option>
                  </Form.Select>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6}>
              <div className="mt-4">
                <div className="filter_headin_m">Admin</div>
                <ul className="filter_ul_m">
                  <li>
                    <Form.Check type="checkbox" /> All
                  </li>
                  <li>
                    <Form.Check type="checkbox" /> Finance Only
                  </li>
                  <li>
                    <Form.Check type="checkbox" /> Full
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="mt-4">
                <div className="filter_headin_m">Hiring</div>
                <ul className="filter_ul_m">
                  <li>
                    <Form.Check type="checkbox" /> None
                  </li>
                  <li>
                    <Form.Check type="checkbox" /> Source Talent Only
                  </li>
                  <li>
                    <Form.Check type="checkbox" /> Manager
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="mt-4">
                <div className="filter_headin_m">Work Diaries</div>
                <ul className="filter_ul_m">
                  <li>
                    <Form.Check type="checkbox" /> Individual
                  </li>
                  <li>
                    <Form.Check type="checkbox" /> Team
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="mt-4">
                <div className="filter_headin_m">Chat</div>
                <ul className="filter_ul_m">
                  <li>
                    <Form.Check type="checkbox" /> No One
                  </li>
                  <li>
                    <Form.Check type="checkbox" /> Team
                  </li>
                  <li>
                    <Form.Check type="checkbox" /> Company
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="d-flex justify-content-between mob_jus_cent flex-wrap">
        <div className="d-flex flex-wrap mob_jus_cent">
          <div className="fo_btn_c sme_next_bbtn next_b_btn_c">
            <Button
              variant=""
              className="blue_btn_smm ml-0"
              style={{ fontSize: 15 }}
            >
              Apply Filters
            </Button>
          </div>
          <div className="fo_btn_c sme_next_bbtn next_b_btn_c">
            <Button variant="" style={{ fontSize: 15 }}>
              Clear
            </Button>
          </div>
        </div>
        <div className="fo_btn_c sme_next_bbtn next_b_btn_c mob_jus_cent">
          <Button variant="" style={{ fontSize: 15 }}>
            Close
          </Button>
        </div>
      </div>
      <span className="popup_up_arrow"> &#60; </span>
      <span className="popup_border_none"> - </span>
    </div>
  );
};
export default Filter;

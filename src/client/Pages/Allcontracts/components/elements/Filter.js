import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
const Filter = () => {
    return (
      <div>
        <Row>
          <Col lg={6}>
            <div>
              <div className="filter_headin_m d-flex justify-content-between">
                <div>Contract Start Dates</div>
                <div className="reset_link_con">
                  <Link to="#0">Reset</Link>
                </div>
              </div>
              <div className="select_inp_in st_med_umecw filter_select_m flex-wrap  justify-content-between d-flex align-items-center w-100">
                <div className="inpu_date m-0">
                  <Form.Control type="date" />
                </div>
                <span className="to_date_con">to</span>
                <div className="inpu_date m-0">
                  <Form.Control type="date" />
                </div>
              </div>
            </div>
            <Row>
              <Col lg={6}>
                <div>
                  <div className="filter_headin_m">Contract Type</div>
                  <ul className="filter_ul_m">
                    <li>
                      <Form.Check type="radio" /> All
                    </li>
                    <li>
                      <Form.Check type="radio" /> Hourly
                    </li>
                    <li>
                      <Form.Check type="radio" /> Fixed-Price
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={6}>
                <div>
                  <div className="filter_headin_m">Contract Status</div>
                  <ul className="filter_ul_m">
                    <li>
                      <Form.Check type="checkbox" /> All
                    </li>
                    <li>
                      <Form.Check type="checkbox" /> Pending
                    </li>
                    <li>
                      <Form.Check type="checkbox" /> Active
                    </li>
                    <li>
                      <Form.Check type="checkbox" /> Ended
                    </li>
                    <li>
                      <Form.Check type="checkbox" /> Paused
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
                  <Link to="#0">Reset</Link>
                </div>
              </div>
              <div className="select_inp_in st_med_umecw filter_select_m  justify-content-between flex-wrap d-flex align-items-center w-100">
                <div className="inpu_date m-0">
                  <Form.Control type="date" />
                </div>
                <span className="to_date_con">to</span>
                <div className="inpu_date m-0">
                  <Form.Control type="date" />
                </div>
              </div>
            </div>
            <Row>
              <Col lg={6}>
                <div>
                  <div className="filter_headin_m">Milestone Status</div>
                  <ul className="filter_ul_m">
                    <li>
                      <Form.Check type="radio" /> All
                    </li>
                    <li>
                      <Form.Check type="radio" /> Active
                    </li>
                    <li>
                      <Form.Check type="radio" /> Awaiting Funding
                    </li>
                    <li>
                      <Form.Check type="radio" /> Payment Requested
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={6}>
                <div>
                  <div className="filter_headin_m">Escrew Refund Status</div>
                  <ul className="filter_ul_m">
                    <li>
                      <Form.Check type="checkbox" /> Any
                    </li>
                    <li>
                      <Form.Check type="checkbox" /> Requested
                    </li>
                    <li>
                      <Form.Check type="checkbox" /> Approved
                    </li>
                    <li>
                      <Form.Check type="checkbox" /> Not Approved
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
  export default Filter
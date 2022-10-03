import React from "react";
import "../components/accountInfo.css";
import { Row, Col } from "react-bootstrap";
import Select from "react-select";

const CompnyDetailsInfo = () => {
  const options1 = [{ name: "india", label: "india" }];

  return (
    <>
      <div className="account_info">
        <div className="comp_title">
          <h5>Company Details</h5>
        </div>
        <div className="acc_form">
          <Row>
            <Col lg-6 md-12 sm-12>
              <div className="inp_fields">
                <span>Company Name</span>
                <input
                  type="text"
                  name="company-name"
                  id="company-name"
                  placeholder="Ankita Kumavat"
                />
              </div>
              <div className="inp_fields">
                <span>Add your industry</span>
                <Select
                  className="custom_css_select"
                  placeholder="Selece your Industry"
                  options={options1}
                />
              </div>
            </Col>
            <Col lg-6 md-12 sm-12>
              <div className="inp_fields">
                <span>Website</span>
                <input type="text" name="website" id="website" placeholder="" />
              </div>
              <div className="inp_fields">
                <span>Tagline</span>
                <input type="text" name="tagline" id="tagline" placeholder="" />
              </div>
            </Col>
            <div className="inp_fields">
              <span>Description</span>
              <textarea name="description" id="descr"></textarea>
            </div>
            <div className="inp_fields">
              <span>How many people are in your company?</span>
              <div className="emp_radio_inputs">
                <label htmlFor="radio-1">
                    <input type="radio" id="radio-1" name="empCount" /><span> It Just me</span>
                </label>
                <label htmlFor="radio-2">
                    <input type="radio" id="radio-2"  name="empCount" /><span> 2-9 employees</span>
                </label>
                <label htmlFor="radio-3">
                    <input type="radio" id="radio-3" name="empCount" /><span> 10-99 employees</span>
                </label>
                <label htmlFor="radio-4">
                    <input type="radio" id="radio-4" name="empCount" /><span> more then 100 employees</span>
                </label>
              </div>
            </div>
          </Row>
          <div className="acc_btn">
            <button className="cancel_btn">CANCEL</button>
            <button className="save_btn">SAVE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompnyDetailsInfo;

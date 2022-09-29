import React from "react";
import "../components/accountInfo.css";
import { Row, Col } from "react-bootstrap";
import Select from "react-select";

const CompanyContactInfo = () => {
  const options1 = [{ name: "india", label: "india" }];

  return (
    <>
      <div className="account_info">
        <div className="comp_title">
          <h5>Compnay Contacts</h5>
        </div>
        <div className="acc_form">
          <Row>
            <Col lg-6>
              <div className="inp_fields">
                <span>Owner Email</span>
                <input
                  type="text"
                  name="owner-email"
                  id="owner-email"
                  placeholder="Ankita Kumavat"
                />
              </div>
              <div className="inp_fields">
                <span>VAT ID</span>
                <Select
                  className="custom_css_select"
                  placeholder=""
                  options={options1}
                />
              </div>
              <div className="inp_fields">
                <span>Country</span>
                <Select
                  className="custom_css_select"
                  placeholder="india"
                  options={options1}
                />
              </div>
              <div className="inp_fields">
                <span>City</span>
                <Select
                  className="custom_css_select"
                  placeholder=""
                  options={options1}
                />
              </div>
            </Col>
            <Col lg-6>
              <div className="inp_fields">
                <span>Phone</span>
                <input type="text" name="phone" id="phone" placeholder="" />
              </div>
              <div className="inp_fields">
                <span>Time Zone</span>
                <Select
                  className="custom_css_select"
                  placeholder=""
                  options={options1}
                />
              </div>
              <div className="inp_fields">
                <span>Address</span>
                <input type="text" name="address" id="address" placeholder="" />
              </div>
              <div className="inp_fields">
                <span>ZIP</span>
                <input type="text" name="zip" id="zip" placeholder="zip" />
              </div>
            </Col>
          </Row>
          <div className="acc_btn">
            <button className="cancel_btn">CANCEL</button>
            <button className="save_btn">SAVE</button>
          </div>
          <div className="account_type_alert">
            This is a <span>Client</span> account
          </div>
          <div className="acc_btn">
            <button className="cls_acc_btn">Close Account</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyContactInfo;

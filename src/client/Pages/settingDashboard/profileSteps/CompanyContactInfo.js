import React, { useState } from "react";
import "../../../../styles/accountInfo.css";
import { Row, Col } from "react-bootstrap";
import Select from "react-select";
import CloseAccountPopup from "../../../../popups/CloseAccountPopup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CompanyContactInfo = () => {
  const options1 = [{ name: "india", label: "india" }];
  const [openCloseAccount, setOpenCloseAccount] = useState(false);

  return (
    <>
      <div className="account_info">
        <div className="comp_title">
          <h5>Compnay Contacts</h5>
        </div>
        <div className="acc_form">
          <Row>
            <Col lg={6} sm={12} md={12}>
              <Form.Group className="inp_fields">
                <Form.Label>Owner Email</Form.Label>
                <Form.Control
                  type="text"
                  name="owner-email"
                  id="owner-email"
                  placeholder="Ankita Kumavat"
                />
              </Form.Group>
              <Form.Group className="inp_fields">
                <Form.Label>VAT ID</Form.Label>
                <Select
                  className="custom_css_select"
                  placeholder=""
                  options={options1}
                />
              </Form.Group>
              <Form.Group className="inp_fields">
                <Form.Label>Country</Form.Label>
                <Select
                  className="custom_css_select"
                  placeholder="india"
                  options={options1}
                />
              </Form.Group>
              <Form.Group className="inp_fields">
                <Form.Label>City</Form.Label>
                <Select
                  className="custom_css_select"
                  placeholder=""
                  options={options1}
                />
              </Form.Group>
            </Col>
            <Col lg={6} sm={12} md={12}>
              <Form.Group className="inp_fields">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder=""
                />
              </Form.Group>
              <Form.Group className="inp_fields">
                <Form.Label>Time Zone</Form.Label>
                <Select
                  className="custom_css_select"
                  placeholder=""
                  options={options1}
                />
              </Form.Group>
              <Form.Group className="inp_fields">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  id="address"
                  placeholder=""
                />
              </Form.Group>
              <Form.Group className="inp_fields">
                <Form.Label>ZIP</Form.Label>
                <Form.Control
                  type="text"
                  name="zip"
                  id="zip"
                  placeholder="zip"
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="acc_btn">
            <Button variant="" className="cancel_btn">
              CANCEL
            </Button>
            <Button variant="" className="save_btn">
              SAVE
            </Button>
          </div>
          <div className="account_type_alert">
            This is a <span>Client</span> account
          </div>
          <div className="acc_btn">
            <Button
              variant=""
              className="cls_acc_btn"
              onClick={() => setOpenCloseAccount(true)}
            >
              Close Account
            </Button>
          </div>
        </div>
      </div>
      {openCloseAccount && (
        <CloseAccountPopup
          open={openCloseAccount}
          onCloseModal={() => setOpenCloseAccount(false)}
        />
      )}
    </>
  );
};

export default CompanyContactInfo;

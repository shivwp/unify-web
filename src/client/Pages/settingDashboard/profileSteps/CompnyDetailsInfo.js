import React from "react";
import "../../../../styles/accountInfo.css";
import { Row, Col } from "react-bootstrap";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
            <Col lg={6} md={6} sm={12}>
              <Form.Group className="inp_fields">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  name="company-name"
                  id="company-name"
                  placeholder="Ankita Kumavat"
                />
              </Form.Group>
              <Form.Group className="inp_fields">
                <Form.Label>Add your industry</Form.Label>
                <Select
                  className="custom_css_select"
                  placeholder="Selece your Industry"
                  options={options1}
                />
              </Form.Group>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Form.Group className="inp_fields">
                <Form.Label>Website</Form.Label>
                <Form.Control
                  type="text"
                  name="website"
                  id="website"
                  placeholder=""
                />
              </Form.Group>
              <Form.Group className="inp_fields">
                <Form.Label>Tagline</Form.Label>
                <Form.Control
                  type="text"
                  name="tagline"
                  id="tagline"
                  placeholder=""
                />
              </Form.Group>
            </Col>
            <Form.Group className="inp_fields">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                id="descr"
              ></Form.Control>
            </Form.Group>
            <div className="inp_fields">
              <Form.Label>How many people are in your company?</Form.Label>
              <div className="emp_radio_inputs">
                <Form.Label htmlFor="radio-1">
                  <Form.Check type="radio" id="radio-1" name="empCount" />
                  <span> It Just me</span>
                </Form.Label>
                <Form.Label htmlFor="radio-2">
                  <Form.Check type="radio" id="radio-2" name="empCount" />
                  <span> 2-9 employees</span>
                </Form.Label>
                <Form.Label htmlFor="radio-3">
                  <Form.Check type="radio" id="radio-3" name="empCount" />
                  <span> 10-99 employees</span>
                </Form.Label>
                <Form.Label htmlFor="radio-4">
                  <Form.Check type="radio" id="radio-4" name="empCount" />
                  <span> more then 100 employees</span>
                </Form.Label>
              </div>
            </div>
          </Row>
          <div className="acc_btn">
            <Button variant="" className="cancel_btn">
              CANCEL
            </Button>
            <Button variant="" className="save_btn">
              SAVE
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompnyDetailsInfo;

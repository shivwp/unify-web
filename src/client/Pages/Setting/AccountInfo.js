import React from "react";
import "../../../styles/accountInfo.css";
import { Row, Col } from "react-bootstrap";
import CompanyContactInfo from "./CompanyContactInfo";
import CompnyDetailsInfo from "./CompnyDetailsInfo";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AccountInfo = () => {
  return (
    <>
      <div className="account_info">
        <div className="comp_title">
          <h5>Account</h5>
        </div>
        <div className="account_prof">
          <div className="profile_img">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt=""
            />
          </div>
          <div className="change_prof_btn">
            <Button>Upload Profile Photo</Button>
          </div>
        </div>
        <div className="acc_form">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Form.Group className="inp_fields">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Ankita"
                />
              </Form.Group>
              <Form.Group className="inp_fields">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  id="email"
                  placeholder="ankita@gmail.com"
                />
              </Form.Group>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Form.Group className="inp_fields">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Kumavat"
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="acc_btn">
            <Button className="cancel_btn">CANCEL</Button>
            <Button className="save_btn">SAVE</Button>
          </Form.Group>
        </div>
      </div>
      <CompnyDetailsInfo />
      <CompanyContactInfo />
    </>
  );
};

export default AccountInfo;

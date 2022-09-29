import React from "react";
import "../components/accountInfo.css";
import { Row, Col } from "react-bootstrap";
import CompanyContactInfo from "./CompanyContactInfo";
import CompnyDetailsInfo from "./CompnyDetailsInfo";

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
            <button>Upload Profile Photo</button>
          </div>
        </div>
        <div className="acc_form">
          <Row>
            <Col lg-6>
              <div className="inp_fields">
                <span>First Name</span>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Ankita"
                />
              </div>
              <div className="inp_fields">
                <span>Email</span>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="ankita@gmail.com"
                />
              </div>
            </Col>
            <Col lg-6>
              <div className="inp_fields">
                <span>Last Name</span>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Kumavat"
                />
              </div>
            </Col>
          </Row>
          <div className="acc_btn">
            <button className="cancel_btn">CANCEL</button>
            <button className="save_btn">SAVE</button>
          </div>
        </div>
      </div>
      <CompnyDetailsInfo />
      <CompanyContactInfo />
    </>
  );
};

export default AccountInfo;

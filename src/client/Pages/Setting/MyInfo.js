import React from "react";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import CloseAccountPopup from "../../../popups/CloseAccountPopup";
import Button from "react-bootstrap/Button";

const MyInfo = ({ setOpen, getClientDetails }) => {
  const [openCloseAccount, setOpenCloseAccount] = useState(false);

  return (
    <>
      <div className="r-box_setting">
        <div className="d-flex justify-content-between align-items-center b-bottom-gr pt-1 pb-3">
          <div className="setting_b_head_s">Account</div>
          <div>
            <Button className="round_b_btn" onClick={setOpen}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#D4D4D5"
                className="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </Button>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap mt-3">
          <div className="d-flex">
            <div className="setting_pro_r_big">
              <img src={getClientDetails?.profile_image} alt="" />
            </div>
            <div>
              <div className="user_nme_set">
                {getClientDetails?.first_name} {getClientDetails?.last_name}
              </div>
              <div className="user_mal_set">{getClientDetails?.email}</div>
            </div>
          </div>
          {/* <div className="btn_foot_sec no-border mt-0 fo_btn_c next_b_btn_c">
            <button className="bg-transparent h-color-b">
              Upload Profile Photo
            </button>
          </div> */}
        </div>
      </div>
      <div className="r-box_setting">
        <div className="d-flex justify-content-between align-items-center b-bottom-gr pt-1 pb-3">
          <div className="setting_b_head_s">Company Details</div>
          {/* <div>
            <button className="round_b_btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#D4D4D5"
                className="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </button>
          </div> */}
        </div>
        <Row>
          <Col lg={4}>
            <div className="mb-2 mt-1">
              <div className="c_name_sett">Company name</div>
              <div className="c_name_s_v">{getClientDetails?.company_name}</div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="mb-2 mt-1">
              <div className="c_name_sett">Website</div>
              <div className="c_name_s_v">{getClientDetails?.website}</div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="mb-2 mt-1">
              <div className="c_name_sett">Tagline</div>
              <div className="c_name_s_v">{getClientDetails?.tagline}</div>
            </div>
          </Col>
          <Col>
            <div className="mb-2 mt-2">
              <div className="c_name_sett">Description</div>
              <div className="c_name_s_v">{getClientDetails?.description}</div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="r-box_setting">
        <div className="d-flex justify-content-between align-items-center b-bottom-gr pt-1 pb-3">
          <div className="setting_b_head_s">Company Contacts</div>
          {/* <div>
            <button className="round_b_btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#D4D4D5"
                className="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </button>
          </div> */}
        </div>
        <Row>
          <Col lg={4}>
            <div className="mb-2 mt-1">
              <div className="c_name_sett">Owner name</div>
              <div className="c_name_s_v">{`${getClientDetails?.first_name} ${getClientDetails?.last_name}`}</div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="mb-2 mt-1">
              <div className="c_name_sett">Phone</div>
              <div className="c_name_s_v">
                {getClientDetails?.company_phone}
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="mb-2 mt-1">
              <div className="c_name_sett">VAT ID</div>
              <div className="c_name_s_v">
                Enter your VAT ID to enable VAT invoicing
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <div className="mb-2 mt-2">
              <div className="c_name_sett">Time Zone</div>
              <div className="c_name_s_v">{getClientDetails?.timezone}</div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="mb-2 mt-2">
              <div className="c_name_sett">Address</div>
              <div className="c_name_s_v">
                {getClientDetails?.company_address}
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="acc_inf_c_s">
        This is a <b>Client</b> account
      </div>
      <div className="btn_foot_sec flex-wrap d-flex no-border">
        <div className="fo_btn_c next_b_btn_c">
          <Button className="mrright-gppnew">Create New Account</Button>
        </div>
        <div className="fo_btn_c next_b_btn_c">
          <Button
            className="active_btn_blue"
            onClick={() => setOpenCloseAccount(true)}
          >
            Close Account
          </Button>
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

export default MyInfo;

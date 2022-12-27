import React from "react";
import { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import PopupsCloseIcon from "../../../components/popups/PopupsCloseIcon";
import RequestMilestoneChanges from "./RequestMilestoneChanges";

const EditActiveMilestone = ({ popup }) => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Edit Active Milestone</div>
            <div
              className="close_pp_btn"
              onClick={() => {
                popup();
              }}
            >
              <PopupsCloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn edit_active_milestone">
            <div className="mb-3 ">
              <Row>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Title
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      className="font-size-13px"
                      value={values?.name}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Profile Edit, Profile Settings"
                    />
                    <span className="signup-error">
                      {errors.name && errors.name}
                    </span>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Currently Funded
                    </Form.Label>
                    <div style={{ position: "relative" }}>
                      <Form.Control
                        type="text"
                        name="amount"
                        className="font-size-13px"
                        value={values?.amount}
                        onChange={(e) => onInputChange(e)}
                        placeholder="2000"
                        style={{ textAlign: "right" }}
                      />
                      <span style={{ position: "absolute", top: 9, left: 7 }}>
                        $
                      </span>
                    </div>
                    <span className="signup-error">
                      {errors.amount && errors.amount}
                    </span>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Additional Payment
                    </Form.Label>
                    <div style={{ position: "relative" }}>
                      <Form.Control
                        type="text"
                        name="amount"
                        className="font-size-13px"
                        value={values?.amount}
                        onChange={(e) => onInputChange(e)}
                        placeholder="2000"
                        style={{ textAlign: "right" }}
                      />
                      <span style={{ position: "absolute", top: 9, left: 7 }}>
                        $
                      </span>
                    </div>
                    <span className="signup-error">
                      {errors.amount && errors.amount}
                    </span>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      New Milestone Payment
                    </Form.Label>
                    <div style={{ position: "relative" }}>
                      <Form.Control
                        type="text"
                        name="amount"
                        className="font-size-13px"
                        value={values?.amount}
                        onChange={(e) => onInputChange(e)}
                        placeholder="2000"
                        style={{ textAlign: "right" }}
                      />
                      <span style={{ position: "absolute", top: 9, left: 7 }}>
                        $
                      </span>
                    </div>
                    <span className="signup-error">
                      {errors.amount && errors.amount}
                    </span>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Due Date (Optional)
                    </Form.Label>
                    <Form.Control
                      name="due date"
                      className="font-size-13px"
                      type="date"
                      value={values?.email}
                      onChange={(e) => onInputChange(e)}
                    />
                    <span style={{ fontSize: 12, marginTop: 8 }}>
                      All date and time are base on UTC
                    </span>
                    <span className="signup-error">
                      {errors.email && errors.email}
                    </span>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Description (Optional)
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      name="description"
                      maxLength={200}
                      className="font-size-13px"
                      value={values?.description}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter Here"
                    ></Form.Control>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <button
                variant=""
                className="font-weight-600 trans_btn"
                onClick={() => popup(<RequestMilestoneChanges popup={popup} />)}
              >
                CANCEL
              </button>
              <button
                variant=""
                className="font-weight-600 "
                onClick={() => popup(<RequestMilestoneChanges popup={popup} />)}
              >
                UPDATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditActiveMilestone;

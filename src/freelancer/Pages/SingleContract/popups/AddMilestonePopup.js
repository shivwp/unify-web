import React from "react";
import { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { onFreelancerRequestMilestone } from "../../../../redux/actions/jobActions";
import PopupsCloseIcon from "../../../components/popups/PopupsCloseIcon";

const AddMilestonePopup = ({
  popup,
  setLoading,
  afterSuccess,
  contract_id,
}) => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  const dispatch = useDispatch();
  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const requestForMilestone = (another) => {
    const errorsObject = {};
    let errorExist = false;
    setLoading(true);

    const data = {
      contract_id,
      title: values.title,
      amount: values.amount,
      due_date: values.due_date,
    };
    if (
      values.title == "" ||
      values.title == undefined ||
      values.title == null
    ) {
      errorsObject.title = "Please enter milestone title";
      errorExist = true;
    }
    if (
      values.amount == "" ||
      values.amount == undefined ||
      values.amount == null
    ) {
      errorsObject.amount = "Please enter milestone amount";
      errorExist = true;
    }
    if (values.amount < 0) {
      errorsObject.amount = "Please enter valid amount";
      errorExist = true;
    }
    if (errorExist) {
      setErrors(errorsObject);
      setLoading(false);
      return false;
    }
    dispatch(onFreelancerRequestMilestone(data, setLoading, popup, another));
  };
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup add_milestone_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Add Milestone</div>
            <div
              className="close_pp_btn"
              onClick={() => {
                popup();
              }}
            >
              <PopupsCloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui">
            <div className="mb-3 ">
              <Row>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Name of milestone 9
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      className="font-size-13px"
                      value={values?.name}
                      onChange={(e) => onInputChange(e)}
                      placeholder=""
                    />
                    <span className="signup-error">
                      {errors.title && errors.title}
                    </span>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Amount
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
                    {/* <span className="signup-error mt-1">
                      {errorRequestTestimonial && errorRequestTestimonial}
                    </span> */}
                    <div className="maxlabel_atcxt2_and_errors">
                      <span>
                        {200 - (values?.description?.length || 0)} characters
                        left
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <button
                variant=""
                className="font-weight-600 trans_btn"
                onClick={() => requestForMilestone(afterSuccess)}
              >
                SAVE & ADD ANOTHER
              </button>
              <button
                variant=""
                className="font-weight-600"
                onClick={requestForMilestone}
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMilestonePopup;

import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import PopupsCloseIcon from "../../../../freelancer/components/popups/PopupsCloseIcon";

const AddMilestone = ({ popup }) => {
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup add_milestone_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Add Milestone</div>
            <div className="close_pp_btn" onClick={() => popup()}>
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
                      name="name"
                      className="font-size-13px"
                      placeholder=""
                    />
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
                        placeholder="2000"
                        style={{ textAlign: "right" }}
                      />
                      <span style={{ position: "absolute", top: 9, left: 7 }}>
                        $
                      </span>
                    </div>
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
                    />
                    <span style={{ fontSize: 12, marginTop: 8 }}>
                      All date and time are base on UTC
                    </span>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <button variant="" className="font-weight-600 trans_btn">
                SAVE & ADD ANOTHER
              </button>
              <button variant="" className="font-weight-600 ">
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMilestone;

import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import PopupsCloseIcon from "../../../../freelancer/components/popups/PopupsCloseIcon";

const ReviewRequestWork = ({ popup, data, setLoading }) => {
  const dispatch = useDispatch();

  const handleApproveWork = () => {};
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Review & Request for change</div>
            <div className="close_pp_btn" onClick={() => popup()}>
              <PopupsCloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn milestone_changes max_height_popucwui">
            <div className="mb-3 ">
              <Row>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Message to Ankit (Optional)
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      name="description"
                      maxLength={200}
                      className="font-size-13px"
                      placeholder="Enter Here"
                    ></Form.Control>
                    {/* <div className="about">
                      Ankit will need to approve these updates. We'll notify
                      them and let you know if these changes are approved.
                    </div> */}
                  </div>
                </Col>
              </Row>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <button
                className="font-weight-600 trans_btn"
                onClick={() => handleApproveWork("paid")}
              >
                Approve
              </button>
              <button
                className="font-weight-600"
                onClick={() => handleApproveWork("")}
              >
                SEND REQUEST
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewRequestWork;

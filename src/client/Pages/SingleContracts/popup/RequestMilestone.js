import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Switch from "react-switch";
import PopupsCloseIcon from "../../../../freelancer/components/popups/PopupsCloseIcon";
import EditActiveMilestone from "./EditActiveMilestone";

const RequestMilestone = ({ popup }) => {
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Request milestone changes</div>
            <div className="close_pp_btn" onClick={() => popup()}>
              <PopupsCloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn milestone_changes max_height_popucwui">
            <div className="mb-3 ">
              <Row>
                <div className="show_changes">
                  <span>Show Changes</span>
                  <Switch
                    boxShadow={false}
                    activeBoxShadow={false}
                    offColor={`#EEEEEE`}
                    onColor={`#EEEEEE`}
                    onHandleColor={`#fff`}
                    offHandleColor={`#E2E2E2`}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    className="react-switch"
                  />
                </div>
                <div className="about_milestone">
                  <div className="milestone">
                    <div className="number">Milestone 3</div>
                    <div className="amt">$1500.00</div>
                  </div>
                  <div className="date">Due Nov 30</div>
                  <div
                    className="edit"
                    onClick={() => popup(<EditActiveMilestone popup={popup} />)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 15.709 15.715"
                    >
                      <path
                        id="_8665767_pen_icon"
                        data-name="8665767_pen_icon"
                        d="M15.327,2.274,13.482.429a1.475,1.475,0,0,0-2.085,0L9.662,2.165l3.9,3.929L15.3,4.358A1.447,1.447,0,0,0,15.327,2.274Zm-6.356.585L1,10.83a.491.491,0,0,0-.134.251L.057,15.123a.491.491,0,0,0,.576.58l4.042-.808a.491.491,0,0,0,.251-.134L12.9,6.789Z"
                        transform="translate(-0.047 0.003)"
                        fill="#6d2ef1"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="new_milestone">
                  <button variant="">Propose a new milestone</button>
                </div>
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
                    <div className="about">
                      Ankit will need to approve these updates. We'll notify
                      them and let you know if these changes are approved.
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <button
                variant=""
                className="font-weight-600 trans_btn"
                onClick={() => popup()}
              >
                CANCEL
              </button>
              <button variant="" className="font-weight-600 ">
                SEND REQUEST
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestMilestone;

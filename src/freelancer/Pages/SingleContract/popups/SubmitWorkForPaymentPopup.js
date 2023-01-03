import React from "react";
import { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import PopupsCloseIcon from "../../../components/popups/PopupsCloseIcon";

const SubmitWorkForPaymentPopup = ({ popup }) => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup submit_work_for_payment_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Submit Work For Payment</div>
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
                  <div className="about_work">
                    Backend setup with Learn press and white our Brand. Create
                    all the Backend options that are required for the teacher
                    and admin.
                  </div>
                  <div className="work_status">Active & Funded</div>
                  <div className="when_payment">
                    Your payment will be released once Ankit approves your work.
                  </div>
                  <div className="bb_divide"></div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Message to Ankit
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
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element p_relative">
                    <Form.Label
                      htmlFor="choose_file"
                      className="choose_file_resubmit_revision_inp_2"
                    >
                      <Form.Control
                        maxLength={200}
                        type="file"
                        id="choose_file"
                        className="font-size-13px choose_file_resubmit_revision_inp"
                        value={values?.description}
                        onChange={(e) => onInputChange(e)}
                        placeholder="Attach Files"
                      ></Form.Control>
                      <div className="choose_file_resubmit_revision">
                        Choose File
                      </div>
                    </Form.Label>

                    <div className="choose_file_icon_resubmit_revision">
                      <svg
                        id="script"
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="auto"
                        viewBox="0 0 21.916 19.909"
                      >
                        <g
                          id="Group_2383"
                          data-name="Group 2383"
                          transform="translate(0 0)"
                        >
                          <g id="Group_2382" data-name="Group 2382">
                            <path
                              id="Path_4463"
                              data-name="Path 4463"
                              d="M19.867,33.475V24.527a2.979,2.979,0,0,0-2.98-2.98H2.979A2.98,2.98,0,0,0,0,24.525V29.5H1.987V24.525a1,1,0,0,1,1.04-.991.994.994,0,0,1,.992.993V37.45H19.867V35.462H7.946v1.985H5.959V35.462h.046V24.527a2.972,2.972,0,0,0-.17-.993H16.887a.992.992,0,0,1,.993.993v8.949Z"
                              transform="translate(0 -21.547)"
                              fill="#6d2ef1"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_2385"
                          data-name="Group 2385"
                          transform="translate(7.946 3.982)"
                        >
                          <g
                            id="Group_2384"
                            data-name="Group 2384"
                            transform="translate(0 0)"
                          >
                            <rect
                              id="Rectangle_601"
                              data-name="Rectangle 601"
                              width="7.946"
                              height="1.987"
                              fill="#6d2ef1"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_2387"
                          data-name="Group 2387"
                          transform="translate(7.946 7.955)"
                        >
                          <g id="Group_2386" data-name="Group 2386">
                            <rect
                              id="Rectangle_602"
                              data-name="Rectangle 602"
                              width="3.973"
                              height="1.987"
                              fill="#6d2ef1"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_2389"
                          data-name="Group 2389"
                          transform="translate(13.906 7.955)"
                        >
                          <g id="Group_2388" data-name="Group 2388">
                            <rect
                              id="Rectangle_603"
                              data-name="Rectangle 603"
                              width="1.987"
                              height="1.987"
                              fill="#6d2ef1"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_2391"
                          data-name="Group 2391"
                          transform="translate(3.992 13.905)"
                        >
                          <g id="Group_2390" data-name="Group 2390">
                            <path
                              id="Path_4464"
                              data-name="Path 4464"
                              d="M89.693,320.226v3a.974.974,0,0,1-.976.976,1.009,1.009,0,0,1-.99-1.008V320.2H85.74v2.987a3,3,0,0,0,2.625,2.972v.036h12.316a2.979,2.979,0,0,0,2.982-2.978v-3.027Zm11.984,3a.993.993,0,0,1-1,.991H91.51a2.963,2.963,0,0,0,.169-.989v-1.015l10-.023v1.036Z"
                              transform="translate(-85.74 -320.194)"
                              fill="#6d2ef1"
                            />
                          </g>
                        </g>
                      </svg>
                      <span>Attach files</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <button variant="" className="font-weight-600 trans_btn">
                CANCEL
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

export default SubmitWorkForPaymentPopup;

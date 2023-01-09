import React from "react";
import { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { onSubmitWorkForPayment } from "../../../../redux/actions/jobActions";
import PopupsCloseIcon from "../../../components/popups/PopupsCloseIcon";

const SubmitWorkForPaymentPopup = ({
  popup,
  setLoading,
  milestone_id,
  freelancer,
}) => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  const [attachment, setAttachment] = useState(null);
  const [showingImage, setShowingImage] = useState();
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onImageChange = (e) => {
    let errorExist = false;
    const attachment = e.target.files[0];
    if (attachment?.size > 1048576 * 10) {
      setErrors({ ...errors, attachment: "Image size must be maximum 10 MB" });
      errorExist = true;
    }
    if (errorExist) {
      return false;
    }
    setAttachment(e.target.files[0]);
    setShowingImage(e.target.files[0].name);
    setErrors({ ...errors, attachment: false });
  };

  const onSubmit = () => {
    const formData = new FormData();
    const errorsObject = {};
    let errorExist = false;
    formData.append("image", attachment);
    formData.append("message", values?.description);
    formData.append("milestone_id", milestone_id);

    if (!attachment) {
      errorsObject.attachment = "Please choose a attachment file";
      errorExist = true;
    }
    if (
      values?.description == "" ||
      values?.description == undefined ||
      values?.description == null
    ) {
      errorsObject.description = "Description field is required";
      errorExist = true;
    }
    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }
    dispatch(onSubmitWorkForPayment(formData, setLoading, popup));
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
                    Your payment will be released once {freelancer.first_name}{" "}
                    approves your work.
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
                    <span className="signup-error mt-1">
                      {errors?.description && errors?.description}
                    </span>
                  </div>
                </Col>
                <Col md={12}>
                  {" "}
                  {/* ======================================== */}
                  {showingImage ? (
                    <div className="document_card mt-4 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="32"
                      >
                        <g fill="#828282">
                          <path d="M1.5 32h21c.827 0 1.5-.673 1.5-1.5v-21c0-.017-.008-.031-.009-.047-.002-.023-.008-.043-.013-.065a.488.488 0 0 0-.09-.191c-.007-.009-.006-.02-.013-.029l-8-9c-.003-.003-.007-.003-.01-.006a.494.494 0 0 0-.223-.134c-.019-.006-.036-.008-.056-.011C15.557.012 15.53 0 15.5 0h-14C.673 0 0 .673 0 1.5v29c0 .827.673 1.5 1.5 1.5zM16 1.815 22.387 9H16.5c-.22 0-.5-.42-.5-.75V1.815zM1 1.5a.5.5 0 0 1 .5-.5H15v7.25c0 .809.655 1.75 1.5 1.75H23v20.5a.5.5 0 0 1-.5.5h-21c-.28 0-.5-.22-.5-.5v-29z" />
                          <path d="M5.5 14h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1zM5.5 18h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1zM5.5 10h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1zM5.5 22h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1zM5.5 26h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1z" />
                        </g>
                      </svg>
                      <span className="heading">File Name : </span>
                      <span className="name">{showingImage}</span>
                      <span
                        onClick={() => {
                          setShowingImage();
                          setAttachment();
                        }}
                        className="close_icon"
                      >
                        X
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* ======================================== */}
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
                        name="attachment"
                        className="font-size-13px choose_file_resubmit_revision_inp"
                        onChange={(e) => onImageChange(e)}
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
                <span className="signup-error mt-1">
                  {errors?.attachment && errors?.attachment}
                </span>
              </Row>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <button
                variant=""
                className="font-weight-600 trans_btn"
                onClick={() => {
                  popup();
                }}
              >
                CANCEL
              </button>
              <button variant="" className="font-weight-600" onClick={onSubmit}>
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

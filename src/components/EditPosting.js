import React from "react";
import Layout from "../client/Layout/Layout";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import $ from "jquery";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EditPosting = () => {
  const hanDleSlide = (e) => {
    $(e.target.nextSibling).slideToggle();
  };
  $(".slider_shutter").slideDown();

  return (
    <Layout>
      <Container>
        <div className="edit_posting_box tb_p_none">
          <Row>
            <Col lg={12}>
              <div className="form_box_bor mt-2">
                <div className="edit-posting-heading">
                  <div className="heading">Review</div>
                  <Button
                   variant=""
                    className="mt-2 btn-save_post border_blue_wwifth"
                    style={{ fontSize: 17, fontWeight: 600 }}
                  >
                    Save Job Post
                  </Button>
                </div>
                <div className="title-edit_posting">
                  <div className="title">Title</div>
                  <div className="title_content">UI/UX Design</div>
                  <p>
                    That looks a title short. A descriptive headline will help
                    candidates better understand what your job requires
                  </p>
                </div>

                <div className="describe_edit_posting">
                  <div className="header">Describe Your Job</div>
                  <p>
                    This is how talent figures out what you need and why you're
                    great to work with!
                  </p>
                  <p>
                    Include your expectations about the task or deliverable,
                    what you're looking for in a work relationship, and anything
                    unique about your project, team, or company. <span></span>
                  </p>
                  <div className="description-textarea">
                    <Form.Control
                      as="textarea"
                      placeholder='The standard chunk of used since the 1500s is reprodced below for those intrested. Section 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exace original form, accompanied by English versions from the 1914 translation by H. Rackham.'
                    ></Form.Control>
                  </div>
                  <div className="why_textarea">
                    <p>
                      <i className="fa fa-info-circle" aria-hidden="true"></i>{" "}
                      Please add a job description
                    </p>
                    <p>4717 characters left</p>
                  </div>
                </div>
                <div className="ts_btn attach_f_btn edit_posting-attach-file">
                  <Button
                   variant=""
                    className="rot_svg_oety"
                    style={{
                      position: "relative",
                      fontSize: 16,
                      fontWeight: 500,
                    }}
                  >
                    <Form.Control type="file" style={{ cursor: "pointer" }} />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-paperclip"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                    </svg>
                    Attach File
                  </Button>
                  <div className="sm_label_inp">Max file size: 100 MB</div>
                </div>

                {/* catagory start */}
                <div className="edit-posting-category">
                  <div className="heading">Category</div>
                  <div className="category">
                    UI/UX Design{" "}
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </div>
                </div>

                {/* skills start here */}
                <div className="edit-posting-skills">
                  <div className="skills">
                    <div className="b_bot_inp">
                      <div className="heading">Skills</div>
                      <div className="slide_btnss">
                        <Button variant="">
                          Mobile App Design
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#393939"
                            className="bi bi-plus"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                          </svg>
                        </Button>
                        <Button variant="">
                          User Experience Design
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#393939"
                            className="bi bi-plus"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                          </svg>
                        </Button>
                        <Button variant="">
                          User Interface Design
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#393939"
                            className="bi bi-plus"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                          </svg>
                        </Button>
                        <Button variant="">
                          Graphic Design
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#393939"
                            className="bi bi-plus"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                          </svg>
                        </Button>
                        <Button variant="" className="round_b_btn">
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
                  </div>
                </div>
                {/* Scop start here */}
                <div className="edit-posting-category">
                  <div className="heading">Scope</div>
                  <div className="category">
                    Large, More than 6 months, Entry level{" "}
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </div>
                </div>
                {/* Budget start here */}
                <div className="edit-posting-category">
                  <div className="heading">Budget</div>
                  <div className="category">
                    $15.00 - $35.00 / hr{" "}
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </div>
                </div>
                {/* screening questions  */}
                {/* <div
                  className="p-0 flex_slide_ta toggle_shutter b-bottom-b"
                  onClick={(e) => hanDleSlide(e)}
                >
                  <div className="">
                    <div className="input_t_lab pb-0">
                      Screening questions (optional)
                    </div>
                    <div className="sm_label_inp">
                      Narrow down your candidates
                    </div>
                  </div>
                  <div className="pr-10">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                      width="24"
                      height="24"
                      fill="#393939"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="KeyboardArrowDownIcon"
                    >
                      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                    </svg>
                  </div>
                </div>
                <div className="slide_btnss slider_shutter">
                  <div className="sm_label_inp">
                    Narrow down your candidates
                  </div>
                </div>
                <div
                  className="p-0 flex_slide_ta toggle_shutter b-bottom-b"
                  onClick={(e) => hanDleSlide(e)}
                >
                  <div className="">
                    <div className="input_t_lab pb-0">
                      Advanced preferences (optional)
                    </div>
                    <div className="sm_label_inp">
                      Hours per week, hire date, and more
                    </div>
                  </div>
                  <div className="pr-10">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                      width="24"
                      height="24"
                      fill="#393939"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="KeyboardArrowDownIcon"
                    >
                      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                    </svg>
                  </div>
                </div>
                <div className="slide_btnss slider_shutter">
                  <div className="sm_label_inp">
                    Hours per week, hire date, and more
                  </div>
                </div>

                <div
                  className="p-0 flex_slide_ta toggle_shutter b-bottom-b"
                  onClick={(e) => hanDleSlide(e)}
                >
                  <div className="">
                    <div className="input_t_lab pb-0">
                      Job post preferences (optional)
                    </div>
                    <div className="sm_label_inp">
                      Adjust visibility and add coworkers
                    </div>
                  </div>
                  <div className="pr-10">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                      width="24"
                      height="24"
                      fill="#393939"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="KeyboardArrowDownIcon"
                    >
                      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                    </svg>
                  </div>
                </div>
                <div className="slide_btnss slider_shutter">
                  <div className="sm_label_inp">
                    Adjust visibility and add coworkers
                  </div>
                </div> */}

                <div className=" edit_posting_save_btn ">
                  <div>
                    <Button variant="">Save Job Post</Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  );
};

export default EditPosting;

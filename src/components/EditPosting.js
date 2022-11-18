import React, { useEffect, useState } from "react";
import Layout from "../client/Layout/Layout";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import $ from "jquery";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singleJobPostDetails } from "../redux/actions/jobActions";
import EditCategoryPopup from "../popups/EditCategoryPopup";
import {
  getCategoryList,
  getFreelancerSkills,
} from "../redux/actions/profileAction";
import ProjectBudgetPopup from "../popups/ProjectBudgetPopup";
import ScopePopup from "../popups/ScopePopup";
import EditSkillsPopup from "../popups/EditSkillsPopup";

const EditPosting = () => {
  const { editId } = useParams();
  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  const [categoryPopup, setCategoryPopup] = useState(false);
  const [projectBudgetPopup, setProjectBudgetPopup] = useState(false);
  const [scopePopup, setScopePopup] = useState(false);
  const [skillPopup, setSkillPopup] = useState(false);
  const [jobCategory, setJobCategory] = useState();
  let singleJobDetails = useSelector((state) => state.job.singleJobDetails);
  const [singleJobLists, setSingleJobLists] = useState(
    singleJobDetails?.skills
  );
  const categoryList = useSelector((state) => state.profile.categoryList);
  const getSkillList = useSelector((state) => state.profile.getSkillList);

  const hanDleSlide = (e) => {
    $(e.target.nextSibling).slideToggle();
  };
  $(".slider_shutter").slideDown();

  useEffect(() => {
    const data = {
      job_id: editId,
    };
    dispatch(singleJobPostDetails(data));
  }, []);

  useEffect(() => {
    dispatch(getCategoryList());
    dispatch(getFreelancerSkills());
  }, []);

  useEffect(() => {
    if (singleJobDetails) {
      setValues(singleJobDetails);
      setSingleJobLists(singleJobDetails?.skills);
    }
  }, [singleJobDetails]);

  useEffect(() => {
    if (categoryList) {
      for (let i = 0; i < categoryList.length; i++) {
        if (categoryList[i].name === singleJobDetails?.categories) {
          setJobCategory(categoryList[i].id);
        }
      }
    }
  }, [categoryList]);

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });

    if (e.target.name === "categories") {
      for (let i = 0; i < categoryList.length; i++) {
        if (categoryList[i].name === e.target.value) {
          setJobCategory(categoryList[i].id);
        }
      }
    }
  };

  const saveEditJobPost = () => {
    const data = {
      job_type: values?.type,
      job_title: values?.name,
      job_category: jobCategory,
      skills: singleJobLists?.map((item) => item.id)?.toString(),
      scop: values?.scop,
      project_duration: values?.project_duration,
      experience_level: values?.experience_level,
      budget_type: values?.budget_type,
      min_price: values?.min_price,
      price: values?.price,
      description: values?.description,
      status: "publish",
      english_level: values?.english_level,
    };
  };

  return (
    <>
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
                      onClick={saveEditJobPost}
                    >
                      Save Job Post
                    </Button>
                  </div>
                  <div className="title-edit_posting">
                    <div className="title">Title</div>
                    <input
                      className="title_content"
                      value={values?.name}
                      name="name"
                      onChange={(e) => onInputChange(e)}
                      style={{ width: "100%" }}
                    />
                    <p>
                      That looks a title short. A descriptive headline will help
                      candidates better understand what your job requires
                    </p>
                  </div>

                  <div className="describe_edit_posting">
                    <div className="header">Describe Your Job</div>
                    <p>
                      This is how talent figures out what you need and why
                      you're great to work with!
                    </p>
                    <p>
                      Include your expectations about the task or deliverable,
                      what you're looking for in a work relationship, and
                      anything unique about your project, team, or company.{" "}
                      <span></span>
                    </p>
                    <div className="description-textarea">
                      <Form.Control
                        as="textarea"
                        name="description"
                        placeholder='The standard chunk of used since the 1500s is reprodced below for those intrested. Section 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exace original form, accompanied by English versions from the 1914 translation by H. Rackham.'
                        value={values?.description}
                        onChange={(e) => onInputChange(e)}
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
                    <Button variant="" className="rot_svg_oety">
                      <Form.Control type="file" style={{ cursor: "pointer" }} />
                      <i class="fa fa-paperclip" aria-hidden="true"></i> Attach
                      File
                    </Button>
                    <div className="sm_label_inp">Max file size: 100 MB</div>
                  </div>

                  {/* catagory start */}
                  <div className="edit-posting-category">
                    <div className="heading">Category</div>
                    <div className="category">
                      {values?.categories}{" "}
                      <i
                        className="fa fa-pencil"
                        aria-hidden="true"
                        onClick={() => setCategoryPopup(true)}
                      ></i>
                    </div>
                  </div>

                  {/* skills start here */}
                  <div className="edit-posting-skills">
                    <div className="skills">
                      <div className="b_bot_inp">
                        <div className="heading">Skills</div>
                        <div className="slide_btnss">
                          {singleJobLists?.map((item, key) => (
                            <Button variant="" key={key}>
                              {item.name}
                            </Button>
                          ))}

                          <Button
                            variant=""
                            className="round_b_btn"
                            onClick={() => setSkillPopup(true)}
                          >
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
                      {values?.project_duration}{" "}
                      <i
                        className="fa fa-pencil"
                        aria-hidden="true"
                        onClick={() => setScopePopup(true)}
                      ></i>
                    </div>
                  </div>
                  {/* Budget start here */}

                  <div className="edit-posting-category">
                    <div className="heading">Budget</div>
                    {values?.budget_type === "hourly" ? (
                      <div className="category">
                        {`${parseInt(values?.price).toFixed(2)} - ${parseInt(
                          values?.min_price
                        ).toFixed(2)}`}{" "}
                        / hr{" "}
                        <i
                          className="fa fa-pencil"
                          aria-hidden="true"
                          onClick={() => setProjectBudgetPopup(true)}
                        ></i>
                      </div>
                    ) : values?.budget_type === "fixed" ? (
                      <div className="category">
                        {parseInt(values?.price).toFixed(2)}{" "}
                        <i
                          className="fa fa-pencil"
                          aria-hidden="true"
                          onClick={() => setProjectBudgetPopup(true)}
                        ></i>
                      </div>
                    ) : null}
                  </div>

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

      {categoryPopup && (
        <EditCategoryPopup
          open={categoryPopup}
          onCloseModal={() => setCategoryPopup(false)}
          categoryList={categoryList}
          onInputChange={onInputChange}
          values={values}
        />
      )}
      {projectBudgetPopup && (
        <ProjectBudgetPopup
          open={projectBudgetPopup}
          onCloseModal={() => setProjectBudgetPopup(false)}
          onInputChange={onInputChange}
          values={values}
        />
      )}
      {scopePopup && (
        <ScopePopup
          open={scopePopup}
          onCloseModal={() => setScopePopup(false)}
          onInputChange={onInputChange}
          values={values}
        />
      )}
      {skillPopup && (
        <EditSkillsPopup
          open={skillPopup}
          onCloseModal={() => setSkillPopup(false)}
          onInputChange={onInputChange}
          values={values}
          getSkillList={getSkillList}
          singleJobLists={singleJobLists}
          setSingleJobLists={setSingleJobLists}
        />
      )}
    </>
  );
};

export default EditPosting;

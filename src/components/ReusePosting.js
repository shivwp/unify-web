import React, { useEffect, useState } from "react";
import Layout from "../client/Layout/Layout";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editJobPosting,
  onPostYourJobNow,
  singleJobPostDetails,
} from "../redux/actions/jobActions";
import EditCategoryPopup from "../popups/EditCategoryPopup";
import { getCategoryList } from "../redux/actions/profileAction";
import ProjectBudgetPopup from "../popups/ProjectBudgetPopup";
import ScopePopup from "../popups/ScopePopup";
import EditSkillsPopup from "../popups/EditSkillsPopup";

const ReusePosting = () => {
  const { reuseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imageFile, setImageFile] = useState();
  const [objectUrl, setObjectUrl] = useState();
  const [values, setValues] = useState({});
  const [categoryPopup, setCategoryPopup] = useState(false);
  const [projectBudgetPopup, setProjectBudgetPopup] = useState(false);
  const [scopePopup, setScopePopup] = useState(false);
  const [skillPopup, setSkillPopup] = useState(false);
  const [categoryName, setCategoryName] = useState();
  let singleJobDetails = useSelector((state) => state.job.singleJobDetails);
  const categoryList = useSelector((state) => state.profile.categoryList);

  useEffect(() => {
    if (singleJobDetails) {
      setValues(singleJobDetails);
    }
  }, [singleJobDetails]);

  useEffect(() => {
    if (categoryList) {
      for (let i = 0; i < categoryList.length; i++) {
        if (categoryList[i].id == parseInt(values?.category_id)) {
          setCategoryName(categoryList[i]);
        }
      }
    }
  }, [categoryList, values]);

  useEffect(() => {
    dispatch(getCategoryList());
  }, []);

  useEffect(() => {
    const data = {
      job_id: reuseId,
    };
    dispatch(singleJobPostDetails(data));
  }, []);

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
    setObjectUrl(URL.createObjectURL(e.target.files[0]));
  };

  console.log(values);

  const postYourJobNow = () => {
    const formData = new FormData();

    formData.append("job_type", values?.type);
    formData.append("job_title", values?.name);
    formData.append("job_category", values?.category_id);
    formData.append(
      "skills",
      values?.job_skills?.map((item) => item.id)?.toString()
    );
    formData.append("scop", values?.scop);
    formData.append("project_duration", values?.project_duration);
    formData.append("experience_level", values?.experience_level);
    formData.append("budget_type", values?.budget_type);
    formData.append("english_level", values?.english_level);

    if (values?.budget_type === "hourly") {
      formData.append("price", values?.price);
      formData.append("min_price", values?.min_price);
    } else if (values?.budget_type === "fixed") {
      formData.append("price", values?.price);
    }

    formData.append("description", values?.description);
    formData.append("status", values?.status);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    dispatch(onPostYourJobNow(formData, navigate));
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
                    <button
                      className="mt-2 btn-save_post border_blue_wwifth"
                      style={{ fontSize: 17, fontWeight: 600 }}
                      onClick={postYourJobNow}
                    >
                      Post Your Job Now
                    </button>
                  </div>
                  <div className="title-edit_posting">
                    <div className="title">Title</div>
                    <input
                      className="title_content"
                      name="name"
                      value={values?.name}
                      onChange={onInputChange}
                      style={{ width: "100%" }}
                    />
                    <p>
                      That looks a title short. A descriptive headline will help
                      candidates better understand what your job requires
                    </p>
                  </div>
                  <div className="b_bot_inp">
                    <div className="input_t_lab">Describe your job</div>
                    <div className="input_t_par">
                      This is how talent figures out what you need and why
                      you’re great to work with! Include your expectations about
                      the task or deliverable, what you’re looking for in a work
                      relationship, and anything unique about your project,
                      team, or company. Here are several examples that
                      illustrate best practices for effective job posts.
                    </div>
                    <div className="job_t_inp">
                      <Form.Control
                        as="textarea"
                        name="description"
                        value={values?.description}
                        onChange={(e) => onInputChange(e)}
                      ></Form.Control>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="sm_label_inp">
                        <span className="sm_span_icon">
                          <i className="bi bi-info-circle-fill"></i>
                        </span>
                        Please add a job description.
                      </div>
                      <div className="sm_label_inp text-right">
                        5000 characters left
                      </div>
                    </div>
                    <div className="ts_btn attach_f_btn">
                      <label id="uploadImage" className="rot_svg_oety">
                        <input
                          id="uploadImage"
                          type="file"
                          onChange={handleImageChange}
                        />
                        <i class="fa fa-paperclip" aria-hidden="true"></i>
                        Attach File
                      </label>
                      <div className="sm_label_inp">Max file size: 100 MB</div>
                    </div>
                    <img
                      src={objectUrl ? objectUrl : values?.image}
                      className="selectImage"
                      alt=""
                    />
                  </div>

                  {/* catagory start */}
                  <div className="edit-posting-category">
                    <div className="heading">Category</div>
                    <div className="job_t_inp cat_inp_j d-flex flex-wrap align-items-center">
                      <span>{categoryName?.name}</span>
                      <button
                        className="round_b_btn"
                        onClick={() => setCategoryPopup(true)}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                    </div>
                  </div>

                  {/* skills start here */}
                  <div className="b_bot_inp">
                    <div className="input_t_lab">Skills</div>
                    <div className="slide_btnss">
                      {values?.job_skills?.map((item, key) => (
                        <button>{item.name}</button>
                      ))}

                      <button
                        className="round_b_btn"
                        onClick={() => setSkillPopup(true)}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                    </div>
                  </div>
                  {/* Scop start here */}
                  <div className="b_bot_inp">
                    <div className="input_t_lab">Scope</div>
                    <div className="job_t_inp cat_inp_j d-flex flex-wrap align-items-center">
                      <span>{values?.project_duration}</span>

                      <button
                        className="round_b_btn"
                        onClick={() => setScopePopup(true)}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                    </div>
                    <span>{values?.scop}</span>
                    <div>{values?.experience_level}</div>
                  </div>
                  {/* Budget start here */}

                  <div className="edit-posting-category">
                    <div className="heading">Budget</div>
                    <div className="job_t_inp cat_inp_j d-flex flex-wrap align-items-center">
                      {values?.budget_type === "hourly" ? (
                        <span>
                          {`${parseInt(values?.price).toFixed(2)} - ${parseInt(
                            values?.min_price
                          ).toFixed(2)}`}
                          /hr
                        </span>
                      ) : values?.budget_type === "fixed" ? (
                        <span>${parseInt(values?.price).toFixed(2)}</span>
                      ) : null}

                      <button
                        className="round_b_btn"
                        onClick={() => setProjectBudgetPopup(true)}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                    </div>
                  </div>

                  <div className="edit_posting_save_btn">
                    <button onClick={postYourJobNow}>Post Your Job Now</button>
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
          values={values}
          setValues={setValues}
          categoryList={categoryList}
          onCloseModal={() => setCategoryPopup(false)}
        />
      )}
      {projectBudgetPopup && (
        <ProjectBudgetPopup
          open={projectBudgetPopup}
          values={values}
          setValues={setValues}
          onCloseModal={() => setProjectBudgetPopup(false)}
        />
      )}
      {scopePopup && (
        <ScopePopup
          open={scopePopup}
          values={values}
          setValues={setValues}
          onCloseModal={() => setScopePopup(false)}
        />
      )}
      {skillPopup && (
        <EditSkillsPopup
          open={skillPopup}
          values={values}
          setValues={setValues}
          onCloseModal={() => setSkillPopup(false)}
        />
      )}
    </>
  );
};

export default ReusePosting;

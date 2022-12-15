import { Container } from "react-bootstrap";
import "../../../../styles/job.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getCategoryList } from "../../../../redux/actions/profileAction";
import Form from "react-bootstrap/Form";
import { onPostYourJobNow } from "../../../../redux/actions/jobActions";
import EditCategoryPopup from "../../../../popups/EditCategoryPopup";
import ProjectBudgetPopup from "../../../../popups/ProjectBudgetPopup";
import ScopePopup from "../../../../popups/ScopePopup";
import EditSkillsPopup from "../../../../popups/EditSkillsPopup";

const Description = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState();
  const [objectUrl, setObjectUrl] = useState();
  const [categoryPopup, setCategoryPopup] = useState(false);
  const [projectBudgetPopup, setProjectBudgetPopup] = useState(false);
  const [scopePopup, setScopePopup] = useState(false);
  const [skillPopup, setSkillPopup] = useState(false);
  const jobListingData = useSelector((state) => state.profile.jobListingData);
  const categoryList = useSelector((state) => state.profile.categoryList);
  const [values, setValues] = useState({});
  const [categoryName, setCategoryName] = useState();

  useEffect(() => {
    if (jobListingData) {
      setValues(jobListingData);
    } else if (!jobListingData) {
      navigate("/post-your-job");
    }
  }, [jobListingData]);

  useEffect(() => {
    dispatch(getCategoryList());
  }, []);

  console.log(objectUrl);

  useEffect(() => {
    if (categoryList) {
      for (let i = 0; i < categoryList.length; i++) {
        if (categoryList[i].id == parseInt(values?.category_id)) {
          setCategoryName(categoryList[i]);
        }
      }
    }
  }, [categoryList, values]);

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
    setObjectUrl(e.target.files[0].name);
  };

  const postYourJobNow = () => {
    const formData = new FormData();

    formData.append("job_type", values?.job_type);
    formData.append("job_title", values?.job_title);
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
    formData.append("status", "publish");
    formData.append("image", imageFile);

    dispatch(onPostYourJobNow(formData, navigate));
  };

  const draftYourJobNow = () => {
    const formData = new FormData();

    formData.append("job_type", values?.job_type);
    formData.append("job_title", values?.job_title);
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
      formData.append("price", values?.min_price);
    }
    formData.append("price", values?.price);
    formData.append("description", values?.description);
    formData.append("status", "draft");
    formData.append("image", imageFile);

    dispatch(onPostYourJobNow(formData, navigate));
  };

  return (
    <>
      <Container>
        <div className="main_box_descr mbd_n_pd">
          <div className="top_sec_bb">
            <div className="ts_h1">
              <h1>Now just finish and review your job post.</h1>
            </div>
            {!values?.job_title || !values?.description ? (
              <div className="ts_btn">
                <button
                  className="font-weight-500"
                  style={{
                    cursor: "not-allowed",
                    backgroundColor: "#e4ebe4",
                    color: "#9aaa97",
                  }}
                >
                  Post Your Job Now
                </button>
              </div>
            ) : (
              <div className="ts_btn">
                <button className="font-weight-500" onClick={postYourJobNow}>
                  Post Your Job Now
                </button>
              </div>
            )}
          </div>
          <div className="b_bot_inp">
            <div className="input_t_lab">Title</div>
            <div className="job_t_inp">
              <Form.Control
                type="text"
                name="job_title"
                value={values?.job_title}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="sm_label_inp">
              That looks a little short. A descriptive headline will help
              candidates better understand what your job requires.
            </div>
          </div>
          <div className="b_bot_inp" style={{ paddingBottom: 25 }}>
            <div className="input_t_lab">Describe your job</div>
            <div className="input_t_par">
              This is how talent figures out what you need and why you’re great
              to work with! Include your expectations about the task or
              deliverable, what you’re looking for in a work relationship, and
              anything unique about your project, team, or company. Here are
              several examples that illustrate best practices for effective job
              posts.
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
                <i className="fa fa-paperclip" aria-hidden="true"></i>
                Attach File
              </label>
              <div className="sm_label_inp">Max file size: 10 MB</div>
            </div>
            {objectUrl ? (
              <span
                style={{
                  border: "1px solid #c0bfbf",
                  padding: "12px 37px 12px 12px",
                  minWidth: 350,
                  position: "relative",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="32"
                  style={{ marginRight: 10 }}
                >
                  <g fill="#828282">
                    <path d="M1.5 32h21c.827 0 1.5-.673 1.5-1.5v-21c0-.017-.008-.031-.009-.047-.002-.023-.008-.043-.013-.065a.488.488 0 0 0-.09-.191c-.007-.009-.006-.02-.013-.029l-8-9c-.003-.003-.007-.003-.01-.006a.494.494 0 0 0-.223-.134c-.019-.006-.036-.008-.056-.011C15.557.012 15.53 0 15.5 0h-14C.673 0 0 .673 0 1.5v29c0 .827.673 1.5 1.5 1.5zM16 1.815 22.387 9H16.5c-.22 0-.5-.42-.5-.75V1.815zM1 1.5a.5.5 0 0 1 .5-.5H15v7.25c0 .809.655 1.75 1.5 1.75H23v20.5a.5.5 0 0 1-.5.5h-21c-.28 0-.5-.22-.5-.5v-29z" />
                    <path d="M5.5 14h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1zM5.5 18h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1zM5.5 10h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1zM5.5 22h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1zM5.5 26h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1z" />
                  </g>
                </svg>
                <span style={{ color: "#9e9b9b", fontSize: 14 }}>
                  File Name :{" "}
                </span>
                <span
                  style={{ color: "#6d2ef1", fontSize: 14, fontWeight: 500 }}
                >
                  {objectUrl}
                </span>
                <span
                  onClick={() => {
                    setObjectUrl();
                    setImageFile();
                  }}
                  style={{
                    position: "absolute",
                    right: -14,
                    top: -16,
                    transform: "rotateX(42deg)",
                    color: "rgb(147 147 147)",
                    cursor: "pointer",
                    fontSize: 24,
                    border: "1px solid rgb(147, 147, 147)",
                    borderRadius: " 50%",
                    padding: "0 5px",
                    background: "#fff",
                  }}
                >
                  X
                </span>
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="b_bot_inp">
            <div className="input_t_lab">Category</div>
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
            <span style={{ textTransform: "capitalize" }}>{values?.scop}</span>
            <div style={{ textTransform: "capitalize" }}>
              {values?.experience_level}
            </div>
          </div>
          <div className="b_bot_inp">
            <div className="input_t_lab">Budget</div>
            <div className="job_t_inp cat_inp_j d-flex flex-wrap align-items-center">
              {values?.budget_type === "hourly" ? (
                <span>
                  {`$${parseInt(values?.min_price).toFixed(2)} - $${parseInt(
                    values?.price
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

          <div className="d-flex justify-content-between flex-wrap mt-5 mb-3">
            <div className="btn_job_back no-border fo_btn_c next_b_btn_c">
              <Link to="/budget">
                <button className="mt-2">Back</button>
              </Link>
            </div>
            <div className="d-flex flex-wrap no-border mt-0 pt-0 btn_foot_sec">
              {!values?.job_title || !values?.description ? (
                <div className="fo_btn_c next_b_btn_c">
                  <button disabled className="active_btn_blueDiabled">
                    Save as a draft
                  </button>
                </div>
              ) : (
                <div className="fo_btn_c next_b_btn_c">
                  <button
                    className="draf_jo_btnbn mt-2"
                    onClick={draftYourJobNow}
                  >
                    Save as a draft
                  </button>
                </div>
              )}

              {!values?.job_title || !values?.description ? (
                <div className="fo_btn_c next_b_btn_c">
                  <button disabled className="active_btn_blueDiabled">
                    Post Your Job Now
                  </button>
                </div>
              ) : (
                <div className="fo_btn_c next_b_btn_c">
                  <button
                    className="post_job_btn mt-2"
                    onClick={postYourJobNow}
                  >
                    Post Your Job Now
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>

      {categoryPopup && (
        <EditCategoryPopup
          open={categoryPopup}
          onCloseModal={() => setCategoryPopup(false)}
          values={values}
          setValues={setValues}
          categoryList={categoryList}
        />
      )}
      {skillPopup && (
        <EditSkillsPopup
          open={skillPopup}
          onCloseModal={() => setSkillPopup(false)}
          values={values}
          setValues={setValues}
        />
      )}
      {scopePopup && (
        <ScopePopup
          open={scopePopup}
          onCloseModal={() => setScopePopup(false)}
          values={values}
          setValues={setValues}
        />
      )}
      {projectBudgetPopup && (
        <ProjectBudgetPopup
          open={projectBudgetPopup}
          onCloseModal={() => setProjectBudgetPopup(false)}
          values={values}
          setValues={setValues}
        />
      )}
    </>
  );
};
export default Description;

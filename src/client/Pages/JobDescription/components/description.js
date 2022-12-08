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
    setObjectUrl(URL.createObjectURL(e.target.files[0]));
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
          <div className="b_bot_inp">
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
                <i class="fa fa-paperclip" aria-hidden="true"></i>
                Attach File
              </label>
              <div className="sm_label_inp">Max file size: 100 MB</div>
            </div>
            {objectUrl && (
              <img src={objectUrl} className="selectImage" alt="" />
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
            <span>{values?.scop}</span>
            <div>{values?.experience_level}</div>
          </div>
          <div className="b_bot_inp">
            <div className="input_t_lab">Budget</div>
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

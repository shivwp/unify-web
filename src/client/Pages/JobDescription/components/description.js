import { Container } from "react-bootstrap";
import "../../../../styles/job.css";
import $ from "jquery";
import Title from "../../../../components/title";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  getCategoryList,
  getFreelancerSkills,
} from "../../../../redux/actions/profileAction";
import Form from "react-bootstrap/Form";

const Description = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  const [filteredSkills, setFilteredSkills] = useState();
  const [hgghgghghgh, setHgghgghghgh] = useState();
  const jobListingData = useSelector((state) => state.profile.jobListingData);
  const categoryList = useSelector((state) => state.profile.categoryList);
  const getSkillList = useSelector((state) => state.profile.getSkillList);

  useEffect(() => {
    dispatch(getCategoryList());
    dispatch(getFreelancerSkills());
  }, []);

  useEffect(() => {
    if (jobListingData === undefined) {
      navigate("/gettingstarted");
    }
  }, []);

  useEffect(() => {
    if (categoryList) {
      for (let i = 0; i < categoryList.length; i++) {
        if (jobListingData?.job_category == categoryList[i].id) {
          setHgghgghghgh(categoryList[i]);
        }
      }
    }
  }, []);

  useEffect(() => {
    if (getSkillList) {
      var asdfad = jobListingData?.skills?.split(",");
      asdfad = asdfad?.map((adf) => Number(adf));
      setFilteredSkills(
        getSkillList?.filter((item) => asdfad?.indexOf(item.id) != -1)
      );
    }
  }, []);

  useEffect(() => {
    if (jobListingData) {
      setValues(jobListingData);
    }
  }, [jobListingData]);

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  Title(" | Description");
  const hanDleSlide = (e) => {
    $(e.target.nextSibling).slideToggle();
  };
  $(".slider_shutter").slideDown();

  return (
    <Container>
      <div className="main_box_descr mbd_n_pd">
        <div className="top_sec_bb">
          <div className="ts_h1">
            <h1>Now just finish and review your job post.</h1>
          </div>
          <div className="ts_btn">
            <Link to="/view-job">
              <Button variant="" className="font-weight-500">Post Your Job Now</Button>
            </Link>
          </div>
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
            This is how talent figures out what you need and why you’re great to
            work with! Include your expectations about the task or deliverable,
            what you’re looking for in a work relationship, and anything unique
            about your project, team, or company. Here are several examples that
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-info-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
              </span>
              Please add a job description.
            </div>
            <div className="sm_label_inp text-right">5000 characters left</div>
          </div>

          <div className="ts_btn attach_f_btn">
            <Form.Control type="file" />
            <Button variant="" className="rot_svg_oety">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
        </div>
        <div className="b_bot_inp">
          <div className="input_t_lab">Category</div>
          <div className="job_t_inp cat_inp_j d-flex flex-wrap">
            <Form.Control type="text" value={hgghgghghgh?.name} />
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
        <div className="b_bot_inp">
          <div className="input_t_lab">Skills</div>
          <div className="slide_btnss">
            {filteredSkills?.map((item) => (
              <Button variant="">
                {item.name}
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
            ))}

            {/* <button>
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
            </button>
            <button>
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
            </button>
            <button>
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
            </button> */}
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
        <div className="b_bot_inp">
          <div className="input_t_lab">Scop</div>
          <div className="job_t_inp cat_inp_j d-flex flex-wrap">
            <Form.Control
              type="text"
              value="Large, More than 6 months, Entry level"
            />
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
        <div className="b_bot_inp">
          <div className="input_t_lab">Budget</div>
          <div className="job_t_inp cat_inp_j d-flex flex-wrap">
            <Form.Control type="text" value="$15.00 - $35.00 / hr" />
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

        <div className="d-flex justify-content-between flex-wrap mt-5 mb-3">
          <div className="btn_job_back no-border fo_btn_c next_b_btn_c">
            <Link to="/budget">
              <Button variant="" className="mt-2">Back</Button>
            </Link>
          </div>
          <div className="d-flex flex-wrap no-border mt-0 pt-0 btn_foot_sec">
            <div className="fo_btn_c next_b_btn_c">
              <Button variant="" className="draf_jo_btnbn mt-2">Save as a draft</Button>
            </div>
            <div className="fo_btn_c next_b_btn_c">
              <Button variant="" className="post_job_btn mt-2">Post Your Job Now</Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Description;

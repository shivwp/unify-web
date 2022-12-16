import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import SideNav from "../../../../components/site_nav";
import JobPosting from "../postSteps/job-posting";
import TitleBody from "../postSteps/title-body";
import TitleFourteen from "../postSteps/title1";
import Skills from "../postSteps/skills";
import Scope from "../postSteps/scope";
import Budget from "../postSteps/budget";
import { useDispatch } from "react-redux";
import { SET_JOB_DATA_LISTING } from "../../../../redux/types";
import { useNavigate } from "react-router-dom";

const PostYourJobNow = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("getting-started");
  const [values, setValues] = useState({});
  const [error, setError] = useState();

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const reviewJobPost = () => {
    if (values?.min_price > values?.price) {
      setError("Max price must be greater then min price");
    } else {
      dispatch({
        type: SET_JOB_DATA_LISTING,
        payload: values,
      });

      navigate("/job-description");
      setError("");
    }
  };

  return (
    <div className="bg-fff min_pad_m profileDashboard">
      <Container>
        <Row>
          <SideNav setCurrentTab={setCurrentTab} currentTab={currentTab} />
          {currentTab === "getting-started" && (
            <JobPosting
              setCurrentTab={setCurrentTab}
              onInputChange={onInputChange}
              values={values}
            />
          )}
          {currentTab === "title" && (
            <TitleBody
              setCurrentTab={setCurrentTab}
              onInputChange={onInputChange}
              values={values}
            />
          )}
          {currentTab === "job-category" && (
            <TitleFourteen
              setCurrentTab={setCurrentTab}
              onInputChange={onInputChange}
              values={values}
            />
          )}
          {currentTab === "skills" && (
            <Skills
              setCurrentTab={setCurrentTab}
              onInputChange={onInputChange}
              setValues={setValues}
              values={values}
            />
          )}
          {currentTab === "scope" && (
            <Scope
              setCurrentTab={setCurrentTab}
              onInputChange={onInputChange}
              values={values}
            />
          )}
          {currentTab === "budget" && (
            <Budget
              setCurrentTab={setCurrentTab}
              onInputChange={onInputChange}
              values={values}
              reviewJobPost={reviewJobPost}
              error={error}
            />
          )}
        </Row>
      </Container>
    </div>
  );
};

export default PostYourJobNow;

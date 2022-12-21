import { useState, useEffect, useMemo } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Title from "../../../../components/title";
import $ from "jquery";
import "../../../../styles/freelancer.css";
import { useParams, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  getJobsList,
  getSavedJobsList,
  removeSaveJob,
  saveJobs,
} from "../../../../redux/actions/jobActions";
import {
  getCategoryList,
  getFreelancerSkills,
  getLanguageList,
} from "../../../../redux/actions/profileAction";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import ProjectSearch from "./ProjectSearch";
import SavedProjects from "./SavedProjects";

const AllProjects = () => {
  let { saved } = useParams();
  $(".slider_shutter").slideDown();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [tabActive, setTabActive] = useState(saved || "search");
  const jobsPagination = useSelector((state) => state?.job?.jobsList?.meta);
  const [page, setPage] = useState(1);

  const totalPages = [];

  for (let i = 1; i < jobsPagination?.total_page + 1; i++) {
    totalPages.push(i);
  }

  const SaveJob = (id) => {
    setLoading(true);
    dispatch(saveJobs({ job_id: id }, setLoading));
  };

  const UnSaveJob = (id) => {
    setLoading(true);
    dispatch(removeSaveJob({ job_id: id }, setLoading));
  };

  useMemo(() => {
    if (tabActive == "saved") {
      dispatch(
        getSavedJobsList({ pagination: 10, page: page }, false, setLoading)
      );
    }
    if (tabActive == "search") {
      dispatch(getJobsList({ pagination: 10, page: page }, false, setLoading));
    }
  }, [page]);

  useEffect(() => {
    setLoading(true);
    dispatch(getJobsList({ pagination: 10, page: page }, false, setLoading));
    dispatch(
      getSavedJobsList({ pagination: 10, page: page }, false, setLoading)
    );
    dispatch(getCategoryList(setLoading));
    dispatch(getLanguageList(setLoading));
  }, []);

  return (
    <>
      <Container>
        <Row>
          {tabActive == "saved" ? (
            <SavedProjects
              tabActive={tabActive}
              setTabActive={setTabActive}
              setLoading={setLoading}
              setPage={setPage}
              UnSaveJob={UnSaveJob}
              SaveJob={SaveJob}
            />
          ) : tabActive == "search" ? (
            <ProjectSearch
              tabActive={tabActive}
              setLoading={setLoading}
              setTabActive={setTabActive}
              setPage={setPage}
              UnSaveJob={UnSaveJob}
              SaveJob={SaveJob}
            />
          ) : (
            ""
          )}
        </Row>
      </Container>
      {loading ? <LoadingSpinner /> : null}
    </>
  );
};
export default AllProjects;

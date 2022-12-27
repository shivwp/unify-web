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
import { getLanguageList } from "../../../../redux/actions/profileAction";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import ProjectSearch from "./ProjectSearch";
import SavedProjects from "./SavedProjects";

const AllProjects = () => {
  let { saved } = useParams();
  $(".slider_shutter").slideDown();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [tabActive, setTabActive] = useState(saved || "search");
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState([]);
  const saveJobsPost = useSelector((state) => state.job.saveJobsPost);
  const unSaveJobsPost = useSelector((state) => state.job.unSaveJobsPost);
  const onDislikeJobPost = useSelector((state) => state.job.onDislikeJobPost);

  const savedjobsPagination = useSelector(
    (state) => state?.job?.savedJobsList?.meta
  );

  useEffect(() => {
    if (tabActive == "search") {
      dispatch(
        getSavedJobsList({ pagination: 10, page: page }, false, setLoading)
      );
    }
  }, [saveJobsPost, unSaveJobsPost]);

  const SaveJob = (id) => {
    setLoading(true);
    dispatch(saveJobs({ job_id: id }, setLoading));
  };

  const UnSaveJob = (id) => {
    setLoading(true);
    dispatch(removeSaveJob({ job_id: id }, setLoading));
  };

  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };

  useMemo(() => {
    setLoading(true);
    if (tabActive == "saved") {
      dispatch(
        getSavedJobsList({ pagination: 10, page: page }, false, setLoading)
      );
    }
    if (tabActive == "search") {
      dispatch(
        getJobsList(
          { pagination: 10, page: page, ...filters },
          ScrollTop,
          setLoading
        )
      );
    }
  }, [
    page,
    tabActive,
    filters,
    saveJobsPost,
    unSaveJobsPost,
    onDislikeJobPost,
  ]);

  useEffect(() => {
    setLoading(true);
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
              page={page}
              UnSaveJob={UnSaveJob}
              SaveJob={SaveJob}
              savedjobsPagination={savedjobsPagination}
            />
          ) : tabActive == "search" ? (
            <ProjectSearch
              savedjobsPagination={savedjobsPagination}
              tabActive={tabActive}
              setLoading={setLoading}
              setTabActive={setTabActive}
              page={page}
              setPage={setPage}
              UnSaveJob={UnSaveJob}
              SaveJob={SaveJob}
              setFilters={setFilters}
              filters={filters}
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

import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Title from "../../../../components/title";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListCard from "./ListCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getFreelancerList,
  onRemoveSavedTalent,
  onSavedTalent,
} from "../../../../redux/actions/freelancerAction";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import InviteToJobPopup from "../../../../popups/InviteToJobPopup";

const Project_Search = () => {
  Title(" | Search");
  let totalPages = [];
  const dispatch = useDispatch();
  const [openCategory, setOpenCategory] = useState(false);
  const [skillsIdList, setSkillsIdList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [inviteJobPopup, setInviteJobPopup] = useState(false);
  const categoryList = useSelector((state) => state.profile.categoryList);
  const freelancerIdsList = useSelector(
    (state) => state.freelancer.freelancerIdsList
  );
  const freelancerList = useSelector(
    (state) => state?.freelancer?.freelancerList?.data
  );
  const savedTalent = useSelector((state) => state.freelancer.savedTalent);
  const removeSavedTalent = useSelector(
    (state) => state.freelancer.removeSavedTalent
  );
  const jobPagination = useSelector(
    (state) => state?.freelancer?.freelancerList?.meta
  );

  for (let i = 1; i < jobPagination?.total_page + 1; i++) {
    totalPages.push(i);
  }

  useEffect(() => {
    if (freelancerIdsList) {
      setSkillsIdList(freelancerIdsList);
    }
  }, [freelancerIdsList]);

  useEffect(() => {
    const data = {
      skills: skillsIdList?.map((item) => item.id)?.toString(),
      search: searchValue,
      page,
    };
    setLoading(true);
    dispatch(getFreelancerList(data, setLoading));
  }, [skillsIdList, savedTalent, removeSavedTalent, page]);

  const removeSkills = (index) => {
    let updateSkills = [...skillsIdList];
    updateSkills.splice(index, 1);
    setSkillsIdList(updateSkills);
  };

  const handleSubmitData = (e) => {
    e.preventDefault();

    const data = {
      search: searchValue,
      skills: skillsIdList?.map((item) => item.id)?.toString(),
    };

    setLoading(true);
    dispatch(getFreelancerList(data, setLoading));
  };

  const handleSavedTalent = (id) => {
    const data = {
      freelancer_id: id,
    };
    setLoading(true);
    dispatch(onSavedTalent(data, setLoading));
  };

  const handleRemoveSavedTalent = (id) => {
    const data = {
      freelancer_id: id,
    };
    setLoading(true);
    dispatch(onRemoveSavedTalent(data, setLoading));
  };

  const ChangePage = (number) => {
    setPage(number);
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg={3}>
            <div className="filter_area">
              <div className="sef_p_c">
                <p
                  onClick={() => {
                    setSearchValue("");
                    setSkillsIdList([]);
                  }}
                >
                  Clear all
                </p>
              </div>
              <div className="sef_box">
                {skillsIdList?.length === 0 ? (
                  <>
                    <div className="sef_na_ea">
                      <h3>Search Filters</h3>
                    </div>
                  </>
                ) : (
                  <div class="s_na_box">
                    <div class="selected_skills_filter_jobs">
                      {skillsIdList?.map((item, index) => (
                        <div class="skill" key={index}>
                          <span>{item.name}</span>
                          <button
                            type="button"
                            class="btn"
                            onClick={() => removeSkills(index)}
                          >
                            X
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {categoryList?.map((data, key) => (
                <div className="s_slides" key={key}>
                  {openCategory === data.id ? (
                    <div
                      className="flex_slide_ta p-left-none p-right-none"
                      onClick={() => setOpenCategory()}
                    >
                      <div className="sli_ta_name search_tab_sm_a">
                        {data.name}
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-chevron-up"></i>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="flex_slide_ta p-left-none p-right-none"
                      onClick={() => setOpenCategory(data.id)}
                    >
                      <div className="sli_ta_name search_tab_sm_a">
                        {data.name}
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-chevron-down"></i>
                      </div>
                    </div>
                  )}
                  {openCategory === data.id && (
                    <>
                      {data?.category_skills?.length === 0 ? (
                        <div className="slide_btnss text-center" key={key}>
                          <div className="s_na_box s_cat_bo p-0 no-border ">
                            <small>No skills found</small>
                          </div>
                        </div>
                      ) : (
                        <>
                          {data?.category_skills?.map((item, key) => (
                            <div className="slide_btnss" key={key}>
                              <div className="s_na_box s_cat_bo p-0 no-border">
                                <div className="s_na_categ">
                                  <Form.Check
                                    type="checkbox"
                                    id={item.name}
                                    name="skills"
                                    checked={
                                      skillsIdList.find((ele) => {
                                        return ele.id == item.id;
                                      }) != undefined
                                    }
                                    onChange={(e) => {
                                      if (
                                        skillsIdList.find((ele) => {
                                          return ele.id == item.id;
                                        }) == undefined
                                      ) {
                                        setSkillsIdList([
                                          ...skillsIdList,
                                          item,
                                        ]);
                                      }
                                    }}
                                  />
                                  <Form.Label htmlFor={item.name}>
                                    {item.name}
                                  </Form.Label>
                                </div>
                              </div>
                            </div>
                          ))}
                        </>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </Col>
          <Col lg={9} className="top_main_c_job">
            <Form onSubmit={handleSubmitData}>
              <div className="d-flex align-items-center flex-wrap">
                <div className="search_input_in selec_inp_ful_w">
                  <div className="search_icon_in">
                    <i className="bi bi-search"></i>
                  </div>
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  {searchValue && (
                    <i
                      className="fa fa-remove"
                      onClick={() => {
                        setSearchValue("");
                        dispatch(getFreelancerList());
                      }}
                      style={{ cursor: "pointer" }}
                    ></i>
                  )}
                </div>
                <div className="post_job_btn_m in_btn_p_sm">
                  <button className="fw-500 hovbord-blew">
                    Advanced Search
                  </button>
                </div>
              </div>
            </Form>

            <ListCard
              freelancerList={freelancerList}
              handleRemoveSavedTalent={handleRemoveSavedTalent}
              handleSavedTalent={handleSavedTalent}
            />
          </Col>
          {jobPagination?.total_page > 1 ? (
            <Col lg={12}>
              <div className="pagiantion_node">
                {totalPages.map((number) => (
                  <button
                    key={number}
                    className={`pagi_butt ${
                      jobPagination?.current_page == number ? "PageActive" : ""
                    }`}
                    onClick={() => ChangePage(number)}
                  >
                    {number}
                  </button>
                ))}
              </div>
            </Col>
          ) : (
            ""
          )}
        </Row>
      </Container>
      {loading ? <LoadingSpinner /> : null}

      {inviteJobPopup && (
        <InviteToJobPopup
          open={inviteJobPopup}
          onCloseModal={() => setInviteJobPopup(false)}
        />
      )}
    </>
  );
};
export default Project_Search;

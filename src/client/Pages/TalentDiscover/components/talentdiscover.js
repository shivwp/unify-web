import Container from "react-bootstrap/Container";
import Title from "../../../../components/title";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getJobDraftFreelancerList,
  getJobPostFreelancerList,
  getRecentFreelancerList,
  onRemoveSavedTalent,
  onSavedTalent,
} from "../../../../redux/actions/freelancerAction";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import { SET_SELECTED_IDS } from "../../../../redux/types";

const Screen = () => {
  Title(" | Talent Discover");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSkills, setShowSkills] = useState(false);
  const [loading, setLoading] = useState(false);
  const [jobPost, setJobPost] = useState(3);
  const [jobDraftPost, setJobDraftPost] = useState(3);
  const jobDraftFreelancerList = useSelector(
    (state) => state?.freelancer?.jobDraftFreelancerList?.data
  );
  const jobPostFreelancerList = useSelector(
    (state) => state?.freelancer?.jobPostFreelancerList?.data
  );
  const categoryList = useSelector((state) => state.profile.categoryList);

  const recentlyFreelancerList = useSelector(
    (state) => state.freelancer.recentlyFreelancerList
  );
  const savedTalent = useSelector((state) => state.freelancer.savedTalent);
  const removeSavedTalent = useSelector(
    (state) => state.freelancer.removeSavedTalent
  );

  useEffect(() => {
    dispatch(getJobDraftFreelancerList());
    dispatch(getJobPostFreelancerList());
  }, [savedTalent, removeSavedTalent]);

  useEffect(() => {
    const data = {
      freelancers: "525,516",
    };

    dispatch(getRecentFreelancerList(data));
  }, [savedTalent, removeSavedTalent]);

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

  const handleSingleFreelancer = (id) => {
    // if (
    //   freelancerId.find((ele) => {
    //     return ele.id == id;
    //   }) == undefined
    // ) {
    //   setFreelancerId([...freelancerId, { id }]);
    // }
    navigate(`/freelancer-details/${id}`);
  };

  return (
    <>
      <Container>
        <div className="d-flex justify-content-between flex-wrap align-items-center disc_top_s_ar mt-4 mb-4">
          <div>
            <div className="disc_head_h1">
              <h1>Discover</h1>
            </div>
            <div className="disc_para_h">
              Tailored talent matches to help you hire the right person faster
            </div>
          </div>
        </div>
        <div className="promoted_boxtDiscover">
          <div className="mobileSize">
            <div className="propt_head_n">
              <h2>Talent skilled in full Stack Development</h2>
              <p className="BasedONyourJob">
                Based on your <span>job post</span>
              </p>
            </div>
            {jobPostFreelancerList?.length > 3 && (
              <div
                className="avai_btn_promo"
                onClick={() => setJobPost(jobPostFreelancerList?.length)}
              >
                <button>See More Like this</button>
              </div>
            )}
          </div>
          <div className="mobile-discover">
            {jobPostFreelancerList
              ?.filter((item, index) => index < jobPost)
              ?.map((data, key) => (
                <div className="promo_box_a" key={key}>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <div className="discover_prof_us">
                        <img src={data.profile_image} alt="" />
                      </div>
                      <div className="ml-10-n">
                        <div
                          className="propmo_u_name"
                          onClick={() => handleSingleFreelancer(data.id)}
                        >
                          {data.first_name} {data.last_name}
                        </div>

                        <div className="promo_exper">{data.occuption}</div>
                        <div className="avai_btn_promo">
                          <button>Available</button>
                        </div>
                      </div>
                    </div>
                    {data.isSaveTalent === false ? (
                      <div
                        className="heart_btn_promo"
                        onClick={(e) => handleSavedTalent(data.id)}
                      >
                        <i className="bi bi-heart font-size-20px"></i>
                      </div>
                    ) : (
                      <div
                        className="heart_btn_promo"
                        onClick={(e) => handleRemoveSavedTalent(data.id)}
                      >
                        <i className="bi bi-heart-fill font-size-20px"></i>
                      </div>
                    )}
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="hourly_amo_promo">
                      ${parseInt(data.amount).toFixed(2)} <span>/ hr</span>
                    </div>
                    <div className="hourly_amo_promo">
                      <span>|</span>
                    </div>
                    <div className="hourly_amo_promo">
                      {data.success_rate} <span>Job Success</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-3 mb-2 mobileSize">
            <div className="propt_head_n">
              <h2>Recently viewed</h2>
            </div>
            {recentlyFreelancerList?.length > 3 && (
              <Link to="/talent-recently-viewed">
                <div className="avai_btn_promo">
                  <button>See All Recently Viewed</button>
                </div>
              </Link>
            )}
          </div>
          <div className="mobile-discover">
            {recentlyFreelancerList
              ?.filter((item, index) => index < 3)
              ?.map((data, key) => (
                <div className="promo_box_a" key={key}>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <div className="discover_prof_us">
                        <img src={data.profile_image} alt="" />
                      </div>
                      <div className="ml-10-n">
                        <Link to={`/freelancer-details/${data.id}`}>
                          <div className="propmo_u_name">
                            {data.first_name} {data.last_name}
                          </div>
                        </Link>
                        <div className="promo_exper">{data.occuption}</div>
                        <div className="avai_btn_promo">
                          <button>Available</button>
                        </div>
                      </div>
                    </div>
                    {data.isSaveTalent === false ? (
                      <div
                        className="heart_btn_promo"
                        onClick={(e) => handleSavedTalent(data.id)}
                      >
                        <i className="bi bi-heart font-size-20px"></i>
                      </div>
                    ) : (
                      <div
                        className="heart_btn_promo"
                        onClick={(e) => handleRemoveSavedTalent(data.id)}
                      >
                        <i className="bi bi-heart-fill font-size-20px"></i>
                      </div>
                    )}
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="hourly_amo_promo">
                      ${parseInt(data.amount).toFixed(2)} <span>/ hr</span>
                    </div>
                    <div className="hourly_amo_promo">
                      <span>|</span>
                    </div>
                    <div className="hourly_amo_promo">
                      {data.success_rate} <span>Job Success</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="mt-3 mb-2 mobileSize">
            <div className="propt_head_n">
              <h2>Talent skilled in full Stack Development</h2>
              <p className="BasedONyourJob">
                Based on your <span>job post draft</span>
              </p>
            </div>
            {jobDraftFreelancerList?.length > 3 && (
              <div
                className="avai_btn_promo"
                onClick={() => setJobDraftPost(jobDraftFreelancerList?.length)}
              >
                <button>See More Like This</button>
              </div>
            )}
          </div>
          <div className="mobile-discover">
            {jobDraftFreelancerList
              ?.filter((item, index) => index < jobDraftPost)
              ?.map((data, key) => (
                <div className="promo_box_a" key={key}>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <div className="discover_prof_us">
                        <img src={data.profile_image} alt="" />
                      </div>
                      <div className="ml-10-n">
                        <Link to={`/freelancer-details/${data.id}`}>
                          <div className="propmo_u_name">
                            {data.first_name} {data.last_name}
                          </div>
                        </Link>
                        <div className="promo_exper">{data.occuption}</div>
                        <div className="avai_btn_promo">
                          <button>Available</button>
                        </div>
                      </div>
                    </div>
                    {data.isSaveTalent === false ? (
                      <div
                        className="heart_btn_promo"
                        onClick={() => handleSavedTalent(data.id)}
                      >
                        <i className="bi bi-heart font-size-20px"></i>
                      </div>
                    ) : (
                      <div
                        className="heart_btn_promo"
                        onClick={() => handleRemoveSavedTalent(data.id)}
                      >
                        <i className="bi bi-heart-fill font-size-20px"></i>
                      </div>
                    )}
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="hourly_amo_promo">
                      ${parseInt(data.amount).toFixed(2)} <span>/ hr</span>
                    </div>
                    <div className="hourly_amo_promo">
                      <span>|</span>
                    </div>
                    <div className="hourly_amo_promo">
                      {data.success_rate} <span>Job Success</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="promoted_boxt mb-5">
          <div className="propt_head_n b-bottom-gr">
            <h2>Browse By Category</h2>
          </div>

          {categoryList?.map((data, key) => (
            <div className="s_slides" key={key}>
              {showSkills === data.id ? (
                <div className="flex_slide_ta" onClick={() => setShowSkills()}>
                  <div
                    className={`sli_ta_name ${
                      showSkills === data.id && "sli_ta_nameActive"
                    }`}
                  >
                    {data.name}
                  </div>
                  <i className="bi bi-chevron-up"></i>
                </div>
              ) : (
                <div
                  className="flex_slide_ta"
                  onClick={() => setShowSkills(data.id)}
                >
                  <div className={`sli_ta_name`}>{data.name}</div>
                  <i className="bi bi-chevron-down"></i>
                </div>
              )}

              {showSkills === data.id && (
                <>
                  {data?.category_skills?.length === 0 ? (
                    <p className="text-center">No Skills found</p>
                  ) : (
                    <div className="slide_btnss">
                      {data?.category_skills?.map((item, key) => (
                        <button
                          key={key}
                          onClick={() => {
                            navigate("/search");
                            dispatch({
                              type: SET_SELECTED_IDS,
                              payload: [item],
                            });
                          }}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </Container>
      {loading ? <LoadingSpinner /> : null}
    </>
  );
};
export default Screen;

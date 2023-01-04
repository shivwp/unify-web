import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Title from "../../../../components/title";
import { useSelector, useDispatch } from "react-redux";
import {
  getRecentFreelancerList,
  onRemoveSavedTalent,
  onSavedTalent,
} from "../../../../redux/actions/freelancerAction";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import $ from "jquery";
import { Link } from "react-router-dom";

const Screen = () => {
  Title(" | Talent Recently Viewed");
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const recentlyFreelancerList = useSelector(
    (state) => state.freelancer.recentlyFreelancerList
  );
  const savedTalent = useSelector((state) => state.freelancer.savedTalent);
  const removeSavedTalent = useSelector(
    (state) => state.freelancer.removeSavedTalent
  );

  useEffect(() => {
    const data = {
      freelancers: JSON.parse(localStorage.getItem("idsList"))
        ?.map((item) => item.id)
        ?.toString(),
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

  $(document).mouseup(function (e) {
    if ($(e.target).closest("#saved_talents_options").length === 0) {
      setShowPopup(false);
    }
  });

  return (
    <>
      <Container>
        <div className="d-flex justify-content-between flex-wrap align-items-center disc_top_s_ar mt-4 pt-3">
          <div>
            <div className="disc_head_h1">
              <h1>Recently Viewed</h1>
            </div>
          </div>
        </div>
        <div className="box_vs_m">
          {recentlyFreelancerList?.map((data, key) => (
            <div className="freelancer_box_in mt-0" key={key}>
              <Row>
                <Col lg={12}>
                  <div className="freelancer_box_area_in">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <div className="freelancer_img_in_r">
                          <img src={data.profile_image} alt="" />
                        </div>
                        <div className="freel_det_bin">
                          <Link to={`/freelancer-details/${data.id}`}>
                            <div className="freelancer_ame_in">
                              {data.first_name} {data.last_name}
                            </div>
                          </Link>
                          <div className="freelancer_exp_in">
                            {data.occuption}
                          </div>
                          <div className="freelancer_timin d-flex">
                            <div className="amount_hir_in p-0 m-0">
                              <b>${parseInt(data.amount).toFixed(2)}</b> /hr
                            </div>
                            <div className="amount_hir_in p-0">
                              <b>{data.success_rate}</b> Job Success
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="attach_f_btn wid_30_in d-flex">
                        {data.isSaveTalent === false ? (
                          <button
                            className="transp_fil_btn heart_roun_btn"
                            onClick={(e) => handleSavedTalent(data.id)}
                          >
                            <i className="bi bi-heart font-size-20px"></i>
                          </button>
                        ) : (
                          <button
                            className="transp_fil_btn heart_roun_btn"
                            onClick={(e) => handleRemoveSavedTalent(data.id)}
                          >
                            <i className="bi bi-heart-fill font-size-20px"></i>
                          </button>
                        )}
                        <button
                          className="transp_fil_btn heart_roun_btn"
                          style={{ position: "relative" }}
                          onClick={() =>
                            setShowPopup(showPopup ? false : data.id)
                          }
                        >
                          <i className="bi bi-three-dots-vertical font-size-20px"></i>
                          {showPopup == data.id && (
                            <div
                              id="saved_talents_options"
                              className="saved_talents_options"
                            >
                              <span>Invite to job</span>
                            </div>
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="freelancer_compl_in">
                      {data.description}
                      {/* <Link to="#0">View more</Link> */}
                    </div>

                    <div className="overflow-scroll">
                      <div className="slide_btnss freelancer_skill_sc">
                        {data.skills.map((item, key) => (
                          <button key={key}>{item.skill_name}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </Container>
      {loading ? <LoadingSpinner /> : null}
    </>
  );
};
export default Screen;

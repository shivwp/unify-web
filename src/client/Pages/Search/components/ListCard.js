import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const ListCard = ({
  freelancerList,
  handleRemoveSavedTalent,
  handleSavedTalent,
}) => {
  const navigate = useNavigate();
  const [idsList, setIdsList] = useState(
    JSON.parse(localStorage.getItem("idsList")) || []
  );

  const handleSingleFreelancer = (id) => {
    setIdsList([...idsList, { id }]);

    localStorage.setItem(
      "idsList",
      JSON.stringify([...JSON.parse(localStorage.getItem("idsList")), { id }])
    );
    if (idsList) {
      navigate(`/freelancer-details/${id}`);
    }
  };

  return (
    <>
      {freelancerList?.length === 0 ? (
        <div className="no_found_cen">
          <div>
            <div className="no_found_img_cen">
              <img src="/assets/data-not-found.png" alt="" />
            </div>
            <div className="no_foun_head_ce">
              <h1>Search result not found</h1>
            </div>
          </div>
        </div>
      ) : (
        <>
          {freelancerList?.map((data, key) => (
            <div className="freelancer_box_in b-gr bg-transparent" key={key}>
              <Row>
                <Col lg={12}>
                  <div className="freelancer_box_area_in">
                    <div className="d-flex justify-content-between flex-wrap">
                      <div className="d-flex flex-wrap">
                        <div className="freelancer_img_in_r">
                          <img src={data.profile_image} alt="" />
                        </div>
                        <div className="freel_det_bin">
                          <div
                            className="freelancer_ame_in"
                            onClick={() => handleSingleFreelancer(data.id)}
                          >
                            {data.first_name} {data.last_name}
                          </div>

                          <div className="freelancer_exp_in">
                            {data.occuption}
                          </div>
                          <div className="freelancer_exp_in freelancer_loc_in">
                            {data.city}, {data.country}
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        {data.isSaveTalent === false ? (
                          <div
                            className="transp_fil_btn heart_roun_btn btn-hf m-0 round_b_btn"
                            onClick={(e) => handleSavedTalent(data.id)}
                          >
                            <i className="bi bi-heart font-size-20px"></i>
                          </div>
                        ) : (
                          <div
                            className="transp_fil_btn heart_roun_btn btn-hf m-0 round_b_btn"
                            onClick={(e) => handleRemoveSavedTalent(data.id)}
                          >
                            <i className="bi bi-heart-fill font-size-20px"></i>
                          </div>
                        )}

                        {/* <div className="ts_btn attach_f_btn wid_30_in">
                          <button className="transp_fil_btn blue_btn_smm fw-500">
                            Invite To Job
                          </button>
                        </div> */}
                      </div>
                    </div>
                    <div className="freelancer_timin d-flex">
                      <div className="amount_hir_in p-0 m-0">
                        <b>${parseInt(data.amount).toFixed(2)}</b> /hr
                      </div>
                      <div className="amount_hir_in p-0">
                        <b>${data.total_earning}k+</b> earned
                      </div>
                    </div>
                    <p className="cover_letter_in">{data.description}</p>
                    <div className="r_scroll_w_10">
                      <div className="slide_btnss freelancer_skill_sc flex_over_scrll">
                        {data?.skills?.map((item, key) => (
                          <button key={key}>{item.skill_name}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default ListCard;

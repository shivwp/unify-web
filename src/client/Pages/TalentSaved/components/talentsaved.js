import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Title from "../../../../components/title";
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  onRemoveSavedTalent,
  savedTalentList,
} from "../../../../redux/actions/freelancerAction";
import $ from "jquery";
const Screen = () => {
  Title(" | Talent Saved");
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const getSavedTalentList = useSelector(
    (state) => state?.freelancer?.getSavedTalentList
  );
  const removeSavedTalent = useSelector(
    (state) => state?.freelancer?.removeSavedTalent
  );
  const [savedListToShow, setSavedListToShow] = useState([]);
  const [isLess, setIsLess] = useState([]);
  const showLess = (index) => {
    let temp = [...savedListToShow];
    temp[index].description = getSavedTalentList[index]?.description?.slice(
      0,
      100
    );
    let temp2 = [...isLess];
    temp2[index] = false;
    setIsLess(temp2);
    setSavedListToShow(temp);
  };

  const showMore = (index) => {
    let temp = [...savedListToShow];
    temp[index].description = getSavedTalentList[index]?.description;
    setSavedListToShow(temp);
    let temp2 = [...isLess];
    temp2[index] = true;
    setIsLess(temp2);
  };

  useEffect(() => {
    if (getSavedTalentList) {
      setSavedListToShow(
        getSavedTalentList?.map((item, index) => {
          return {
            ...item,
            description: item?.description?.slice(0, 100),
          };
        })
      );
    }
  }, [getSavedTalentList]);

  useEffect(() => {
    dispatch(savedTalentList());
  }, [removeSavedTalent]);

  const RemoveSavedTalent = (freelancer_id) => {
    dispatch(onRemoveSavedTalent({ freelancer_id }));
  };

  $(document).mouseup(function (e) {
    if ($(e.target).closest("#saved_talents_options").length === 0) {
      setShowPopup(false);
    }
  });

  return (
    <>
      <Container>
        <div className="flex_m_j_t b-bottom-gr mt-3 pb-1 flex-wrap">
          <div className="disc_head_h1">
            <h1>Talent Saved</h1>
            <p className="dis_t_pra_s">Look up people you've saved</p>
          </div>
          <div className="post_job_btn_m">
            <Button variant="" className="plr-35px">
              Message All
            </Button>
          </div>
        </div>

        <div className="box_vs_m">
          <div className="search_area_in mob_ele_wfull">
            {/* <div className="select_inp_in prof_saved_chck_s">
              <Checkbox
                icon={<Icon.FiCheck color="#D8D7D7" size={14} />}
                name="my-input"
                borderRadius={0}
                borderWidth={1}
                borderColor="#D8D7D7"
                style={{ cursor: "pointer" }}
              />
              2 profiles saved
            </div> */}
            <Form.Group className="search_input_in selec_inp_ful_w">
              <div className="search_icon_in">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
              <Form.Control
                type={`text`}
                placeholder={`Search talent names in this list`}
              />
            </Form.Group>
          </div>
          {savedListToShow?.map((item, index) => (
            <>
              <div className="freelancer_box_in mt-0 pt-4 pb-5" key={index}>
                <Row>
                  {/* <Col lg={1} sm={1}>
                    <div className="profile_sel_ceck_alne">
                      <Checkbox
                        icon={<Icon.FiCheck color="#6d2ef1" size={17} />}
                        name="my-input"
                        borderRadius={0}
                        borderWidth={1}
                        borderColor="#D8D7D7"
                        style={{
                          cursor: "pointer",
                          height: "24px",
                          width: "24px",
                        }}
                      />
                    </div>
                  </Col> */}
                  <Col lg={12} sm={12}>
                    <div className="freelancer_box_area_in">
                      <div className="d-flex justify-content-between flex-wrap">
                        <div className="d-flex flex-wrap">
                          <div className="freelancer_img_in_r online_profile">
                            <img src={item.profile_image} alt="" />
                          </div>
                          <div className="freel_det_bin">
                            <div className="freelancer_ame_in">
                              {`${item.first_name} ${item.last_name}`}
                            </div>
                            <div className="freelancer_exp_in">
                              {item.occuption}
                            </div>
                            <div className="freelancer_timin d-flex">
                              <div className="amount_hir_in p-0 ml-0">
                                <b>{`$${item.amount}`}</b> /hr
                              </div>
                              <div className="line_hr_a">|</div>
                              <div className="amount_hir_in p-0">
                                <b>{item.success_rate}</b> Job Success
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" attach_f_btn wid_30_in d-flex">
                          <button
                            className="transp_fil_btn heart_roun_btn"
                            onClick={(e) => RemoveSavedTalent(item.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-heart-fill"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                              />
                            </svg>
                          </button>
                          <Button
                            variant=""
                            className="transp_fil_btn heart_roun_btn"
                            style={{ position: "relative" }}
                            onClick={() =>
                              setShowPopup(showPopup ? false : item.id)
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-three-dots-vertical"
                              viewBox="0 0 16 16"
                            >
                              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            </svg>
                            {showPopup == item.id ? (
                              <div
                                id="saved_talents_options"
                                className="saved_talents_options"
                              >
                                <span>Hire</span>
                                <span>Invite to job</span>
                                <span>Add a note</span>
                              </div>
                            ) : (
                              ""
                            )}
                          </Button>
                        </div>
                      </div>
                      <div className="freelancer_compl_in show_more">
                        <p>{item?.description?.slice(0, 200)}</p>
                        {item?.description?.length >
                          item?.description?.slice(0, 200)?.length}
                        {!isLess[index] ? (
                          <span onClick={() => showMore(index)}>View more</span>
                        ) : (
                          <span onClick={() => showLess(index)}>Show Less</span>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </>
          ))}
        </div>
      </Container>
    </>
  );
};
export default Screen;

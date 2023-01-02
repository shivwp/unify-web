import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Title from "../../../../components/title";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  onRemoveSavedTalent,
  savedTalentList,
} from "../../../../redux/actions/freelancerAction";
import $ from "jquery";
import { Link } from "react-router-dom";

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
  const [searchValue, setSearchValue] = useState();
  const [loading, setLoading] = useState();

  const showLess = (index) => {
    let temp = [...savedListToShow];
    temp[index].description = getSavedTalentList[index]?.description?.slice(
      0,
      400
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

  const handleSubmitData = (e) => {
    e.preventDefault();

    const data = {
      search: searchValue,
    };
    dispatch(savedTalentList(data, setLoading));
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
            <button className="plr-35px">Message All</button>
          </div>
        </div>

        <div className="box_vs_m">
          <Form
            onSubmit={handleSubmitData}
            className="search_area_in mob_ele_wfull"
          >
            <Form.Group className="search_input_in selec_inp_ful_w">
              <div className="search_icon_in">
                <i className="bi bi-search font-size-20px"></i>
              </div>
              <Form.Control
                type={`text`}
                placeholder={`Search talent names in this list`}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              {searchValue && (
                <i
                  className="fa fa-remove"
                  onClick={() => {
                    setSearchValue("");
                    dispatch(savedTalentList());
                  }}
                  style={{ cursor: "pointer" }}
                ></i>
              )}
            </Form.Group>
            <div className="post_job_btn_m in_btn_p_sm">
              <button className="fw-500 hovbord-blew">Advanced Search</button>
            </div>
          </Form>
          {savedListToShow?.map((item, index) => (
            <div className="freelancer_box_in" key={index}>
              <Row>
                <Col lg={12} sm={12}>
                  <div className="freelancer_box_area_in">
                    <div className="d-flex justify-content-between flex-wrap">
                      <div className="d-flex flex-wrap">
                        <div className="freelancer_img_in_r online_profile">
                          <img src={item.profile_image} alt="" />
                        </div>
                        <div className="freel_det_bin">
                          <Link to={`/freelancer-details/${item.id}`}>
                            <div className="freelancer_ame_in">
                              {item.first_name} {item.last_name}
                            </div>
                          </Link>
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
                          <i className="bi bi-heart-fill font-size-20px"></i>
                        </button>
                        <button
                          className="transp_fil_btn heart_roun_btn"
                          style={{ position: "relative" }}
                          onClick={() =>
                            setShowPopup(showPopup ? false : item.id)
                          }
                        >
                          <i className="bi bi-three-dots-vertical font-size-20px"></i>
                          {showPopup == item.id && (
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
                      {item.description}
                      {/* <Link to="#0">View more</Link> */}
                    </div>

                    <div className="overflow-scroll">
                      <div className="slide_btnss freelancer_skill_sc">
                        {item.skills.map((data, key) => (
                          <button key={key}>{data.skill_name}</button>
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
    </>
  );
};
export default Screen;

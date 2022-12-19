import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import {
  getFreelancerSkills,
  onEditSkills,
} from "../../../../redux/actions/profileAction";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Skills = ({ setCurrentTab, profileList }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectSkills, setSelectSkills] = useState();
  const [showSkillList, setShowSkillList] = useState(false);
  const [showSkillError, setShowSkillError] = useState(false);
  const [errors, setErrors] = useState(false);

  let getSkillList = useSelector((state) => state?.profile?.getSkillList);
  const [popup, Setpopup] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const [confirmPopup, setConfirmPopup] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [skillsList, setSkillsList] = useState([]);

  useEffect(() => {
    if (profileList) {
      setSelectSkills(profileList);
    }
  }, [profileList]);

  // remove item which is selected
  useEffect(() => {
    const myArray = getSkillList?.filter(function (item) {
      return !selectSkills?.find(function (ele) {
        return item?.id === ele?.skill_id;
      });
    });
    setSkillsList(myArray || []);
  }, [getSkillList, selectSkills]);
  // remove item which is selected

  const removeSkills = (index) => {
    let updateSkills = [...selectSkills];
    updateSkills.splice(index, 1);
    setSelectSkills(updateSkills);
    setIsChange(true);
  };

  const afterSuccess = () => {
    setCurrentTab("servicesOffer");
    navigate(`/freelancer/profile-intro/servicesOffer`);
  };

  const addSkills = (item) => {
    if (selectSkills?.length <= 9) {
      if (
        selectSkills?.find((ele) => {
          return ele.skill_id == item.id;
        }) == undefined
      ) {
        setSelectSkills([
          ...selectSkills,
          { skill_id: item.id, skill_name: item.name },
        ]);

        // setShowSkillList(false);
      } else {
        setShowSkillList(false);
        setErrors({ already: "Skill already selected" });
      }
    } else {
      setShowSkillList(false);
      setShowSkillError(true);
    }
    document.getElementById("search_skill_inp").value = null;
  };

  const handleOnChange = (e) => {
    setIsChange(true);
    setErrors({ already: false });
    let data;
    if (e.target.value.length >= 1) {
      data = { [e.target.name]: e.target.value };
      dispatch(getFreelancerSkills(data));
    } else {
      data = { skill: "undefined" };
      dispatch(getFreelancerSkills(data));
    }
    setShowSkillList(true);
  };

  $(document).mouseup(function (e) {
    if ($(e.target).closest(".suggest_skills").length === 0) {
      setShowSkillList(false);
    }
  });

  const onSave = (e) => {
    if (isChange) {
      if (selectSkills.length == 0) {
        setShowSkillError(true);
      } else {
        const data = {
          skill_id: selectSkills?.map((item) => item.skill_id)?.toString(),
        };
        dispatch(
          onEditSkills(data, popup, successPopup, setSuccessPopup, afterSuccess)
        );
      }
    } else {
      setCurrentTab("servicesOffer");
      navigate(`/freelancer/profile-intro/servicesOffer`);
    }
  };

  return (
    <>
      <div className="container">
        <div className="container_border">
          <div className="startIntroIn">
            <h5 className="startIntroTwoH5">Time to show off your skills!</h5>
            <p className="startIntroTwoP2">
              Skills will show up on your profile and help you stand out to
              clients. It'll also help us recommend jobs for you. We've
              pre-populated this based on the information you've given us, but
              feel free to add more!
            </p>
            <div className="afterSignUpSklls">
              Your Skills <span className="required_stars"> * </span>{" "}
            </div>
            <div className="addSkillBox mt-2">
              <div className="d-flex flex-wrap">
                {selectSkills?.map((item, index) => (
                  <div className="skill_bxr_gry" key={index}>
                    <span>{item.skill_name}</span>
                    <button onClick={() => removeSkills(index)}>X</button>
                  </div>
                ))}
                <div className="search_inp_box">
                  <Form.Control
                    type="text"
                    name="skill"
                    id="search_skill_inp"
                    placeholder="Start typing to search"
                    className="no-border font-size-13px search_skilloiouo"
                    onChange={handleOnChange}
                  />

                  {showSkillList && skillsList ? (
                    <div
                      className="suggest_skills"
                      style={{ position: "absolute" }}
                    >
                      {skillsList?.map((item, index) => (
                        <>
                          <span key={index} onClick={() => addSkills(item)}>
                            {item.name}
                          </span>
                        </>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="maxlabel_atcxt mt-3">
              {errors?.already ? (
                <span style={{ color: "red" }}>{errors?.already}</span>
              ) : (
                ""
              )}
              {selectSkills?.length === 0 && showSkillError ? (
                <span style={{ color: "red" }}>
                  At least 1 skill is required.
                </span>
              ) : selectSkills?.length > 9 && showSkillError ? (
                <span
                  style={{
                    color: "red",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  Maximum 10 skills.
                </span>
              ) : (
                <span style={{ display: "flex", justifyContent: "end" }}>
                  Maximum 10 skills.
                </span>
              )}
            </div>

            <div className="theme_btns mt-0">
              <button
                className="first_button"
                onClick={() => {
                  setCurrentTab("chooseLangauge");
                  navigate(`/freelancer/profile-intro/chooseLangauge`);
                }}
              >
                Back
              </button>

              <button
                disabled={selectSkills?.length === 0}
                className="second_button"
                onClick={onSave}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* {popup} */}
      {confirmPopup}
      {successPopup}
    </>
  );
};

export default Skills;

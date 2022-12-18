import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";
import {
  getFreelancerSkills,
  onEditSkills,
} from "../../../../../redux/actions/profileAction";

import PopupsCloseIcon from "../../../../../freelancer/components/popups/PopupsCloseIcon";

const EditSkill = ({ data, Popup, successPopup, setSuccessPopup }) => {
  const [selectSkills, setSelectSkills] = useState(data || []);
  const dispatch = useDispatch();
  const [showSkillList, setShowSkillList] = useState(false);
  const [showSkillError, setShowSkillError] = useState(false);
  const [errors, setErrors] = useState(false);
  const [skillsList, setSkillsList] = useState([]);
  let getSkillList = useSelector((state) => state?.profile?.getSkillList);
  const [values, setValues] = useState();

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
  };

  const addSkills = (item) => {
    if (selectSkills.length <= 9) {
      if (
        selectSkills.find((ele) => {
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
        setErrors({ already: "Skill Already selected" });
      }
    } else {
      setShowSkillList(false);
      setShowSkillError(true);
    }
    document.getElementById("search_skill_inp").value = null;
  };

  const handleOnChange = (e) => {
    if (
      (values?.[e.target.name]?.length === undefined ||
        values?.[e.target.name]?.length === 0 ||
        values?.[e.target.name]?.length === " ") &&
      e.target.value == " "
    ) {
      setValues({ ...values, [e.target.name]: "" });
      setErrors({
        ...errors,
        [e.target.name]: `Field is required`,
      });
    } else {
      let data;
      if (e.target.value.length >= 1) {
        data = { [e.target.name]: e.target.value };
        dispatch(getFreelancerSkills(data));
      } else {
        data = { skill: "undefined" };
        dispatch(getFreelancerSkills(data));
      }
      setShowSkillList(true);
      setErrors({ already: false });
    }
  };

  const onSave = (e) => {
    if (selectSkills.length == 0) {
      setShowSkillError(true);
    } else {
      const data = {
        skill_id: selectSkills?.map((item) => item.skill_id)?.toString(),
      };
      dispatch(onEditSkills(data, Popup, successPopup, setSuccessPopup));
    }
  };

  $(document).mouseup(function (e) {
    if ($(e.target).closest(".suggest_skills").length === 0) {
      setShowSkillList(false);
    }
  });

  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Edit Skills</div>
            <div className="close_pp_btn" onClick={() => Popup()}>
              <PopupsCloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
            <div className="mt-4 pt-1">
              <div className="pouphed_skll">
                Skills <span className="required_stars"> * </span>{" "}
              </div>
              <div className="popuphead_smparcr">
                Keeping your skills up to date helps you get the jobs you want.
              </div>
            </div>
            <div className="catbox_rd_ofive mt-3">
              <div className="d-flex flex-wrap">
                {selectSkills?.map((item, index) => (
                  <div className="skill_bxr_gry" key={item.skill_id}>
                    <span>{item.skill_name}</span>
                    <Button variant="" onClick={() => removeSkills(index)}>
                      X
                    </Button>
                  </div>
                ))}
              </div>
              <div style={{ position: "relative" }}>
                <Form.Control
                  type="text"
                  onChange={(e) => handleOnChange(e)}
                  name="skill"
                  // value={values?.skill}
                  id="search_skill_inp"
                  autoComplete="off"
                  placeholder="Search here skills..."
                  className="no-border font-size-13px search_skilloiouo"
                />
                {showSkillList && skillsList ? (
                  <div
                    className="suggest_skills"
                    style={{ position: "absolute" }}
                  >
                    {skillsList?.map((item) => (
                      <>
                        <span onClick={() => addSkills(item)}>{item.name}</span>
                        <br />
                      </>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="maxlabel_atcxt mt-3">
              {errors?.already ? (
                <span style={{ color: "red" }}>{errors?.already}</span>
              ) : selectSkills?.length === 0 && showSkillError ? (
                <span style={{ color: "red" }}>
                  At least 1 skill is required.
                </span>
              ) : selectSkills?.length >= 10 && showSkillError ? (
                <span style={{ color: "red" }}>Maximum 10 skills.</span>
              ) : (
                <span>Maximum 10 skills.</span>
              )}
              {/* <span style={{ color: "red" }}>{errors?.already}</span> */}
            </div>
            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button
                variant=""
                className="trans_btn hov_pple"
                onClick={() => Popup()}
              >
                Cancel
              </Button>

              {selectSkills?.length === 0 ? (
                <Button className="btnhovpple" variant="" disabled>
                  Save
                </Button>
              ) : (
                <Button className="btnhovpple" variant="" onClick={onSave}>
                  Save
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditSkill;

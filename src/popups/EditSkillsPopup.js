import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";
import { getFreelancerSkills } from "../redux/actions/profileAction";

const EditSkillsPopup = ({ open, onCloseModal, values, setValues }) => {
  const dispatch = useDispatch();
  const [showSkillList, setShowSkillList] = useState(false);
  const [showSkillError, setShowSkillError] = useState(false);
  const getSkillList = useSelector((state) => state.profile.getSkillList);
  const [selectSkills, setSelectSkills] = useState(values?.job_skills);

  const removeSkills = (index) => {
    let updateSkills = [...selectSkills];
    updateSkills.splice(index, 1);
    setSelectSkills(updateSkills);
  };

  const addSkills = (item) => {
    if (selectSkills.length <= 9) {
      if (
        selectSkills.find((ele) => {
          return ele.id == item.id;
        }) == undefined
      ) {
        setSelectSkills([...selectSkills, { id: item.id, name: item.name }]);
      }
    } else {
      setShowSkillList(false);
      setShowSkillError(true);
    }
    document.getElementById("search_skill_inp").value = null;
  };

  const handleOnChange = (e) => {
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

  const onSave = (e) => {
    if (selectSkills.length == 0) {
      setShowSkillError(true);
    } else {
      setValues({ ...values, job_skills: selectSkills });
      onCloseModal();
    }
    // setSingleJobLists(selectSkills);
  };

  $(document).mouseup(function (e) {
    if ($(e.target).closest(".suggest_skills").length === 0) {
      setShowSkillList(false);
    }
  });

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      classNames={{ modal: "change-password-popup" }}
      center
    >
      <h5 style={{ fontWeight: 700 }}>Edit Skills</h5>
      <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
        <div className="mt-4 pt-1">
          <div className="pouphed_skll">Skills</div>
          <div className="popuphead_smparcr">
            Keeping your skills up to date helps you get the jobs you want.
          </div>
        </div>
        <div className="catbox_rd_ofive mt-3">
          <div className="d-flex flex-wrap">
            {selectSkills?.map((item, index) => (
              <div className="skill_bxr_gry" key={index}>
                <span>{item.name}</span>&nbsp;
                <i
                  class="fa fa-remove"
                  aria-hidden="true"
                  onClick={() => removeSkills(index)}
                ></i>
              </div>
            ))}
          </div>
          <div style={{ position: "relative" }}>
            <Form.Control
              type="text"
              name="skill"
              onChange={(e) => handleOnChange(e)}
              id="search_skill_inp"
              autocomplete="off"
              placeholder="search here skills..."
              className="no-border font-size-13px search_skilloiouo"
            />

            {showSkillList && getSkillList ? (
              <div className="suggest_skills" style={{ position: "absolute" }}>
                {getSkillList?.map((item) => (
                  <>
                    <span onClick={() => addSkills(item)}>{item.name}</span>{" "}
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
          {selectSkills?.length > 9 && showSkillError ? (
            <span style={{ color: "red" }}>Maximum 10 skills.</span>
          ) : (
            <span>Maximum 10 skills.</span>
          )}
        </div>
        <div className="popup_btns_new flex-wrap cwiewyehkk">
          <button className="trans_btn hov_pple" onClick={onCloseModal}>
            Cancel
          </button>
          {selectSkills?.length === 0 ? (
            <button disabled className="active_btn_blueDiabled">
              Save
            </button>
          ) : (
            <button className="btnhovpple" onClick={onSave}>
              Save
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default EditSkillsPopup;

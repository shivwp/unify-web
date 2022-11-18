import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import $ from "jquery";
import { getFreelancerSkills } from "../redux/actions/profileAction";

const EditSkillsPopup = ({
  open,
  onCloseModal,
  values,
  getSkillList,
  setSingleJobLists,
  singleJobLists,
}) => {
  const dispatch = useDispatch();
  const [selectSkills, setSelectSkills] = useState(
    singleJobLists || values?.skills
  );

  const removeSkills = (index) => {
    let updateSkills = [...selectSkills];
    updateSkills.splice(index, 1);
    setSelectSkills(updateSkills);
  };

  const addSkills = (item) => {
    if (selectSkills.length <= 15) {
      if (
        selectSkills.find((ele) => {
          return ele.id == item.id;
        }) == undefined
      ) {
        setSelectSkills([...selectSkills, { id: item.id, name: item.name }]);
      }
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
    $("#suggest_skills").show();
  };

  const onSave = (e) => {
    setSingleJobLists(selectSkills);
    onCloseModal();
  };

  $(document).mouseup(function (e) {
    if ($(e.target).closest("#suggest_skills").length === 0) {
      $("#suggest_skills").hide();
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

            {getSkillList && (
              <div id="suggest_skills">
                <div
                  className="suggest_skills"
                  style={{ position: "absolute" }}
                >
                  {getSkillList?.map((item) => (
                    <>
                      {" "}
                      <span onClick={() => addSkills(item)}>
                        {item.name}
                      </span>{" "}
                      <br />
                    </>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="maxlabel_atcxt mt-3">Maximum 15 skills.</div>
        <div className="popup_btns_new flex-wrap cwiewyehkk">
          <Button
            variant=""
            className="trans_btn hov_pple"
            onClick={onCloseModal}
          >
            Cancel
          </Button>
          <Button className="btnhovpple" variant="" onClick={onSave}>
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditSkillsPopup;

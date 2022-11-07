import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";
import {
  getFreelancerSkills,
  onEditSkills,
} from "../../../../../redux/actions/profileAction";


const CloseIcon = () => {
  return (
    <svg
      fill="#B2B2B2"
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="CloseIcon"
    >
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
    </svg>
  );
};

const EditSkill = (props) => {
  const [selectSkills, setSelectSkills] = useState(props?.data);
  console.log(selectSkills);
  const dispatch = useDispatch();
  let getSkillList = useSelector((state) => state?.profile?.getSkillList);

  const removeSkills = (index) => {
    let updateSkills = [...selectSkills];
    updateSkills.splice(index, 1);
    setSelectSkills(updateSkills);
  };

  const addSkills = (item) => {
    if (selectSkills.length <= 15) {
      if (
        selectSkills.find((ele) => {
          return ele.skill_id == item.id;
        }) == undefined
      ) {
        setSelectSkills([
          ...selectSkills,
          { skill_id: item.id, skill_name: item.name },
        ]);
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
    const data = {
      skill_id: selectSkills?.map((item) => item.skill_id)?.toString(),
    };
    dispatch(onEditSkills(data, props.Popup));
    dispatch(
      onEditSkills(data, props.Popup, props.successPopup, props.setSuccessPopup)
    );
  };

  $(document).mouseup(function (e) {
    if ($(e.target).closest("#suggest_skills").length === 0) {
      $("#suggest_skills").hide();
    }
  });
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Edit Skills</div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.Popup();
              }}
            >
              <CloseIcon />
            </div>
          </div>
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
              <button
                className="trans_btn"
                onClick={() => {
                  props.Popup();
                }}
              >
                Cancel
              </button>
              <Button variant="" onClick={onSave}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditSkill;

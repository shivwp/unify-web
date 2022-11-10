import Select from "react-select";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { editVisiblity } from "../../../../../redux/actions/profileAction";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

const VisiblityPopup = (props) => {
  const dispatch = useDispatch();
  const [projectPref, setProjectPref] = useState({
    name: props?.data?.project_preference,
  });
  const [visiblity, setVisiblity] = useState({
    name: props?.data?.visibility,
  });

  const visiblityOps = [
    { name: "public", label: "Public" },
    { name: "private", label: "Private" },
    { name: "unify_users", label: "Unify Users Only" },
  ];
  const projPrefrenceOps = [
    { name: "long_term", label: "Long Term" },
    { name: "short_term", label: "Short Term" },
    { name: "both", label: "Both" },
  ];

  const onSave = () => {
    const data = {
      visibility: visiblity?.name,
      project_preference: projectPref.name,
    };
    console.log(data);
    dispatch(
      editVisiblity(
        data,
        props.Popup,
        props.successPopup,
        props.setSuccessPopup
      )
    );
  };
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Visibility</div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.Popup();
              }}
            >
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
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui ">
            <div className="mt-3 mb-3"></div>

            <div className="mb-3 ">
              <div className="mt-4">
                <div className="popup_form_element">
                  <Form.Label className="text-black font-size-13px font-weight-500">
                    Visibility
                  </Form.Label>
                  <Select
                    className="font-size-13px"
                    placeholder="Select Visiblity"
                    options={visiblityOps}
                    onChange={setVisiblity}
                    defaultValue={
                      props?.data
                        ? {
                            name: props?.data?.visibility,
                            label: props?.data?.visibility,
                          }
                        : null
                    }
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="popup_form_element">
                  <Form.Label className="text-black font-size-13px font-weight-500">
                    Project Preference
                  </Form.Label>
                  <Select
                    className="font-size-13px"
                    placeholder="Select Project Prefrance"
                    options={projPrefrenceOps}
                    onChange={setProjectPref}
                    defaultValue={
                      props?.data
                        ? {
                            name: props?.data?.project_preference,
                            label: props?.data?.project_preference,
                          }
                        : null
                    }
                  />
                </div>
              </div>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button
                variant=""
                className="trans_btn"
                onClick={() => {
                  props.Popup();
                }}
              >
                Cancel
              </Button>
              <Button variant="" className="btnhovpple" onClick={onSave}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default VisiblityPopup;

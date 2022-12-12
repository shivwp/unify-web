import Select from "react-select";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { editVisiblity } from "../../../../../redux/actions/profileAction";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

const VisiblityPopup = ({ data, setSuccessPopup, successPopup, Popup }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const onSave = () => {
    let errorExist = false;
    let errorsObject = {};

    if (
      values?.visibility === "" ||
      values?.visibility === null ||
      values?.visibility === undefined
    ) {
      errorsObject.visibility = true;
      errorExist = true;
    }

    if (
      values?.project_preference === "" ||
      values?.project_preference === null ||
      values?.project_preference === undefined
    ) {
      errorsObject.project_preference = true;
      errorExist = true;
    }

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }

    const data = {
      visibility: values?.visibility,
      project_preference: values?.project_preference,
    };
    dispatch(editVisiblity(data, Popup, successPopup, setSuccessPopup));
  };

  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Visibility</div>
            <div className="close_pp_btn" onClick={() => Popup()}>
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
                    Visibility <span className="required_stars"> * </span>
                  </Form.Label>
                  <select
                    name="visibility"
                    onChange={(e) => handleOnChange(e)}
                    value={values?.visibility}
                    defaultValue="default"
                  >
                    <option value="default" hidden disabled>
                      Select
                    </option>
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                    <option value="unify_users">Only Unify Users</option>
                  </select>
                  <span className="signup-error">
                    {errors.visibility && "Please select your visibility"}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <div className="popup_form_element">
                  <Form.Label className="text-black font-size-13px font-weight-500">
                    Project Preference{" "}
                    <span className="required_stars"> * </span>
                  </Form.Label>
                  <select
                    name="project_preference"
                    onChange={(e) => handleOnChange(e)}
                    value={values?.project_preference}
                    defaultValue="default"
                  >
                    <option value="default" hidden disabled>
                      Select
                    </option>
                    <option value="long_term">Long Term</option>
                    <option value="short_term">Short Term</option>
                    <option value="both">Both</option>
                  </select>
                  <span className="signup-error">
                    {errors.project_preference &&
                      "Please select your project preference"}
                  </span>
                </div>
              </div>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button variant="" className="trans_btn" onClick={() => Popup()}>
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

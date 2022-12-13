import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onEditDesignation } from "../../../../../redux/actions/profileAction";

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

const EditTitle = ({ data, Popup, successPopup, setSuccessPopup }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(data);
  const [errors, setErrors] = useState({});

  const handleOnChange = (e) => {
    if (
      (values?.[e.target.name]?.length === undefined ||
        values?.[e.target.name]?.length === 0) &&
      e.target.value == " "
    ) {
      setValues({ ...values, [e.target.name]: "" });
      setErrors({
        ...errors,
        [e.target.name]: "Field is required",
      });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: false });
    }
  };

  const onSave = () => {
    let errorExist = false;
    let errorsObject = {};

    if (
      values?.occuption === "" ||
      values?.occuption === null ||
      values?.occuption === undefined
    ) {
      errorsObject.occuption = "Please enter your title";
      errorExist = true;
    } else if (/^[0-9]\d*$/.test(values?.occuption)) {
      errorsObject.occuption = "please input a valid title ";
      errorExist = true;
    }

    if (
      values?.description === "" ||
      values?.description === null ||
      values?.description === undefined
    ) {
      errorsObject.description = "Please enter your description";
      errorExist = true;
    } else if (/^[0-9]\d*$/.test(values?.description)) {
      errorsObject.description = "please input a valid description ";
      errorExist = true;
    }

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }

    const data = {
      title: values?.occuption,
      description: values?.description,
    };

    dispatch(onEditDesignation(data, Popup, successPopup, setSuccessPopup));
  };
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Title And Overview</div>
            <div className="close_pp_btn" onClick={() => Popup()}>
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui">
            <div className="mt-3 pt-1">
              <div className="pouphed_skll">
                Your title <span className="required_stars"> * </span>{" "}
              </div>
              <div className="popuphead_smparcr">
                Enter a single sentence description of your professional
                skills/experience (e.g. Expert Web Designer with Ajax
                experience)
              </div>
            </div>

            <div className="popup_form_element mb-3">
              <Form.Control
                type="text"
                className="font-size-13px"
                name="occuption"
                value={values?.occuption}
                onChange={(e) => handleOnChange(e)}
                placeholder="Senior UI/UX, Website Designer And Graphic Designer"
              />
              <span className="signup-error">
                {/* {errors.occuption && "Please enter your title"} */}
                {errors.occuption && errors.occuption}
              </span>
            </div>
            <div className="pouphed_skll mt-3">
              Overview <span className="required_stars"> * </span>{" "}
            </div>
            <div>
              <div className="popuphead_smparcr">
                Use this space to show clients you have the skills and
                experience they're looking for.
              </div>
              <ul className="popuphead_smparcr ulist_overpopup mt-1">
                <li>Describe your strengths and skills</li>
                <li>Highlight projects, accomplishments and education</li>
                <li>Keep it short and make sure it's error-free</li>
              </ul>
            </div>
            <div className="_profile_overview popup_form_element mb-0">
              <Form.Control
                as="textarea"
                name="description"
                value={values?.description}
                onChange={(e) => handleOnChange(e)}
                placeholder="Description"
              ></Form.Control>
              <span className="signup-error">
                {/* {errors.description && "Please enter your description"} */}
                {errors.description && errors.description}
              </span>
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
export default EditTitle;

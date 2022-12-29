import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onEditDesignation } from "../../../../../redux/actions/profileAction";
import PopupsCloseIcon from "../../../../components/popups/PopupsCloseIcon";

const EditTitle = ({
  data,
  Popup,
  successPopup,
  setSuccessPopup,
  setLoading,
}) => {
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

  const afterSuccess =()=>{
    window.location.reload();
  }
  const onSave = () => {
    setLoading(true);
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
    } else if (values?.description?.length < 100) {
      errorsObject.description = "Atleast 100 charecters is required ";
      errorExist = true;
    }

    if (errorExist) {
      setErrors(errorsObject);
      setLoading(false);

      return false;
    }

    const data = {
      title: values?.occuption,
      description: values?.description,
    };

    dispatch(
      onEditDesignation(
        data,
        Popup,
        successPopup,
        setSuccessPopup,
        afterSuccess,
        setLoading
      )
    );
  };
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Title And Overview</div>
            <div className="close_pp_btn" onClick={() => Popup()}>
              <PopupsCloseIcon />
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
                maxlength="5000"
                placeholder="Description"
              ></Form.Control>
              <div className="maxlabel_atcxt2_and_errors">
                <span className="signup-error">
                  {errors.description && errors.description}
                </span>
                <span>
                  {5000 - values?.description?.length} characters left{" "}
                </span>
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
export default EditTitle;

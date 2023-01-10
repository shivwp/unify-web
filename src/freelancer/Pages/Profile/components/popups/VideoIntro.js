import Select from "react-select";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onEditVideo } from "../../../../../redux/actions/profileAction";

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

const VideoIntro = ({
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
        [e.target.name]: `Field is required`,
      });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: false });
    }
  };

  const onSave = () => {
    setLoading(true);
    let errorExist = false;
    let errorsObject = {};
    if (values.url === "" || values.url === null || values.url === undefined) {
      errorsObject.url = "Please enter video url";
      errorExist = true;
    } else if (
      !/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/.test(
        values?.url
      )
    ) {
      errorsObject.url = "Please enter a valid youtube url ";
      errorExist = true;
    }

    if (
      values.type === "" ||
      values.type === null ||
      values.type === undefined
    ) {
      errorsObject.type = true;
      errorExist = true;
    }

    if (errorExist) {
      setErrors(errorsObject);
      setLoading(false);
      return false;
    }

    const data = {
      video: values.url,
      video_type: values.type,
    };
    dispatch(
      onEditVideo(data, Popup, successPopup, setSuccessPopup, setLoading)
    );
  };
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Add video introduction</div>
            <div
              className="close_pp_btn"
              onClick={() => {
                Popup();
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui">
            <div className="mt-4 pt-1 mb-4"></div>

            <div className="mb-5 ">
              <div className="popup_form_element">
                <Form.Label className="text-black font-size-13px font-weight-500">
                  Link to your YouTube video
                  <span className="required_stars"> * </span>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="font-size-13px"
                  name="url"
                  onChange={(e) => handleOnChange(e)}
                  value={values?.url}
                  placeholder="https://youtu.be/_B6T8O15Ohk"
                />
                <span className="signup-error">{errors.url && errors.url}</span>
              </div>
              <div className="popup_form_element">
                <Form.Label className="text-black font-size-13px font-weight-500">
                  What type of video is this?
                  <span className="required_stars"> * </span>
                </Form.Label>
                <select
                  name="type"
                  placeholder="What type of video is this?"
                  className="font-size-13px"
                  onChange={(e) => handleOnChange(e)}
                  value={values?.type}
                >
                  <option value="">Select</option>
                  <option value="Me talking about my skills and Experience">
                    Me talking about my skills and Experience
                  </option>
                  <option value="Visual samples of my work">
                    Visual samples of my work
                  </option>
                  <option value="Something else">Something else</option>
                </select>
                <span className="signup-error">
                  {errors.type && "Please select video type"}
                </span>
                {/* <Select
                  className="font-size-13px"
                  placeholder="What type of video is this?"
                  onChange={setType}
                  defaultValue={
                    type
                      ? {
                          name: type?.name,
                          label: type?.label,
                        }
                      : null
                  }
                  options={videoTypes}
                /> */}
              </div>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button
                variant=""
                className="trans_btn"
                onClick={() => {
                  Popup();
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
export default VideoIntro;

import Select from "react-select";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onEditVideo,
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

const VideoIntro = (props) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(props?.data);
  const [type, setType] = useState(
    props?.data && {
      name: props.data?.type,
      label: props.data?.type,
    }
  );

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const videoTypes = [
    {
      name: "Me talking about my skills and Exprience",
      label: "Me talking about my skills and Exprience",
    },
    {
      name: "Visual samples of my work",
      label: "Visual samples of my work",
    },
    {
      name: "Something else",
      label: "Something else",
    },
  ];

  const onSave = () => {
    const data = {
      video: values.url,
      video_type: type.name,
    };
    dispatch(
      onEditVideo(data, props.Popup, props.successPopup, props.setSuccessPopup)
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
                props.Popup();
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
                </Form.Label>
                <Form.Control
                  type="text"
                  className="font-size-13px"
                  name="url"
                  onChange={(e) => handleOnChange(e)}
                  value={values?.url}
                  placeholder="Ex: https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                />
              </div>
              <div className="popup_form_element">
                <Form.Label className="text-black font-size-13px font-weight-500">
                  What type of video is this?
                </Form.Label>
                <Select
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
                />
              </div>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button
                className="trans_btn"
                onClick={() => {
                  props.Popup();
                }}
              >
                Cancel
              </Button>
              <Button onClick={onSave}>Save</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default VideoIntro;

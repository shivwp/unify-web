import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onEditDesignation,
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


const EditTitle = (props) => {
  const [values, setValues] = useState(props.data);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSave = () => {
    const data = {
      title: values.occuption,
      description: values.description,
    };

    dispatch(
      onEditDesignation(
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
            <div className="p_header_hding">Title And Overview</div>
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
            <div className="mt-3 pt-1">
              <div className="pouphed_skll">Your title</div>
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
                onChange={(e) => handleOnChange(e)}
                value={values?.occuption}
                placeholder="Senior UI/UX, Website Designer And Graphic Designer"
              />
            </div>
            <div className="pouphed_skll mt-3">Overview</div>
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
                value={values?.description}
                name="description"
                onChange={(e) => handleOnChange(e)}
                placeholder="theDesignerz offers professional and high-quality graphic design services. We have been designing for companies worldwide since 2018. We are a customer service oriented firm, and we will workwith you until you are completely satisfied with the outcome of your design projects. We are the most experienced team of designers working on Freelancer since 2017"
              ></Form.Control>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button variant=""
                className="trans_btn"
                onClick={() => {
                  props.Popup();
                }}
              >
                Cancel
              </Button>
              <Button variant="" onClick={onSave}>Save</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
  export default EditTitle
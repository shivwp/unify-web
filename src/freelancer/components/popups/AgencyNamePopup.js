import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAdditionalAccount } from "../../../redux/actions/profileAction";
import { useNavigate } from "react-router-dom";
import PopupsCloseIcon from "./PopupsCloseIcon";

const AgencyNamePopup = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const onCreateAdditionalAccount = () => {
    let errorExist = false;
    let errorsObject = {};
    props?.setLoading(true);

    if (
      values?.agency_name === "" ||
      values?.agency_name === null ||
      values?.agency_name === undefined
    ) {
      errorsObject.agency_name = true;
      errorExist = true;
    }

    if (errorExist) {
      setErrors(errorsObject);
      props?.setLoading(false);
      return false;
    }

    const data = {
      user_type: "agency",
      agency_name: values?.agency_name,
    };
    dispatch(onAdditionalAccount(data, navigate, props?.setLoading));
  };

  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Create Agency</div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.setPopup();
              }}
            >
              <PopupsCloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui">
            <div className="why_create_agency_">
              Agencies allow more freelancers on a single team and often have
              Business managers. Create a agency if you plan to work this way.{" "}
              <span>Learn More</span>
            </div>
            <div className="mt-3 pt-1" style={{ color: "#5c5959" }}>
              <div className="pouphed_skll">Agency Name</div>
            </div>

            <div className="popup_form_element mb-3">
              <Form.Control
                type="text"
                className="font-size-13px"
                name="agency_name"
                value={values?.agency_name}
                onChange={(e) => handleOnChange(e)}
                placeholder="Agency Name"
              />
              <span className="signup-error">
                {errors.agency_name && "Please enter your agency name"}
              </span>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button
                variant=""
                className="trans_btn"
                onClick={() => {
                  props.setPopup();
                }}
              >
                Cancel
              </Button>
              <Button
                variant=""
                className="btnhovpple"
                onClick={onCreateAdditionalAccount}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AgencyNamePopup;

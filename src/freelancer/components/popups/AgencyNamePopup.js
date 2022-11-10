import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAdditionalAccount } from "../../../redux/actions/profileAction";
import { useNavigate } from "react-router-dom";

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

const AgencyNamePopup = (props) => {
  const [agencyName, setAgencyName] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCreateAdditionalAccount = () => {
    const data = { user_type: "agency", agency_name: agencyName };
    dispatch(onAdditionalAccount(data, navigate));
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
              <CloseIcon />
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
                onChange={(e) => setAgencyName(e.target.value)}
                placeholder="Agency Name"
              />
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

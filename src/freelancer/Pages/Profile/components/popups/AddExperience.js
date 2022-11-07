import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

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
 
const AddExperience = (props) => {
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Add other Experiences</div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.Popup();
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui ">
            <div className="mt-2 pt-1 mb-4"></div>

            <div className="mb-4 ">
              <div className="popup_form_element">
                <Form.Label className="text-black font-size-13px font-weight-500">
                  Subject
                </Form.Label>
                <Form.Control
                  type="text"
                  className="font-size-13px"
                  placeholder=" "
                />
              </div>
              <div className="popup_form_element">
                <Form.Label className="text-black font-size-13px font-weight-500">
                  Description
                </Form.Label>
                <Form.Control
                  as="textarea"
                  className="font-size-13px"
                  placeholder="Enter Here"
                ></Form.Control>
              </div>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <button className="trans_btn">Cancel</button>
              <button
                onClick={() => {
                  props.Popup();
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddExperience;

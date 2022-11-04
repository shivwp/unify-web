import Button from 'react-bootstrap/Button'
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


const Overview = (props) => {
    return (
      <>
        <div className="bg_wrapper_popup_new">
          <div className="popup_box_bpn profile_nceqoi_popup pb-4">
            <div className="popup_header pb-0">
              <div className="p_header_hding">Overview</div>
              <div
                className="close_pp_btn"
                onClick={() => {
                  props.Popup();
                }}
              >
                <CloseIcon />
              </div>
            </div>
            <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
              <div className="mt-4 pt-1">
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
              <div className="gbxewueyuien">
                theDesignerz offers professional and high-quality graphic design
                services. We have been designing for companies worldwide since
                2018. We are a customer service oriented firm, and we will work
                with you until you are completely satisfied with the outcome of
                your design projects. We are the most experienced team of
                designers working on Freelancer since 2017
              </div>
              <div className="maxlabel_atcxt mt-2 text-right">
                4120 characters left
              </div>
              <div className="popup_btns_new flex-wrap cwiewyehkk">
                <Button className="trans_btn">Cancel</Button>
                <Button
                  onClick={() => {
                    props.Popup();
                  }}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  export default Overview
const CancleSubscriptionPopup = (props) => {
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn paypopradouy pb-4 cancleSubsPopupBox">
          <div className="popup_header subsPopup">
            <div className="p_header_hding addpay_header_hdin cancleSubHead">
              Cancel Your Subscriptions
            </div>
            <div className="cancleSubHead2">
              Are you sure you want to cancel your subscription plan
            </div>
          </div>
          <div className="theme_btns d-flex align-items-center justify-content-between subsCancleSubs">
            <button
              className="first_button subsCancleSubsbtn"
              style={{ marginTop: "0px" }}
              onClick={() => {
                props.Popup();
              }}
            >
              NOT NOW
            </button>
            <button
              className="second_button subsCancleSubsbtn"
              style={{ marginTop: "0px" }}
            >
              CANCEL SUBSCRIPTION
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CancleSubscriptionPopup;

import React from "react";
import PopupsCloseIcon from "../../../../freelancer/components/popups/PopupsCloseIcon";

const FundMilestone = ({ popup }) => {
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup add_milestone_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Fund Milestone</div>
            <div className="close_pp_btn" onClick={() => popup()}>
              <PopupsCloseIcon />
            </div>
          </div>

          <div className="popup_btns_new flex-wrap cwiewyehkk">
            <button className="font-weight-600 trans_btn">Cancel</button>
            <button className="font-weight-600">FUND MIIESTONE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FundMilestone;

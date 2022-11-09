import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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

const CategoryPopup = ({ categoryList, Popup, handleCategoryChange }) => {
  return (
    <div className="bg_wrapper_popup_new">
      <div className="popup_box_bpn profile_nceqoi_popup pb-4">
        <div className="popup_header pb-0">
          <div className="p_header_hding">Edit Category</div>
          <div className="close_pp_btn" onClick={() => Popup()}>
            <CloseIcon />
          </div>
        </div>
        <div className="popup_body_bpn amount_popup_body max_height_popucwui">
          <div className="mt-3 pt-1">
            <div className="pouphed_skll">Category</div>
            <select
              className="category-popup-select"
              onChange={handleCategoryChange}
            >
              {categoryList?.map((item, key) => (
                <option key={key} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="popup_btns_new flex-wrap cwiewyehkk">
            <Button variant="" className="trans_btn" onClick={() => Popup()}>
              Cancel
            </Button>
            <Button variant="">Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPopup;
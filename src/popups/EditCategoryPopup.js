import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import Button from "react-bootstrap/Button";

const EditCategoryPopup = ({
  open,
  onCloseModal,
  categoryList,
  onInputChange,
  values,
}) => {
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      classNames={{ modal: "change-password-popup" }}
      center
    >
      <h5 style={{ fontWeight: 700 }}>Edit Category</h5>
      <div className="popup_body_bpn amount_popup_body max_height_popucwui">
        <div className="mt-3 pt-1">
          <div className="pouphed_skll">Category</div>
          <select
            className="category-popup-select"
            name="categories"
            value={values?.categories}
            onChange={(e) => onInputChange(e)}
          >
            {categoryList?.map((item, key) => (
              <option key={key}>{item.name}</option>
            ))}
          </select>
        </div>

        <div className="popup_btns_new flex-wrap cwiewyehkk">
          <Button
            variant=""
            className="trans_btn"
            onClick={() => onCloseModal()}
          >
            Cancel
          </Button>
          <Button variant="" onClick={() => onCloseModal()}>
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditCategoryPopup;

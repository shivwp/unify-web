import React, { useState, useEffect } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";

const EditCategoryPopup = ({
  open,
  onCloseModal,
  categoryList,
  values,
  setValues,
}) => {
  const [categoryId, setCategoryId] = useState({});

  useEffect(() => {
    if (values) {
      setCategoryId(values);
    }
  }, [values]);

  const onInputChange = (e) => {
    setCategoryId({ ...categoryId, [e.target.name]: e.target.value });
  };

  const onSave = () => {
    setValues({ ...values, category_id: categoryId?.category_id });
    onCloseModal();
  };

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
            name="category_id"
            value={categoryId?.category_id}
            onChange={(e) => onInputChange(e)}
          >
            <option value="">Select Category</option>
            {categoryList?.map((item, key) => (
              <option key={key} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="popup_btns_new flex-wrap cwiewyehkk">
          <button className="trans_btn" onClick={() => onCloseModal()}>
            Cancel
          </button>
          {!categoryId?.category_id ? (
            <button disabled className="active_btn_blueDiabled">
              Save
            </button>
          ) : (
            <button onClick={() => onSave()}>Save</button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default EditCategoryPopup;

import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getHoursPerWeekList,
  onEditHourPerWeek,
} from "../../../redux/actions/profileAction";
import { useState } from "react";

const HourPerWeekPopup = ({ open, onCloseModal }) => {
  const dispatch = useDispatch();
  const [hpwValue, setHPWValue] = useState();
  const hwpList = useSelector((state) => state?.profile?.getHoursPerWeekList);
  useEffect(() => {
    dispatch(getHoursPerWeekList());
  }, []);

  const onSave = () => {
    const data = { hours_id: hpwValue };
    dispatch(onEditHourPerWeek(data, onCloseModal));
  };
  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{ modal: "freelancer_popups HWP_Popup" }}
        center
      >
        <h5>Hours Per Week</h5>
        <p>
          Knowing how much you can work helps Unify find the right jobs for you.{" "}
          <span>How we can use this info.</span>
        </p>
        <div className="content">
          <h5>I can currently work</h5>
          <ul className="popup-radio">
            {hwpList?.map((item, index) => (
              <li key={item.id}>
                <label htmlFor={`op-${index}`}>
                  <input
                    type="radio"
                    id={`op-${index}`}
                    onClick={() => setHPWValue(item.id)}
                    name="p"
                    value={"More then 30 Hours per week"}
                  />{" "}
                  <span>{item.title}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="freelancer_popup_btns">
          <div className="_cancle_submit">
            <button onClick={onCloseModal}>CANCEL</button>
          </div>
          <div className="_save_submit">
            <button onClick={onSave}>SAVE</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default HourPerWeekPopup;

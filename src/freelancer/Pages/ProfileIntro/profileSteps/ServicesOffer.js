import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import {
  getCategoryList,
  onAddCategory,
} from "../../../../redux/actions/profileAction";

const ServicesOffer = ({ setCurrentTab, profileList }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  const [isChange, setIsChange] = useState(false);
  const categoryList = useSelector((state) => state?.profile?.categoryList);
  const [successPopup, setSuccessPopup] = useState(false);

  useEffect(() => {
    if (profileList) {
      setValues(profileList);
    }
  }, [profileList]);

  useEffect(() => {
    dispatch(getCategoryList());
  }, []);

  const afterSuccess = () => {
    setCurrentTab("hourlyRate");
    navigate(`/freelancer/profile-intro/hourlyRate`);
  };

  const handleOnChange = (e) => {
    setIsChange(true);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSave = () => {
    if (isChange) {
      dispatch(
        onAddCategory(
          { category_id: values?.category_id },
          successPopup,
          setSuccessPopup,
          afterSuccess
        )
      );
    } else {
      setCurrentTab("hourlyRate");
      navigate(`/freelancer/profile-intro/hourlyRate`);
    }
  };

  return (
    <>
      <div className="container">
        <div className="container_border">
          <div className="startIntroIn">
            <h5 className="startIntroTwoH5">
              What projects are you looking for?
            </h5>
            <p className="startIntroTwoP">
              Choose at least 1 service. This will help clients find you for the
              work they need.
            </p>
            <div className="servicesChoose">
              <div className="popup_form_element">
                <select
                  name="category_id"
                  className="servicesOfferOption"
                  value={values?.category_id}
                  onChange={(e) => handleOnChange(e)}
                  defaultValue={"DEFAULT"}
                >
                  <option hidden value={"DEFAULT"} disabled>
                    Please Select an option
                  </option>
                  {categoryList?.map((item, index) => (
                    <option key={index} value={item?.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="theme_btns mt-0">
              <button
                className="first_button"
                onClick={() => {
                  setCurrentTab("skills");
                  navigate(`/freelancer/profile-intro/skills`);
                }}
              >
                Back
              </button>

              <button
                className="second_button"
                disabled={!values?.category_id}
                onClick={onSave}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {successPopup}
    </>
  );
};

export default ServicesOffer;

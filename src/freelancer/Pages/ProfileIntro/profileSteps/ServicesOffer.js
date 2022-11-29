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
  const categoryList = useSelector((state) => state?.profile?.categoryList);
  const [values, setValues] = useState({});
  const [categoryId, setCategoryId] = useState("");
  const navigate = useNavigate();

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
    setValues({ ...values, [e.target.name]: e.target.value });

    if (categoryList) {
      for (let i = 0; i < categoryList.length; i++) {
        if (categoryList[i].name == e.target.value) {
          setCategoryId(categoryList[i].id);
        }
      }
    }
  };
  const onSave = () => {
    dispatch(
      onAddCategory(
        { category_id: categoryId },
        successPopup,
        setSuccessPopup,
        afterSuccess
      )
    );
  };

  console.log(values?.category);

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
                  name="category"
                  className="servicesOfferOption"
                  value={values?.category}
                  onChange={(e) => handleOnChange(e)}
                >
                  {categoryList?.map((item, index) => (
                    <option key={index} value={item?.name}>
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
                disabled={!values?.category}
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

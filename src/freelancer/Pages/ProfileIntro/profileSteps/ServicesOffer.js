import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { getCategoryList } from "../../../../redux/actions/profileAction";

const ServicesOffer = ({ setCurrentTab }) => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state?.profile?.categoryList);
  const [values, setValues] = useState({});

  useEffect(() => {
    dispatch(getCategoryList());
  }, []);

  const handleOnChange = (e) => {
    setValues({ [e.target.name]: e.target.value });
  };

  console.log(categoryList);
  return (
    <div className="container">
      <div className="container_border">
        <div className="startIntroIn">
          <h5 className="startIntroTwoH5">
            What are the main services you offer?
          </h5>
          <p className="startIntroTwoP">
            Choose at least 1 service that best describes the type of work you
            do. this helps us match you with clients who need your unique
            expertise.
          </p>
          <div className="servicesChoose">
            <div className="popup_form_element">
              <select
                name="name"
                className="servicesOfferOption"
                onChange={(e) => handleOnChange(e)}
              >
                <option selected disabled>
                  Search for a service
                </option>
                {categoryList?.map((item) => (
                  <option value={item?.name}>{item.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="theme_btns mt-0">
            <button
              className="first_button"
              onClick={() => setCurrentTab("skills")}
            >
              Back
            </button>
            <button
              className="second_button"
              onClick={() => setCurrentTab("hourlyRate")}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOffer;

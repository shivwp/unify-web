import React from 'react'
import { useState } from 'react';
import Select from 'react-select';

const ServicesOffer = () => {

  const initialValue = () => {
    const values = "some"
    return values
  }
  const [values, setValues] = useState(initialValue)

  const Skills = [
    { label: "React", value: 355 },
    { label: "Javascript", value: 54 },
    { label: "PHP", value: 43 },
    { label: "Java", value: 61 },
    { label: "Python", value: 965 },
  ];

  const handleChange = (e) => {
    setValues(e.target.value);
  };

  return (
    <div className="container">
      <div className="container_border">
        <div className="startIntroIn">
          <h5 className="startIntroTwoH5">
            What are the main services you offer?
          </h5>
          <p className="startIntroTwoP">
            Choose at least 1 service that best describes the type of work you do. this helps us match you with clients who need your unique expertise.
          </p>
          <div className="servicesChoose">
            <div className="popup_form_element">
              <Select
                name="name"
                className='servicesOfferOption'
                value={values}
                options={Skills}
                // onChange={(e) => handleChange(e)}
                isMulti
              // value={values?.name}
              // onChange={(e) => handleOnChange(e)}
              >
                <option value="">Search for a service</option>
              </Select>
            </div>
          </div>
          <div className="theme_btns mt-0">
            <button className="first_button">Back</button>
            <button className="second_button">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesOffer
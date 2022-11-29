import { autocompleteClasses } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getLanguageList,
  onEditLanguage,
} from "../../../../redux/actions/profileAction";

const ChooseLangauge = ({ setCurrentTab, profileList }) => {
  const languageList = useSelector((state) => state?.profile?.getLanguageList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [popup, Setpopup] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const [confirmPopup, setConfirmPopup] = useState(false);

  const [inputList, setInputList] = useState(
    profileList || [{ language: "", level: "" }]
  );

  console.log(inputList);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { language: "", level: "" }]);
  };
  const proficiencyOptions = [
    { name: "Fluent" },
    { name: "Conversational" },
    { name: "Native" },
  ];

  const removeInputFields = (index) => {
    const rows = [...inputList];
    rows.splice(index, 1);
    setInputList(rows);
  };

  const afterSuccess = () => {
    setCurrentTab("skills");
    navigate(`/freelancer/profile-intro/skills`);
  };

  const handleSave = () => {
    console.log(inputList);
    const data = {};
    inputList.map((ele) => {
      data[ele.language] = ele.level;
    });
    dispatch(
      onEditLanguage(
        { languages: data },
        popup,
        successPopup,
        setSuccessPopup,
        afterSuccess
      )
    );
  };

  useEffect(() => {
    dispatch(getLanguageList());
  }, []);
  return (
    <>
      <div className="container">
        <div className="container_border">
          <div className="startIntroIn">
            <h5 className="startIntroTwoH5">
              Looking good. Next, tell us which languages you speak.
            </h5>
            <div className="startIntroTwoP mt-3 mb-3">
              Unify is global, so clients are often interested to know what
              languages you speak. English is a must, but do you speak any other
              languages?
            </div>
            <Row>
              <div className="languageOption">
                <Col md={5} lg={4}>
                  <div className="langAdd"> Language </div>
                </Col>
                <Col md={5} lg={4}>
                  <div className="langLevel"> Proficiency </div>
                </Col>
              </div>
            </Row>
            <Row>
              {inputList?.map((data, i) => {
                return (
                  <>
                    <Col md={5} lg={4} key={i}>
                      <div className="popup_form_element">
                        <select
                          className="font-size-13px language_sel"
                          name="language"
                          value={data.language}
                          onChange={(e) => handleInputChange(e, i)}
                        >
                          <option selected hidden>
                            Select a Language
                          </option>
                          {languageList?.map((item, i) => (
                            <option key={i} value={item.name}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                        {/* <input
                      className="font-size-13px"
                      placeholder="English"
                      name="language"
                      value={data.language}
                      onChange={(e) => handleInputChange(e, i)}
                    /> */}
                      </div>
                    </Col>
                    <Col md={5} lg={4}>
                      <div
                        className="popup_form_element"
                        style={{ flexDirection: "row" }}
                      >
                        <select
                          className="font-size-13px language_sel"
                          name="level"
                          value={data.level}
                          onChange={(e) => handleInputChange(e, i)}
                        >
                          <option selected hidden>
                            Select a level
                          </option>
                          {proficiencyOptions.map((item, i) => (
                            <option key={i} value={item.name}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </Col>
                    <Col md={2} lg={1}>
                      {" "}
                      <div className="popup_form_element">
                        {inputList?.length !== 1 ? (
                          <button
                            onClick={() => removeInputFields(i)}
                            style={{
                              border: "none",
                              background: "transparent",
                              margin: 5,
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 16 16"
                            >
                              <path
                                id="_2203546_bin_delete_gabage_trash_icon"
                                data-name="2203546_bin_delete_gabage_trash_icon"
                                d="M8,0A1,1,0,0,0,7,1H0V3H1V14a2,2,0,0,0,2,2H13a2,2,0,0,0,2-2V3h1V1H9A1,1,0,0,0,8,0ZM4,14H3V5H4Zm3,0H6V5H7Zm3,0H9V5h1Zm3,0H12V5h1Z"
                                fill="#6d2ef1"
                              />
                            </svg>
                          </button>
                        ) : null}
                      </div>
                    </Col>
                    <div
                      style={{
                        display: "flex",
                        height: "100%",
                        alignItems: "flex-end",
                        justifyContent: "center",
                      }}
                    ></div>
                  </>
                );
              })}
            </Row>
            <div className="langPlus my-4">
              {inputList?.slice(-1)[0]?.language &&
              inputList?.slice(-1)[0]?.level ? (
                <div className="langAdd2" onClick={handleAddClick}>
                  {" "}
                  <div className="langPlusIcon mr-1"> + </div>
                  Add a language{" "}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="pbx_pdd_sp2 mt-1 mb-1"></div>
            <div className="theme_btns mt-0">
              <button
                className="first_button"
                onClick={() => {
                  setCurrentTab("education");
                  navigate(`/freelancer/profile-intro/education`);
                }}
              >
                Back
              </button>
              <button
                className="second_button"
                disabled={
                  !(
                    inputList?.slice(-1)[0]?.language &&
                    inputList?.slice(-1)[0]?.level
                  )
                }
                onClick={handleSave}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* {popup} */}
      {confirmPopup}
      {successPopup}
    </>
  );
};

export default ChooseLangauge;

import { autocompleteClasses } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";

const ChooseLangauge = ({ setCurrentTab, profileList }) => {
  return (
    <>
      <div className="container">
        <div className="container_border">
          <div className="startIntroIn">
            <h5 className="startIntroTwoH5">
              Looking good.Next, tell us which languages you speak.
            </h5>
            <div className="startIntroTwoP mt-3 mb-3">
              Unify is global, so clients are often interested to know what
              languages you speak. English is a must, but do you speak any other
              languages?
            </div>
            <div className="languageOption">
              <div className="langAdd"> Language </div>
              <div className="langLevel"> Proficiency </div>
            </div>
            <div className="languageOptionName mt-2">
              <div className="langAdd2"> English </div>
              <div className="langLevel">
                <div className="langChoseDrop">
                  <select
                    className="langSelect font-size-11px"
                    placeholder="Select ID"
                    name="type"
                  >
                    <option>Basic</option>
                    <option>Conversational</option>
                    <option>Fluent</option>
                    <option>Native Or Bilingual</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="langPlus">
              <div className="langPlusIcon"> + </div>
              <div className="langAdd2"> Add a language </div>
            </div>
            <div className="pbx_pdd_sp2 mt-1 mb-1"></div>
            <div className="theme_btns mt-0">
              <button
                className="first_button"
                onClick={() => setCurrentTab("education")}
              >
                Back
              </button>
              <button
                className="second_button"
                onClick={() => setCurrentTab("skills")}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseLangauge;

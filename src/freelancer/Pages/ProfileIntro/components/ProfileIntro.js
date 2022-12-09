import React, { useState, useEffect } from "react";
import TakeTimeToIntro from "../profileSteps/TakeTimeToIntro";
import WhatDoYouDo from "../profileSteps/WhatDoYouDo";
import Exprience from "../profileSteps/Exprience";
import Education from "../profileSteps/Education";
import Skills from "../profileSteps/Skills";
import ServicesOffer from "../profileSteps/ServicesOffer";
import HourlyRate from "../profileSteps/HourlyRate";
import PublishProfile from "../profileSteps/PublishProfile";
import PreviewProfile from "../profileSteps/PreviewProfile";
import ChooseLangauge from "../profileSteps/ChooseLanguage";
import { useDispatch, useSelector } from "react-redux";
import { getFreelancerProfile } from "../../../../redux/actions/profileAction";
import { useParams } from "react-router-dom";
import QuestionOne from "../profileSteps/QuestionOne";
import QuestionTwo from "../profileSteps/QuestionTwo";

const ProfileIntro = () => {
  const { tabName } = useParams();
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState("question2");
  const freelancerProfileList = useSelector(
    (state) => state.profile.freelancerProfileList
  );
  const editDesignation = useSelector((state) => state.profile.editDesignation);
  const deleteExprience = useSelector((state) => state.profile.deleteExprience);
  const addExprience = useSelector((state) => state.profile.addExprience);
  const deleteEducation = useSelector((state) => state.profile.deleteEducation);
  const editEducation = useSelector((state) => state.profile.editEducation);
  const addCategory = useSelector((state) => state?.profile?.addCategory);
  const editHoursPerWeek = useSelector(
    (state) => state?.profile?.editHoursPerWeek
  );
  const editSkills = useSelector((state) => state?.profile?.editSkills);
  const editFreelancerLanguage = useSelector(
    (state) => state.profile.editFreelancerLanguage
  );
  const editFreelancerLocation = useSelector(
    (state) => state.profile.editFreelancerLocation
  );

  useEffect(() => {
    setCurrentTab(tabName);
  }, [tabName]);

  useEffect(() => {
    dispatch(getFreelancerProfile());
  }, [
    editDesignation,
    deleteExprience,
    addExprience,
    deleteEducation,
    editEducation,
    editFreelancerLanguage,
    addCategory,
    editSkills,
    addCategory,
    editHoursPerWeek,
    editFreelancerLocation,
  ]);

  return (
    <div style={{ minHeight: 450 }}>
      {currentTab === "question1" && (
        <QuestionOne setCurrentTab={setCurrentTab} />
      )}
      {currentTab === "question2" && (
        <QuestionTwo setCurrentTab={setCurrentTab} />
      )}
      {currentTab === "takeTimeToIntro" && (
        <TakeTimeToIntro setCurrentTab={setCurrentTab} />
      )}
      {currentTab === "whatDoYouDo" && (
        <WhatDoYouDo
          setCurrentTab={setCurrentTab}
          profileList={freelancerProfileList?.basic_info}
        />
      )}
      {currentTab === "exprience" && (
        <Exprience
          setCurrentTab={setCurrentTab}
          profileList={freelancerProfileList?.employment}
        />
      )}
      {currentTab === "education" && (
        <Education
          setCurrentTab={setCurrentTab}
          profileList={freelancerProfileList?.education}
        />
      )}
      {currentTab === "chooseLangauge" && (
        <ChooseLangauge
          setCurrentTab={setCurrentTab}
          profileList={freelancerProfileList?.language}
        />
      )}
      {currentTab === "skills" && (
        <Skills
          setCurrentTab={setCurrentTab}
          profileList={freelancerProfileList?.skills}
        />
      )}

      {currentTab === "servicesOffer" && (
        <ServicesOffer
          setCurrentTab={setCurrentTab}
          profileList={freelancerProfileList?.basic_info}
        />
      )}
      {currentTab === "hourlyRate" && (
        <HourlyRate
          setCurrentTab={setCurrentTab}
          profileList={freelancerProfileList?.basic_info}
        />
      )}
      {currentTab === "publishProfile" && (
        <PublishProfile
          setCurrentTab={setCurrentTab}
          profileList={freelancerProfileList?.basic_info}
        />
      )}
      {currentTab === "previewProfile" && (
        <PreviewProfile
          setCurrentTab={setCurrentTab}
          profileList={freelancerProfileList}
        />
      )}
    </div>
  );
};

export default ProfileIntro;

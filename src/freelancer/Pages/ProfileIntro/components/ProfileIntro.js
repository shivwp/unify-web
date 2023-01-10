import React, { useState, useEffect } from "react";
import TakeTimeToIntro from "../profileSteps/TakeTimeToIntro";
import WhatDoYouDo from "../profileSteps/WhatDoYouDo";
import Experience from "../profileSteps/Experience";
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
import LoadingSpinner from "../../../../components/LoadingSpinner";

const ProfileIntro = () => {
  const { tabName } = useParams();
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState(tabName);
  const [loading, setLoading] = useState(false);

  const freelancerProfileList = useSelector(
    (state) => state.profile.freelancerProfileList
  );

  const editDesignation = useSelector((state) => state.profile.editDesignation);
  const deleteExperience = useSelector(
    (state) => state.profile.deleteExperience
  );
  const addExperience = useSelector((state) => state.profile.addExperience);
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
    setLoading(true);
    dispatch(getFreelancerProfile(setLoading));
  }, [
    editDesignation,
    deleteExperience,
    addExperience,
    deleteEducation,
    editEducation,
    editFreelancerLanguage,
    addCategory,
    editSkills,
    addCategory,
    editHoursPerWeek,
    editFreelancerLocation,
  ]);

  const ChangeTab = (tab) => {
    const tabs = {
      question1: (
        <QuestionOne setCurrentTab={setCurrentTab} setLoading={setLoading} />
      ),
      question2: (
        <QuestionTwo setCurrentTab={setCurrentTab} setLoading={setLoading} />
      ),
      takeTimeToIntro: (
        <TakeTimeToIntro
          setCurrentTab={setCurrentTab}
          setLoading={setLoading}
        />
      ),
      whatDoYouDo: (
        <WhatDoYouDo
          setCurrentTab={setCurrentTab}
          profileList={freelancerProfileList?.basic_info}
          setLoading={setLoading}
        />
      ),
      exprience: (
        <Experience
          setCurrentTab={setCurrentTab}
          profileList={freelancerProfileList?.employment}
          setLoading={setLoading}
        />
      ),
      education: (
        <Education
          setCurrentTab={setCurrentTab}
          profileList={freelancerProfileList?.education}
          setLoading={setLoading}
        />
      ),
      chooseLangauge: (
        <ChooseLangauge
          setCurrentTab={setCurrentTab}
          profileList={freelancerProfileList?.language}
          setLoading={setLoading}
        />
      ),
      skills: (
        <Skills
          setCurrentTab={setCurrentTab}
          setLoading={setLoading}
          profileList={freelancerProfileList?.skills}
        />
      ),
      servicesOffer: (
        <ServicesOffer
          setCurrentTab={setCurrentTab}
          profileList={freelancerProfileList?.basic_info}
          setLoading={setLoading}
        />
      ),
      hourlyRate: (
        <HourlyRate
          setCurrentTab={setCurrentTab}
          profileList={freelancerProfileList?.basic_info}
          setLoading={setLoading}
        />
      ),
      publishProfile: (
        <PublishProfile
          setCurrentTab={setCurrentTab}
          profileList={freelancerProfileList?.basic_info}
          setLoading={setLoading}
        />
      ),
      previewProfile: (
        <PreviewProfile
          setCurrentTab={setCurrentTab}
          setLoading={setLoading}
          profileList={freelancerProfileList}
        />
      ),
    };
    return tabs[tab];
  };

  return (
    <div style={{ minHeight: 450 }}>
      {ChangeTab(currentTab)}
      {loading ? <LoadingSpinner /> : null}
    </div>
  );
};

export default ProfileIntro;

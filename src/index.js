import React from 'react';
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from './App'
import Signup from './Signup'
import Signin from './Signin'
import Createcategory from './create-category'
import Category from './category'
import Question from './question'
import QuestionTwo from './questiontwo'
import BusinessSize from './businesssize'
import Subscription from './subscription'
import ExpandTeam from './expandteam'
import Notification from './notification'
import GettingStarted from './gettingstarted'
import Title from './title'
import TitleFourteen from './titlefour'
import Skills from './skills'
import Scope from './scope'
import Budget from './budget'
import ProjectSearch from './projectsearch'
import ProjectDetail from './projectdetail'
import FreelancerDetail from './freelancerdetail'
import JobPortal from './jobportal'
import Description from './postdescription'
import JobDescription from './jobdescription'
import ViewJob from './viewJob'
import HireFreelancer from './hirefreelancer'
import MyJobs from './myjobs'
import AllContracts from './allcontracts'
import TalentDiscover from './talentdiscover'
import Talentyourhires from './yourhires'
import Talentbyo from './talentbyo' 
import Talentrecentview from './talentrecent'
import Talentsaved from './talentsaved'
import Search from './search'
import SettingInfo from './settinginfo'
import SettingBilling from './settingbilling'
import SettingMembership from './settingmember'
import SettingTeam from './settingteam'
import SettingNotification from './settingnotification'
import SettingConnectedServices from './settingservices'
import SettingMembershipPerm from './settingmemberperm'
import SettingPasswordSecurity from './settingpassword'
import HelpSupport from './helpsupport'
import Message from './message'
import ManagementBoard from './managementb'
import TransactionHistory from './transactionhistory'
import Dashboard from './dashboard'

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/category" element={<Category />} />
      <Route path="/create-category" element={<Createcategory />} />
      <Route path="/question1" element={<Question />} />
      <Route path="/question2" element={<QuestionTwo />} />
      <Route path="/businesssize" element={<BusinessSize />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/expandteam" element={<ExpandTeam />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/gettingstarted" element={<GettingStarted />} />
      <Route path="/title" element={<Title />} />
      <Route path="/title14" element={<TitleFourteen />} />
      <Route path="/skills" element={<Skills />} /> 
      <Route path="/scope" element={<Scope />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/project-search" element={<ProjectSearch />} />
      <Route path="/project-detail" element={<ProjectDetail />} />
      <Route path="/freelancer-detail" element={<FreelancerDetail />} />
      <Route path="/job-portal" element={<JobPortal />} />
      <Route path="/post-description" element={<Description />} />
      <Route path="/job-description" element={<JobDescription />} />
      <Route path="/view-job" element={<ViewJob />} />
      <Route path="/hire-freelancer" element={<HireFreelancer />} />
      <Route path="/my-jobs" element={<MyJobs />} />
      <Route path="/all-contracts" element={<AllContracts />} />
      <Route path="/talent-discover" element={<TalentDiscover />} />
      <Route path="/talent-your-hires" element={<Talentyourhires />} />
      <Route path="/byo-talent" element={<Talentbyo />} />
      <Route path="/talent-recently-viewed" element={<Talentrecentview />} />
      <Route path="/talent-saved" element={<Talentsaved />} />
      <Route path="/search" element={<Search />} />
      <Route path="/setting-myinfo" element={<SettingInfo />} />
      <Route path="/setting-billing" element={<SettingBilling />} />
      <Route path="/setting-membership" element={<SettingMembership />} />
      <Route path="/setting-team" element={<SettingTeam />} />
      <Route path="/setting-notification" element={<SettingNotification />} />
      <Route path="/setting-connected-services" element={<SettingConnectedServices />} />
      <Route path="/setting-membership-permission" element={<SettingMembershipPerm />} />
      <Route path="/setting-password-security" element={<SettingPasswordSecurity />} />
      <Route path="/help-support" element={<HelpSupport />} />
      <Route path="/message" element={<Message />} />
      <Route path="/management-board" element={<ManagementBoard />} />
      <Route path="/transaction-history" element={<TransactionHistory />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Signup from "./Signup";
import Signin from "./Signin";
import Createcategory from "./create-category";
import Category from "./category";
import Question from "./question";
import QuestionTwo from "./questiontwo";
import BusinessSize from "./businesssize";
import Subscription from "./subscription";
import ExpandTeam from "./expandteam";
import Notification from "./notification";
import GettingStarted from "./gettingstarted";
import Title from "./title";
import TitleFourteen from "./titlefour";
import Skills from "./skills";
import Scope from "./scope";
import Budget from "./budget";
import ProjectSearch from "./freelancer/projectsearch";
import ProjectDetail from "./freelancer/projectdetail";
import FreelancerDetail from "./freelancer/freelancerdetail";
import JobPortal from "./freelancer/jobportal";
import Description from "./postdescription";
import JobDescription from "./jobdescription";
import ViewJob from "./viewJob";
import HireFreelancer from "./hirefreelancer";
import MyJobs from "./myjobs";
import AllContracts from "./allcontracts";
import TalentDiscover from "./talentdiscover";
import Talentyourhires from "./yourhires";
import Talentbyo from "./talentbyo";
import Talentrecentview from "./talentrecent";
import Talentsaved from "./talentsaved";
import Search from "./search";
import SettingInfo from "./settinginfo";
import SettingBilling from "./settingbilling";
import SettingMembership from "./settingmember";
import SettingTeam from "./settingteam";
import SettingNotification from "./settingnotification";
import SettingConnectedServices from "./settingservices";
import SettingMembershipPerm from "./settingmemberperm";
import SettingPasswordSecurity from "./settingpassword";
import HelpSupport from "./helpsupport";
import Message from "./message";
import ManagementBoard from "./managementb";
import TransactionHistory from "./transactionhistory";
import Dashboard from "./dashboard";

import DirectContract from "./freelancer/directcontract";
import FreelancerAllContracts from "./freelancer/allcontract.js";
import FreelancerQuestion1 from "./freelancer/question1";
import FreelancerQuestion2 from "./freelancer/question2";
import FreelancerMyContract from "./freelancer/mycontract";
import FreelancerActiveContract from "./freelancer/activecontract";
import FreelancerWorkDiary from "./freelancer/workdiary";
import FreelancerGoals from "./freelancer/goals";
import FreelancerTransaction from "./freelancer/transaction";
import FreelancerAddWorkDiary from "./freelancer/addworkdiary";
import FreelancerOverview from "./freelancer/overview";

import FreelancerProgress from "./freelancer/progress";
import FreelancerObjective from "./freelancer/objective";
import FreelancerReports from "./freelancer/myreports";
import FreelancerReportByClient from "./freelancer/report-byclient";
import FreelancerMilestone from "./freelancer/milestone-earning";
import FreelancerContactInfo from "./freelancer/setting/contactinfo";
import FreelancerBiling from "./freelancer/setting/billing";
import FreelanceGetPaid from "./freelancer/setting/getpaid";
import FreelanceMyTeams from "./freelancer/setting/myteam";

import FreelancePasswordSecurity from "./freelancer/setting/password";
import FreelanceNotification from "./freelancer/setting/notification";
import FreelanceIdentify from "./freelancer/setting/identify";
import FreelanceMyStats from "./freelancer/setting/my-stats";
import FreelanceBillingEarn from "./freelancer/billing-erning";
import FreelanceProposal from "./freelancer/sendproposal";
import FreelanceTimeTracker from './freelancer/time-tracker'

const root = ReactDOM.createRoot(document.getElementById("root"));
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
      <Route path="/job-description" element={<JobDescription />} />
      <Route path="/view-job" element={<ViewJob />} />
      <Route path="/view-job/:screen" element={<ViewJob />} />
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
      <Route
        path="/setting-connected-services"
        element={<SettingConnectedServices />}
      />
      <Route
        path="/setting-membership-permission"
        element={<SettingMembershipPerm />}
      />
      <Route
        path="/setting-password-security"
        element={<SettingPasswordSecurity />}
      />
      <Route path="/help-support" element={<HelpSupport />} />
      <Route path="/message" element={<Message />} />
      <Route path="/management-board" element={<ManagementBoard />} />
      <Route path="/transaction-history" element={<TransactionHistory />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/freelancer/project-detail" element={<ProjectDetail />} />
      <Route path="/freelancer/project-search" element={<ProjectSearch />} />
      <Route
        path="/freelancer/freelancer-detail"
        element={<FreelancerDetail />}
      />
      <Route path="/freelancer/job-portal" element={<JobPortal />} />
      <Route path="/post-description" element={<Description />} />
      <Route path="/freelancer/direct-contract" element={<DirectContract />} />
      <Route
        path="/freelancer/all-contracts"
        element={<FreelancerAllContracts />}
      />
      <Route path="/freelancer/question1" element={<FreelancerQuestion1 />} />
      <Route path="/freelancer/question2" element={<FreelancerQuestion2 />} />
      <Route
        path="/freelancer/my-contract"
        element={<FreelancerMyContract />}
      />
      <Route
        path="/freelancer/active-contract"
        element={<FreelancerActiveContract />}
      />
      <Route path="/freelancer/work-diary" element={<FreelancerWorkDiary />} />
      <Route
        path="/freelancer/add-work-diary"
        element={<FreelancerAddWorkDiary />}
      />
      <Route path="/freelancer/goals" element={<FreelancerGoals />} />
      <Route path="/freelancer/overview" element={<FreelancerOverview />} />
      <Route
        path="/freelancer/transaction-history"
        element={<FreelancerTransaction />}
      />

      <Route path="/freelancer/progress" element={<FreelancerProgress />} />
      <Route path="/freelancer/objective" element={<FreelancerObjective />} />
      <Route path="/freelancer/my-reports" element={<FreelancerReports />} />
      <Route
        path="/freelancer/report-byclient"
        element={<FreelancerReportByClient />}
      />
      <Route
        path="/freelancer/milestone-earning"
        element={<FreelancerMilestone />}
      />
      <Route
        path="/freelancer/contact-info"
        element={<FreelancerContactInfo />}
      />
      <Route
        path="/freelancer/billing-payment"
        element={<FreelancerBiling />}
      />
      <Route path="/freelancer/getpaid" element={<FreelanceGetPaid />} />
      <Route path="/freelancer/my-teams" element={<FreelanceMyTeams />} />

      <Route
        path="/freelancer/password-security"
        element={<FreelancePasswordSecurity />}
      />
      <Route
        path="/freelancer/notification"
        element={<FreelanceNotification />}
      />
      <Route
        path="/freelancer/identify-verification"
        element={<FreelanceIdentify />}
      />
      <Route path="/freelancer/my-stats" element={<FreelanceMyStats />} />
      <Route
        path="/freelancer/billing-earning"
        element={<FreelanceBillingEarn />}
      />
      <Route path="/freelancer/send-proposal" element={<FreelanceProposal />} />
      <Route path="/freelancer/time-tracker" element={<FreelanceTimeTracker />} />
    </Routes>
  </BrowserRouter>
);

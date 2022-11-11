import { Routes, Route } from "react-router-dom";

import App from "../../App";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";
import Createcategory from "../Pages/Create-Category";
import Category from "../Pages/Category";
import Question from "../Pages/Question";
import QuestionTwo from "../Pages/Question2";
import BusinessSize from "../Pages/BusinessSize";
import Subscription from "../Pages/Subscription";
import ExpandTeam from "../Pages/ExpandTeam";
import Notification from "../Pages/Notification";
import GettingStarted from "../Pages/GettingStarted";
import Title from "../Pages/Title";
import TitleFourteen from "../Pages/TitleFour";
import Skills from "../Pages/Skills";
import Scope from "../Pages/Scope";
import Budget from "../Pages/Budget";
import Description from "../Pages/PostDescription";
import JobDescription from "../Pages/JobDescription";
import ViewJob from "../Pages/ViewJob";
import HireFreelancer from "../Pages/HireFreelancer";
import MyJobs from "../Pages/MyJobs";
import AllContracts from "../Pages/Allcontracts";
import TalentDiscover from "../Pages/TalentDiscover";
import Talentyourhires from "../Pages/YourHire";
import Talentbyo from "../Pages/TalentBYO";
import Talentrecentview from "../Pages/TalentRecent";
import Talentsaved from "../Pages/TalentSaved";
import Search from "../Pages/Search";
import SettingInfo from "../Pages/Setting/SettingInfo";
import SettingBilling from "../Pages/Setting/settingbilling";
import SettingMembership from "../Pages/Setting/settingmember";
import SettingTeam from "../Pages/Setting/settingteam";
import SettingNotification from "../Pages/Setting/settingnotification";
import SettingConnectedServices from "../Pages/Setting/settingservices";
import SettingMembershipPerm from "../Pages/Setting/settingmemberperm";
import SettingPasswordSecurity from "../Pages/Setting/settingpassword";
import HelpSupport from "../Pages/HelpSupport";
import Message from "../Pages/Chat";
import ManagementBoard from "../Pages/ManagementBoard";
import TransactionHistory from "../Pages/TransactionHistory";
import Dashboard from "../Pages/Dashboard";
import AddCompanyAddress from "../Pages/AddCompanyAddress";
import EditCompanyAddress from "../Pages/EditCompanyAddress";

import EditDraft from "../../components/EditDraft";
import EditPosting from "../../components/EditPosting";
import MakePrivate from "../../components/MakePrivate";
import VerifySignUp from "../../components/VerifySignUp";
import VerifyForgotOTP from "../../components/VerifyForgotOTP";
import ForgotPass from "../../components/ForgotPass";
import ResetPass from "../../components/ResetPass";
import JobListScreen from "../Pages/AllPostings";
import DraftJobListScreen from "../Pages/AllDraftPostings";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify-signup" element={<VerifySignUp />} />
      <Route path="/verify-forgot-otp" element={<VerifyForgotOTP />} />
      <Route path="/forgot-password" element={<ForgotPass />} />
      <Route path="/reset-password" element={<ResetPass />} />
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
      <Route path="/view-job/private" element={<MakePrivate />} />
      <Route path="/view-job/:screen" element={<ViewJob />} />
      <Route path="/hire-freelancer" element={<HireFreelancer />} />
      <Route
        path="/hire-freelancer/addAddress"
        element={<AddCompanyAddress />}
      />
      <Route
        path="/hire-freelancer/edit-address"
        element={<EditCompanyAddress />}
      />
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
      <Route path="/dashboard/edit-posting" element={<EditPosting />} />
      <Route path="/dashboard/edit-draft" element={<EditDraft />} />
      <Route path="/post-description" element={<Description />} />
      <Route path="/all-job-list" element={<JobListScreen />} />
      <Route path="/all-draft-job-list" element={<DraftJobListScreen />} />
    </Routes>
  );
};

export default RouterConfig;

import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const Signup = lazy(() => import("./client/Pages/Signup"));
const Signin = lazy(() => import("./client/Pages/Signin"));
const VerifyForgotOTP = lazy(() => import("./components/VerifyForgotOTP"));
const ForgotPass = lazy(() => import("./components/ForgotPass"));
const ResetPass = lazy(() => import("./components/ResetPass"));
const VerifySignUp = lazy(() => import("./components/VerifySignUp"));

//  ================================ CLIENT ROUTES ==================================
const Createcategory = lazy(() => import("./client/Pages/Create-Category"));
const Category = lazy(() => import("./client/Pages/Category"));
const Question = lazy(() => import("./client/Pages/Question"));
const QuestionTwo = lazy(() => import("./client/Pages/Question2"));
const BusinessSize = lazy(() => import("./client/Pages/BusinessSize"));
const Subscription = lazy(() => import("./client/Pages/Subscription"));
const ExpandTeam = lazy(() => import("./client/Pages/ExpandTeam"));
const Notification = lazy(() => import("./client/Pages/Notification"));
const GettingStarted = lazy(() => import("./client/Pages/GettingStarted"));
const Title = lazy(() => import("./client/Pages/Title"));
const TitleFourteen = lazy(() => import("./client/Pages/TitleFour"));
const Skills = lazy(() => import("./client/Pages/Skills"));
const Scope = lazy(() => import("./client/Pages/Scope"));
const Budget = lazy(() => import("./client/Pages/Budget"));
const Description = lazy(() => import("./client/Pages/PostDescription"));
const JobDescription = lazy(() => import("./client/Pages/JobDescription"));
const ViewJob = lazy(() => import("./client/Pages/ViewJob"));
const HireFreelancer = lazy(() => import("./client/Pages/HireFreelancer"));
const MyJobs = lazy(() => import("./client/Pages/MyJobs"));
const AllContracts = lazy(() => import("./client/Pages/Allcontracts"));
const TalentDiscover = lazy(() => import("./client/Pages/TalentDiscover"));
const Talentyourhires = lazy(() => import("./client/Pages/YourHire"));
const Talentbyo = lazy(() => import("./client/Pages/TalentBYO"));
const Talentrecentview = lazy(() => import("./client/Pages/TalentRecent"));
const Talentsaved = lazy(() => import("./client/Pages/TalentSaved"));
const Search = lazy(() => import("./client/Pages/Search"));
const SettingInfo = lazy(() => import("./client/Pages/Setting/SettingInfo"));
const SettingBilling = lazy(() =>
  import("./client/Pages/Setting/settingbilling")
);
const SettingMembership = lazy(() =>
  import("./client/Pages/Setting/settingmember")
);
const SettingTeam = lazy(() => import("./client/Pages/Setting/settingteam"));
const SettingNotification = lazy(() =>
  import("./client/Pages/Setting/settingnotification")
);
const SettingConnectedServices = lazy(() =>
  import("./client/Pages/Setting/settingservices")
);
const SettingMembershipPerm = lazy(() =>
  import("./client/Pages/Setting/settingmemberperm")
);
const SettingPasswordSecurity = lazy(() =>
  import("./client/Pages/Setting/settingpassword")
);
const HelpSupport = lazy(() => import("./client/Pages/HelpSupport"));
const Message = lazy(() => import("./client/Pages/Chat"));
const ManagementBoard = lazy(() => import("./client/Pages/ManagementBoard"));
const TransactionHistory = lazy(() =>
  import("./client/Pages/TransactionHistory")
);
const Dashboard = lazy(() => import("./client/Pages/Dashboard"));
const AddCompanyAddress = lazy(() =>
  import("./client/Pages/AddCompanyAddress")
);
const EditCompanyAddress = lazy(() =>
  import("./client/Pages/EditCompanyAddress")
);
const JobListScreen = lazy(() => import("./client/Pages/AllPostings"));
const DraftJobListScreen = lazy(() =>
  import("./client/Pages/AllDraftPostings")
);
const EditDraft = lazy(() => import("./components/EditDraft"));
const EditPosting = lazy(() => import("./components/EditPosting"));
const MakePrivate = lazy(() => import("./components/MakePrivate"));

//  ================================ FREELANCER ROUTES ==================================
const ProjectSearch = lazy(() => import("./freelancer/Pages/ProjectSearch"));
const ProjectDetail = lazy(() => import("./freelancer/Pages/ProjectDetail"));
const FreelancerDetail = lazy(() =>
  import("./freelancer/Pages/FreelancerDetail")
);
const JobPortal = lazy(() => import("./freelancer/Pages/JobPortal"));
const DirectContract = lazy(() => import("./freelancer/Pages/DirectContract"));
const FreelancerAllContracts = lazy(() =>
  import("./freelancer/Pages/AllContract")
);
const FreelancerQuestion1 = lazy(() => import("./freelancer/Pages/Question"));
const FreelancerQuestion2 = lazy(() => import("./freelancer/Pages/Question1"));
const FreelancerMyContract = lazy(() =>
  import("./freelancer/Pages/MyContract")
);
const FreelancerActiveContract = lazy(() =>
  import("./freelancer/Pages/ActiveContract")
);
const FreelancerWorkDiary = lazy(() => import("./freelancer/Pages/WorkDiary"));
const FreelancerGoals = lazy(() => import("./freelancer/Pages/Goals"));
const FreelancerTransaction = lazy(() =>
  import("./freelancer/Pages/Transaction")
);
const FreelancerAddWorkDiary = lazy(() =>
  import("./freelancer/Pages/AddWorkDiary")
);
const FreelancerOverview = lazy(() => import("./freelancer/Pages/Overview"));
const FreelancerProgress = lazy(() => import("./freelancer/Pages/Progress"));
const FreelancerObjective = lazy(() => import("./freelancer/Pages/Objective"));
const FreelancerReports = lazy(() => import("./freelancer/Pages/MyReports"));
const FreelancerReportByClient = lazy(() =>
  import("./freelancer/Pages/ReportByClient")
);
const FreelancerMilestone = lazy(() =>
  import("./freelancer/Pages/MileStone-Earning")
);
const FreelancerContactInfo = lazy(() =>
  import("./freelancer/Pages/Setting/contactinfo")
);
const FreelancerBiling = lazy(() =>
  import("./freelancer/Pages/Setting/billing")
);
const FreelanceGetPaid = lazy(() =>
  import("./freelancer/Pages/Setting/getpaid")
);
const FreelanceMyTeams = lazy(() =>
  import("./freelancer/Pages/Setting/myteam")
);
const FreelancePasswordSecurity = lazy(() =>
  import("./freelancer/Pages/Setting/password")
);
const FreelanceNotification = lazy(() =>
  import("./freelancer/Pages/Setting/notification")
);
const FreelanceIdentify = lazy(() =>
  import("./freelancer/Pages/Setting/identify")
);
const FreelanceMyStats = lazy(() =>
  import("./freelancer/Pages/Setting/my-stats")
);
const FreelanceBillingEarn = lazy(() =>
  import("./freelancer/Pages/BillingEarning")
);
const FreelanceProposal = lazy(() => import("./freelancer/Pages/SendProposal"));
const FreelanceTimeTracker = lazy(() =>
  import("./freelancer/Pages/TimeTracker")
);
const FreelancerProfile = lazy(() => import("./freelancer/Pages/Profile"));
const FreelancerChat = lazy(() => import("./freelancer/Pages/Chat"));
const FreelancerDashboard = lazy(() => import("./freelancer/Pages/Dashboard"));
const FreelancerSubscription = lazy(() =>
  import("./freelancer/Pages/Subscription")
);
const UserReports = lazy(() => import("./freelancer/Pages/UserReports"));
const Testimonial = lazy(() => import("./components/Testimonial"));
const AgencyDashboard = lazy(() => import("./Agency/Pages/Dashboard"));
const SeeTimesheet = lazy(() => import("./freelancer/Pages/SeeTimesheet"));
const SeeMilestone = lazy(() => import("./freelancer/Pages/MileStone-Earning"));

// import Message from "./freelancer/Pages/Message";

const LoggedOutRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/signin" element={<Signin />} />
      <Route exact path="/verify-forgot-otp" element={<VerifyForgotOTP />} />
      <Route exact path="/forgot-password" element={<ForgotPass />} />
      <Route exact path="/reset-password" element={<ResetPass />} />
      <Route exact path="/verify-signup" element={<VerifySignUp />} />
    </Routes>
  );
};

const LoggedInRoutes = () => {
  return (
    <Routes>
      <Route exact path="/category" element={<Category />} />
      <Route exact path="/create-category" element={<Createcategory />} />
      <Route exact path="/question1" element={<Question />} />
      <Route exact path="/question2" element={<QuestionTwo />} />
      <Route exact path="/businesssize" element={<BusinessSize />} />
      <Route exact path="/subscription" element={<Subscription />} />
      <Route exact path="/expandteam" element={<ExpandTeam />} />
      <Route exact path="/notification" element={<Notification />} />
      <Route exact path="/gettingstarted" element={<GettingStarted />} />
      <Route exact path="/title" element={<Title />} />
      <Route exact path="/title14" element={<TitleFourteen />} />
      <Route exact path="/skills" element={<Skills />} />
      <Route exact path="/scope" element={<Scope />} />
      <Route exact path="/budget" element={<Budget />} />
      <Route exact path="/job-description" element={<JobDescription />} />
      <Route exact path="/view-job" element={<ViewJob />} />
      <Route exact path="/view-job/private" element={<MakePrivate />} />
      <Route exact path="/view-job/:screen" element={<ViewJob />} />
      <Route exact path="/hire-freelancer" element={<HireFreelancer />} />
      <Route
        path="/hire-freelancer/addAddress"
        element={<AddCompanyAddress />}
      />
      <Route
        path="/hire-freelancer/edit-address"
        element={<EditCompanyAddress />}
      />
      <Route exact path="/my-jobs" element={<MyJobs />} />
      <Route exact path="/all-contracts" element={<AllContracts />} />
      <Route exact path="/talent-discover" element={<TalentDiscover />} />
      <Route exact path="/talent-your-hires" element={<Talentyourhires />} />
      <Route exact path="/byo-talent" element={<Talentbyo />} />
      <Route
        exact
        path="/talent-recently-viewed"
        element={<Talentrecentview />}
      />
      <Route exact path="/talent-saved" element={<Talentsaved />} />
      <Route exact path="/search" element={<Search />} />
      <Route exact path="/setting-myinfo" element={<SettingInfo />} />
      <Route exact path="/setting-billing" element={<SettingBilling />} />
      <Route exact path="/setting-membership" element={<SettingMembership />} />
      <Route exact path="/setting-team" element={<SettingTeam />} />
      <Route
        exact
        path="/setting-notification"
        element={<SettingNotification />}
      />
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
      <Route exact path="/help-support" element={<HelpSupport />} />
      <Route exact path="/message" element={<Message />} />
      <Route exact path="/management-board" element={<ManagementBoard />} />
      <Route
        exact
        path="/transaction-history"
        element={<TransactionHistory />}
      />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/dashboard/edit-posting" element={<EditPosting />} />
      <Route exact path="/dashboard/edit-draft" element={<EditDraft />} />
      <Route exact path="/post-description" element={<Description />} />
      <Route exact path="/all-job-list" element={<JobListScreen />} />
      <Route
        exact
        path="/all-draft-job-list"
        element={<DraftJobListScreen />}
      />

      {/* ================================ FREELANVER ROUTES ================================== */}
      <Route
        path="/freelancer/project-detail/:id"
        element={<ProjectDetail />}
      />
      <Route
        exact
        path="/freelancer/project-search"
        element={<ProjectSearch />}
      />
      <Route exact path="/verify-forgot-otp" element={<VerifyForgotOTP />} />
      <Route exact path="/forgot-password" element={<ForgotPass />} />
      <Route exact path="/reset-password" element={<ResetPass />} />
      <Route exact path="/submit-testimonial/:id" element={<Testimonial />} />
      <Route exact path="/agency/dashboard" element={<AgencyDashboard />} />
      <Route
        path="/freelancer/project-search/:saved"
        element={<ProjectSearch />}
      />
      <Route
        path="/freelancer/freelancer-detail"
        element={<FreelancerDetail />}
      />
      <Route exact path="/freelancer/job-portal" element={<JobPortal />} />
      <Route
        exact
        path="/freelancer/direct-contract"
        element={<DirectContract />}
      />
      <Route
        path="/freelancer/all-contracts"
        element={<FreelancerAllContracts />}
      />
      <Route
        exact
        path="/freelancer/question1"
        element={<FreelancerQuestion1 />}
      />
      <Route
        exact
        path="/freelancer/question2"
        element={<FreelancerQuestion2 />}
      />
      <Route
        path="/freelancer/my-contract"
        element={<FreelancerMyContract />}
      />
      <Route
        path="/freelancer/active-contract"
        element={<FreelancerActiveContract />}
      />
      <Route
        exact
        path="/freelancer/work-diary"
        element={<FreelancerWorkDiary />}
      />
      <Route
        path="/freelancer/add-work-diary"
        element={<FreelancerAddWorkDiary />}
      />
      <Route exact path="/freelancer/goals" element={<FreelancerGoals />} />
      <Route
        exact
        path="/freelancer/overview"
        element={<FreelancerOverview />}
      />
      <Route
        path="/freelancer/transaction-history"
        element={<FreelancerTransaction />}
      />

      <Route
        exact
        path="/freelancer/progress"
        element={<FreelancerProgress />}
      />
      <Route
        exact
        path="/freelancer/objective"
        element={<FreelancerObjective />}
      />
      <Route exact path="/freelancer/my-reports" element={<UserReports />} />
      <Route
        path="/freelancer/report-byclient"
        element={<FreelancerReportByClient />}
      />
      <Route
        exact
        path="/freelancer/weekly-report"
        element={<FreelancerReports />}
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
      <Route exact path="/freelancer/getpaid" element={<FreelanceGetPaid />} />
      <Route exact path="/freelancer/my-teams" element={<FreelanceMyTeams />} />

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
      <Route exact path="/freelancer/my-stats" element={<FreelanceMyStats />} />
      <Route
        path="/freelancer/billing-earning"
        element={<FreelanceBillingEarn />}
      />
      <Route
        path="/freelancer/send-proposal/:id"
        element={<FreelanceProposal />}
      />
      <Route
        path="/freelancer/time-tracker"
        element={<FreelanceTimeTracker />}
      />
      <Route exact path="/freelancer/chat" element={<FreelancerChat />} />
      <Route exact path="/freelancer/profile" element={<FreelancerProfile />} />
      <Route
        exact
        path="/freelancer/dashboard"
        element={<FreelancerDashboard />}
      />
      <Route
        path="/freelancer/subscription"
        element={<FreelancerSubscription />}
      />
      <Route exact path="/freelancer/message" element={<Message />} />
      <Route
        exact
        path="/freelancer/see-milestone"
        element={<SeeMilestone />}
      />
      <Route
        exact
        path="/freelancer/see-timesheet"
        element={<SeeTimesheet />}
      />
    </Routes>
  );
};

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoggedInRoutes />
      <LoggedOutRoutes />
    </Suspense>
  );
}

export default App;

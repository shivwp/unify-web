import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./PrivateRoute";
const Createcategory = lazy(() => import("../client/Pages/Create-Category"));
const Category = lazy(() => import("../client/Pages/Category"));
const Question = lazy(() => import("../client/Pages/Question"));
const QuestionTwo = lazy(() => import("../client/Pages/Question2"));
const BusinessSize = lazy(() => import("../client/Pages/BusinessSize"));
const Subscription = lazy(() => import("../client/Pages/Subscription"));
const ExpandTeam = lazy(() => import("../client/Pages/ExpandTeam"));
const Notification = lazy(() => import("../client/Pages/Notification"));
const Description = lazy(() => import("../client/Pages/PostDescription"));
const JobDescription = lazy(() => import("../client/Pages/JobDescription"));
const ViewJob = lazy(() => import("../client/Pages/ViewJob"));
const HireFreelancer = lazy(() => import("../client/Pages/HireFreelancer"));
const MyJobs = lazy(() => import("../client/Pages/MyJobs"));
const AllContracts = lazy(() => import("../client/Pages/Allcontracts"));
const TalentDiscover = lazy(() => import("../client/Pages/TalentDiscover"));
const Talentyourhires = lazy(() => import("../client/Pages/YourHire"));
const Talentbyo = lazy(() => import("../client/Pages/TalentBYO"));
const Talentrecentview = lazy(() => import("../client/Pages/TalentRecent"));
const Talentsaved = lazy(() => import("../client/Pages/TalentSaved"));
const Search = lazy(() => import("../client/Pages/Search"));
const SettingInfo = lazy(() => import("../client/Pages/Setting/SettingInfo"));
const SettingBilling = lazy(() =>
  import("../client/Pages/Setting/settingbilling")
);
const SettingMembership = lazy(() =>
  import("../client/Pages/Setting/settingmember")
);
const SettingTeam = lazy(() => import("../client/Pages/Setting/settingteam"));
const SettingNotification = lazy(() =>
  import("../client/Pages/Setting/settingnotification")
);
const SettingConnectedServices = lazy(() =>
  import("../client/Pages/Setting/settingservices")
);
const SettingMembershipPerm = lazy(() =>
  import("../client/Pages/Setting/settingmemberperm")
);
const SettingPasswordSecurity = lazy(() =>
  import("../client/Pages/Setting/settingpassword")
);
const HelpSupport = lazy(() => import("../client/Pages/HelpSupport"));
const Message = lazy(() => import("../client/Pages/Chat"));
const ManagementBoard = lazy(() => import("../client/Pages/ManagementBoard"));
const TransactionHistory = lazy(() =>
  import("../client/Pages/TransactionHistory")
);
const Dashboard = lazy(() => import("../client/Pages/Dashboard"));
const AddCompanyAddress = lazy(() =>
  import("../client/Pages/AddCompanyAddress")
);
const EditCompanyAddress = lazy(() =>
  import("../client/Pages/EditCompanyAddress")
);
const JobListScreen = lazy(() => import("../client/Pages/AllPostings"));
const DraftJobListScreen = lazy(() =>
  import("../client/Pages/AllDraftPostings")
);
const EditDraft = lazy(() => import("../components/EditDraft"));
const EditPosting = lazy(() => import("../components/EditPosting"));
const MakePrivate = lazy(() => import("../components/MakePrivate"));
const PostYourJobScreen = lazy(() => import("../client/Pages/postYourJobNow"));

const ClientRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/businesssize" element={<BusinessSize />} />
        <Route path="/question1" element={<Question />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/post-your-job" element={<PostYourJobScreen />} />
        <Route path="/job-description" element={<JobDescription />} />
        <Route path="/category" element={<Category />} />
        <Route path="/create-category" element={<Createcategory />} />
        <Route path="/question2" element={<QuestionTwo />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/expandteam" element={<ExpandTeam />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/view-job/:jobId" element={<ViewJob />} />
        <Route path="/view-job/private" element={<MakePrivate />} />
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

        <Route
          path="/dashboard/edit-posting/:editId"
          element={<EditPosting />}
        />
        <Route path="/dashboard/edit-draft" element={<EditDraft />} />
        <Route path="/post-description" element={<Description />} />
        <Route path="/all-job-list" element={<JobListScreen />} />
        <Route path="/all-draft-job-list" element={<DraftJobListScreen />} />
      </Route>
    </Routes>
  );
};

export default ClientRoutes;
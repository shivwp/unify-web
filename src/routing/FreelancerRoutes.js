import React from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./PrivateRoute";
const ProjectSearch = lazy(() => import("../freelancer/Pages/ProjectSearch"));
const ProjectDetail = lazy(() => import("../freelancer/Pages/ProjectDetail"));
const FreelancerDetail = lazy(() =>
  import("../freelancer/Pages/FreelancerDetail")
);
const JobPortal = lazy(() => import("../freelancer/Pages/JobPortal"));
const DirectContract = lazy(() => import("../freelancer/Pages/DirectContract"));
const FreelancerAllContracts = lazy(() =>
  import("../freelancer/Pages/AllContract")
);
const FreelancerMyContract = lazy(() =>
  import("../freelancer/Pages/MyContract")
);
const AllProposals = lazy(() => import("../freelancer/Pages/AllProposals"));
const FreelancerWorkDiary = lazy(() => import("../freelancer/Pages/WorkDiary"));
const FreelancerGoals = lazy(() => import("../freelancer/Pages/Goals"));
const FreelancerTransaction = lazy(() =>
  import("../freelancer/Pages/Transaction")
);
const FreelancerAddWorkDiary = lazy(() =>
  import("../freelancer/Pages/AddWorkDiary")
);
const FreelancerOverview = lazy(() => import("../freelancer/Pages/Overview"));
const FreelancerProgress = lazy(() => import("../freelancer/Pages/Progress"));
const FreelancerObjective = lazy(() => import("../freelancer/Pages/Objective"));
const FreelancerReports = lazy(() => import("../freelancer/Pages/MyReports"));
const FreelancerReportByClient = lazy(() =>
  import("../freelancer/Pages/ReportByClient")
);
const FreelancerMilestone = lazy(() =>
  import("../freelancer/Pages/MileStone-Earning")
);
const FreelancerContactInfo = lazy(() =>
  import("../freelancer/Pages/Setting/contactinfo")
);
const FreelancerBiling = lazy(() =>
  import("../freelancer/Pages/Setting/billing")
);
const FreelanceGetPaid = lazy(() =>
  import("../freelancer/Pages/Setting/getpaid")
);
const FreelanceMyTeams = lazy(() =>
  import("../freelancer/Pages/Setting/myteam")
);
const FreelancePasswordSecurity = lazy(() =>
  import("../freelancer/Pages/Setting/password")
);
const FreelanceNotification = lazy(() =>
  import("../freelancer/Pages/Setting/notification")
);
const FreelanceIdentify = lazy(() =>
  import("../freelancer/Pages/Setting/identify")
);
const FreelanceMyStats = lazy(() =>
  import("../freelancer/Pages/Setting/my-stats")
);
const FreelanceBillingEarn = lazy(() =>
  import("../freelancer/Pages/BillingEarning")
);
const FreelanceProposal = lazy(() =>
  import("../freelancer/Pages/SendProposal")
);
const FreelanceTimeTracker = lazy(() =>
  import("../freelancer/Pages/TimeTracker")
);
const FreelancerProfile = lazy(() => import("../freelancer/Pages/Profile"));
const FreelancerChat = lazy(() => import("../freelancer/Pages/Chat"));
const FreelancerDashboard = lazy(() => import("../freelancer/Pages/Dashboard"));
const UserReports = lazy(() => import("../freelancer/Pages/UserReports"));
const AgencyDashboard = lazy(() => import("../Agency/Pages/Dashboard"));
const SeeTimesheet = lazy(() => import("../freelancer/Pages/SeeTimesheet"));
const SeeMilestone = lazy(() =>
  import("../freelancer/Pages/MileStone-Earning")
);
const SingleInvitation = lazy(() =>
  import("../freelancer/Pages/SingleInvitation")
);
const ProfileInto = lazy(() => import("../freelancer/Pages/ProfileIntro"));
const FreelancerSubscription = lazy(() =>
  import("../freelancer/Pages/Subscription")
);
const SingleActiveProposal = lazy(() =>
  import("../freelancer/Pages/SingleActiveProposal")
);
const SingleSubmitedProposal = lazy(() =>
  import("../freelancer/Pages/SingleSubmitedProposal")
);
const SingleOfferDetail = lazy(() =>
  import("../freelancer/Pages/SingleOfferDetail")
);

const SendMessage = lazy(() => import("../freelancer/Pages/SendMessage"));

const FreelancerRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/freelancer/project-detail/:id"
          element={<ProjectDetail />}
        />
        <Route path="/freelancer/project-search" element={<ProjectSearch />} />
        <Route path="/agency/dashboard" element={<AgencyDashboard />} />
        <Route
          path="/freelancer/project-search/:saved"
          element={<ProjectSearch />}
        />
        <Route
          path="/freelancer/subscription"
          element={<FreelancerSubscription />}
        />
        <Route
          path="/freelancer/freelancer-detail"
          element={<FreelancerDetail />}
        />
        <Route path="/freelancer/job-portal" element={<JobPortal />} />
        <Route
          path="/freelancer/direct-contract"
          element={<DirectContract />}
        />
        <Route
          path="/freelancer/all-contracts"
          element={<FreelancerAllContracts />}
        />
        <Route
          path="/freelancer/my-contract"
          element={<FreelancerMyContract />}
        />
        <Route path="/freelancer/AllProposals" element={<AllProposals />} />
        <Route
          path="/freelancer/work-diary"
          element={<FreelancerWorkDiary />}
        />
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
        <Route path="/freelancer/my-reports" element={<UserReports />} />
        <Route
          path="/freelancer/report-byclient"
          element={<FreelancerReportByClient />}
        />
        <Route
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
        <Route
          path="/freelancer/send-proposal/:id"
          element={<FreelanceProposal />}
        />
        <Route
          path="/freelancer/time-tracker"
          element={<FreelanceTimeTracker />}
        />
        <Route path="/freelancer/chat" element={<FreelancerChat />} />
        <Route path="/freelancer/profile" element={<FreelancerProfile />} />
        <Route path="/freelancer/dashboard" element={<FreelancerDashboard />} />
        <Route
          exact
          path="/freelancer/single-invitation/:id"
          element={<SingleInvitation />}
        />
        <Route
          exact
          path="/freelancer/single-offer-detail/:id"
          element={<SingleOfferDetail />}
        />
        <Route path="/freelancer/see-milestone" element={<SeeMilestone />} />
        <Route path="/freelancer/see-timesheet" element={<SeeTimesheet />} />
        <Route path="/freelancer/send-message" element={<SendMessage />} />
        <Route
          path="/freelancer/profile-intro/:tabName"
          element={<ProfileInto />}
        />
        <Route
          path="/freelancer/single-active-proposal/:id"
          element={<SingleActiveProposal />}
        />
        <Route
          path="/freelancer/single-submited-proposal/:id"
          element={<SingleSubmitedProposal />}
        />
      </Route>
    </Routes>
  );
};

export default FreelancerRoutes;

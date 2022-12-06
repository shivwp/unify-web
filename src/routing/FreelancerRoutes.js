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
const FreelancerQuestion1 = lazy(() => import("../freelancer/Pages/Question"));
const FreelancerQuestion2 = lazy(() => import("../freelancer/Pages/Question1"));
const FreelancerMyContract = lazy(() =>
  import("../freelancer/Pages/MyContract")
);
const FreelancerActiveContract = lazy(() =>
  import("../freelancer/Pages/ActiveContract")
);
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
const FreelancerMessage = lazy(() =>
  import("../freelancer/Pages/FreelancerMessage")
);
const ProfileInto = lazy(() => import("../freelancer/Pages/ProfileIntro"));
const FreelancerSubscription = lazy(() =>
  import("../freelancer/Pages/Subscription")
);
const SingleOfferDetail = lazy(() =>
  import("../freelancer/Pages/SingleOfferDetail")
);

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
          path="/freelancer/message"
          element={<FreelancerMessage />}
        />
        <Route
          exact
          path="/freelancer/single-offer-detail/:id"
          element={<SingleOfferDetail />}
        />
        <Route path="/freelancer/see-milestone" element={<SeeMilestone />} />
        <Route path="/freelancer/see-timesheet" element={<SeeTimesheet />} />
        <Route
          path="/freelancer/profile-intro/:tabName"
          element={<ProfileInto />}
        />
      </Route>
      
    </Routes>
  );
};

export default FreelancerRoutes;

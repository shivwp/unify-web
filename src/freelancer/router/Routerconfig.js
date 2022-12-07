import { Routes, Route } from "react-router-dom";

import ProjectSearch from "../Pages/ProjectSearch";
import ProjectDetail from "../Pages/ProjectDetail";
import FreelancerDetail from "../Pages/FreelancerDetail";
import JobPortal from "../Pages/JobPortal";
import DirectContract from "../Pages/DirectContract";
import FreelancerAllContracts from "../Pages/AllContract";
import FreelancerQuestion1 from "../Pages/Question";
import FreelancerQuestion2 from "../Pages/Question1";
import FreelancerMyContract from "../Pages/MyContract";
import FreelancerActiveContract from "../Pages/ActiveContract";
import FreelancerWorkDiary from "../Pages/WorkDiary";
import FreelancerGoals from "../Pages/Goals";
import FreelancerTransaction from "../Pages/Transaction";
import FreelancerAddWorkDiary from "../Pages/AddWorkDiary";
import FreelancerOverview from "../Pages/Overview";
import FreelancerProgress from "../Pages/Progress";
import FreelancerObjective from "../Pages/Objective";
import FreelancerReports from "../Pages/MyReports";
import FreelancerReportByClient from "../Pages/ReportByClient";
import FreelancerMilestone from "../Pages/MileStone-Earning";
import FreelancerContactInfo from "../Pages/Setting/contactinfo";
import FreelancerBiling from "../Pages/Setting/billing";
import FreelanceGetPaid from "../Pages/Setting/getpaid";
import FreelanceMyTeams from "../Pages/Setting/myteam";
import Message from "../Pages/FreelancerMessage";
import FreelancePasswordSecurity from "../Pages/Setting/password";
import FreelanceNotification from "../Pages/Setting/notification";
import FreelanceIdentify from "../Pages/Setting/identify";
import FreelanceMyStats from "../Pages/Setting/my-stats";
import FreelanceBillingEarn from "../Pages/BillingEarning";
import FreelanceProposal from "../Pages/SendProposal";
import FreelanceTimeTracker from "../Pages/TimeTracker";
import FreelancerProfile from "../Pages/Profile";
import FreelancerChat from "../Pages/Chat";
import FreelancerDashboard from "../Pages/Dashboard";
import FreelancerSubscription from "../Pages/Subscription";
import UserReports from "../Pages/UserReports";
import VerifyForgotOTP from "../../components/VerifyForgotOTP";
import ForgotPass from "../../components/ForgotPass";
import ResetPass from "../../components/ResetPass";
import Testimonial from "../../components/Testimonial";
import AgencyDashboard from "../../Agency/Pages/Dashboard";
import SeeTimesheet from "../Pages/SeeTimesheet";

const RouterConfig = () => {
  return (
    <Routes>
      <Route
        path="/freelancer/project-detail/:id"
        element={<ProjectDetail />}
      />
      <Route path="/freelancer/project-search" element={<ProjectSearch />} />
      <Route path="/verify-forgot-otp" element={<VerifyForgotOTP />} />
      <Route path="/forgot-password" element={<ForgotPass />} />
      <Route path="/reset-password" element={<ResetPass />} />
      <Route path="/submit-testimonial/:id" element={<Testimonial />} />
      <Route path="/agency/dashboard" element={<AgencyDashboard />} />
      <Route
        path="/freelancer/project-search/:saved"
        element={<ProjectSearch />}
      />
      <Route
        path="/freelancer/freelancer-detail"
        element={<FreelancerDetail />}
      />
      <Route path="/freelancer/job-portal" element={<JobPortal />} />
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
        path="/freelancer/AllProposals"
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
      <Route path="/freelancer/my-reports" element={<UserReports />} />
      <Route
        path="/freelancer/report-byclient"
        element={<FreelancerReportByClient />}
      />
      <Route path="/freelancer/weekly-report" element={<FreelancerReports />} />
      <Route
        path="/freelancer/milestone-earning"
        element={<FreelancerMilestone />}
      />
      <Route path="/freelancer/see-timesheet" element={<SeeTimesheet />} />
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
        path="/freelancer/subscription"
        element={<FreelancerSubscription />}
      />
      <Route path="/freelancer/message" element={<Message />} />
    </Routes>
  );
};
export default RouterConfig;

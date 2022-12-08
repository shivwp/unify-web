import Container from "react-bootstrap/Container";
import ViewJob from "../../../../components/ViewJobs/jobpost";
import InviteFreelancer from "../../../../components/ViewJobs/invite";
import ReviewProposal from "../../../../components/ReviewProposal/all";
import Hire from "../../../../components/Hire/all";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singleJobPostDetails } from "../../../../redux/actions/jobActions";
import { makePrivatePublicJob } from "../../../../redux/actions/freelancerAction";

const ViewScreen = () => {
  let { jobId } = useParams();
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState("ViewJob");
  let singleJobDetails = useSelector((state) => state.job.singleJobDetails);
  const privatePublicJob = useSelector(
    (state) => state.freelancer.privatePublicJob
  );

  useEffect(() => {
    const data = {
      job_id: jobId,
    };
    dispatch(singleJobPostDetails(data));
  }, [privatePublicJob]);

  const [privateAcc, setPrivateAcc] = useState(false);

  const handleMakePublicPrivate = (type) => {
    const data = {
      job_id: jobId,
      type: type,
    };
    dispatch(makePrivatePublicJob(data));
  };

  return (
    <Container>
      <div className="view_job_box">
        <div className="d-flex justify-content-between">
          <div className="vj_hea">
            <h1>{singleJobDetails?.name}</h1>
          </div>
          <div>
            <div className="vj_r_link">
              <Link to="#0">Reach 6x more Top Rated Talent</Link>
            </div>
            <div className="vj_r_sm_t">Upgrade this job</div>
          </div>
        </div>
        <div className="overflow-scroll">
          <div className="d-flex flex-wrap tab_m_nodea mt-4 tab_scroll_cont">
            <button
              className={`tab_btn_vs ${
                currentTab === "ViewJob" ? "active_bvs" : ""
              }`}
              onClick={() => setCurrentTab("ViewJob")}
            >
              View Job Post
            </button>
            <button
              className={`tab_btn_vs ${
                currentTab === "invite" ? "active_bvs" : ""
              }`}
              onClick={() => setCurrentTab("invite")}
            >
              Invite freelancers
            </button>
            <button
              className={`tab_btn_vs ${
                currentTab === "review" ? "active_bvs" : ""
              }`}
              onClick={() => setCurrentTab("review")}
            >
              Review proposals
            </button>
            <button
              className={`tab_btn_vs ${
                currentTab === "hire" ? "active_bvs" : ""
              }`}
              onClick={() => setCurrentTab("hire")}
            >
              Hire
            </button>
          </div>
        </div>
        {currentTab === "ViewJob" && (
          <ViewJob
            singleJobDetails={singleJobDetails}
            jobId={jobId}
            handleMakePublicPrivate={handleMakePublicPrivate}
          />
        )}
        {currentTab === "invite" && <InviteFreelancer jobId={jobId} />}
        {currentTab === "review" && <ReviewProposal jobId={jobId} />}
        {currentTab === "hire" && <Hire />}
      </div>
    </Container>
  );
};
export default ViewScreen;

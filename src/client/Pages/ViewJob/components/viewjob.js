import Container from "react-bootstrap/Container";
import ViewJob from "../../../../components/ViewJobs/jobpost";
import InviteFreelancer from "../../../../components/ViewJobs/invite";
import ReviewProposal from "../../../../components/ReviewProposal/all";
import Hire from "../../../../components/Hire/all";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singleJobPostDetails } from "../../../../redux/actions/jobActions";
import { makePrivatePublicJob } from "../../../../redux/actions/freelancerAction";
import LoadingSpinner from "../../../../components/LoadingSpinner";
const ViewScreen = () => {
  let { jobId, tabs } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [currentTab, setCurrentTab] = useState("job-details");
  let singleJobDetails = useSelector((state) => state.job.singleJobDetails);

  const privatePublicJob = useSelector(
    (state) => state.freelancer.privatePublicJob
  );

  useEffect(() => {
    if (tabs) {
      setCurrentTab(tabs);
    }
  }, [tabs]);

  useEffect(() => {
    const data = {
      job_id: jobId,
    };
    setLoading(true);
    dispatch(singleJobPostDetails(data, setLoading));
  }, [privatePublicJob]);

  const handleMakePublicPrivate = (type) => {
    const data = {
      job_id: jobId,
      type: type,
    };
    setLoading(true);
    dispatch(makePrivatePublicJob(data, setLoading));
  };

  return (
    <>
      <Container>
        <div className="view_job_box">
          <div className="d-flex justify-content-between">
            <div className="vj_hea">
              <h1>{singleJobDetails?.name}</h1>
            </div>
            {/* <div>
            <div className="vj_r_link">
              <Link to="#0">Reach 6x more Top Rated Talent</Link>
            </div>
            <div className="vj_r_sm_t">Upgrade this job</div>
          </div> */}
          </div>
          <div className="overflow-scroll">
            <div className="d-flex flex-wrap tab_m_nodea mt-4 tab_scroll_cont">
              <button
                className={`tab_btn_vs ${
                  currentTab === "job-details" ? "active_bvs" : ""
                }`}
                onClick={() => {
                  setCurrentTab("job-details");
                  navigate(`/view-job/${jobId}/job-details`);
                }}
              >
                View Job Post
              </button>
              <button
                className={`tab_btn_vs ${
                  currentTab === "invite-freelancer" ? "active_bvs" : ""
                }`}
                onClick={() => {
                  setCurrentTab("invite-freelancer");
                  navigate(`/view-job/${jobId}/invite-freelancer`);
                }}
              >
                Invite freelancers
              </button>
              <button
                className={`tab_btn_vs ${
                  currentTab === "review-proposal" ? "active_bvs" : ""
                }`}
                onClick={() => {
                  setCurrentTab("review-proposal");
                  navigate(`/view-job/${jobId}/review-proposal`);
                }}
              >
                Review proposals
              </button>
              <button
                className={`tab_btn_vs ${
                  currentTab === "hire" ? "active_bvs" : ""
                }`}
                onClick={() => {
                  setCurrentTab("hire");
                  navigate(`/view-job/${jobId}/hire`);
                }}
              >
                Hire
              </button>
            </div>
          </div>
          {currentTab === "job-details" && (
            <ViewJob
              singleJobDetails={singleJobDetails}
              jobId={jobId}
              handleMakePublicPrivate={handleMakePublicPrivate}
            />
          )}
          {currentTab === "invite-freelancer" && (
            <InviteFreelancer jobId={jobId} setCurrentTab={setCurrentTab} setLoading={setLoading} />
          )}
          {currentTab === "review-proposal" && <ReviewProposal jobId={jobId} setLoading={setLoading} />}
          {currentTab === "hire" && <Hire />}
        </div>
      </Container>
      {loading ? <LoadingSpinner /> : null}
    </>
  );
};
export default ViewScreen;

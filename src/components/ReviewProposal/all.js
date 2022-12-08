import { Col, Row } from "react-bootstrap";
import AllProposals from "./allproposals";
import Satisfied from "./satisfied";
import Messaged from "./messaged";
import Archived from "./archive";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobProposalsList } from "../../redux/actions/freelancerAction";

const JonComponent = ({ jobId }) => {
  const dispatch = useDispatch();
  const jobBasedProposalsList = useSelector(
    (state) => state?.freelancer?.jobBasedProposalsList?.data
  );
  const [reviewProposal, setReviewProposal] = useState("allProposals");

  useEffect(() => {
    const data = {
      project_id: jobId,
      // pagination:2
      // page:1
    };
    dispatch(getAllJobProposalsList(data));
  }, []);

  console.log(jobBasedProposalsList);

  return (
    <Row>
      <Col lg={12}>
        <div className="box_vs_m">
          <div className="overflow-scroll">
            <div className="d-flex tab_m_nodea tab_scroll_cont">
              <button
                className={`text-capitalize tab_btn_vs w-auto ${
                  reviewProposal === "allProposals" ? "active_bvs" : ""
                }`}
                onClick={() => setReviewProposal("allProposals")}
              >
                All Proposals
              </button>
              <button
                className={`text-capitalize tab_btn_vs w-auto ${
                  reviewProposal === "shortListed" ? "active_bvs" : ""
                }`}
                onClick={() => setReviewProposal("shortListed")}
              >
                Shortlisted
              </button>
              <button
                className={`text-capitalize tab_btn_vs w-auto ${
                  reviewProposal === "messagess" ? "active_bvs" : ""
                }`}
                onClick={() => setReviewProposal("messagess")}
              >
                Messaged
              </button>
              <button
                className={`text-capitalize tab_btn_vs w-auto ${
                  reviewProposal === "archived" ? "active_bvs" : ""
                }`}
                onClick={() => setReviewProposal("archived")}
              >
                Archived
              </button>
            </div>
          </div>
          {reviewProposal === "allProposals" && (
            <AllProposals jobBasedProposalsList={jobBasedProposalsList} />
          )}
          {reviewProposal === "shortListed" && (
            <Satisfied jobBasedProposalsList={jobBasedProposalsList} />
          )}
          {reviewProposal === "messagess" && <Messaged />}
          {reviewProposal === "archived" && <Archived />}
        </div>
      </Col>
    </Row>
  );
};
export default JonComponent;

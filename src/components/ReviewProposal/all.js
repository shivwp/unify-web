import { Col, Row } from "react-bootstrap";
import AllProposals from "./allproposals";
import Satisfied from "./satisfied";
import Messaged from "./messaged";
import Archived from "./archive";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllJobProposalsList,
  getAllProposalArchievedList,
  getAllProposalShortList,
  onRemoveInShortList,
  onSaveInShortList,
  removeProposalArchived,
  saveProposalArchived,
} from "../../redux/actions/freelancerAction";

const JonComponent = ({ jobId, setLoading }) => {
  const dispatch = useDispatch();
  const jobBasedProposalsList = useSelector(
    (state) => state?.freelancer?.jobBasedProposalsList?.data
  );
  const saveProposalInShortList = useSelector(
    (state) => state?.freelancer?.saveProposalInShortList
  );
  const removeProposalInShortList = useSelector(
    (state) => state?.freelancer?.removeProposalInShortList
  );
  const proposalShortlist = useSelector(
    (state) => state?.freelancer?.proposalShortlist
  );
  const proposalArchievedlist = useSelector(
    (state) => state?.freelancer?.proposalArchievedlist
  );
  const removeProposalInArchieved = useSelector(
    (state) => state?.freelancer?.removeProposalInArchieved
  );
  const saveProposalInArchieved = useSelector(
    (state) => state?.freelancer?.saveProposalInArchieved
  );
  const [reviewProposal, setReviewProposal] = useState("allProposals");

  useEffect(() => {
    const data = {
      project_id: jobId,
      // pagination:2
      // page:1
    };
    setLoading(true);
    dispatch(getAllJobProposalsList(data, setLoading));
  }, [
    saveProposalInShortList,
    removeProposalInShortList,
    removeProposalInArchieved,
    saveProposalInArchieved,
  ]);

  useEffect(() => {
    const data = {
      project_id: jobId,
    };
    setLoading(true);
    dispatch(getAllProposalShortList(data, setLoading));
  }, [saveProposalInShortList, removeProposalInShortList]);

  useEffect(() => {
    const data = {
      project_id: jobId,
    };
    setLoading(true);
    dispatch(getAllProposalArchievedList(data, setLoading));
  }, [removeProposalInArchieved, saveProposalInArchieved]);

  const handleSaveProposalShortList = (id) => {
    const data = {
      freelancer_id: id,
      job_id: jobId,
    };
    setLoading(true);
    dispatch(onSaveInShortList(data, setLoading));
  };

  const handleRemoveProposalShortList = (id) => {
    const data = {
      freelancer_id: id,
      job_id: jobId,
    };
    setLoading(true);
    dispatch(onRemoveInShortList(data, setLoading));
  };

  const handleSaveProposalArchieved = (id) => {
    const data = {
      freelancer_id: id,
      job_id: jobId,
    };
    setLoading(true);
    dispatch(saveProposalArchived(data, setLoading));
  };

  const handleRemoveProposalArchieved = (id) => {
    const data = {
      freelancer_id: id,
      job_id: jobId,
    };
    setLoading(true);
    dispatch(removeProposalArchived(data, setLoading));
  };

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
            <AllProposals
              jobId={jobId}
              jobBasedProposalsList={jobBasedProposalsList}
              handleSaveProposalShortList={handleSaveProposalShortList}
              handleRemoveProposalShortList={handleRemoveProposalShortList}
              handleSaveProposalArchieved={handleSaveProposalArchieved}
            />
          )}
          {reviewProposal === "shortListed" && (
            <Satisfied
              jobId={jobId}
              proposalShortlist={proposalShortlist}
              handleSaveProposalShortList={handleSaveProposalShortList}
              handleRemoveProposalShortList={handleRemoveProposalShortList}
            />
          )}
          {reviewProposal === "messagess" && <Messaged />}
          {reviewProposal === "archived" && (
            <Archived
              proposalArchievedlist={proposalArchievedlist}
              handleRemoveProposalArchieved={handleRemoveProposalArchieved}
            />
          )}
        </div>
      </Col>
    </Row>
  );
};
export default JonComponent;

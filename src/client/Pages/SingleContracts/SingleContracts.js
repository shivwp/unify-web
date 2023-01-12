import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  onEndContract,
  SingleContractData,
} from "../../../redux/actions/jobActions";
import Layout from "../../Layout/Layout";
import Details from "./Details";
import Messages from "./Messages";
import Overview from "./Overview";
import "./SingleContracts.css";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { clientDeclineMilestone } from "../../../redux/actions/freelancerAction";

const SingleContracts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { buttonStatus, contract_id } = useParams();
  const [currentTab, setCurrentTab] = useState("overview");
  const [popup, setPopup] = useState();
  const singleContractData = useSelector(
    (state) => state.job.singleContractData
  );
  const reviewWorkAndChange = useSelector(
    (state) => state.freelancer.reviewWorkAndChange
  );
  const milestoneData = useSelector(
    (state) => state?.job?.singleContractData?.milestone
  );
  const addMilestone = useSelector((state) => state?.freelancer?.addMilestone);
  const fundMilestone = useSelector(
    (state) => state?.freelancer?.fundMilestone
  );
  const declineMilestone = useSelector(
    (state) => state?.freelancer?.declineMilestone
  );

  useEffect(() => {
    setCurrentTab(buttonStatus);
  }, [buttonStatus]);

  useEffect(() => {
    setLoading(true);
    dispatch(SingleContractData(contract_id, setLoading));
  }, [reviewWorkAndChange, addMilestone, declineMilestone, fundMilestone]);

  const deleteMilestone = (id) => {
    const data = {
      milestone: id,
    };

    dispatch(clientDeclineMilestone(data));
  };

  const endContracts = () => {
    // const data = {
    //   contract_id: contract_id,
    //   type: "client",
    //   milestone_id: 5,
    //   milestone_status: "refund-requested",
    // };
    // setLoading(true);
    // dispatch(onEndContract(data, setLoading));
  };

  return (
    <>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <Container className="mb-5 pb-3">
            <div className="d-flex justify-content-between align-items-center flex-wrap mt-5">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="prof_round_me">
                  <img
                    src={singleContractData?.freelancer?.profile_image}
                    alt=""
                  />
                </div>
                <div>
                  <div className="prof_name_ne">
                    {singleContractData?.freelancer?.first_name}{" "}
                    {singleContractData?.freelancer?.last_name}
                  </div>
                  <div className="prof_sm_me">12:19 pm Friday</div>
                </div>
              </div>
              <button className="endContracts-button" onClick={endContracts}>
                End Contracts
              </button>
            </div>
            <div className="d-flex justify-content-between align-items-center flex-wrap my-4">
              <div className="me_hed_h2_new">
                <h2>{singleContractData?.project_title}</h2>
              </div>
            </div>
            <div>
              <div className="overflow-scroll">
                <div className="d-flex tab_m_nodea tab_scroll_cont">
                  <button
                    className={`text-capitalize tab_btn_vs w-auto ${
                      currentTab === "overview" ? "active_bvs" : ""
                    }`}
                    onClick={() => {
                      setCurrentTab("overview");
                      navigate(`/single-contracts/overview/${contract_id}`);
                    }}
                  >
                    Overview
                  </button>
                  {/* <button
                    className={`text-capitalize tab_btn_vs w-auto ${
                      currentTab === "messages" ? "active_bvs" : ""
                    }`}
                    onClick={() => {
                      setCurrentTab("messages");
                      navigate("/single-contracts/messages");
                    }}
                  >
                    Messages
                  </button> */}
                  <button
                    className={`text-capitalize tab_btn_vs w-auto ${
                      currentTab === "details" ? "active_bvs" : ""
                    }`}
                    onClick={() => {
                      setCurrentTab("details");
                      navigate(`/single-contracts/details/${contract_id}`);
                    }}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
            {currentTab === "overview" && (
              <Overview
                setPopup={setPopup}
                milestoneData={milestoneData}
                setLoading={setLoading}
                singleContractData={singleContractData}
                deleteMilestone={deleteMilestone}
              />
            )}
            {/* {currentTab === "messages" && <Messages />} */}
            {currentTab === "details" && (
              <Details singleContractData={singleContractData} />
            )}
          </Container>
        </Layout>
      </div>
      {popup}

      {loading ? <LoadingSpinner /> : ""}
    </>
  );
};

export default SingleContracts;

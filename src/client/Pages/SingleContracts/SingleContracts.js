import React, { useState } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Details from "./Details";
import Messages from "./Messages";
import Overview from "./Overview";
import "./SingleContracts.css";

const SingleContracts = () => {
  const { buttonStatus } = useParams();
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("overview");

  useEffect(() => {
    setCurrentTab(buttonStatus);
  }, [buttonStatus]);

  return (
    <div className="slider_pos nin_vh">
      <Layout webtype="client">
        <Container className="mb-5 pb-3">
          <div className="d-flex justify-content-between align-items-center flex-wrap mt-5">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <div className="prof_round_me">
                <img src="/assets/PRO-2.png" alt="" />
              </div>
              <div>
                <div className="prof_name_ne">Jolly Smith</div>
                <div className="prof_sm_me">12:19 pm Friday</div>
              </div>
            </div>
            <button className="endContracts-button">End Contracts</button>
          </div>
          <div className="d-flex justify-content-between align-items-center flex-wrap my-4">
            <div className="me_hed_h2_new">
              <h2>Experienced Developer for Wellness App</h2>
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
                    navigate("/single-contracts/overview");
                  }}
                >
                  Overview
                </button>
                <button
                  className={`text-capitalize tab_btn_vs w-auto ${
                    currentTab === "messages" ? "active_bvs" : ""
                  }`}
                  onClick={() => {
                    setCurrentTab("messages");
                    navigate("/single-contracts/messages");
                  }}
                >
                  Messages
                </button>
                <button
                  className={`text-capitalize tab_btn_vs w-auto ${
                    currentTab === "details" ? "active_bvs" : ""
                  }`}
                  onClick={() => {
                    setCurrentTab("details");

                    navigate("/single-contracts/details");
                  }}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
          {currentTab === "overview" && <Overview />}
          {currentTab === "messages" && <Messages />}
          {currentTab === "details" && <Details />}
        </Container>
      </Layout>
    </div>
  );
};

export default SingleContracts;

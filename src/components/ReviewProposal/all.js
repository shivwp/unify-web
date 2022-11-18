import { Col, Row } from "react-bootstrap";
import AllProposals from "./allproposals";
import Satisfied from "./satisfied";
import Messaged from "./messaged";
import Archived from "./archive";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const JonComponent = () => {
  const [reviewProposal, setReviewProposal] = useState("allProposals");

  return (
    <Row>
      <Col lg={12}>
        <div className="box_vs_m">
          <div className="overflow-scroll">
            <div className="d-flex tab_m_nodea tab_scroll_cont">
              <Button
                variant=""
                className={`text-capitalize tab_btn_vs w-auto ${
                  reviewProposal === "allProposals" ? "active_bvs" : ""
                }`}
                onClick={() => setReviewProposal("allProposals")}
              >
                All Proposals
              </Button>
              <Button
                variant=""
                className={`text-capitalize tab_btn_vs w-auto ${
                  reviewProposal === "shortListed" ? "active_bvs" : ""
                }`}
                onClick={() => setReviewProposal("shortListed")}
              >
                Shortlisted
              </Button>
              <Button
                variant=""
                className={`text-capitalize tab_btn_vs w-auto ${
                  reviewProposal === "messagess" ? "active_bvs" : ""
                }`}
                onClick={() => setReviewProposal("messagess")}
              >
                Messaged
              </Button>
              <Button
                variant=""
                className={`text-capitalize tab_btn_vs w-auto ${
                  reviewProposal === "archived" ? "active_bvs" : ""
                }`}
                onClick={() => setReviewProposal("archived")}
              >
                Archived
              </Button>
            </div>
          </div>
          {reviewProposal === "allProposals" && <AllProposals />}
          {reviewProposal === "shortListed" && <Satisfied />}
          {reviewProposal === "messagess" && <Messaged />}
          {reviewProposal === "archived" && <Archived />}
        </div>
      </Col>
    </Row>
  );
};
export default JonComponent;

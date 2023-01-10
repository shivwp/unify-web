import * as React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Title from "../../../../components/title";
import WorkInProgress from "./WorkInProgress";
import InReview from "./InReviews";
import Available from "./Available";
import Pending from "./Pending";
import { useDispatch, useSelector } from "react-redux";
import { getOverViewReport } from "../../../../redux/actions/jobActions";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import { useEffect } from "react";

const Screen = () => {
  const [currentTab, seturrentTab] = useState("inProgress");
  Title(" | Overview");
  const dispatch = useDispatch();
  const [popup, setPopup] = useState(null);
  const [loading, setLoading] = useState(false);
  const overviewReports = useSelector((state) => state.job.overviewReportss);
  console.log(overviewReports);

  useEffect(() => {
    dispatch(getOverViewReport(setLoading, setPopup));
  }, []);
  const ChangeTab = ({ tabName }) => {
    const tab = {
      inProgress: <WorkInProgress overviewReports={overviewReports} />,
      inReview: <InReview overviewReports={overviewReports} />,
      Available: <Available overviewReports={overviewReports} />,
      Pending: <Pending overviewReports={overviewReports} />,
    };
    return tab[tabName];
  };

  return (
    <>
      <Container>
        <div className="main_hirefreelancer_bx main_box_descr mt-5">
          <div className="transaction_head_n">
            <div className="flex_m_j_t pb-0 pt-3">
              <div className="my_jo_headin mjh_new_smtext p-0">OVERVIEW</div>
            </div>
          </div>
          <div>
            <div
              className="transaction_head_n pb-0 d-flex justify-content-around"
              style={{ overflowX: "auto" }}
            >
              <div
                onClick={() => seturrentTab("inProgress")}
                className={`box_overv_new ${
                  currentTab == "inProgress" ? "active" : ""
                }`}
              >
                <div className="overv_sm_thead">Work in Progress</div>
                <div className="overv_number">$0.00</div>
              </div>
              <div
                onClick={() => seturrentTab("inReview")}
                className={`box_overv_new ${
                  currentTab == "inReview" ? "active" : ""
                }`}
              >
                <div className="overv_sm_thead">In review</div>
                <div className="overv_number">$0.00</div>
              </div>
              <div
                onClick={() => seturrentTab("Pending")}
                className={`box_overv_new ${
                  currentTab == "Pending" ? "active" : ""
                }`}
              >
                <div className="overv_sm_thead">Pending</div>
                <div className="overv_number">$0.00</div>
              </div>
              <div
                onClick={() => seturrentTab("Available")}
                className={`box_overv_new ${
                  currentTab == "Available" ? "active" : ""
                }`}
              >
                <div className="overv_sm_thead">Available</div>
                <div className="overv_number">$0.00</div>
                <div className="overv_lst_nme">Last payment: $0.00</div>
              </div>
            </div>
          </div>
          <div className="no_found_cen reports_overview">
            <ChangeTab tabName={currentTab} />
          </div>
        </div>
      </Container>
      {loading ? <LoadingSpinner /> : null}
      {popup}
    </>
  );
};
export default Screen;

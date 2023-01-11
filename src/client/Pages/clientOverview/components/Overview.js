import * as React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Title from "../../../../components/title";
import WorkInProgress from "./WorkInProgress";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOverviewHistory } from "../../../../redux/actions/freelancerAction";

const Screen = () => {
  Title(" | Overview");
  const dispatch = useDispatch();
  const [popup, setPopup] = useState(null);
  const [loading, setLoading] = useState(false);
  const overviewHistory = useSelector(
    (state) => state.freelancer.overviewHistory
  );

  useEffect(() => {
    const data = {};

    setLoading(true);
    dispatch(getOverviewHistory(data, setLoading));
  }, []);

  return (
    <>
      <Container>
        <div className="main_hirefreelancer_bx main_box_descr mt-5">
          <div className="transaction_head_n">
            <div className="flex_m_j_t pb-0 pt-3">
              <div className="my_jo_headin mjh_new_smtext p-0">OVERVIEW</div>
            </div>
          </div>

          <div className="no_found_cen reports_overview">
            <WorkInProgress overviewHistory={overviewHistory} />
          </div>
        </div>
      </Container>
      {loading ? <LoadingSpinner /> : null}
      {popup}
    </>
  );
};
export default Screen;

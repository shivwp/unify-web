import { Col, Row } from "react-bootstrap";
import Offers from "./offers";
import Hired from "./hired";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllHiredFreelancerList,
  getAllOfferedFreelancerList,
} from "../../redux/actions/freelancerAction";

const JonComponent = ({ jobId }) => {
  const [hireTab, setHireTab] = useState("offers");
  const dispatch = useDispatch();
  const hiredFreelancerList = useSelector(
    (state) => state.freelancer.hiredFreelancerList
  );
  const offeredFreelancerList = useSelector(
    (state) => state.freelancer.offeredFreelancerList
  );

  useEffect(() => {
    dispatch(getAllHiredFreelancerList(jobId));
    dispatch(getAllOfferedFreelancerList(jobId));
  }, []);

  return (
    <Row>
      <Col lg={12}>
        <div className="box_vs_m">
          <div className="d-flex flex-wrap tab_m_nodea">
            <button
              className={`tab_btn_vs w-auto ${
                hireTab === "offers" ? "active_bvs" : ""
              }`}
              onClick={() => setHireTab("offers")}
            >
              Offers
            </button>
            <button
              className={`tab_btn_vs w-auto ${
                hireTab === "hired" ? "active_bvs" : ""
              }`}
              onClick={() => setHireTab("hired")}
            >
              Hired
            </button>
          </div>
          {hireTab === "offers" && (
            <Offers offeredFreelancerList={offeredFreelancerList?.data} />
          )}
          {hireTab === "hired" && (
            <Hired hiredFreelancerList={hiredFreelancerList} />
          )}
        </div>
      </Col>
    </Row>
  );
};
export default JonComponent;

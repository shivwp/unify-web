import { Col, Row } from "react-bootstrap";
import Offers from "./offers";
import Hired from "./hired";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const JonComponent = () => {
  const [hireTab, setHireTab] = useState("offers");

  return (
    <Row>
      <Col lg={12}>
        <div className="box_vs_m">
          <div className="d-flex flex-wrap tab_m_nodea">
            <Button
              variant=""
              className={`tab_btn_vs w-auto ${
                hireTab === "offers" ? "active_bvs" : ""
              }`}
              onClick={() => setHireTab("offers")}
            >
              Offers
            </Button>
            <Button
              variant=""
              className={`tab_btn_vs w-auto ${
                hireTab === "hired" ? "active_bvs" : ""
              }`}
              onClick={() => setHireTab("hired")}
            >
              Hired
            </Button>
          </div>
          {hireTab === "offers" && <Offers />}
          {hireTab === "hired" && <Hired />}
        </div>
      </Col>
    </Row>
  );
};
export default JonComponent;

import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import SideNav from "./site_nav";
import Title from "../../../../../components/title";
import MyInfo from "../../MyInfo";
import AccountInfo from "../../AccountInfo";
import { useState } from "react";
import CompnyDetailsInfo from "../../CompnyDetailsInfo";
import CompanyContactInfo from "../../CompanyContactInfo";

const Screen = () => {
  Title(" | Setting - Myinfo");

  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="bg-f2f8ff min_pad_m" style={{ fontFamily: "Poppins" }}>
        <Container>
          <Row>
            <SideNav />
            <Col lg={9}>
              <div className="s_nav_body">
                <div className="s_b_head no-border">
                  <h2>My Info</h2>
                </div>

                {open ? (
                  <MyInfo setOpen={() => setOpen(false)} />
                ) : (
                  <AccountInfo />
                )}
                {/* {open ? <MyInfo /> : <CompnyDetailsInfo />} */}
                {/* {open ? <MyInfo /> : <CompanyContactInfo />} */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Screen;

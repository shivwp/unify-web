import React from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import ConnectedServices from "../profileSteps/ConnectedServices";
import MemberPermission from "../profileSteps/MemberPermission";
import MemberShip from "../profileSteps/MemberShip";
import PasswordSecurity from "../profileSteps/PasswordSecurity";
import SettingBilling from "../profileSteps/SettingBilling";
import SettingInfo from "../profileSteps/SettingInfo";
import SettingNotification from "../profileSteps/SettingNotification";
import Team from "../profileSteps/Team";
import Sidebar from "./Sidebar";
import LoadingSpinner from "../../../../components/LoadingSpinner";

const SettingDashboard = () => {
  const [currentTab, setCurrentTab] = useState("my-info");
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div
        className="bg-fff min_pad_m profileDashboard"
        style={{ fontFamily: "Poppins" }}
      >
        <Container>
          <Row>
            <Sidebar setCurrentTab={setCurrentTab} currentTab={currentTab} />
            {currentTab === "my-info" && (
              <SettingInfo setLoading={setLoading} />
            )}
            {currentTab === "setting-billing" && <SettingBilling />}
            {currentTab === "password-security" && <PasswordSecurity />}
            {currentTab === "membership" && <MemberShip />}
            {currentTab === "teams" && <Team />}
            {currentTab === "notification" && <SettingNotification />}
            {currentTab === "membership-permission" && <MemberPermission />}
            {currentTab === "connected-services" && <ConnectedServices />}
          </Row>
        </Container>
      </div>

      {loading ? <LoadingSpinner /> : null}
    </>
  );
};

export default SettingDashboard;

import React from "react";
import { useParams } from "react-router-dom";
import SeeTimesheet from "../SeeTimesheet/components";
import SeeMilestone from "../MileStone-Earning/components";
import Layout from "../../Layout/Layout";

const Index = () => {
  const { buttonStatus } = useParams();

  return (
    <>
      <Layout>
        {buttonStatus == "see-timesheet" ? <SeeTimesheet /> : <SeeMilestone />}
      </Layout>
    </>
  );
};

export default Index;

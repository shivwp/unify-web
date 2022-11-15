import React from "react";
import Milestone from "./Milestone";
import MilestoneTimeLine from "./MilestoneTimeLine";
import ProjectTimeLine from "./ProjectTimeLine";
import RecentFiles from "./RecentFiles";

const OverView = () => {
  return (
    <>
      {/* <Milestone /> */}
      <MilestoneTimeLine />
      <ProjectTimeLine />
      <RecentFiles />
    </>
  );
};

export default OverView;

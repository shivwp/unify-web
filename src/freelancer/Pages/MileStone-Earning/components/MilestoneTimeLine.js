import React from "react";
import { Col, Row } from "react-bootstrap";
import RecentFiles from "./RecentFiles";

const MilestoneTimeLine = () => {
  return (
    <>
      <Col md={7} lg={8}>
        <div className="milestone_timeline">
          <div className="heading">Milestone Timeline</div>
          <div className="progress_steps" id="progress_step1">
            <div className="fill_ filled_background">1</div>
            <div className="connecting_line filled_border"></div>
            <div className="about_step">
              <p>Rooms in home page</p>
              Hi, I have a project where the concept is to have a shared
              playlist based on Youtube videos. This would allow room host to
              play youtube videos from a list (not a youtube playlist ) stored
              on the website. Certain type of users could suggest youtube videos
              to add to that website-side list. See Website:
              https://www.nextjam.live/beta Language: PHP Platform: Wordpress
              How is the website used?. people join or create room share people
              can share video/song that will be played live. There are various
              use cases including the case where we are playing a media while in
              a room that is not live Here is an old demo of how the site worked
              before updates: https://vimeo.com/705725020 (See the attached
              requirement) Summary of requirement: . ... If this job is well
              handled, you could be awarded a future job for this project as
              there is more work to do. Interested to work on this job? Please
              apply. Thanks, Lamine.
              <div className="paid_btn">
                <button>Paid</button>
              </div>
            </div>
          </div>
          <div className="progress_steps" id="progress_step2">
            <div className="fill_ filled_background">2</div>
            <div className="connecting_line filled_border"></div>
            <div className="about_step">
              <p>IOS + Android shop done</p>
              <div className="pending_btn">
                <button>Pending</button>
              </div>
              Hi, I have a project where the concept is to have a shared
              playlist based on Youtube videos. This would allow room host to
              play youtube videos from a list (not a youtube playlist ) stored
              on the website. Certain type of users could suggest youtube videos
              to add to that website-side list.
              <div className="paid_btn">
                <button>Paid</button>
              </div>
            </div>
          </div>
          <div className="progress_steps" id="progress_step3">
            <div className="fill_">3</div>
            <div className="about_step">
              <p>Simple Smart "Add to queue"; Synched currently playing</p>
              <div className="active_and_paid_btn">
                <button>Active & Paid</button>
              </div>
              <div className="submit_work_btn">
                <button>Submit Work</button>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default MilestoneTimeLine;

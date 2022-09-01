import Container from 'react-bootstrap/Container';
import ViewJob from './ViewJobs/jobpost';
import InviteFreelancer from './ViewJobs/invite';
import ReviewProposal from './ReviewProposal/all';
import Hire from './Hire/all';
import { useState } from 'react';

const ViewScreen = () => {
    const [Tab, SetTab] = useState(<ViewJob />);
    const [TabActive, SetTabActive] = useState("view_job");
    function changeTab(componentName) {
        if (componentName === "invite") {
            SetTab(<InviteFreelancer />);
            SetTabActive("invite")
        } else if (componentName === "view_job") {
            SetTab(<ViewJob />);
            SetTabActive("view_job")
        } else if (componentName === "review") {
            SetTab(<ReviewProposal />);
            SetTabActive("review")
        } else if (componentName === "hire") {
            SetTab(<Hire />);
            SetTabActive("hire")
        }
    }
    return (
        <Container>
            <div className="view_job_box">
                <div className="d-flex justify-content-between">
                    <div className="vj_hea"><h1>UI/UX Design</h1></div>
                    <div>
                        <div className="vj_r_link"><a href="#0">Reach 6x more Top Rated Talent</a></div>
                        <div className="vj_r_sm_t">Upgrade this job</div>
                    </div>
                </div>
                <div className="d-flex flex-wrap tab_m_nodea mt-4">
                    <button className={`tab_btn_vs ${TabActive === 'view_job' ? 'active_bvs' : ''}`} onClick={() => { changeTab("view_job") }}>View Job Post</button>
                    <button className={`tab_btn_vs ${TabActive === 'invite' ? 'active_bvs' : ''}`} onClick={() => { changeTab("invite") }}>Invite freelancers</button>
                    <button className={`tab_btn_vs ${TabActive === 'review' ? 'active_bvs' : ''}`} onClick={() => { changeTab("review") }}>Review proposals</button>
                    <button className={`tab_btn_vs ${TabActive === 'hire' ? 'active_bvs' : ''}`} onClick={() => { changeTab("hire") }}>Hire</button>
                </div>
                {Tab}
            </div>
        </Container>
    );
}
export default ViewScreen
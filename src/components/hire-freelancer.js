import { Container } from "react-bootstrap"
import "./job.css";

const Screen = () => {
    return (
        <Container>
            <div className="fire_headin">Hire</div>
            <div className="main_box_descr main_hirefreelancer_bx">
                <div className='d-flex b-bottom-gr pb-3'>
                    <div className='freelancer_img_in_r'>
                        <img src="/assets/PRO-2.png" alt='' />
                    </div>
                    <div className='freel_det_bin'>
                        <div className='freelancer_ame_in'>Mario Speedwagon</div>
                        <div className='freelancer_exp_in'>Expert in Mobile and Web Development.</div>
                        <div className='freelancer_exp_in freelancer_loc_in d-flex'>
                            Kharkov, Ukraine
                            <div className='amount_hir_in p-0'><b>100%</b> Job Success</div>
                            <div className='amount_hir_in p-0'>Job Success</div>
                        </div>
                    </div>
                </div>
                <div className="b-bottom-gr">
                    <div className="contrc_ter_head">Contract Terms</div>
                    <div className="pay_pro_par">You’re protected by <a href="#0">Unify Payment Protection.</a> Only pay for the work you authorize.</div>
                    <div className="d-flex justify-content-between flex-wrap pt-4 pb-3">
                        <div>
                            <div className="pay_op_heading">
                                Payment Option
                                <span className="no_verify_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-question-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="hourly_headin d-flex align-items-center">
                                Hourly
                                <button className="round_b_btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D4D4D5" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="pay_op_heading">
                                Pay by the hour
                                <span className="no_verify_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-question-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="hourly_headin d-flex align-items-center">
                                $30.00 /hr
                                <button className="round_b_btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D4D4D5" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="max_prof_rt">Max Mario's profile rate is $30.00 /hr</div>
                        </div>
                        <div>
                            <div className="pay_op_heading">
                                Weekly Limit
                                <span className="no_verify_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-question-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="max_prof_rt">Setting a weekly limit is a great way to help ensure you stay on budget.</div>
                            <div className="hourly_headin d-flex align-items-center">
                                40 hrs/week
                                <button className="round_b_btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D4D4D5" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="max_prof_rt">$1,200.00 max/week</div>
                        </div>
                    </div>
                </div>
                <div className="allow_freel_che">
                    <input type="checkbox" />
                    Allow freelancer to log time manually if needed. <a href="#0">Learn more</a>
                </div>
                <div className="d-flex align-items-center pt-3 pb-4 b-bottom-gr">
                    <div className="start_d_headin">Start Date <span>(Optional)</span>
                        <span className="no_verify_icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-question-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                            </svg>
                        </span></div>
                    <div className="inpu_date">
                        <input type="date" />
                    </div>
                </div>
                <div className="b_bot_inp d-flex justify-content-between align-items-center">
                    <div className="sm_label_inp slide_n_tex">Add automatic weekly payments for the freelancer (Optional)</div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                </div>
                <div className="b_bot_inp d-flex justify-content-between align-items-center">
                    <div className="sm_label_inp slide_n_tex">How do hourly contracts work?</div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="main_box_descr main_hirefreelancer_bx">
                <div className="contrc_ter_head mb-2">Work Description</div>
                <div className="pay_pro_par p-0 m-0">Add a description of the work</div>
                <div className="description_text_h">
                    <textarea></textarea>
                </div>
                <div className="ts_btn attach_f_btn mt-0">
                    <input type="file" />
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-paperclip" viewBox="0 0 16 16">
                            <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                        </svg>
                        Attach File
                    </button>
                    <div className="sm_label_inp">Max file size: 100 MB</div>
                </div>
            </div>
            <div className="allow_freel_che black_a_inp">
                <input type="checkbox" />
                Yes, I understand and agree to the Unify Terms of Service, including the User <a href="#0">  Agreement </a> and <a href="#0"> Privacy Policy </a>.
            </div>
            <div className="d-flex justify-content-between mt-4 mb-5">
                <div className="btn_job_back">
                    <button>Cancel</button>
                    <button className="post_job_btn blue_ac_btn ml-5">Continue</button>
                </div>
            </div>
        </Container>
    )
}
export default Screen
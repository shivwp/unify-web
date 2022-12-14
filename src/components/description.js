import { Container } from "react-bootstrap"
import "./job.css";
import $ from 'jquery';
import Title from './title';
import { Link } from "react-router-dom";

const Description = () => {

    Title(' | Description')
    const hanDleSlide = (e) => {
        $(e.target.nextSibling).slideToggle();
    }
    $(".slider_shutter").slideDown();
    return (
        <Container>
            <div className="main_box_descr mbd_n_pd">
                <div className="top_sec_bb">
                    <div className="ts_h1"><h1>Now just finish and review your job post.</h1></div>
                    <div className="ts_btn"><Link to="/view-job"><button className="font-weight-500">Post Your Job Now</button></Link></div>
                </div>
                <div className="b_bot_inp">
                    <div className="input_t_lab">Title</div>
                    <div className="job_t_inp"><input type="text" value="UI/UX Design" /></div>
                    <div className="sm_label_inp">That looks a little short. A descriptive headline will help candidates better understand what your job requires.</div>
                </div>
                <div className="b_bot_inp">
                    <div className="input_t_lab">Describe your job</div>
                    <div className="input_t_par">
                        This is how talent figures out what you need and why you’re great to work with!
                        Include your expectations about the task or deliverable, what you’re looking for in a work relationship, and anything unique about your project, team, or company. Here are several examples that illustrate best practices for effective job posts.
                    </div>
                    <div className="job_t_inp"><textarea></textarea></div>
                    <div className="d-flex justify-content-between">
                        <div className="sm_label_inp">
                            <span className="sm_span_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                </svg>
                            </span>
                            Please add a job description.
                        </div>
                        <div className="sm_label_inp text-right">5000 characters left</div>
                    </div>

                    <div className="ts_btn attach_f_btn">
                        <input type="file" />
                        <button className="rot_svg_oety">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-paperclip" viewBox="0 0 16 16">
                                <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                            </svg>
                            Attach File
                        </button>
                        <div className="sm_label_inp">Max file size: 100 MB</div>
                    </div>
                </div>
                <div className="b_bot_inp">
                    <div className="input_t_lab">Category</div>
                    <div className="job_t_inp cat_inp_j d-flex flex-wrap"><input type="text" value="UI/UX Design" />
                        <button className="round_b_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D4D4D5" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="b_bot_inp">
                    <div className="input_t_lab">Skills</div>
                    <div className='slide_btnss'>
                        <button>Mobile App Design
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </button>
                        <button>User Experience Design
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </button>
                        <button>User Interface Design
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </button>
                        <button>Graphic Design
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </button>
                        <button className="round_b_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D4D4D5" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="b_bot_inp">
                    <div className="input_t_lab">Scop</div>
                    <div className="job_t_inp cat_inp_j d-flex flex-wrap"><input type="text" value="Large, More than 6 months, Entry level" />
                        <button className="round_b_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D4D4D5" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="b_bot_inp">
                    <div className="input_t_lab">Budget</div>
                    <div className="job_t_inp cat_inp_j d-flex flex-wrap"><input type="text" value="$15.00 - $35.00 / hr" />
                        <button className="round_b_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D4D4D5" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="p-0 flex_slide_ta toggle_shutter b-bottom-b" onClick={(e) => hanDleSlide(e)}>
                    <div className="">
                        <div className="input_t_lab pb-0">Screening questions (optional)</div>
                        <div className="sm_label_inp">Narrow down your candidates</div>
                    </div>
                    <div className="pr-10">
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" width="24" height="24" fill="#393939" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowDownIcon"><path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>
                    </div>
                </div>
                <div className='slide_btnss slider_shutter'><div className="sm_label_inp">Narrow down your candidates</div></div>
                <div className="p-0 flex_slide_ta toggle_shutter b-bottom-b" onClick={(e) => hanDleSlide(e)}>
                    <div className="">
                        <div className="input_t_lab pb-0">Advanced preferences (optional)</div>
                        <div className="sm_label_inp">Hours per week, hire date, and more</div>
                    </div>
                    <div className="pr-10">
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" width="24" height="24" fill="#393939" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowDownIcon"><path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>
                    </div>
                </div>
                <div className='slide_btnss slider_shutter'><div className="sm_label_inp">Hours per week, hire date, and more</div></div>

                <div className="p-0 flex_slide_ta toggle_shutter b-bottom-b" onClick={(e) => hanDleSlide(e)}>
                    <div className="">
                        <div className="input_t_lab pb-0">Job post preferences (optional)</div>
                        <div className="sm_label_inp">Adjust visibility and add coworkers</div>
                    </div>
                    <div className="pr-10">
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" width="24" height="24" fill="#393939" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowDownIcon"><path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>
                    </div>
                </div>
                <div className='slide_btnss slider_shutter'><div className="sm_label_inp">Adjust visibility and add coworkers</div></div>

                <div className="d-flex justify-content-between flex-wrap mt-5 mb-3">
                    <div className="btn_job_back no-border fo_btn_c next_b_btn_c"><Link to="/budget"><button className="mt-2">Back</button></Link></div>
                    <div className="d-flex flex-wrap no-border mt-0 pt-0 btn_foot_sec">
                    <div className='fo_btn_c next_b_btn_c'><button className="draf_jo_btnbn mt-2">Save as a draft</button></div>
                    <div className='fo_btn_c next_b_btn_c'><button className="post_job_btn mt-2">Post Your Job Now</button></div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default Description
import React from 'react'
import { Form } from 'react-bootstrap'

const Skills = () => {

    const filteredSkills = [
        { label: "React", value: 355 },
        { label: "Javascript", value: 54 },
        { label: "PHP", value: 43 },
        { label: "Java", value: 61 },
        { label: "Python", value: 965 },
    ];

    return (
        <>
            <div className="container">
                <div className="container_border">
                    <div className="startIntroIn">
                        <h5 className="startIntroTwoH5">
                            Nearly there! what work are you here to do?
                        </h5>
                        <p className="startIntroTwoP">
                            Your skills show clients what you can offer, and help us choose which jobs to recommend to you. Add or remove the ones we've suggested, or start typing to pick more. It's up to you.
                        </p>
                        <div className="afterSignUpSklls">Your Skills</div>
                        <div className="catbox_rd_ofive mt-2">
                            <div className="d-flex flex-wrap">
                                {filteredSkills?.map((item) => (
                                    <div className="skill_bxr_gry">
                                        {/* <span>{item.name}</span> */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="#393939"
                                            className="bi bi-plus"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>
                                    </div>
                                ))}
                                <div>
                                    <Form.Control
                                        type="text"
                                        name="skill"
                                        id="search_skill_inp"
                                        autocomplete="off"

                                        placeholder="search here skills..."
                                        className="no-border font-size-13px search_skilloiouo"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="maxlabel_atcxt mt-3">Maximum 15 skills.</div>
                        <div className="theme_btns mt-0">
                            <button className="first_button">Back</button>
                            <button className="second_button">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
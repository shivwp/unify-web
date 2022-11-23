import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Skills = () => {
    const filteredSkills = [
        { label: "React", value: 355 },
        { label: "Javascript", value: 54 },
        { label: "PHP", value: 43 },
        { label: "Java", value: 61 },
        { label: "Python", value: 965 },
    ];
    const [selectSkills, setSelectSkills] = useState(filteredSkills);
    console.log("selectSkills======", selectSkills);
    const removeSkills = (index) => {
        let updateSkills = [...selectSkills];
        updateSkills.splice(index, 1);
        setSelectSkills(updateSkills);
    };

    const addSkills = (item) => {
        if (selectSkills.length <= 15) {
            if (
                selectSkills.find((ele) => {
                    return ele.skill_id == item.id;
                }) == undefined
            ) {
                setSelectSkills([
                    ...selectSkills,
                    { skill_id: item.id, skill_name: item.name },
                ]);
            }
        }
        document.getElementById("search_skill_inp").value = null;
    };

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
                        <div className="addSkillBox mt-2">
                            <div className="d-flex flex-wrap">
                                {filteredSkills?.map((item, index) => (
                                    <div className="skill_bxr_gry" key={item.skill_id}>
                                        <span>{item.skill_name}</span>
                                        <Button variant="" onClick={() => removeSkills(index)}>
                                            X
                                        </Button>
                                    </div>
                                ))}
                                <div>
                                    <Form.Control
                                        type="text"
                                        name="skill"
                                        id="search_skill_inp"
                                        autocomplete="off"

                                        placeholder="Start typing to search for skills"
                                        className="no-border font-size-13px search_skilloiouo"
                                    />
                                    {/* {filteredSkills && (
                                        <div id="suggest_skills">
                                            <div
                                                className="suggest_skills"
                                                style={{ position: "absolute" }}
                                            >
                                                {filteredSkills?.map((item) => (
                                                    <>
                                                        {" "}
                                                        <span onClick={() => addSkills(item)}>
                                                            {item.name}
                                                        </span>{" "}
                                                        <br />
                                                    </>
                                                ))}
                                            </div>
                                        </div>
                                    )} */}
                                </div>
                            </div>
                        </div>
                        <div className="maxlabel_atcxt mt-3 d-flex justify-content-end">Maximum 15 skills.</div>
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
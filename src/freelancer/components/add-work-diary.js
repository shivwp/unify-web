import * as React from 'react'
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Title from "../../components/title";
import Select from "react-select";

const Screen = () => {
    Title(" | Add Work Diary");

    const Jobs = () => {
        const options1 = [
            { value: "XYZ App Development", label: "XYZ App Development" }
        ];
        return (
            <>
                <div className="mt-2">
                    <div className="d-flex justify-content-between flex-wrap align-items-center">
                        <div className="w-100 d-flex justify-content-between align-items-center contract_sel flex-wrap">
                            <Row className="w-100">
                                <Col sm={12} lg={6} md={6}>
                                    <label></label>
                                    <div className="filter_select_m">
                                        <div className="min_width_inp_nie m-0 date_range_nod psr-relative">
                                            <input type="date" className='w-100'/>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} lg={6} md={6}>
                                    <label className='awd_label'>Project name</label>
                                    <div className="select_inp_in filter_select_m w-100">
                                        <Select className="custom_css_select w-100" options={options1} />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div className="no_found_cen">
                    <div>
                        <div className="no_found_img_cen">
                            <img src="/assets/time-management.svg" alt="" />
                        </div>
                        <div className="no_foun_head_ce">
                            <h1>No time logged this day</h1>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return (
        <>
            <Container>
                <div className='d-flex justify-content-between flex-wrap mt-5'>
                    <div className="flex_m_j_t pb-0 pt-0 m-0">
                        <div className="my_jo_headin mjh_new_smtext">WORK DIARY</div>
                    </div>
                    <div>
                        <div className="fo_btn_c next_b_btn_c">
                            <button className="active_btn_blue">ADD MANUAL TIME</button>
                        </div>
                    </div>
                </div>
                <div className="main_hirefreelancer_bx main_box_descr">
                    {Jobs()}
                </div>
            </Container>
        </>
    );
};
export default Screen;

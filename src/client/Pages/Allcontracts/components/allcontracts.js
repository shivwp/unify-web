import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Title from '../../../../components/title';
import { useState } from 'react';
import Select from 'react-select';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
 
const Screen = () => {
    Title(" | All Contracts");
    const Filter = () => {
        return (
            <div>
                <Row>
                    <Col lg={6}>
                        <div>
                            <div className="filter_headin_m d-flex justify-content-between">
                                <div>Contract Start Dates</div>
                                <div className="reset_link_con"><Link to="#0">Reset</Link></div>
                            </div>
                            <div className='select_inp_in st_med_umecw filter_select_m flex-wrap  justify-content-between d-flex align-items-center w-100'>
                                <div className="inpu_date m-0">
                                    <Form.Control type="date" />
                                </div>
                                <span className="to_date_con">to</span>
                                <div className="inpu_date m-0">
                                    <Form.Control type="date" />
                                </div>
                            </div>
                        </div>
                        <Row>
                            <Col lg={6}>
                                <div>
                                    <div className="filter_headin_m">Contract Type</div>
                                    <ul className="filter_ul_m">
                                        <li><Form.Check type="radio" /> All</li>
                                        <li><Form.Check type="radio" /> Hourly</li>
                                        <li><Form.Check type="radio" /> Fixed-Price</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div>
                                    <div className="filter_headin_m">Contract Status</div>
                                    <ul className="filter_ul_m">
                                        <li><Form.Check type="checkbox" /> All</li>
                                        <li><Form.Check type="checkbox" /> Pending</li>
                                        <li><Form.Check type="checkbox" /> Active</li>
                                        <li><Form.Check type="checkbox" /> Ended</li>
                                        <li><Form.Check type="checkbox" /> Paused</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <div className="filter_headin_m d-flex justify-content-between">
                                <div>Contract End Dates</div>
                                <div className="reset_link_con"><Link to="#0">Reset</Link></div>
                            </div>
                            <div className='select_inp_in st_med_umecw filter_select_m  justify-content-between flex-wrap d-flex align-items-center w-100'>
                                <div className="inpu_date m-0">
                                    <Form.Control type="date" />
                                </div>
                                <span className="to_date_con">to</span>
                                <div className="inpu_date m-0">
                                    <Form.Control type="date" />
                                </div>
                            </div>
                        </div>
                        <Row>
                            <Col lg={6}>
                                <div>
                                    <div className="filter_headin_m">Milestone Status</div>
                                    <ul className="filter_ul_m">
                                        <li><Form.Check type="radio" /> All</li>
                                        <li><Form.Check type="radio" /> Active</li>
                                        <li><Form.Check type="radio" /> Awaiting Funding</li>
                                        <li><Form.Check type="radio" /> Payment Requested</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div>
                                    <div className="filter_headin_m">Escrew Refund Status</div>
                                    <ul className="filter_ul_m">
                                        <li><Form.Check type="checkbox" /> Any</li>
                                        <li><Form.Check type="checkbox" /> Requested</li>
                                        <li><Form.Check type="checkbox" /> Approved</li>
                                        <li><Form.Check type="checkbox" /> Not Approved</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div>
                    <button className="blue_btn_smm">Apply Filters</button>
                </div>
            </div>
        )
    };
    const options = [
        { value: 'Start date', label: 'Start date' },
        { value: 'End date', label: 'End date' },
        { value: 'Client name', label: 'Client name' },
        { value: 'Contract name', label: 'Contract name' },
    ];
    const optionsne = [
        { value: 'Descending', label: 'Descending' },
    ];
    const Jobs = () => {
        return (
            <>
                <div className='mt-3'>
                    <div className='sort_by_pa'>Sort By</div>
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                        <div className="d-flex flex-wrap justify-content-between align-items-center contract_sel">
                            <Row>
                                <Col>
                            <div className='select_inp_in filter_select_m'>
                                <Select
                                    className="custom_css_select"
                                    options={options}
                                />
                            </div>
                                </Col>
                                <Col>
                            <div className='select_inp_in filter_select_m'>
                                <Select
                                    className="custom_css_select"
                                    options={optionsne}
                                />
                            </div>
                                </Col>
                            </Row>
                            <div className='sort_by_pa'>0 toal</div>
                        </div>
                        <div className='download_lnk_csx'>
                            <Link to="#0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                </svg>
                                Download CSV
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="no_found_cen">
                    <div>
                        <div className="no_found_img_cen">
                            <img src="/assets/Group 3148.png" alt="" />
                        </div>
                        <div className="no_foun_head_ce"><h1>You don't have any contracts yet</h1></div>
                        <div className="no_foun_para_ce">Your pending and active contracts will be available here when you start hiring talent.</div>
                        <div className="no_foun_para_ce"><Link to='#0'>Post a job</Link> or <Link to="#0">check out who's applied</Link> to your existing job posts.</div>
                    </div>
                </div>
            </>
        )
    };
    const [open, Setopen] = useState(<Jobs />);
    const [active, SetActive] = useState(0);
    function ToggleFilter() {
        if (active === 0) {
            Setopen(<Filter />)
            SetActive(1)
        } else {
            Setopen(<Jobs />)
            SetActive(0)
        }
    }

    return (
        <>
            <Container>
                <div className='flex_m_j_t mt-3'>
                    <div className='my_jo_headin'>All Contracts</div>
                </div>
                <div className="main_hirefreelancer_bx main_box_descr">
                    <div className='search_area_in'>
                        <div className='search_input_in search_reel_9_wi mx_eity'>
                            <div className='search_icon_in'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </div>
                            <Form.Control type={`text`} placeholder={`Search by contract, freelancer, or agency name`} />
                        </div>
                        <div className='ts_btn attach_f_btn wid_30_in'>
                            <button className="transp_fil_btn" onClick={() => { ToggleFilter() }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-funnel-fill" viewBox="0 0 16 16">
                                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
                                </svg>
                                Filters
                            </button>
                        </div>
                    </div>
                    {open}
                </div>
            </Container>
        </>
    )
}
export default Screen
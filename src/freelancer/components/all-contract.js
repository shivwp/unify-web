import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Title from '../../components/title';
import Select from 'react-select';


const Screen = () => {
    Title(" | All Contracts");
    const options = [
        { value: 'Start date', label: 'Start date' },
        { value: 'End date', label: 'End date' },
        { value: 'Client name', label: 'Client name' },
        { value: 'Contract name', label: 'Contract name' },
    ];
    const optionsne = [
        { value: 'Descending', label: 'Descending' },
    ];

    return (
        <>
            <Container>
                <div className='flex_m_j_t mt-3 pb-0'>
                    <div className='my_jo_headin freelancer_all_contract text-transform-uppercase'>All Contracts</div>
                </div>
                <div className="main_hirefreelancer_bx main_box_descr">
                    <div className='search_area_in'>
                        <div className='search_input_in w-100'>
                            <div className='search_icon_in'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </div>
                            <input type={`text`} placeholder={`Search by contract, freelancer, or agency name`} />
                        </div>
                    </div>

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
                                <a href="#0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                    </svg>
                                    Download CSV
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="no_found_cen justify-content-start">
                        <div>
                            <div className="no_foun_para_ce text-left">Contracts you're actively working on will appear here. <a href='#0'>Start searching for new projects now!</a></div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Screen
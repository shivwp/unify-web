import { Row, Col } from 'react-bootstrap'
const Screen = () => {
    return (
        <>
            <Row className="mt-4">
                <Col lg={6}>
                    <div className="d-flex fe_scets_tx align-items-center">
                        <div className="me_hed_verif_stus">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                        </div>
                        <h2>Job Completed Successfully </h2>
                    </div>
                    <div className="fe_scets_tx fe_scets_smtx">
                        <h2>Extremely Likely</h2>
                        <div className="fesm_cea">Number of 10</div>
                    </div>
                    <div className="fe_scets_tx fe_scets_smtx border-0">
                        <h2>Extremely Likely</h2>
                        <div className="fesm_cea">5 Start Rating </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default Screen
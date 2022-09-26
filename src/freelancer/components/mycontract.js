import Container from 'react-bootstrap/Container';
import Title from '../../components/title';
import { Link } from "react-router-dom";

const Screen = () => {
    Title(" | My Contracts");
    return (
        <>
            <Container>
                <div className='flex_m_j_t pt-4 flex-wrap'>
                    <div className='my_jo_headin freelancer_all_contract text-transform-uppercase'>MY Contracts</div>
                    <div className='post_job_btn_m d-flex align-items-center flex-wrap align-items-center'>
                        <div className="pst_earning_hdd_free">Earning available now: <span>$0.00</span></div>
                        <Link to="/expandteam">
                            <button className="ml_btn trans_btn_myjo blue_coloe_brn mt-2 color_gray">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#707070" className="bi bi-three-dots-vertical" viewBox="0 0 16 16"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path></svg>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='yourp_box pb-0 pt-0 border-r-7'>
                    <div className='my_job_flx'>
                        <div>
                            <div className="my_job_a job_na_bol">Active Contracts</div>
                            <div className="my_job_pos_tme inner_a_sty">Contracts you're actively working on will appear here.<a href="#0" className='text-decoration-none'> Start searching for new projects now!</a></div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Screen
import Container from 'react-bootstrap/Container';
import Title from '../../../../components/title';
import { Link } from "react-router-dom";
import { useState } from 'react';
 
const Popup = () =>{
    return(
        <>
        <div className="ddown_psr mt-5">
        <div className='ddown_mcotrct mt-1'>
            <Link to='/freelancer/getpaid'><div className='ddwon_lis ddownactive'>Get Paid</div></Link>
            <Link to='/freelancer/transaction-history'><div className='ddwon_lis'>View pending earnings</div></Link>
            <Link to='/freelancer/overview'><div className='ddwon_lis'>Go to reports</div></Link>
        </div>
        </div>
        </>
    )
}

const Screen = () => {
    Title(" | My Contracts");
    const [dDown,Setddown] = useState(0)
    function TogglePopup(){
        if(dDown === 1){
            Setddown(0)
        } else{
            Setddown(1)
        }
    }
    return (
        <>
            <Container className='mt-3 mb-5 pb-2'>
                <div className='flex_m_j_t pt-4 flex-wrap'>
                    <div className='my_jo_headin freelancer_all_contract text-transform-uppercase'>MY Jobs</div>
                    <div className='post_job_btn_m d-flex justify-content-between align-items-center flex-wrap align-items-center'>
                        <div className="pst_earning_hdd_free">Earning available now: <span>$0.00</span></div>
                        <div className='fpx_tright'>
                        <button className="ml_btn trans_btn_myjo blue_coloe_brn mt-2 color_gray" onClick={()=>{TogglePopup()}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#707070" className="bi bi-three-dots-vertical" viewBox="0 0 16 16"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path></svg>
                            </button>
                        </div>
                            {dDown === 1 ? <Popup /> : ''}
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
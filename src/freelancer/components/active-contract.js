import Container from 'react-bootstrap/Container';
import Title from '../../components/title';

const Screen = () => {
    Title(" | Active Contract");
    return (
        <>
            <Container>
                <div className='flex_m_j_t pt-4 flex-wrap'>
                    <div className='my_jo_headin freelancer_all_contract text-transform-uppercase'>MY Proposals</div>
                </div>
                <div className='yourp_box pb-0 pt-0 border-r-7'>
                    <div className='my_job_flx'>
                        <div>
                            <div className="my_job_a job_na_bol">Offers (0)</div>
                        </div>
                    </div>
                </div>
                <div className='yourp_box pb-0 pt-0 border-r-7'>
                    <div className='my_job_flx'>
                        <div>
                            <div className="my_job_a job_na_bol">Invitations to interview(0)</div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Screen
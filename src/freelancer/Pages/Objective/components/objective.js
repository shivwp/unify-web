import Container from 'react-bootstrap/Container';
import Title from '../../../../components/title';

const Screen = () => {
    Title(" | Objective");

    return (
        <>
            <Container>
                <div className='flex_m_j_t mt-3 pb-0'>
                    <div className='my_jo_headin freelancer_all_contract text-transform-uppercase text-center w-100'>OBJECTIVES</div>
                </div>
                <div className="progress_box_frl">
                    <img src="/assets/objective.svg" alt="" />
                </div>
            </Container>
        </>
    )
}
export default Screen
import JobPosting from './components/job-posting';
import NavbarLogin from './components/navbarlogin';

const startedScreen = ()=>{
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <JobPosting />
            </div>
        </div>
    )
}
export default startedScreen
import NavbarLogin from './components/header';
import JobPortal from './components/job-portal';
import Footer from '../components/footer';

const portalScreen = ()=>{
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <JobPortal />
                <Footer />
            </div>
        </div>
    )
}
export default portalScreen
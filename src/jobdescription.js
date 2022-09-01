import NavbarLogin from './components/navbarlogin';
import JobDescription from './components/description';
import Footer from './components/footer';

const JobDesc = () => {
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <JobDescription />
                <Footer />
            </div>
        </div>
    );
}
export default JobDesc;
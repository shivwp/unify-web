import NavbarLogin from './components/navbarlogin';
import ViewJob from './components/viewjob';
import Footer from './components/footer';

const JobDesc = () => {
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <ViewJob />
                <Footer />
            </div>
        </div>
    );
}
export default JobDesc;
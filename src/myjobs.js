import NavbarLogin from './components/navbarlogin';
import MyJobs from './components/myjobs';
import Footer from './components/footer';

const Screen = () => {
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <MyJobs />
                <Footer />
            </div>
        </div>
    );
}
export default Screen;
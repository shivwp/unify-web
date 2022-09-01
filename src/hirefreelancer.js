import NavbarLogin from './components/navbarlogin';
import HireFreelancer from './components/hire-freelancer';
import Footer from './components/footer';

const Screen = () => {
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <HireFreelancer />
                <Footer />
            </div>
        </div>
    );
}
export default Screen;
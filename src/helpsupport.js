import NavbarLogin from './components/navbarlogin';
import HelpSupport from './components/helpsupport';
import Footer from './components/footer';

const Screen = () => {
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <HelpSupport />
                <Footer />
            </div>
        </div>
    );
}
export default Screen;
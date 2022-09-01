import NavbarLogin from './components/navbarlogin';
import Talentbyo from './components/talentbyo';
import Footer from './components/footer';

const Screen = () => {
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <Talentbyo />
                <Footer />
            </div>
        </div>
    );
}
export default Screen;
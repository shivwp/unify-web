import NavbarLogin from './components/navbarlogin';
import TalentDiscover from './components/talentdiscover';
import Footer from './components/footer';

const Screen = () => {
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <TalentDiscover />
                <Footer />
            </div>
        </div>
    );
}
export default Screen;
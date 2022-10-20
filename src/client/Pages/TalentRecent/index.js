import NavbarLogin from '../../../components/navbarlogin';
import TalentRecent from './components/talentrecenviewed';
import Footer from '../../../components/footer';

const Screen = () => {
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <TalentRecent />
                <Footer />
            </div>
        </div>
    );
}
export default Screen;
import NavbarLogin from '../../../components/navbarlogin';
import Talentsaved from './components/talentsaved';
import Footer from '../../../components/footer';

const Screen = () => {
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <Talentsaved />
                <Footer />
            </div>
        </div>
    );
}
export default Screen;
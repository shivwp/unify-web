import NavbarLogin from '../../../components/navbarlogin';
import YourHires from './components/yourhires';
import Footer from '../../../components/footer';

const Screen = () => {
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <YourHires />
                <Footer />
            </div>
        </div>
    );
}
export default Screen;
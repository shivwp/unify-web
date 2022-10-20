import NavbarLogin from '../../../components/navbarlogin';
import Message from './components/message';
import Footer from '../../../components/footer';

const Screen = () => {
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <Message />
                <Footer />
            </div>
        </div>
    );
}
export default Screen;
import NavbarLogin from '../../../components/navbarlogin';
import Dashboard from './components/dashboard';
import Footer from '../../../components/footer';

const Screen = () => {
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <Dashboard />
                <Footer />
            </div>
        </div>
    );
}
export default Screen
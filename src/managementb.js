import NavbarLogin from './components/navbarlogin';
import ManagementBoard from './components/managementboard';
import Footer from './components/footer';

const Screen = () => {
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <ManagementBoard />
                <Footer />
            </div>
        </div>
    );
}
export default Screen;
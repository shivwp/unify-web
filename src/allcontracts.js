import NavbarLogin from './components/navbarlogin';
import AllContracts from './components/allcontracts';
import Footer from './components/footer';

const Screen = () => {
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <AllContracts />
                <Footer />
            </div>
        </div>
    );
}
export default Screen;
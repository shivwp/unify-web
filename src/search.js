import NavbarLogin from './components/navbarlogin';
import Search from './components/search';
import Footer from './components/footer';

const Screen = () => {
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <Search />
                <Footer />
            </div>
        </div>
    );
}
export default Screen;
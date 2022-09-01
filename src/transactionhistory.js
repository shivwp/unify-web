import NavbarLogin from './components/navbarlogin';
import TransactionHistory from './components/transactionhistory';
import Footer from './components/footer';

const Screen = () => {
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <TransactionHistory />
                <Footer />
            </div>
        </div>
    );
}
export default Screen;
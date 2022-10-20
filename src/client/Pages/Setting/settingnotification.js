import SettingNotification from './components/Setting/notification';
import NavbarLogin from '../../../components/navbarlogin';
import Footer from '../../../components/footer';

const Screen = ()=>{
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <SettingNotification />
                <Footer />
            </div>
        </div>
    )
}
export default Screen
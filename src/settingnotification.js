import SettingNotification from './components/Setting/notification';
import NavbarLogin from './components/navbarlogin';

const Screen = ()=>{
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <SettingNotification />
            </div>
        </div>
    )
}
export default Screen
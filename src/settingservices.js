import SettingConnectedServices from './components/Setting/connecteservices';
import NavbarLogin from './components/navbarlogin';

const Screen = ()=>{
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <SettingConnectedServices />
            </div>
        </div>
    )
}
export default Screen
import SettingInfo from './components/Setting/info';
import NavbarLogin from '../../../components/navbarlogin';

const Screen = ()=>{
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <SettingInfo />
            </div>
        </div>
    )
}
export default Screen
import SettingMember from './components/Setting/membership';
import NavbarLogin from '../../../components/navbarlogin';

const Screen = ()=>{
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <SettingMember />
            </div>
        </div>
    )
}
export default Screen
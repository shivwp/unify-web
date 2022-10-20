import SettingMemberPermission from './components/Setting/membershipperm';
import NavbarLogin from '../../../components/navbarlogin';

const Screen = ()=>{
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <SettingMemberPermission />
            </div>
        </div>
    )
}
export default Screen
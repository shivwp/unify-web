import SettingPass from './components/Setting/password';
import NavbarLogin from '../../../components/navbarlogin';

const Screen = ()=>{
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <SettingPass />
            </div>
        </div>
    )
}
export default Screen
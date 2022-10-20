import SettingTeam from './components/Setting/team';
import NavbarLogin from '../../../components/navbarlogin';

const Screen = ()=>{
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <SettingTeam />
            </div>
        </div>
    )
}
export default Screen
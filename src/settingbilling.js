import SettingBilling from './components/Setting/billing';
import NavbarLogin from './components/navbarlogin';

const Screen = ()=>{
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <SettingBilling />
            </div>
        </div>
    )
}
export default Screen
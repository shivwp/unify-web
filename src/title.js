import NavbarLogin from './components/navbarlogin';
import TitleBody from './components/title-body';

const titleScreen = ()=>{
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <TitleBody />
            </div>
        </div>
    )
}
export default titleScreen
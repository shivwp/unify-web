import Budget from './components/budget';
import NavbarLogin from '../../../components/navbarlogin';

const BudgetScreen = ()=>{
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <Budget />
            </div>
        </div>
    )
}
export default BudgetScreen
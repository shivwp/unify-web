import NavbarLogin from './components/navbarlogin';
import ProjectSearc from './components/project-search';

const Projectsscreen = () => {
    return (
        <div>
            <div className='slider_pos nin_vh'>
                <NavbarLogin />
                <ProjectSearc />
            </div>
        </div>
    );
}
export default Projectsscreen;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.svg';

const NavbarHeader = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" className="nav_realat">
        <Container>
          <div className='w-100 d-flex justify-content-between align-items-center flex_rev'>
            <div className="width_100_sm">
              <Navbar.Brand href="#home">
                <img src={logo} className="img-fluid rounded-top" alt="" />
              </Navbar.Brand>
            </div>
            <div>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                  <Nav.Link href="#" className="navbar_btn">How it works</Nav.Link>
                  <Nav.Link href="#" className="navbar_btn">Browse Jobs</Nav.Link>
                  <Nav.Link href="#" className="navbar_btn">Login</Nav.Link>
                  <Nav.Link href="#" className="active_btn">Signup now</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarHeader;

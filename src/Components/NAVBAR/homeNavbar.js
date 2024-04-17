import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css";

function LandingPageNavbar() {
  return (
    <Navbar expand="sm" className="homeNav">
      <Container>
        <h1 href="/" className='HomeNavLogo'>Event Hub</h1>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <button className='get-started'>
            <a href="/signUp">Get Started</a>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LandingPageNavbar;
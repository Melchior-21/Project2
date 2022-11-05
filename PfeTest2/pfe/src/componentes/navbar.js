import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBarCustom() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand role="link" href="/" >Programacion FrontEnd</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link role="link" href="/login">Login</Nav.Link>
            <Nav.Link role="link" href="/register" >Register</Nav.Link>
            <Nav.Link role="link" href="/dashboard" >Dashboard</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarCustom;

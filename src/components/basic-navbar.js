
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BasicNavDropdown from './basic-navbar/basic-navdropdown';

function BasicNavbar({ handleFileNameChange, ...props }) {

  return (
    <Navbar data-testid='basic-navbar-1' expand="lg"  style={{backgroundColor: "#FF6666", color:"withe"}} >
      <Container>
        <Navbar.Brand href="#home">React Test App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <BasicNavDropdown handleFileNameChange={handleFileNameChange} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;
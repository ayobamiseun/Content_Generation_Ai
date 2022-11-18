import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function CollapsibleExample() {
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Content-Generator</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          
          <Nav.Link href="#deets"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#deets"><Link to="/email">Email</Link></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Link to="/tweets">Tweets</Link>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Link to="/products">Products Info</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}

export default CollapsibleExample;
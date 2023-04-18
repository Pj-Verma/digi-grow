import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HashLink as Link  } from 'react-router-hash-link';


function NavScroll() {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Grow</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
            <Nav.Link href="#"><Link to='#Hero'>Home</Link></Nav.Link>
            <Nav.Link href="#About"><Link to='#About'>About</Link></Nav.Link>
            <Nav.Link href="#Services"><Link to='#Services'>Services</Link></Nav.Link>
            <Nav.Link href="#Team"><Link to='#Team'>Team</Link></Nav.Link>
            <Nav.Link href="#Testimonials"><Link to='#Testimonials'>Testimonials</Link></Nav.Link>
            <Nav.Link href="#Contact"><Link to='#contact'>Contact</Link></Nav.Link>
            
           
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
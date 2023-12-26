import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/img/logo.png.png'
function Miniheader() {
  return (
    <Navbar expand="lg" className="container-fluid bg-body-white">
      <Container >
        <Navbar.Brand href="#"><img src={logo} style={{height:'2rem', width:'8rem'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">BussinessClass</Nav.Link>
            <Nav.Link href="#action2">Day to Day</Nav.Link>
            <Nav.Link href="#action2">trade</Nav.Link>
            <Nav.Link href="#action2">Financing</Nav.Link>
            <Nav.Link href="#action2">Treasury</Nav.Link>
            <Nav.Link href="#action2">Services</Nav.Link>
            <Nav.Link href="#action2">Research</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
            <Button variant="outline-success">Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default Miniheader

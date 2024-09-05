import React from 'react';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const removeToken = ()=>{
    localStorage.removeItem("token");
    window.location.reload();
    navigate("/")
    
    
  }

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mb-3 p-3 ">
        <Container fluid>
          <Navbar.Brand >Stocks</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Stock-Market-App</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className='text-dark' href='/'>Home</Nav.Link>
                
                {token ? <Button variant="outline-primary pl-2 pr-2" href='/login' onClick={removeToken}>Logout</Button> : <Button variant="outline-primary pl-2 pr-2" href='/login'>Login</Button>}
               
              </Nav>
              
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

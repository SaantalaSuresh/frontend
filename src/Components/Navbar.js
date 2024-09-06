import React from 'react';
import { Navbar, Nav, Form, InputGroup, Dropdown, Button } from 'react-bootstrap';
import { FaSearch, FaBell, FaEnvelope } from 'react-icons/fa';
import { Link ,useNavigate} from 'react-router-dom';

const TopNavbar = () => {
  let isAuthenticated = false;
  const navigate = useNavigate()

  const token = localStorage.getItem("token");
  if(token){
    isAuthenticated=true;
  }

  const deleteToken =()=>{
    localStorage.removeItem("token");
    navigate("/")
    
  }


  return (
    <Navbar bg="light" expand="lg">
      <Form className="d-flex flex-grow-1 mx-3">
        <InputGroup>
          <InputGroup.Text><FaSearch /></InputGroup.Text>
          <Form.Control type="search" placeholder='Search for various stocks' />
        </InputGroup>
      </Form>
      <Nav className="ml-auto d-flex align-items-center">
        {isAuthenticated ? (
          <>
            <Nav.Link><FaEnvelope /></Nav.Link>
            <Nav.Link><FaBell /></Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <img
                  src="https://img.freepik.com/premium-vector/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-vector-illustration_561158-4215.jpg"
                  alt="User"
                  className="rounded-circle"
                  width="30"
                  height="30"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item >Profile</Dropdown.Item>
                <Dropdown.Item >Settings</Dropdown.Item>
                <Dropdown.Item onClick={deleteToken}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        ) : (
          <>
             <div className='d-flex '>
             <Button variant="outline-primary" className="mx-1 custom-btn btn-secondary">
              <Link to="/login" className="text-decoration-none text-white" >Login</Link>
            </Button>
            <Button variant="outline-secondary" className="mx-1 custom-btn btn-primary">
              <Link to="/register" className="text-decoration-none text-white">Register</Link>
            </Button>
             </div>
            
          </>
        )}
      </Nav>
    </Navbar>
  );
};

export default TopNavbar;

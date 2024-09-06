import React from 'react';
import { Navbar, Nav, Form, InputGroup, Dropdown, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaSearch, FaBell, FaEnvelope, FaHome, FaTachometerAlt, FaWallet, FaNewspaper, FaChartBar, FaUsers, FaCog, FaPhoneAlt } from 'react-icons/fa';

const TopNavbar = () => {
  const navItems = [
    { icon: <FaHome />, label: 'Home', path: '/' },
    { icon: <FaTachometerAlt />, label: 'Dashboard', path: '/dashboard' },
    { icon: <FaWallet />, label: 'Wallet', path: '/wallet' },
    { icon: <FaNewspaper />, label: 'News', path: '/news' },
    {
      icon: <FaChartBar />,
      label: 'Stock & fund',
      subItems: [
        { label: 'Stock', path: '/stock' },
        { label: 'Cryptocurrency', path: '/crypto' },
        { label: 'Mutual Fund', path: '/mutual-fund' },
        { label: 'Gold', path: '/gold' }
      ],
    },
    { icon: <FaUsers />, label: 'Our community', path: '/community' },
    { icon: <FaCog />, label: 'Settings', path: '/settings' },
    { icon: <FaPhoneAlt />, label: 'Contact us', path: '/contact' },
  ];

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">GoStock</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto d-md-none">
          {navItems.map((item, index) => (
            item.subItems ? (
              <NavDropdown key={index} title={item.label} id={`nav-dropdown-${item.label}`}>
                {item.subItems.map((subItem, subIndex) => (
                  <NavDropdown.Item key={subIndex} as={NavLink} to={subItem.path}>
                    {subItem.label}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            ) : (
              <Nav.Link key={index} as={NavLink} to={item.path}>
                {item.label}
              </Nav.Link>
            )
          ))}
        </Nav>
        <Form className="d-flex flex-grow-1 mx-3">
          <InputGroup>
            <InputGroup.Text><FaSearch /></InputGroup.Text>
            <Form.Control type="search" placeholder='search for various stocks' />
          </InputGroup>
        </Form>
        <Nav>
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
              <Dropdown.Item href="#profile">Profile</Dropdown.Item>
              <Dropdown.Item href="#settings">Settings</Dropdown.Item>
              <Dropdown.Item href="#logout">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;
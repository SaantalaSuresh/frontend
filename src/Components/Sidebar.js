import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import { 
  FaHome, FaTachometerAlt, FaWallet, FaNewspaper, 
  FaChartBar, FaUsers, FaCog, FaPhoneAlt, FaCaretDown, 
  FaChevronLeft, FaChevronRight 
} from 'react-icons/fa';

import "./Sidebar.css"

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true); 
  const [activeItem, setActiveItem] = useState('Home');

  const sidebarItems = [
    { icon: <FaHome />, label: 'Home', path: '/' },
    { icon: <FaTachometerAlt />, label: 'Dashboard', path: '/dashboard' },
    { icon: <FaWallet />, label: 'Wallet', path: '/wallet' },
    { icon: <FaNewspaper />, label: 'News', path: '/news' },
    { 
      icon: <FaChartBar />, 
      label: 'Stock & Fund', 
      subItems: [
        { label: 'Stock', path: '/stock' }, 
        { label: 'Cryptocurrency', path: '/cryptocurrency' },
        { label: 'Mutual Fund', path: '/mutual-fund' },
        { label: 'Gold', path: '/gold' }
      ]
    },
    { icon: <FaUsers />, label: 'Our community', path: '/community' },
    { icon: <FaCog />, label: 'Settings', path: '/settings' },
    { icon: <FaPhoneAlt />, label: 'Contact us', path: '/contact' },
  ];

  const handleItemClick = (label) => {
    setActiveItem(label);
  };

  return (
    <div className={`bg-dark text-white sidebar ${expanded ? 'expanded' : 'collapsed'}`} style={{ minHeight: '100vh', width: expanded ? '250px' : '80px', transition: 'width 0.3s' }}>
      
     
      <div className="sidebar-heading p-3 d-flex justify-content-between align-items-center">
        {expanded ? (
          <FaChevronLeft onClick={() => setExpanded(!expanded)} style={{ cursor: 'pointer', fontSize: '20px' }} />
        ) : (
          <FaChevronRight onClick={() => setExpanded(!expanded)} style={{ cursor: 'pointer', fontSize: '20px' }} />
        )}
      </div>

    
      <Nav className="flex-column">
        {sidebarItems.map((item, index) => (
          <div key={index}>
            <Nav.Item>
             
              <Link
                to={item.path || '#'}  
                className={`d-flex align-items-center ${activeItem === item.label ? 'active-item' : ''}`}
                onClick={() => handleItemClick(item.label)}
                style={{ cursor: 'pointer', fontSize: '18px', padding: '12px', gap: '10px', textDecoration: 'none' ,color:"white"}}  
              >
                <span>{item.icon}</span>
                {expanded && <span className="ml-3">{item.label}</span>}
                {item.subItems && expanded && <FaCaretDown className="ml-auto" />}
              </Link>

             
              {item.subItems && expanded && (
                <Nav className="flex-column ml-3">
                  {item.subItems.map((subItem, subIndex) => (
                    <Nav.Item key={subIndex}>
                      <Link
                        to={subItem.path}  
                        className={`d-block ${activeItem === subItem.label ? 'active-item' : ''}`}
                        onClick={() => handleItemClick(subItem.label)}
                        style={{ cursor: 'pointer', paddingLeft: '20px', textDecoration: 'none',padding:"3px",borderRadius:"25px" ,color:"white"}}
                      >
                        {subItem.label}
                      </Link>
                    </Nav.Item>
                  ))}
                </Nav>
              )}
            </Nav.Item>
          </div>
        ))}
      </Nav>
    </div>
  );
};

export default Sidebar;

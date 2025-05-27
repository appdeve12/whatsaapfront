import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FiInbox, FiSettings, FiHelpCircle, FiInfo } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar bg="success" variant="dark" expand="lg" className="shadow-sm py-2">
      <Container fluid>
        {/* Brand with WhatsApp Icon */}
        <Navbar.Brand href="#home" className="fw-bold d-flex align-items-center gap-2 text-white">
          <FaWhatsapp size={24} />
          Whatsapp Bulk Sender
        </Navbar.Brand>

        {/* Responsive Toggle Button */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Collapsible Content */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center gap-4">
            {/* About Link */}
            <Nav.Link href="#about" className="d-flex align-items-center gap-1 text-white fw-semibold">
              <FiInfo size={20} />
              <span>About</span>
            </Nav.Link>

            {/* Help Link */}
            <Nav.Link href="#help" className="d-flex align-items-center gap-1 text-white fw-semibold">
              <FiHelpCircle size={20} />
              <span>Help</span>
            </Nav.Link>

            {/* Received Messages Link */}
            <Nav.Link href="#received" className="d-flex align-items-center gap-1 text-white fw-semibold">
              <FiInbox size={20} />
              <span>Received</span>
            </Nav.Link>

            {/* Settings Icon Only */}
            <Nav.Link href="#settings" title="Settings" className="text-white">
              <FiSettings size={22} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

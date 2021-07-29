import React from "react";
import "./Navbaritems.css";
import "rsuite/dist/styles/rsuite-default.css";
import { Navbar,Nav,Icon,Dropdown } from 'rsuite';

function Navbaritems() {
  return (
    <Navbar>
      <Navbar.Header>
        <a href="#" className="navbar-brand logo">
          MEDArt
        </a>
      </Navbar.Header>
      <Navbar.Body>
        <Nav>
          <Nav.Item icon={<Icon icon="home" />}>Portal</Nav.Item>
          <Nav.Item>Add Services</Nav.Item>
          <Nav.Item>Edit</Nav.Item>
          
        </Nav>
        <Nav pullRight>
          <Nav.Item icon={<Icon icon="cog" />}>Logout</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
}

export default Navbaritems;

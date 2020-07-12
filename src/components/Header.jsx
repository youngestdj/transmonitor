import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import userIcon from "../assets/images/Mask-Group.png";
import Notifications from "./Notification";
import NavSearch from "./NavSearch";

const Header = () => (
  <Navbar>
    <Navbar.Brand href="#home">TransMonitor</Navbar.Brand>
    <Navbar.Toggle />
    <NavSearch />
    <Navbar.Collapse className="justify-content-end">
      <Nav className="mr-sm-1">
        <Nav.Link href="#home">Support</Nav.Link>
        <Nav.Link href="#link">FAQ</Nav.Link>
        <Notifications />
      </Nav>
      <Navbar.Text>
        <span className="hello">Hello</span> Oluwaleke Ojo
      </Navbar.Text>
      <div className="icon">
        <img src={userIcon} />
      </div>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;

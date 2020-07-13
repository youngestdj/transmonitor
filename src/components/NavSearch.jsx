import React from "react";
import searchIcon from "../assets/images/Search.png";
import { Form, FormControl, Nav } from "react-bootstrap";

const NavSearch = () => (
  <Nav className="mr-auto">
    <Form inline>
    <img src={searchIcon} />
      <FormControl
        type="text"
        placeholder="Search..."
        className="search-no-border mr-sm-2"
      />
    </Form>
  </Nav>
);

export default NavSearch;

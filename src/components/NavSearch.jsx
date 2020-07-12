import React from "react";
import searchIcon from "../assets/images/Search.png";
import { Form, FormControl } from "react-bootstrap";

const NavSearch = () => (
  <>
    <img src={searchIcon} />
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search..."
        className="search-no-border mr-sm-2"
      />
    </Form>
  </>
);

export default NavSearch;
